import React, { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { supabase } from '../lib/supabase';

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

export const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<SubmissionState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Vänligen ange en giltig e-postadress');
      setState('error');
      return;
    }

    setState('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { email, phone: phone || null }
        ]);

      if (error) throw error;

      setState('success');
      setEmail('');
      setPhone('');

      setTimeout(() => {
        setState('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Något gick fel. Vänligen försök igen.');
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="relative overflow-hidden glass-effect-dark p-8 rounded-2xl border border-green-700/50 animate-scale-in">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 text-green-400 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-glow">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold">Tack för din förfrågan!</h3>
          </div>
          <p className="text-moon-300 leading-relaxed">
            Vi återkommer inom kort. Håll utkik efter e-post från oss.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden glass-effect-dark p-8 rounded-2xl border border-moon-700">
      <div className="absolute top-0 right-0 w-48 h-48 bg-arctic-500/5 rounded-full blur-3xl" />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-6">Boka ett introduktionsmöte</h3>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-moon-300 mb-2">
              E-post
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="namn@foretag.se"
              required
              disabled={state === 'loading'}
              className="w-full glass-effect-dark border border-moon-600 rounded-lg p-4 text-white placeholder-moon-500 focus:border-arctic-500 focus:ring-2 focus:ring-arctic-500/50 outline-none smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-moon-300 mb-2">
              Telefon <span className="text-moon-500 font-normal">(valfritt)</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="070-123 45 67"
              disabled={state === 'loading'}
              className="w-full glass-effect-dark border border-moon-600 rounded-lg p-4 text-white placeholder-moon-500 focus:border-arctic-500 focus:ring-2 focus:ring-arctic-500/50 outline-none smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {state === 'error' && (
            <div className="flex items-start gap-3 text-red-400 text-sm glass-effect-dark p-4 rounded-lg border border-red-700/50 animate-fade-in-up">
              <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                <AlertCircle size={16} />
              </div>
              <span className="pt-1">{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            fullWidth
            size="lg"
            className="mt-6 shadow-glow"
            disabled={state === 'loading'}
          >
            {state === 'loading' ? (
              'Skickar...'
            ) : (
              <>
                Skicka förfrågan <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

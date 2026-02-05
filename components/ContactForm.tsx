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
      <div className="bg-green-900/20 p-8 rounded-sm border border-green-700/50">
        <div className="flex items-center gap-3 text-green-400 mb-3">
          <CheckCircle size={24} />
          <h3 className="text-xl font-semibold">Tack för din förfrågan!</h3>
        </div>
        <p className="text-moon-300">
          Vi återkommer inom kort. Håll utkik efter e-post från oss.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-moon-800 p-8 rounded-sm border border-moon-700">
      <h3 className="text-xl font-semibold text-white mb-4">Boka ett introduktionsmöte</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">E-post</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="namn@foretag.se"
            required
            disabled={state === 'loading'}
            className="w-full bg-moon-900 border border-moon-600 rounded-sm p-3 text-white focus:border-arctic-500 focus:ring-1 focus:ring-arctic-500 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefon (valfritt)</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="070-123 45 67"
            disabled={state === 'loading'}
            className="w-full bg-moon-900 border border-moon-600 rounded-sm p-3 text-white focus:border-arctic-500 focus:ring-1 focus:ring-arctic-500 outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {state === 'error' && (
          <div className="flex items-start gap-2 text-red-400 text-sm bg-red-900/20 p-3 rounded-sm border border-red-700/50">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <Button
          type="submit"
          fullWidth
          className="mt-2"
          disabled={state === 'loading'}
        >
          {state === 'loading' ? (
            'Skickar...'
          ) : (
            <>
              Skicka förfrågan <ArrowRight size={16} className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

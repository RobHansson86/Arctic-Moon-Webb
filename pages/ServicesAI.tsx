import React from 'react';
import { Cpu, BarChart3, Search, Database, Sparkles, Shield, Lock } from 'lucide-react';
import { Button } from '../components/Button';

const ServicesAI: React.FC = () => {
  return (
    <div className="flex flex-col pb-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-moon-900 via-moon-800 to-moon-900 text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 glass-effect-dark border border-moon-700 py-2 px-4 rounded-full text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-down">
              <Cpu size={14} className="text-arctic-400" />
              <span className="text-arctic-400">Praktisk Tillämpning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
              AI & Analys:<br/>
              <span className="gradient-text">Verktyg, inte magi.</span>
            </h1>
            <p className="text-xl text-moon-300 mb-10 max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
              Vi använder AI för att räkna snabbare, hitta mönster i era kostnader och prognostisera bättre. Inga flygande bilar, bara bättre beslutsunderlag.
            </p>
            <div className="animate-fade-in-up animation-delay-300">
              <Button size="lg" className="bg-white text-moon-900 hover:bg-moon-100 text-base px-8 py-4">
                Analysera er data
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-400">
            <div className="relative glass-effect-dark rounded-2xl p-8 border border-moon-700/50 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="h-4 w-32 bg-white/40 rounded-full"></div>
                <div className="h-4 w-10 bg-green-400 rounded-full shadow-glow"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 animate-fade-in-up animation-delay-${400 + (i * 100)}">
                    <div className="h-3 w-full bg-white/20 rounded-full"></div>
                    <div className="h-3 w-1/3 bg-white/10 rounded-full"></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-moon-950/90 rounded-xl border border-arctic-500/30 shadow-inner">
                <p className="text-sm text-arctic-200 font-mono leading-relaxed">
                  <span className="text-green-400">{'>'}</span> Analys klar.<br/>
                  <span className="text-green-400">{'>'}</span> 12% avvikelse identifierad i leverantörskategori B.<br/>
                  <span className="text-green-400">{'>'}</span> <span className="text-yellow-400">Åtgärd:</span> Omförhandling rekommenderas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-400/30 to-transparent" />
      </section>

      {/* Main Value Proposition */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
          <Sparkles className="text-arctic-600" size={24} />
          <span className="text-sm font-bold text-arctic-600 uppercase tracking-wider">Människan + Maskinen</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-8 animate-fade-in-up animation-delay-100">
          Varför blanda in AI i inköp?
        </h2>
        <p className="text-xl text-moon-600 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Människan är bra på relationer och strategi. Datorer är bra på att hantera tusentals fakturarader utan att bli trötta. Vi kombinerar dessa styrkor. Vi använder moderna språkmodeller och dataanalysverktyg för att göra grovjobbet åt er.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-arctic-400 to-arctic-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition" />
            <div className="relative glass-effect p-10 rounded-2xl border-t-4 border-arctic-500 shadow-lg smooth-transition hover-lift animate-fade-in-up animation-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-arctic-500 to-arctic-600 rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 smooth-transition">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-moon-900 mb-4 leading-tight">
                Spendanalys
              </h3>
              <p className="text-sm text-arctic-600 font-semibold mb-4 uppercase tracking-wider">
                "Vart tar pengarna vägen?"
              </p>
              <p className="text-moon-700 leading-relaxed">
                Vi tvättar och kategoriserar er leverantörsreskontra. AI hjälper oss att snabbt se skillnad på "IT-konsult" och "IT-licens", vilket ger er en sann bild av era kostnadsdrivare.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition" />
            <div className="relative glass-effect p-10 rounded-2xl border-t-4 border-blue-500 shadow-lg smooth-transition hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 smooth-transition">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-moon-900 mb-4 leading-tight">
                Scenario-simulering
              </h3>
              <p className="text-sm text-blue-600 font-semibold mb-4 uppercase tracking-wider">
                Testa framtiden innan den inträffar
              </p>
              <p className="text-moon-700 leading-relaxed">
                "Vad händer med likviditeten om råvarupriset går upp 15%?" Vi bygger modeller som låter er testa olika framtider innan de inträffar. Trygghet genom förberedelse.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition" />
            <div className="relative glass-effect p-10 rounded-2xl border-t-4 border-green-500 shadow-lg smooth-transition hover-lift animate-fade-in-up animation-delay-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 smooth-transition">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-moon-900 mb-4 leading-tight">
                Avtalsgranskning
              </h3>
              <p className="text-sm text-green-600 font-semibold mb-4 uppercase tracking-wider">
                Hitta risker ni inte visste om
              </p>
              <p className="text-moon-700 leading-relaxed">
                Vi låter AI skanna igenom era avtal för att hitta dolda indexklausuler eller orimliga uppsägningstider. Vi hittar riskerna ni inte visste att ni hade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section ("Jordnära") */}
      <section className="relative overflow-hidden bg-gradient-to-br from-moon-50 via-arctic-50/30 to-moon-50 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.05),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 mb-6">
                <Shield className="text-green-600" size={24} />
                <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Säkerhet först</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-6 leading-tight">
                Säkerhet & Integritet
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-arctic-500 to-arctic-600 rounded-full mb-8"></div>
              <div className="space-y-6 text-lg">
                <p className="text-moon-700 leading-relaxed">
                  Många är oroliga för att dela data med AI-verktyg. Det är vi också. Därför använder vi <strong className="text-moon-900">stängda miljöer och anonymiserad data</strong>.
                </p>
                <p className="text-moon-700 leading-relaxed">
                  Er affärsdata tränar inte publika modeller. Vi behandlar era siffror med samma sekretess som er revisor. Det handlar om <strong className="text-moon-900">förtroende, inte teknologi</strong>.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <div className="relative overflow-hidden glass-effect p-10 rounded-3xl border border-moon-200 shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-glow">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-moon-900">Vår process för dataanalys</h3>
                  </div>
                  <ul className="space-y-5">
                    {[
                      { step: 1, text: "NDA & Sekretessavtal tecknas först." },
                      { step: 2, text: "Dataexport (Sie-filer eller Excel) anonymiseras." },
                      { step: 3, text: "Analys sker i isolerad miljö." },
                      { step: 4, text: "Resultat presenteras, rådata raderas." }
                    ].map((item, i) => (
                      <li key={i} className={`flex items-start gap-4 p-4 glass-effect rounded-lg border border-green-100 smooth-transition hover-lift animate-fade-in-up animation-delay-${300 + (i * 100)}`}>
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold shadow-glow">
                          {item.step}
                        </div>
                        <span className="text-moon-800 font-medium leading-relaxed pt-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesAI;
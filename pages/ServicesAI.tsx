import React from 'react';
import { Cpu, BarChart3, Search, Database } from 'lucide-react';
import { Button } from '../components/Button';

const ServicesAI: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-24">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-moon-900 to-moon-800 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-arctic-400 font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in-down">
              <Cpu size={16} />
              <span>Praktisk Tillämpning</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-100">
              AI & Analys:<br/>
              <span className="text-arctic-500">Verktyg, inte magi.</span>
            </h1>
            <p className="text-lg text-moon-300 mb-8 max-w-lg animate-fade-in-up animation-delay-200">
              Vi använder AI för att räkna snabbare, hitta mönster i era kostnader och prognostisera bättre. Inga flygande bilar, bara bättre beslutsunderlag.
            </p>
            <div className="animate-fade-in-up animation-delay-300">
              <Button className="bg-white text-moon-900 hover:bg-moon-100">
                Analysera er data
              </Button>
            </div>
          </div>
          <div className="relative">
             {/* Abstract representation of structured data */}
             <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="h-3 w-24 bg-white/40 rounded-full"></div>
                  <div className="h-3 w-8 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-2 w-full bg-white/20 rounded-full"></div>
                      <div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-moon-950/80 rounded-sm border border-arctic-500/30">
                  <p className="text-sm text-arctic-200 font-mono">
                    {'>'} Analys klar.<br/>
                    {'>'} 12% avvikelse identifierad i leverantörskategori B.<br/>
                    {'>'} Åtgärd: Omförhandling rekommenderas.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-moon-900 mb-6">Varför blanda in AI i inköp?</h2>
        <p className="text-lg text-moon-600 mb-12 leading-relaxed">
          Människan är bra på relationer och strategi. Datorer är bra på att hantera tusentals fakturarader utan att bli trötta. Vi kombinerar dessa styrkor. Vi använder moderna språkmodeller och dataanalysverktyg för att göra grovjobbet åt er.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border-t-4 border-arctic-500 shadow-sm hover:shadow-md transition-shadow hover-lift animate-fade-in-up animation-delay-100">
            <Search className="w-10 h-10 text-arctic-600 mb-6" />
            <h3 className="text-xl font-bold text-moon-900 mb-3">Spendanalys ("Vart tar pengarna vägen?")</h3>
            <p className="text-moon-600 text-sm leading-relaxed">
              Vi tvättar och kategoriserar er leverantörsreskontra. AI hjälper oss att snabbt se skillnad på "IT-konsult" och "IT-licens", vilket ger er en sann bild av era kostnadsdrivare.
            </p>
          </div>

          <div className="bg-white p-8 border-t-4 border-arctic-500 shadow-sm hover:shadow-md transition-shadow hover-lift animate-fade-in-up animation-delay-200">
            <BarChart3 className="w-10 h-10 text-arctic-600 mb-6" />
            <h3 className="text-xl font-bold text-moon-900 mb-3">Scenario-simulering</h3>
            <p className="text-moon-600 text-sm leading-relaxed">
              "Vad händer med likviditeten om råvarupriset går upp 15%?" Vi bygger modeller som låter er testa olika framtider innan de inträffar. Trygghet genom förberedelse.
            </p>
          </div>

          <div className="bg-white p-8 border-t-4 border-arctic-500 shadow-sm hover:shadow-md transition-shadow hover-lift animate-fade-in-up animation-delay-300">
            <Database className="w-10 h-10 text-arctic-600 mb-6" />
            <h3 className="text-xl font-bold text-moon-900 mb-3">Avtalsgranskning</h3>
            <p className="text-moon-600 text-sm leading-relaxed">
              Vi låter AI skanna igenom era avtal för att hitta dolda indexklausuler eller orimliga uppsägningstider. Vi hittar riskerna ni inte visste att ni hade.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section ("Jordnära") */}
      <section className="bg-moon-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-moon-900 mb-4">
                Säkerhet & Integritet
              </h2>
              <div className="w-16 h-1 bg-arctic-500 mb-6"></div>
              <p className="text-moon-700 mb-4">
                Många är oroliga för att dela data med AI-verktyg. Det är vi också. Därför använder vi stängda miljöer och anonymiserad data.
              </p>
              <p className="text-moon-700">
                Er affärsdata tränar inte publika modeller. Vi behandlar era siffror med samma sekretess som er revisor. Det handlar om förtroende, inte teknologi.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-sm shadow-sm border border-moon-200">
              <h3 className="font-bold text-moon-900 mb-4">Vår process för dataanalys</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-moon-600">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">1</div>
                  NDA & Sekretessavtal tecknas först.
                </li>
                <li className="flex items-center gap-3 text-sm text-moon-600">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">2</div>
                  Dataexport (Sie-filer eller Excel) anonymiseras.
                </li>
                <li className="flex items-center gap-3 text-sm text-moon-600">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">3</div>
                  Analys sker i isolerad miljö.
                </li>
                <li className="flex items-center gap-3 text-sm text-moon-600">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">4</div>
                  Resultat presenteras, rådata raderas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesAI;
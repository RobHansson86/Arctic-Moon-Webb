import React, { useEffect, useState } from 'react';
import { AlertTriangle, TrendingDown, EyeOff, ShieldCheck, Sparkles, Target, LineChart } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col pb-24">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-moon-50 via-arctic-50/30 to-moon-100 pt-32 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.08),transparent_50%)]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full glass-effect border border-arctic-200/50 text-arctic-900 text-xs font-bold tracking-wider uppercase mb-8 animate-fade-in-down">
            <Sparkles size={14} className="text-arctic-600" />
            <span>Strategisk Inköpsstyrning</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-moon-900 mb-8 tracking-tight leading-[1.1] animate-fade-in-up animation-delay-100">
            Sluta gissa.<br/>
            <span className="gradient-text">Ta kontroll över marginalerna.</span>
          </h1>
          <p className="text-xl md:text-2xl text-moon-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Vi hjälper företagsledningar i ägarledda bolag att professionalisera inköp och kostnadskontroll. Från kaos till klarhet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link to={PageRoute.AI_ANALYSIS}>
              <Button size="lg" className="smooth-transition text-base px-8 py-4 shadow-glow">Upptäck AI & Analys</Button>
            </Link>
            <Link to={PageRoute.ABOUT}>
              <Button variant="outline" size="lg" className="smooth-transition text-base px-8 py-4">Om Arctic Moon</Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-300 to-transparent" />
      </section>

      {/* Why companies lose money */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
              <AlertTriangle className="text-red-600" size={24} />
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Problemet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Varför ägarledda bolag förlorar pengar utan inköpsstrategi
            </h2>
            <p className="text-lg text-moon-600 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
              Många bolag lägger stor kraft på försäljning, men låter inköpen ske ad-hoc.
              Detta skapar ett "dolt hål" i resultaträkningen där vinstmarginaler rinner ut obemärkt.
            </p>

            <div className="space-y-6">
              <div className="glass-effect border border-red-100 p-6 rounded-lg animate-fade-in-up animation-delay-300 smooth-transition hover-lift group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 smooth-transition">
                    <TrendingDown size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-moon-900 mb-2">Prisglidning & "Auto-renewal"</h3>
                    <p className="text-moon-600 leading-relaxed">
                      Utan aktiva avtalsstrategier höjer leverantörer priserna årligen. Tjänster förnyas automatiskt utan utvärdering. Över tid urholkar detta lönsamheten drastiskt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect border border-orange-100 p-6 rounded-lg animate-fade-in-up animation-delay-400 smooth-transition hover-lift group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 smooth-transition">
                    <EyeOff size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-moon-900 mb-2">Decentraliserat kaos</h3>
                    <p className="text-moon-600 leading-relaxed">
                      När alla får köpa, har ingen ansvar. Dubbla licenser, onödiga fraktkostnader och felaktiga beställningsvolymer är standard i bolag som saknar en central inköpsstruktur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect border border-yellow-100 p-6 rounded-lg animate-fade-in-up animation-delay-500 smooth-transition hover-lift group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center text-white shadow-glow group-hover:scale-110 smooth-transition">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-moon-900 mb-2">Leverantörsberoende</h3>
                    <p className="text-moon-600 leading-relaxed">
                      Att vara "bunden" till en leverantör för att "vi alltid gjort så" är en risk. Utan en strategi för alternativ tappar ni förhandlingskraften helt och hållet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden bg-gradient-to-br from-moon-900 via-moon-800 to-moon-900 text-white p-10 rounded-2xl shadow-2xl animate-fade-in-up animation-delay-600">
              <div className="absolute top-0 right-0 w-64 h-64 bg-arctic-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-arctic-600/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <LineChart className="text-arctic-400" size={24} />
                  <span className="text-sm font-bold text-arctic-400 uppercase tracking-wider">Räkneexempel</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Konsekvensen i siffror
                </h3>
                <p className="mb-8 text-moon-300 leading-relaxed">
                  För ett bolag med 100 MSEK i omsättning och 10% marginal:
                </p>
                <div className="space-y-6">
                  <div className="glass-effect-dark p-8 rounded-xl border border-moon-700/50 smooth-transition hover-lift">
                    <div className="text-sm text-moon-400 mb-2 font-semibold">Besparing på inköp (5%)</div>
                    <div className="text-5xl font-bold text-green-400 mb-2 counter-animation">+ 3.5 MSEK</div>
                    <div className="text-xs text-moon-500 uppercase tracking-wider">Direkt resultatförbättring</div>
                  </div>
                  <div className="glass-effect-dark p-8 rounded-xl border border-moon-700/50 smooth-transition hover-lift">
                    <div className="text-sm text-moon-400 mb-2 font-semibold">Motsvarande säljökning</div>
                    <div className="text-5xl font-bold gradient-text mb-2 counter-animation">35 MSEK</div>
                    <div className="text-xs text-moon-500 uppercase tracking-wider">Krävs för samma sista rad</div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-moon-700/50">
                  <div className="flex gap-3">
                    <div className="text-arctic-400 text-4xl leading-none">"</div>
                    <p className="italic text-moon-200 text-base leading-relaxed">
                      Det är betydligt lättare att spara 5% på inköp än att öka försäljningen med 35%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative overflow-hidden bg-gradient-to-br from-arctic-50 via-white to-arctic-50/50 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(96,165,250,0.05),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
            <Target className="text-arctic-600" size={24} />
            <span className="text-sm font-bold text-arctic-600 uppercase tracking-wider">Våra principer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-6 animate-fade-in-up animation-delay-100">
            Vårt löfte till ledningen
          </h2>
          <p className="text-xl text-moon-600 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Vi tror på tydlighet, snabbhet och mätbara resultat.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beslutsbarhet",
                desc: "Vi levererar underlag som gör det enkelt att säga ja eller nej. Inga långbänkar.",
                icon: ShieldCheck,
                gradient: "from-green-500 to-emerald-600"
              },
              {
                title: "Ingen 'Consultant-speak'",
                desc: "Vi pratar klarspråk. Marginal, risk, leverans. Inga floskler.",
                icon: AlertTriangle,
                gradient: "from-arctic-500 to-arctic-600"
              },
              {
                title: "Resultatfokus",
                desc: "Vi mäter framgång i kronor och ören på sista raden, inte i antalet powerpoints.",
                icon: LineChart,
                gradient: "from-blue-500 to-indigo-600"
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass-effect p-8 rounded-2xl border border-arctic-100 hover-lift smooth-transition animate-fade-in-up animation-delay-${300 + (i * 100)} group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:scale-110 smooth-transition`}>
                  <item.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-moon-900 mb-4">{item.title}</h3>
                <p className="text-moon-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
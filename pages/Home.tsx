import React from 'react';
import { AlertTriangle, TrendingDown, EyeOff, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      
      {/* Hero Section */}
      <section className="relative bg-moon-50 pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-moon-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-arctic-100 text-arctic-800 text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-down">
            Strategisk Inköpsstyrning
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-moon-900 mb-8 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
            Sluta gissa.<br/>
            <span className="text-arctic-600">Ta kontroll över marginalerna.</span>
          </h1>
          <p className="text-xl text-moon-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Vi hjälper företagsledningar i ägarledda bolag att professionalisera inköp och kostnadskontroll. Från kaos till klarhet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link to={PageRoute.AI_ANALYSIS}>
              <Button size="lg" className="smooth-transition">Upptäck AI & Analys</Button>
            </Link>
            <Link to={PageRoute.ABOUT}>
              <Button variant="outline" size="lg" className="smooth-transition">Om Arctic Moon</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Requested Section: Why companies lose money */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-moon-900 mb-6">
              Varför ägarledda bolag förlorar pengar utan inköpsstrategi
            </h2>
            <p className="text-lg text-moon-600 mb-8 leading-relaxed">
              Många bolag lägger stor kraft på försäljning, men låter inköpen ske ad-hoc. 
              Detta skapar ett "dolt hål" i resultaträkningen där vinstmarginaler rinner ut obemärkt.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4 animate-fade-in-up animation-delay-100 smooth-transition hover-lift p-4 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-sm flex items-center justify-center text-red-600">
                  <TrendingDown size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-moon-900 mb-2">Prisglidning & "Auto-renewal"</h3>
                  <p className="text-moon-600">
                    Utan aktiva avtalsstrategier höjer leverantörer priserna årligen. Tjänster förnyas automatiskt utan utvärdering. Över tid urholkar detta lönsamheten drastiskt.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in-up animation-delay-200 smooth-transition hover-lift p-4 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-sm flex items-center justify-center text-orange-600">
                  <EyeOff size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-moon-900 mb-2">Decentraliserat kaos</h3>
                  <p className="text-moon-600">
                    När alla får köpa, har ingen ansvar. Dubbla licenser, onödiga fraktkostnader och felaktiga beställningsvolymer är standard i bolag som saknar en central inköpsstruktur.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in-up animation-delay-300 smooth-transition hover-lift p-4 rounded-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-50 rounded-sm flex items-center justify-center text-yellow-600">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-moon-900 mb-2">Leverantörsberoende</h3>
                  <p className="text-moon-600">
                    Att vara "bunden" till en leverantör för att "vi alltid gjort så" är en risk. Utan en strategi för alternativ tappar ni förhandlingskraften helt och hållet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-moon-900 text-white p-10 rounded-sm shadow-xl lg:mt-12">
            <h3 className="text-2xl font-bold mb-6 border-b border-moon-700 pb-4">
              Konsekvensen i siffror
            </h3>
            <p className="mb-6 text-moon-300">
              För ett bolag med 100 MSEK i omsättning och 10% marginal:
            </p>
            <div className="space-y-6">
              <div className="bg-moon-800 p-6 rounded-sm border border-moon-700">
                <div className="text-sm text-moon-400 mb-1">Besparing på inköp (5%)</div>
                <div className="text-3xl font-bold text-green-400">+ 3.5 MSEK</div>
                <div className="text-xs text-moon-500 mt-2">Direkt resultatförbättring</div>
              </div>
              <div className="bg-moon-800 p-6 rounded-sm border border-moon-700">
                <div className="text-sm text-moon-400 mb-1">Motsvarande säljökning</div>
                <div className="text-3xl font-bold text-arctic-400">35 MSEK</div>
                <div className="text-xs text-moon-500 mt-2">Krävs för samma sista rad</div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-moon-700">
              <p className="italic text-moon-300 text-sm">
                "Det är betydligt lättare att spara 5% på inköp än att öka försäljningen med 35%."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-arctic-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-moon-900 mb-12">Vårt löfte till ledningen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Beslutsbarhet", desc: "Vi levererar underlag som gör det enkelt att säga ja eller nej. Inga långbänkar.", icon: ShieldCheck },
              { title: "Ingen 'Consultant-speak'", desc: "Vi pratar klarspråk. Marginal, risk, leverans. Inga floskler.", icon: AlertTriangle },
              { title: "Resultatfokus", desc: "Vi mäter framgång i kronor och ören på sista raden, inte i antalet powerpoints.", icon: TrendingDown },
            ].map((item, i) => (
              <div key={i} className={`bg-white p-8 rounded-sm shadow-sm border border-arctic-100 hover-lift smooth-transition animate-fade-in-up animation-delay-${(i + 1) * 100}`}>
                <div className="w-12 h-12 bg-arctic-100 text-arctic-700 rounded-full flex items-center justify-center mx-auto mb-6 smooth-transition hover:bg-arctic-200">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-moon-900 mb-3">{item.title}</h3>
                <p className="text-moon-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
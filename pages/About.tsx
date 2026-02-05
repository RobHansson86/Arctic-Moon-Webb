import React from 'react';
import { Compass, Moon, Anchor } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      
      {/* Header */}
      <section className="bg-moon-900 text-white pt-24 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">Om Arctic Moon</h1>
          <p className="text-xl text-moon-300 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-100">
            Vi är inte en traditionell konsultfirma. Vi är din operativa partner för inköp och verksamhetsstyrning.
          </p>
        </div>
      </section>

      {/* Main Content: The Name Concept */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white p-10 md:p-16 rounded-sm shadow-xl border border-moon-100 animate-scale-in">
          <h2 className="text-3xl font-bold text-moon-900 mb-12 text-center">Namnet är vårt arbetssätt</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-arctic-100 text-arctic-800 rounded-full">
                  <Anchor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-arctic-600">ARCTIC</h3>
              </div>
              <h4 className="text-lg font-semibold text-moon-900 uppercase tracking-wide">Klarhet & Struktur</h4>
              <p className="text-moon-600 leading-relaxed">
                Arktis är en plats av extrem tydlighet. Det är rent, avskalat och oförlåtande mot den som kommer oförberedd. 
              </p>
              <p className="text-moon-600 leading-relaxed">
                För oss symboliserar "Arctic" behovet av <strong>kall, rationell analys</strong>. Vi skär bort bruset. Vi tittar på data utan emotionell inblandning. Vi skapar strukturer som håller även när det blåser snålt i konjunkturen. Inget fluff, bara ren fakta.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-moon-100 text-moon-800 rounded-full">
                  <Moon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-moon-900">MOON</h3>
              </div>
              <h4 className="text-lg font-semibold text-moon-900 uppercase tracking-wide">Perspektiv & Överblick</h4>
              <p className="text-moon-600 leading-relaxed">
                Månen ger perspektiv. Den påverkar tidvatten och stora rörelser, men gör det från ett avstånd som ger överblick.
              </p>
              <p className="text-moon-600 leading-relaxed">
                "Moon" står för vår förmåga att lyfta blicken från den dagliga driften. Vi hjälper er att se <strong>helheten i flödena</strong>. Hur påverkar ett inköpsbeslut likviditeten om sex månader? Vi ger er satellitbilden som krävs för långsiktig styrning.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-moon-200 text-center">
            <h3 className="text-xl font-medium text-moon-900 italic">
              "Kombinationen av brutal klarhet och strategisk överblick är det som gör oss till Arctic Moon."
            </h3>
          </div>
        </div>
      </section>

      {/* Team/Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-moon-900 mb-6">Vår Filosofi</h2>
            <div className="space-y-6">
              <p className="text-moon-700">
                Vi startade Arctic Moon för att vi såg ett gap i marknaden. De stora "Big 4"-konsulterna är för dyra och teoretiska för medelstora bolag. Enskilda inköpare saknar ofta det strategiska mandatet.
              </p>
              <p className="text-moon-700">
                Vi kliver in i gapet. Vi är pragmatiker som älskar Excel, men som förstår att affärer görs mellan människor.
              </p>
              <ul className="space-y-3 mt-4">
                {[
                  "Vi tar inte betalt för att lära oss din bransch.",
                  "Vi levererar beslutsunderlag, inte åsikter.",
                  "Vi tror på enkelhet framför komplexitet."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Compass size={20} className="text-arctic-600 mt-1 shrink-0" />
                    <span className="text-moon-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-moon-100 p-8 rounded-sm">
            <h3 className="text-xl font-bold text-moon-900 mb-4">Vem vi hjälper</h3>
            <p className="text-moon-600 mb-4">
              Våra typiska kunder är ägarledda bolag omsättande 50 - 500 MSEK. Ofta finns en stark säljkultur, men inköp och processer har halkat efter tillväxten.
            </p>
            <p className="text-moon-600">
              Vi arbetar direkt mot VD, CFO eller ägare.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
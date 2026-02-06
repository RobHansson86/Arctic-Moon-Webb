import React from 'react';
import { Compass, Moon, Anchor, Sparkles, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col pb-24">

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-moon-900 via-moon-800 to-moon-900 text-white pt-32 pb-40 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 glass-effect-dark border border-moon-700 py-2 px-4 rounded-full animate-fade-in-down">
            <Sparkles size={14} className="text-arctic-400" />
            <span className="text-xs font-bold text-arctic-400 uppercase tracking-wider">Vår berättelse</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up animation-delay-100">
            Om Arctic Moon
          </h1>
          <p className="text-xl md:text-2xl text-moon-300 leading-relaxed max-w-3xl animate-fade-in-up animation-delay-200">
            Vi är inte en traditionell konsultfirma. Vi är din operativa partner för inköp och verksamhetsstyrning.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arctic-400/30 to-transparent" />
      </section>

      {/* Main Content: The Name Concept */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="glass-effect p-12 md:p-16 rounded-3xl border border-moon-200 shadow-2xl animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-4 text-center animate-fade-in-up">
            Namnet är vårt arbetssätt
          </h2>
          <p className="text-lg text-moon-600 text-center mb-16 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Vi valde varje ord med omsorg. Tillsammans skapar de vår identitet.
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-arctic-400 to-arctic-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition" />
              <div className="relative glass-effect p-8 rounded-2xl border border-arctic-200 smooth-transition hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-arctic-500 to-arctic-600 text-white rounded-xl shadow-glow">
                    <Anchor size={28} />
                  </div>
                  <h3 className="text-3xl font-bold gradient-text">ARCTIC</h3>
                </div>
                <h4 className="text-sm font-bold text-arctic-600 uppercase tracking-widest mb-4">
                  Klarhet & Struktur
                </h4>
                <div className="space-y-4">
                  <p className="text-moon-700 leading-relaxed">
                    Arktis är en plats av extrem tydlighet. Det är rent, avskalat och oförlåtande mot den som kommer oförberedd.
                  </p>
                  <p className="text-moon-700 leading-relaxed">
                    För oss symboliserar "Arctic" behovet av <strong className="text-arctic-700">kall, rationell analys</strong>. Vi skär bort bruset. Vi tittar på data utan emotionell inblandning. Vi skapar strukturer som håller även när det blåser snålt i konjunkturen. Inget fluff, bara ren fakta.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-moon-400 to-moon-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl smooth-transition" />
              <div className="relative glass-effect p-8 rounded-2xl border border-moon-200 smooth-transition hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-moon-700 to-moon-800 text-white rounded-xl shadow-glow">
                    <Moon size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-moon-900">MOON</h3>
                </div>
                <h4 className="text-sm font-bold text-moon-600 uppercase tracking-widest mb-4">
                  Perspektiv & Överblick
                </h4>
                <div className="space-y-4">
                  <p className="text-moon-700 leading-relaxed">
                    Månen ger perspektiv. Den påverkar tidvatten och stora rörelser, men gör det från ett avstånd som ger överblick.
                  </p>
                  <p className="text-moon-700 leading-relaxed">
                    "Moon" står för vår förmåga att lyfta blicken från den dagliga driften. Vi hjälper er att se <strong className="text-moon-900">helheten i flödena</strong>. Hur påverkar ett inköpsbeslut likviditeten om sex månader? Vi ger er satellitbilden som krävs för långsiktig styrning.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-moon-200">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex gap-3 justify-center mb-6">
                <div className="text-arctic-500 text-6xl leading-none opacity-50">"</div>
              </div>
              <p className="text-2xl font-medium text-moon-900 leading-relaxed">
                Kombinationen av brutal klarhet och strategisk överblick är det som gör oss till Arctic Moon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6">
              <Compass className="text-arctic-600" size={24} />
              <span className="text-sm font-bold text-arctic-600 uppercase tracking-wider">Filosofi</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-moon-900 mb-8 leading-tight">
              Vår Filosofi
            </h2>
            <div className="space-y-6 text-lg">
              <p className="text-moon-700 leading-relaxed">
                Vi startade Arctic Moon för att vi såg ett gap i marknaden. De stora "Big 4"-konsulterna är för dyra och teoretiska för medelstora bolag. Enskilda inköpare saknar ofta det strategiska mandatet.
              </p>
              <p className="text-moon-700 leading-relaxed">
                Vi kliver in i gapet. Vi är pragmatiker som älskar Excel, men som förstår att affärer görs mellan människor.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                "Vi tar inte betalt för att lära oss din bransch.",
                "Vi levererar beslutsunderlag, inte åsikter.",
                "Vi tror på enkelhet framför komplexitet."
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 glass-effect rounded-lg border border-arctic-100 smooth-transition hover-lift animate-fade-in-up animation-delay-${(i + 1) * 100}`}>
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-arctic-500 to-arctic-600 rounded-lg flex items-center justify-center shadow-glow">
                    <Compass size={20} className="text-white" />
                  </div>
                  <span className="text-moon-900 font-semibold text-base leading-relaxed pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 animate-fade-in-up animation-delay-400">
            <div className="relative overflow-hidden glass-effect p-10 rounded-3xl border border-moon-200 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-arctic-500/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Target className="text-arctic-600" size={24} />
                  <span className="text-sm font-bold text-arctic-600 uppercase tracking-wider">Våra kunder</span>
                </div>
                <h3 className="text-3xl font-bold text-moon-900 mb-6">Vem vi hjälper</h3>
                <div className="space-y-6">
                  <p className="text-lg text-moon-700 leading-relaxed">
                    Våra typiska kunder är <strong className="text-arctic-700">ägarledda bolag omsättande 50 - 500 MSEK</strong>. Ofta finns en stark säljkultur, men inköp och processer har halkat efter tillväxten.
                  </p>
                  <div className="pt-6 border-t border-moon-200">
                    <p className="text-moon-700 leading-relaxed">
                      Vi arbetar direkt mot <strong className="text-moon-900">VD, CFO eller ägare</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
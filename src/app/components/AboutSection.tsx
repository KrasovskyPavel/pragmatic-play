import { Settings, Award, Trophy, Monitor } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-black">
          We are Pragmatic Play
        </div>

        <div className="space-y-4 md:space-y-6 text-center mb-12 md:mb-16">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[900px] mx-auto">
            Led by CEO Julian Jarvis from its headquarters in Gibraltar, Pragmatic Play is a leading
            supplier of player-favourite content to the most successful operator brands in the
            industry.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[900px] mx-auto">
            Powering up new possibilities of play through a single API, we offer a multi-product
            portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and
            more, available in all major regulated markets, languages and currencies.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[900px] mx-auto">
            Driven by our commitment to craft immersive experiences and responsible thrills, we
            supply games that players love time and time again.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-[900px] mx-auto">
            Pragmatic Play is owned by a private group of investors led by Veridian (Gibraltar)
            Limited.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">
          <div className="text-center space-y-4 p-4 hover:transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Settings className="w-12 h-12 md:w-16 md:h-16 text-orange-500" strokeWidth={1.5} />
            </div>
            <p className="text-sm md:text-base text-gray-800 px-2 leading-relaxed">
              Slots, Live Casino, Bingo, Virtual Sports, Sportsbook and more via a single API
            </p>
          </div>

          <div className="text-center space-y-4 p-4 hover:transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Award className="w-12 h-12 md:w-16 md:h-16 text-orange-500" strokeWidth={1.5} />
            </div>
            <p className="text-sm md:text-base text-gray-800 px-2 leading-relaxed">
              Certified and licensed in over 50 jurisdictions
            </p>
          </div>

          <div className="text-center space-y-4 p-4 hover:transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Trophy className="w-12 h-12 md:w-16 md:h-16 text-orange-500" strokeWidth={1.5} />
            </div>
            <p className="text-sm md:text-base text-gray-800 px-2 leading-relaxed">
              Multi-award-winning content
            </p>
          </div>

          <div className="text-center space-y-4 p-4 hover:transform hover:scale-105 transition-transform">
            <div className="flex justify-center">
              <Monitor className="w-12 h-12 md:w-16 md:h-16 text-orange-500" strokeWidth={1.5} />
            </div>
            <p className="text-sm md:text-base text-gray-800 px-2 leading-relaxed">
              Mobile, desktop, 33 languages and all currencies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

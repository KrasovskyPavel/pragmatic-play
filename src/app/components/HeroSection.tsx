import {Play} from 'lucide-react';
import heroImage from '../../assets/6535dfccb985fe306e479887b223a32230f8ee24.png';

export default function HeroSection() {
    return (
        <section className="bg-black flex items-center justify-center relative overflow-hidden h-[560px] min-[1000px]:h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Drops & Wins"
                    className="w-full h-full object-cover min-[1000px]:object-contain"
                />
            </div>

            {/* Play Button */}
            <div className="relative z-10">
                <a
                    href="https://bestslotgames.top/PbvqCSBq"
                    rel="nofollow"
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl">
                    <Play className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white fill-white ml-1" />
                </a>
            </div>
        </section>
    );
}

import bigBass from '../../assets/1cc1c34ffb9d1380c7bc9abf68dd63f77c2c7b2e.png';
import fortuneOlympus from '../../assets/bced985d5f72b9c5ed54d2974fb29e3d9e83962b.png';
import sweetRush from '../../assets/c711520c727e167230acadbcf39197eadc51257e.png';

export default function SlotsSection() {
    const slots = [
        {
            title: 'Fortune of Olympus',
            description:
                "Join Zeus' throne room in this cluster-pays slot where multipliers up to 500x can land on any spin",
            image: fortuneOlympus,
        },
        {
            title: 'Sweet Rush Bonanza',
            description:
                'Tumbling reels and multiplier spots combine to land big wins in this sugar-filled pays-anywhere slot',
            image: sweetRush,
        },
        {
            title: 'Big Bass Bonanza 1000',
            description:
                'Reel in wins up to 20,000x in a supercharged edition of the classic fishing slot',
            image: bigBass,
        },
    ];

    return (
        <section className="bg-[#1b0225] py-12 md:py-16 lg:py-20 relative">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        Slots
                    </div>
                    <a
                        href="https://bestslotgames.top/PbvqCSBq"
                        rel="nofollow"
                        className="border-2 border-orange-500 text-orange-500 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors text-sm md:text-base font-semibold">
                        View All Games
                    </a>
                </div>

                <p className="text-white text-base md:text-lg mb-8 md:mb-12 max-w-[900px]">
                    Our multi-award winning slots portfolio contains unique
                    in-house content consisting of over 500 games, available in
                    all major currencies, languages and certified markets.
                </p>

                {/* Slots Grid */}
                <div className="flex flex-col md:flex-row md:justify-center gap-6 md:gap-8 items-center">
                    {slots.map((slot, index) => (
                        <a
                            key={index}
                            href="https://bestslotgames.top/PbvqCSBq"
                            rel="nofollow"
                            className="group block w-full max-w-[290px]">
                            {/* Card with golden border */}
                            <div
                                className="relative rounded-lg overflow-hidden mb-4 transition-transform group-hover:scale-105"
                                style={{width: '290px', height: '434px'}}>
                                {/* Golden border */}
                                <div
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background:
                                            'linear-gradient(135deg, #d4af37 0%, #f4e5b0 25%, #d4af37 50%, #f4e5b0 75%, #d4af37 100%)',
                                        padding: '6px',
                                    }}>
                                    <div className="w-full h-full rounded-lg overflow-hidden">
                                        <img
                                            src={slot.image}
                                            alt={slot.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="text-white text-lg md:text-xl font-bold mb-2 text-center group-hover:text-orange-400 transition-colors">
                                {slot.title}
                            </div>

                            {/* Description */}
                            <p className="text-white text-sm md:text-base leading-relaxed text-center max-w-[290px] mx-auto">
                                {slot.description}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

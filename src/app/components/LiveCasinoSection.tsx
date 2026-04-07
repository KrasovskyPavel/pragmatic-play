export default function LiveCasinoSection() {
  const games = [
    {
      title: "The Bingo Spot",
      description: "The Bingo Spot steps into the spotlight, offering a sophisticated yet intuitive game show experience with wins of up to 20,000x.",
      image: "https://images.unsplash.com/photo-1616015478992-e9412edbdb5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwY2FzaW5vJTIwZGVhbGVyJTIwZ2FtZXxlbnwxfHx8fDE3NzU1NDk3Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Mega Roulette 3000",
      description: "Mega Roulette 3000 is an exciting twist on the classic casino game, adding mega multipliers, mega bets, and the chance to land some mega wins up to 3,000x",
      image: "https://images.unsplash.com/photo-1542145177-4dc9b8029711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1ibGluZyUyMHJvdWxldHRlJTIwY2hpcHN8ZW58MXx8fHwxNzc1NTQ5Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Money Time",
      description: "Money Time is an action-packed game show featuring four bonus games, bet spot boosters, and wins of up to 40,000x",
      image: "https://images.unsplash.com/photo-1743677042704-74a8390e765a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwZ2FtaW5nfGVufDF8fHx8MTc3NTU0OTc3OXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="bg-[#1b0225] py-12 md:py-16 lg:py-20 relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Live Casino</h2>
          <a 
            href="https://bestslotgames.top/PbvqCSBq"
            rel="nofollow"
            className="border-2 border-orange-500 text-orange-500 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors text-sm md:text-base font-semibold"
          >
            View All Games
          </a>
        </div>

        <p className="text-white text-base md:text-lg mb-8 md:mb-12 max-w-[900px]">
          Broadcast from a state-of-the-art, newly constructed studio, our live casino portfolio incorporates a wide selection of games, including Baccarat, Roulette and Blackjack.
        </p>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {games.map((game, index) => (
            <a
              key={index}
              href="https://bestslotgames.top/PbvqCSBq"
              rel="nofollow"
              className="group space-y-4"
            >
              <div className="overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover"
                />
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold text-center group-hover:text-orange-400 transition-colors">
                {game.title}
              </h3>
              <p className="text-gray-300 text-xs md:text-sm text-center px-2 leading-relaxed">
                {game.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
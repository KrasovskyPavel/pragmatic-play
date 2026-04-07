import Image from "next/image";
import logo from "../../imports/PP-white-logo.svg";

interface HeaderProps {
  variant?: "dark" | "purple";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  return (
    <header className="py-3 md:py-4 px-4 md:px-8 absolute top-6 left-10 right-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 lg:left-12 lg:transform-none">
          <Image
            src={logo}
            alt="Pragmatic Play logo"
            priority
            className="h-[73px] w-[159px]"
            style={{ width: "159px", height: "73px" }}
          />
        </div>
        {/* Desktop: Get Bonus Button */}
        <a
          href="https://bestslotgames.top/PbvqCSBq"
          rel="nofollow"
          className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-base ml-auto"
        >
          Get Bonus
        </a>
      </div>
    </header>
  );
}

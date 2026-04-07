import Image from "next/image";
import logo from "../../imports/PP-white-logo.svg";
import age18Plus from "../../assets/209af039dcccd768a1414309462711821de80771.png";
import beGambleAware from "../../assets/0cf46609fa789d9fb9094de82fcbccb1b338938a.png";
import gameCheck from "../../imports/gamecheck.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1b0225] pt-12 md:pt-16 lg:pt-20 pb-6 md:pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Image src={logo} alt="Pragmatic Play" priority className="h-12 md:h-16 lg:h-20" />
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-xs md:text-sm mb-6 md:mb-8 px-4 leading-relaxed max-w-4xl mx-auto">
          <p>
            COPYRIGHT © 2015 – 2026. All rights reserved to Pragmatic Play, a{" "}
            <span className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">
              Veridian (Gibraltar) Limited
            </span>{" "}
            investment. Any and all content included on this website or incorporated by reference is
            protected by international copyright laws.
          </p>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
          <Image
            src={age18Plus}
            alt="18+"
            width={120}
            height={120}
            className="h-16 md:h-20 lg:h-24 w-auto object-contain"
          />
          <Image
            src={beGambleAware}
            alt="BeGambleAware.org"
            width={160}
            height={80}
            quality={100}
            className="h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
          <Image
            src={gameCheck}
            alt="GAMECHECK"
            width={160}
            height={80}
            className="h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </div>

        {/* License Info */}
        <div className="text-center text-gray-400 text-xs px-4 leading-relaxed max-w-3xl mx-auto">
          <p>
            PragmaticPlay (Gibraltar) Limited is licensed by the Gibraltar Licensing Authority and
            regulated under the Act by the Gibraltar Gambling Commissioner, under RGL No. 107.
          </p>
        </div>
      </div>
    </footer>
  );
}

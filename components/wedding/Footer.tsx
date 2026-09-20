export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#F7F3ED] px-5 py-10 text-[#691638] sm:py-16">
      {/* Subtle atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#F8EBE6]/20
          blur-[100px]
        "
      />

      <div className="container-wedding relative z-10">
        {/* Main */}
        <div className="flex flex-col items-center text-center">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-[#691638]
            "
          >
            Until forever
          </p>

          <h2
            className="
              font-500
              mt-4
              text-xl
              leading-[0.9]
              tracking-[-0.055em]
              text-[#691638]
            "
          >
            Aneena
            <span className="serif-italic font-light text-[#8F596C]">
              {" "}
              & &nbsp;
            </span>
            Loyed
          </h2>

          <p
            className="
              mt-6
              text-[10px]
              leading-6
              text-[#691638]/55
              sm:text-[11px]
            "
          >
            Sunday, 15 November 2026
            <br />
          </p>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-4
            flex
            flex-col
            items-center
            gap-3
            border-t
            border-[#691638]/15
            pt-5
            text-center
            sm:mt-14
            sm:flex-row
            sm:justify-between
          "
        >
          <a
            href="https://wyvernstack.com"
            target="_blank"
            rel="noreferrer"
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#691638]/65
              transition-colors
              duration-300
              hover:text-[#691638]
            "
          >
            wyvernstack.com
          </a>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#691638]/40
            "
          >
            © 2026 Wyvernstack
          </p>
        </div>
      </div>
    </footer>
  );
}

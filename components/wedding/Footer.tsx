import { weddingConfig } from "@/config/wedding";

export default function Footer() {
  const { couple, date, copy } = weddingConfig;

  return (
    <footer className="relative overflow-hidden bg-[#F7F3ED] px-5 py-10 text-[var(--theme-primary)] sm:py-16">
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
              text-[var(--theme-primary)]
            "
          >
            {copy.footer.eyebrow}
          </p>

          <h2
            className="
              font-500
              mt-4
              text-xl
              leading-[0.9]
              tracking-[-0.055em]
              text-[var(--theme-primary)]
            "
          >
            {couple.bride.firstName}
            <span className="serif-italic font-light text-[#8F596C]">
              {" "}
              & &nbsp;
            </span>
            {couple.groom.firstName}
          </h2>

          <p
            className="
              mt-6
              text-[10px]
              leading-6
              text-[var(--theme-primary)]/55
              sm:text-[11px]
            "
          >
            {date.displayLong}
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
            border-[var(--theme-primary)]/15
            pt-5
            text-center
            sm:mt-14
            sm:flex-row
            sm:justify-between
          "
        >
          <a
            href={copy.footer.creditUrl}
            target="_blank"
            rel="noreferrer"
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[var(--theme-primary)]/65
              transition-colors
              duration-300
              hover:text-[var(--theme-primary)]
            "
          >
            {copy.footer.creditLabel}
          </a>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[var(--theme-primary)]/40
            "
          >
            © {date.year} {copy.footer.copyrightName}
          </p>
        </div>
      </div>
    </footer>
  );
}

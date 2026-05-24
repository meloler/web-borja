import { SITE } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  // Reproducción vectorial inspirada en la marca BG (no usa el png para mantener nitidez en cualquier tamaño).
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 ring-1 ring-teal-400/30"
      >
        <svg
          viewBox="0 0 40 40"
          className="h-6 w-6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="bg-l" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5ed3b3" />
              <stop offset="1" stopColor="#1ea98a" />
            </linearGradient>
          </defs>
          {/* hoja */}
          <path
            d="M21.3 4.5c1.6.6 2.5 2 2.5 3.6 0 1.8-1.4 3.3-3.2 3.3-1.4 0-2.7-1-3.1-2.4 1.2-1.5 2.6-3 3.8-4.5z"
            fill="url(#bg-l)"
          />
          <path
            d="M19 7.5c-1.8 0-3.2 1.5-3.2 3.3 0 1.6 1 3 2.5 3.6 1.2-1.5 2.6-3 3.8-4.5-.4-1.4-1.7-2.4-3.1-2.4z"
            fill="#36bfa0"
            opacity=".75"
          />
          {/* B */}
          <path
            d="M8 12.5h6.4c2.6 0 4.5 1.6 4.5 4.1 0 1.4-.7 2.5-1.8 3 1.5.5 2.4 1.8 2.4 3.5 0 2.6-2 4.4-4.9 4.4H8V12.5zm6 6c1 0 1.6-.5 1.6-1.4 0-.9-.6-1.4-1.6-1.4h-2.7v2.8H14zm.4 6.4c1.1 0 1.8-.6 1.8-1.6 0-1-.7-1.6-1.8-1.6h-3.1v3.2h3.1z"
            fill="url(#bg-l)"
          />
          {/* g */}
          <path
            d="M27.2 17c2.5 0 4.2 1.2 4.6 3l-3 .9c-.2-.7-.8-1.1-1.6-1.1-1.2 0-1.9.9-1.9 2.4s.7 2.4 1.9 2.4c.8 0 1.4-.4 1.6-1.1l3 .8c-.4 1.9-2.1 3.1-4.6 3.1-3.1 0-5.1-1.9-5.1-5.1 0-3.3 2-5.3 5.1-5.3z"
            fill="url(#bg-l)"
          />
          <path
            d="M22.5 30c.4 1 1.5 1.5 2.9 1.5 1.8 0 2.8-.8 2.8-2.4v-1c-.5.7-1.5 1.2-2.7 1.2-.6 0-1.1-.1-1.5-.2v-2.5c.4.2.9.3 1.4.3 1.1 0 1.8-.6 1.8-1.6v-.6c-.5.6-1.4.9-2.5.9-.4 0-.7 0-1-.1V23c.5.2 1 .3 1.6.3.7 0 1.2-.2 1.6-.5l.6 2.4c-1 .7-2.2 1.1-3.4 1.1-2.4 0-3.9-1.3-3.9-3.4 0-1.2.5-2.2 1.4-2.9-.6-.5-.9-1.2-.9-2 0-1.7 1.4-2.9 3.4-2.9.7 0 1.3.1 1.8.3l-.5 2.1c-.4-.1-.8-.2-1.2-.2-.6 0-.9.2-.9.6 0 .3.2.5.7.6l1.3.3c1.9.4 2.7 1.3 2.7 2.9 0 .9-.3 1.6-.8 2.2.7.5 1.1 1.3 1.1 2.2v1.5c0 2.7-2 4.4-5.2 4.4-2.5 0-4.4-1.1-5-2.8l2.8-.6z"
            fill="#5ed3b3"
            opacity=".0"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-warmwhite">
          {SITE.shortName}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-teal-300/80">
          Nutrición
        </span>
      </span>
    </span>
  );
}

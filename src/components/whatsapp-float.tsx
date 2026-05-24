"use client";

import { WHATSAPP_URL } from "@/lib/site";

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp con Borja"
      className="group fixed bottom-5 right-5 z-30 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-ink-900 shadow-glow transition-transform hover:scale-[1.03] active:scale-100 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden
        className="absolute -inset-1 -z-10 rounded-full bg-[#25D366]/40 blur-md transition-opacity group-hover:opacity-80"
      />
      <svg
        viewBox="0 0 32 32"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden
      >
        <path d="M19.11 17.36c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.62.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.33-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.42.12-.55.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.62-1.49-.85-2.04-.22-.54-.45-.46-.62-.47l-.53-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.67 1.12 2.86.13.18 1.94 2.96 4.7 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31zM16.02 5C9.93 5 5 9.93 5 16.02c0 1.94.5 3.84 1.46 5.51L5 27l5.66-1.45a11 11 0 005.36 1.36h.01C22.12 26.91 27 21.98 27 15.89 27 9.79 22.12 5 16.02 5z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">
        Hablar por WhatsApp
      </span>
    </a>
  );
}

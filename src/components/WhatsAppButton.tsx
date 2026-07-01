import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-[999] flex flex-col items-center">

      {/* Foto Edgar */}
      <img
        src="/edgar-whatsapp.png"
        alt="Edgar Junior"
        className="
          w-20
          sm:w-24
          md:w-44
          -mb-3
          md:-mb-6
          drop-shadow-[0_0_30px_rgba(255,200,0,0.5)]
          animate-float
          select-none
          pointer-events-none
        "
      />

      {/* Botão */}
      <a
        href="https://wa.me/5583996618063"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          gap-2
          rounded-full
          bg-[#25D366]
          px-4
          py-2
          md:px-6
          md:py-4
          text-sm
          md:text-lg
          font-semibold
          text-white
          shadow-[0_10px_40px_rgba(37,211,102,.4)]
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <MessageCircle size={20} className="md:w-7 md:h-7" />
        WhatsApp
      </a>

    </div>
  );
}
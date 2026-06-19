import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-center">

      {/* Foto Edgar */}
     <img
  src="/edgar-whatsapp.png"
  alt="Edgar Junior"
  className="
    w-36
    md:w-44
    -mb-6
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
          gap-3
          rounded-full
          bg-[#25D366]
          px-6
          py-4
          text-lg
          font-semibold
          text-white
          shadow-[0_10px_40px_rgba(37,211,102,.4)]
          transition-all
          duration-300
          hover:scale-105
        "
      >
        <MessageCircle size={28} />
        WhatsApp
      </a>

    </div>
  );
}
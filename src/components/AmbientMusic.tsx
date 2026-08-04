/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Minus, Plus } from "lucide-react";

export default function AmbientMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);

  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        audio.volume = volume;
        await audio.play();

        setPlaying(true);

        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
      } catch {
        console.log("Áudio aguardando interação do usuário.");
      }
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        audio.volume = volume;
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Não foi possível reproduzir o áudio:", error);
      }
    }
  };

  const increaseVolume = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = Math.min(volume + 0.1, 1);

    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const decreaseVolume = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = Math.max(volume - 0.1, 0);

    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/edgar-jazz.mp3"
        loop
        preload="auto"
      />

      <div
        className="
          fixed bottom-6 left-6 z-9999
          flex items-center gap-1
          rounded-full
          border border-white/10
          bg-black/80
          p-1.5
          text-white
          shadow-xl
          backdrop-blur-md
        "
      >
        {/* Diminuir volume */}
        <button
          onClick={decreaseVolume}
          aria-label="Diminuir volume"
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            transition-all duration-300
            hover:bg-white/10
          "
        >
          <Minus size={16} />
        </button>

        {/* Ligar / desligar */}
        <button
          onClick={toggleMusic}
          aria-label={playing ? "Desativar música" : "Ativar música"}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-white/10
            transition-all duration-300
            hover:bg-white/20
          "
        >
          {playing ? <Volume2 size={19} /> : <VolumeX size={19} />}
        </button>

        {/* Aumentar volume */}
        <button
          onClick={increaseVolume}
          aria-label="Aumentar volume"
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            transition-all duration-300
            hover:bg-white/10
          "
        >
          <Plus size={16} />
        </button>

        {/* Volume */}
        <span className="mr-2 min-w-8 text-center text-[10px] font-medium text-white/60">
          {Math.round(volume * 100)}%
        </span>
      </div>
    </>
  );
}
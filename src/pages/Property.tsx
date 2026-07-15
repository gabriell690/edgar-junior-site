import { useParams } from "react-router-dom";
import {
  Calendar,
  BadgeDollarSign,
  BedDouble,
  MapPin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { properties } from "../data/properties";

export default function Property() {
  const { slug } = useParams();

  const property = properties.find((item) => item.slug === slug);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
}, []);

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center bg-white pt-24">
          <h1 className="text-3xl font-bold">
            Empreendimento não encontrado
          </h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-gray-50 text-zinc-900">

        {/* HERO */}

        <section className="relative h-[75vh] min-h-137.5">

          <img
            src={property.cover}
            alt={property.name}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/20" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {property.name}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-200 max-w-3xl">
              {property.location}
            </p>

            <p className="mt-3 text-yellow-400 font-medium">
              Entrega prevista para {property.delivery}
            </p>

            <ChevronDown
              className="text-white mt-16 animate-bounce"
              size={34}
            />

          </div>

        </section>

        {/* CARD FLUTUANTE */}

        <div className="max-w-6xl mx-auto px-5 -mt-24 relative z-20">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-8">
                {property.name}
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="space-y-6">

                  <div className="flex gap-4 items-start">

                    <Calendar className="text-yellow-500 mt-1" />

                    <div>
                      <p className="text-sm text-gray-500">
                        Entrega prevista
                      </p>

                      <p className="font-semibold">
                        {property.delivery}
                      </p>
                    </div>

                  </div>

                  <div className="border-b" />

                  <div className="flex gap-4 items-start">

                    <BadgeDollarSign className="text-yellow-500 mt-1" />

                    <div>

                      <p className="text-sm text-gray-500">
                        Investimento
                      </p>

                      <p className="text-2xl font-bold text-yellow-600">
                        {property.price}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="space-y-6">

                  <div className="flex gap-4 items-start">

                    <BedDouble className="text-yellow-500 mt-1" />

<div>
  <p className="text-sm text-gray-500">
    Categoria
  </p>

  <p className="font-semibold">
    {property.category}
  </p>
</div>

                  </div>

                  <div className="border-b" />

                  <div className="flex gap-4 items-start">

                    <MapPin className="text-yellow-500 mt-1" />

                    <div>

                      <p className="text-sm text-gray-500">
                        Localização
                      </p>

                      <p className="font-semibold">
                        {property.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SOBRE */}

        <section className="max-w-6xl mx-auto px-5 mt-20">

          <h2 className="text-4xl font-bold mb-8">
            Sobre o empreendimento
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mb-10" />

          <p className="text-gray-700 leading-9 text-lg">
            {property.description}
          </p>

        </section>

        {/* GALERIA */}

        <section className="max-w-6xl mx-auto px-5 mt-24">

          <h2 className="text-4xl font-bold mb-10">
            Galeria
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">

            {property.images.map((image, index) => (

              <div
                key={index}
                className={`overflow-hidden rounded-2xl shadow-md ${
                  index === 0
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
              >

                <img
                  src={image}
                  alt={`${property.name}-${index}`}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="max-w-6xl mx-auto px-5 py-24">

          <div className="bg-white rounded-3xl shadow-xl p-10 lg:p-14 flex flex-col lg:flex-row justify-between items-center gap-10">

            <div>

              <span className="text-yellow-500 uppercase tracking-widest text-sm font-semibold">
                Atendimento Exclusivo
              </span>

              <h2 className="text-4xl font-bold mt-4">
                Gostou deste empreendimento?
              </h2>

              <p className="text-gray-600 mt-5 max-w-xl leading-8">
                Solicite disponibilidade das unidades, tabela atualizada,
                condições especiais e agende uma visita com Edgar Junior.
              </p>

            </div>

            <a
              href="https://wa.me/5583999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-full font-bold flex items-center gap-3 text-black shadow-lg"
            >
              <MessageCircle size={22} />
              Falar no WhatsApp
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}
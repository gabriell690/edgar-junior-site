import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { properties } from "../data/properties";

export default function Property() {
  const { slug } = useParams();

  const property = properties.find(
    (item) => item.slug === slug
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen flex items-center justify-center">
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

      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <img
            src={property.cover}
            alt={property.name}
            className="w-full h-125 object-cover rounded-2xl mb-10"
          />

          <h1 className="text-4xl font-bold mb-6">
            {property.name}
          </h1>

          <div className="space-y-3 mb-8">
            <p>📍 {property.location}</p>

            <p>💰 {property.price}</p>

            <p>
              🏗 Entrega prevista: {property.delivery}
            </p>
          </div>

          <p className="text-gray-700 leading-8 mb-12">
            {property.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={property.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            ))}
          </div>

          <a
            href="https://wa.me/5583999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-8
              py-4
              rounded-lg
              bg-yellow-500
              text-black
              font-semibold
            "
          >
            Falar com Edgar Junior
          </a>

        </div>
      </main>

      <Footer />
    </>
  );
}
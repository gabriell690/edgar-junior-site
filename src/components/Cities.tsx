import { properties } from "../data/properties";

export default function Cities() {
 const campinaProperties = properties
  .filter((property) =>
    property.location?.includes("Campina Grande")
  )
  .slice(0, 3);

const joaoPessoaProperties = properties
  .filter((property) =>
    property.location?.includes("João Pessoa")
  )
  .slice(0, 3);

  return (
    <>
      {campinaProperties.length > 0 && (
        <section
          id="campina"
          className="py-24 bg-black text-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10">
              Campina Grande
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {campinaProperties.map((property) => (
                <div
                  key={property.slug}
                  className="bg-zinc-900 rounded-xl overflow-hidden"
                >
                  <img
                    src={property.cover}
                    alt={property.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {property.name}
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      {property.neighborhood}
                    </p>

                    <p className="mt-2">
                      {property.price}
                    </p>
                  </div>
                  
                </div>
                
              ))}
            </div>
        <div className="mt-12 flex justify-center">
  <a
    href="/lancamentos"
    className="group inline-flex items-center gap-2 bg-yellow-500 border border-yellow-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl"
  >
    Ver Todos os Lançamentos
    <span className="transition-transform group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
          </div>
        </section>
      )}

      {joaoPessoaProperties.length > 0 && (
        <section
          id="joaopessoa"
          className="py-24 bg-zinc-950 text-white"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-10">
              João Pessoa
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {joaoPessoaProperties.map((property) => (
                <div
                  key={property.slug}
                  className="bg-zinc-900 rounded-xl overflow-hidden"
                >
                  <img
                    src={property.cover}
                    alt={property.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-bold">
                      {property.name}
                    </h3>

                    <p className="text-zinc-400 mt-2">
                      {property.neighborhood}
                    </p>

                    <p className="mt-2">
                      {property.price}
                    </p>
                  </div>
                  
                </div>
                
              ))}
            </div>
       <div className="mt-12 flex justify-center">
  <a
    href="/lancamentos"
    className="group inline-flex items-center gap-2 bg-yellow-500 border border-yellow-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-yellow-400 hover:shadow-xl"
  >
    Ver Todos os Lançamentos
    <span className="transition-transform group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
          </div>
        </section>
      )}
    </>
  );
}

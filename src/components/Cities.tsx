export default function Cities() {
  return (
    <>
      <section
        id="campina"
        className="py-24 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Campina Grande
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 rounded-xl overflow-hidden"
              >
                <img
                  src="/empreendimento.jpg"
                  alt=""
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    Empreendimento
                  </h3>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section
        id="joaopessoa"
        className="py-24 bg-zinc-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            João Pessoa
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3].map((item) => (
              <div
                key={item}
                className="bg-zinc-900 rounded-xl overflow-hidden"
              >
                <img
                  src="/empreendimento.jpg"
                  alt=""
                  className="h-64 w-full object-cover"
                  
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    Empreendimento
                  </h3>
                  
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      
    </>
  );
}
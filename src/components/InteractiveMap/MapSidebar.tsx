interface Props {

    bairro: string;

    total: number;

}

export default function Sidebar({

    bairro,

    total

}: Props) {

    return (

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 h-full">

            <p className="text-zinc-400 uppercase text-xs tracking-widest">

                Bairro

            </p>

            <h2 className="text-3xl font-bold text-white mt-2">

                {bairro || "João Pessoa"}

            </h2>

            <p className="text-yellow-400 mt-4 text-lg">

                {total} empreendimentos

            </p>

            <div className="mt-8 space-y-3 text-zinc-300">

                <p>✓ Região valorizada</p>

                <p>✓ Excelente infraestrutura</p>

                <p>✓ Alta liquidez imobiliária</p>

                <p>✓ Próximo da praia</p>

            </div>

        </div>

    );

}
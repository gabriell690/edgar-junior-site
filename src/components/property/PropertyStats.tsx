interface Props {
    total:number;
    bairros:number;
    lancamentos:number;
    prontos:number;
}

export default function PropertyStats({
    total,
    bairros,
    lancamentos,
    prontos,
}:Props){

const cards=[
{
title:"Empreendimentos",
value:total
},
{
title:"Bairros",
value:bairros
},
{
title:"Lançamentos",
value:lancamentos
},
{
title:"Prontos",
value:prontos
},
];

return(

<section className="pb-16">

<div className="container-edgar">

<div className="grid md:grid-cols-4 gap-5">

{cards.map(card=>(

<div
key={card.title}
className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center"
>

<p className="text-zinc-400 uppercase text-xs">
{card.title}
</p>

<h2 className="mt-3 text-4xl text-yellow-400 font-bold">
{card.value}
</h2>

</div>

))}

</div>

</div>

</section>

)

}
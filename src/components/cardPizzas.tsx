interface PropsCard{
  image: string;
  title: string;
  desc: string;
  priceP: string
  priceM: string
  priceG: string
}

export function CardPizza(props: PropsCard){
  return(
    <div
      className="flex flex-col justify-center items-center px-3 py-2 gap-3 h-[320px] w-[250px] border border-stone-400 rounded-xl shadow-xl">
      <img src={props.image} alt="" width={100} className=""/>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="font-bold text-lg text-center text-red-600">{props.title}</h2>
        <p className="text-black text-base text-center">{props.desc}</p>
        <div className="flex items-center justify-center flex-wrap gap-2">
          <div className="flex flex-col">
            <p className="text-base text-center font-semibold italic text-stone-500">P</p>
            <p className="text-base text-center font-semibold italic text-stone-500">{props.priceP}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-center font-semibold italic text-stone-500">M</p>
            <p className="text-base text-center font-semibold italic text-stone-500">{props.priceM}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-base text-center font-semibold italic text-stone-500">G</p>
            <p className="text-base text-center font-semibold italic text-stone-500">{props.priceG}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
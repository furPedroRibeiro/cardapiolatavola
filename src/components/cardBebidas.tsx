interface PropsCard{
  image: string
  title: string
  desc: string
  price: string
}

export function CardBebida(props: PropsCard){
  return(
    <div
      className="flex flex-col justify-center items-center px-3 py-2 gap-2 h-[300px] w-[250px] border border-stone-400 rounded-xl shadow-xl">
      <img src={props.image} alt="" width={100} className=""/>
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="font-bold text-lg text-center text-red-600">{props.title}</h2>
        <p className="text-black text-base text-center">{props.desc}</p>
        <p className="text-base text-center font-semibold italic text-stone-500">{props.price}</p>
      </div>
    </div>
  )
}
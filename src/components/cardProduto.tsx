interface PropsCard{
  'image': string
  'title': string
  'desc': string
  'price': string
}

export function CardProduto(props: PropsCard){
  return(
    <div
      className="flex flex-col justify-center items-center px-3 py-2 gap-2 h-[300px] w-[250px] border border-stone-400 rounded-xl">
      <img src={props.image} alt="" width={100} className=""/>
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="font-bold text-lg text-center">{props.title}</h2>
        <p className="text-stone-800 text-lg text-center">{props.desc}</p>
        <p className="text-lg text-center font-semibold italic bg-red-600 rounded-full text-white px-4 py-1">{props.price}</p>
      </div>
    </div>
  )
}
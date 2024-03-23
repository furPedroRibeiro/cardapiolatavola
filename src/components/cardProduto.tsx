interface PropsCard{
  'image': string
  'title': string
  'desc': string
  'price': string
}

export function CardProduto(props: PropsCard){
  return(
    <article className="flex justify-center items-center p-2 shadow-md gap-2 w-11/12 md:w-[400px]">
      <img src={props.image} alt="" width={100} className=""/>
      <div className="flex flex-col items-start justify-center">
        <h2 className="font-extrabold text-lg">{props.title}</h2>
        <p className="text-stone-800">{props.desc}</p>
        <p className="text-lg italic">{props.price}</p>
      </div>
    </article>
  )
}
import * as Dialog from '@radix-ui/react-dialog';

import LogoPizzas from '../assets/logoPizzas.png'
import { CardProduto } from './cardProduto';

export function Pizzas(){
  return(
    <Dialog.Root>
      <Dialog.Trigger className='bg-red-600/90 w-[225px] h-[200px] rounded-md shadow-xl flex flex-col items-center justify-center gap-3 hover:bg-red-500 transition-all duration-700'>
        <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="70" fill='white'>
          <path d="M480-80 80-680q85-72 186.5-116T480-840q112 0 213.5 43.5T880-680L480-80Zm0-144 292-438q-65-45-139-71.5T480-760q-79 0-152.5 26.5T188-662l292 438ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Zm0 136Z"/>
        </svg>
        <p className='text-white font-medium text-lg'>Pizzas</p>
      </Dialog.Trigger>
      <Dialog.Portal>
      <Dialog.Content className='w-screen h-screen absolute bg-white inset-0 transition-all duration-700 overflow-x-hidden px-auto flex flex-col'>
            <div id='header-bebidas' className='flex justify-between items-center p-6'>
              <img src={LogoPizzas} alt="" width={200}/>
              <Dialog.Close>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="black">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </Dialog.Close>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-8 auto-rows-[300px] mx-auto mb-12'>
              <CardProduto
                image="https://www.incrivel.com/_next/image/?url=https%3A%2F%2Fincrivel-prd.adtsys.com.br%2Fwp-content%2Fuploads%2F2022%2F11%2Fpizza_frango.png&w=1920&q=75"
                title="Frango com catupiry"
                desc="Frango desfiado, catupiry, molho de tomate"
                price="R$ 48,00"
              />
              <CardProduto
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgpq2XwycfT3lGx_YRWquFYLrH9mNdFS4pGkzuhziIA&s"
                title="Calabresa"
                desc="Calabresa, mussarela, molho de tomate"
                price="R$ 43,00"
              />
              <CardProduto
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDxvAyKlAjwNizb7FizFSKgLRD7ZcTqCzah0MNn9dYHw&s"
                title="Peruana"
                desc="Azeitona preta, ovo, palmito, cebola, orégano, calabresa"
                price="R$ 10,00"
              />
            </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
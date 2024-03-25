import * as Dialog from '@radix-ui/react-dialog';

import LogoBebidas from '../assets/logoBebidas.png'
import { CardProduto } from './cardProduto';

export function Bebidas(){
  return(
    <Dialog.Root>
      <Dialog.Trigger className='bg-red-600/90 w-[225px] h-[200px] rounded-md shadow-xl flex flex-col items-center justify-center gap-3 hover:bg-red-500 transition-all duration-700'>
        <svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="70" fill='white'>
          <path fill='white' d="M240-120v-80h200v-200L120-760v-80h720v80L520-400v200h200v80H240Zm58-560h364l72-80H226l72 80Zm182 204 111-124H369l111 124Zm0 0Z"/>
        </svg>
        <p className='text-white font-medium text-lg'>Bebidas</p>
      </Dialog.Trigger>
      <Dialog.Portal>
          <Dialog.Content className='w-screen h-screen absolute bg-white inset-0 transition-all duration-700 overflow-x-hidden px-auto flex flex-col'>
            <div id='header-bebidas' className='flex justify-between items-center p-6'>
              <img src={LogoBebidas} alt="" width={200}/>
              <Dialog.Close>
                <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="50" fill="black">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </Dialog.Close>
            </div>
            <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-8 auto-rows-[300px] mx-auto mb-12'>
              <CardProduto
                image="https://mercado.carrefour.com.br/_next/image?url=https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F118271106%2Frefrigerante-coca-cola-garrafa-2-l-1.jpg%3Fv%3D638217385053270000&w=384&q=75"
                title="Coca Cola"
                desc="Coca-cola 2L"
                priceP='R$ 35,00'
                priceM='R$ 35,00'
                priceG='R$ 35,00'
              />
              <CardProduto
                image="https://mercado.carrefour.com.br/_next/image?url=https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F106437032%2Frefrigerante-guarana-antarctica-garrafa-2l-1.jpg%3Fv%3D638144885863600000&w=384&q=75"
                title="Guarána"
                desc="Guarána 2L"
                priceP='R$ 35,00'
                priceM='R$ 35,00'
                priceG='R$ 35,00'
              />
              <CardProduto
                image="https://mercado.carrefour.com.br/_next/image?url=https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F67855482%2F5473969_1.jpg%3Fv%3D637945340966800000&w=384&q=75"
                title="Sprite"
                desc="Sprite 2L"
                priceP='R$ 35,00'
                priceM='R$ 35,00'
                priceG='R$ 35,00'
              />
              <CardProduto
                image="https://mercado.carrefour.com.br/_next/image?url=https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F112153423%2FSuco-Fresh-De-Uva-Del-Valle-15l.jpg%3Fv%3D638191627021800000&w=384&q=75"
                title="Del Valle Uva"
                desc="Del Valle 1,5L"
                priceP='R$ 35,00'
                priceM='R$ 35,00'
                priceG='R$ 35,00'
              />
              <CardProduto
                image="https://mercado.carrefour.com.br/_next/image?url=https%3A%2F%2Fcarrefourbrfood.vtexassets.com%2Farquivos%2Fids%2F112156382%2FSuco-De-Laranja-Fresh-Del-Valle-15l.jpg%3Fv%3D638191643808630000&w=384&q=75"
                title="Del Valle Laranja"
                desc="Del Valle 1,5L"
                priceP='R$ 35,00'
                priceM='R$ 35,00'
                priceG='R$ 35,00'
              />
            </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
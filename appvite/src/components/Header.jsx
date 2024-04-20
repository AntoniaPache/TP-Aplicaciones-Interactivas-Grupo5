import React from 'react'


export default function Header() {
    return (
      <header>
        <nav className="mx-auto w-full flex py-4">
          <div>
            <a href="#" className="flex items-center text-gray-800">
              <img src="src/assets/logo.svg" alt="Logo" class="h-5"/>
            </a>
          </div>
          <div className='justify-left self-start'>
            <ul className="flex space-x-4">
              <li><a href="#" class="text-gray-800 hover:text-gray-600">Inicio</a></li>
              <li><a href="#" class="text-gray-800 hover:text-gray-600">Acerca</a></li>
              <li><a href="#" class="text-gray-800 hover:text-gray-600">Servicios</a></li>
              <li><a href="#" class="text-gray-800 hover:text-gray-600">Contacto</a></li>
            </ul>
          </div>
        </nav>
        <div>
          <p>Hola brpo</p>
        </div>
      </header> 
    )
}



export const Frame = () => {
  return (
    <div className="relative w-full">
      <div className="absolute ">
        <img className="w-60 mt-[22px] ml-2" alt="Vector" src='./src/assets/Logo.svg' />
      </div>
      <div className="absolute w-[492px] h-[36px] top-[24px] left-[293px]">
        <div className="absolute top-[2px] left-0 [font-family:'Poppins-Italic',Helvetica] font-normal italic text-black text-[22.7px] tracking-[0] leading-[normal]">
          HOME
        </div>
        <div className="absolute top-px left-[80px] [font-family:'Poppins-Italic',Helvetica] font-normal italic text-black text-[22.7px] tracking-[0] leading-[normal]">
          HOMBRE
        </div>
        <div className="absolute top-px left-[186px] [font-family:'Poppins-Italic',Helvetica] font-normal italic text-black text-[22.7px] tracking-[0] leading-[normal]">
          MUJER
        </div>
        <div className="absolute top-0 left-[273px] [font-family:'Poppins-Italic',Helvetica] font-normal italic text-black text-[22.7px] tracking-[0] leading-[normal]">
          ACCESORIOS
        </div>
        <div className="absolute top-px left-[431px] [font-family:'Poppins-Italic',Helvetica] font-normal italic text-black text-[22.7px] tracking-[0] leading-[normal]">
          SALE
        </div>
      </div>
      <div className="absolute w-[176px] h-[30px] top-[27px] left-[980px]">
        <div className="relative w-[174px] h-[30px]">
          <div className="absolute top-0 left-0 w-[174px] h-[30px]">
            <img className="absolute w-[174px] h-px top-[29px] left-0 object-cover" alt="Line" src="line-1.svg" />
            <div className="absolute top-0 left-0 [font-family:'Poppins-ThinItalic',Helvetica] font-thin italic text-black text-[20px] tracking-[0] leading-[normal]">
              Buscar
            </div>
          </div>
          <img className="absolute w-[24px] h-[24px] top-[3px] left-[150px]" alt="Mdi search" src="mdi-search.svg" />
        </div>
      </div>
      <img
        className="absolute w-[28px] h-[28px] top-[28px] left-[1166px]"
        alt="Ph user light"
        src="ph-user-light.svg"
      />
      <img
        className="absolute w-[24px] h-[24px] top-[30px] left-[1203px]"
        alt="Mdi cart outline"
        src="mdi-cart-outline.svg"
      />
    </div>
  );
};

import React from 'react'
import { Link} from 'react-router-dom'
import Logo from './Logo'
import SearchBar from './SearchBar' 
import { buttonVariants } from "@/components/ui/button"


function NavBarVendedor() {
    return (
            <>  
            <nav className="mx-4 relative flex flex-wrap space-x-8 py-4">
                <div>
                    <Logo/>
                </div>
                <div className='flex space-x-5 items-center '>
                    <div className=''>
                        <h1>Gestor de productos</h1>
                    </div>
                    <div className=''>
                        <Link to = {"vendedor/publicar"} className={buttonVariants({ variant: "outline" })}>Publicar</Link>
                    </div>
                </div>

                <div className='absolute flex space-x-2 right-4 top-4'>
                    <SearchBar/>
                    <div>
                        <img src="src/assets/ph_user-light.svg" alt="User" className="w-6 h-6"/>
                    </div>
                    <div>
                        <img src="src/assets/mdi_cart-outline.svg" alt="Cart" className="w-6 h-6"/>
                    </div>
                </div>
            </nav>
            </>

      );
}

export default NavBarVendedor
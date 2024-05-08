import React from 'react'
import { Link} from 'react-router-dom'
import Logo from './Logo'
import SearchBar from './SearchBar' 
import { buttonVariants } from "@/components/ui/button"
import UserButton from './userButton'


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
                <div className='absolute flex space-x-10 right-4 top-4'>
                    <SearchBar/>
                    <UserButton/>
                </div>
            </nav>
            </>

      );
}

export default NavBarVendedor
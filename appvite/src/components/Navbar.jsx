import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import UserButton from "./userButton";
import CartButton from "./cartButton";

export default function Navbar() {
    return (
        <nav className="mx-4  relative flex flex-wrap space-x-8 py-4">
        <div>
          <Logo/>
        </div>
        <div className=''>
          <ul className="flex space-x-4 font-normal text-xl">
            <li><NavLink to="/" exact className="text-gray-800 hover:text-gray-600">HOME</NavLink></li>
            <li><NavLink to="/hombre" exact className="text-gray-800 hover:text-gray-600">HOMBRE</NavLink></li>
            <li><NavLink to="/mujer" exact className="text-gray-800 hover:text-gray-600">MUJER</NavLink></li>
            <li><NavLink to="/unisex" exact className="text-gray-800 hover:text-gray-600">UNISEX</NavLink></li>
            <li><NavLink to="/sale" exact className="text-gray-800 hover:text-gray-600">SALE</NavLink></li>
          </ul>
        </div>
        <div className='absolute flex space-x-2 right-4 top-4'>
          
          <UserButton/>
          <div>
            <CartButton/>
          </div>
        </div>
      </nav>
    );
}
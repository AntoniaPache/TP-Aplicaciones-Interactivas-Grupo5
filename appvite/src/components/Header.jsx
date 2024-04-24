
import Navbar from './Navbar'
import NavBarVendedor from './NavbarVendedor'
import { useLocation } from 'react-router-dom';

export default function Header( {vendedor}) {
  const location = useLocation();
  const isVendedor = location.pathname.startsWith('/vendedor');
    return (
      <header className='italic'>
        { !isVendedor ? <Navbar/> : <NavBarVendedor/>}
      </header> 
    )
}




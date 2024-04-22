import { NavLink } from 'react-router-dom';
export default function Logo() {
    return (
        <>
          <NavLink to='/' exact>
            <img src={"src/assets/logo.svg"} className='h-5' alt="Logo"/>
          </NavLink>
        </>
    )
}
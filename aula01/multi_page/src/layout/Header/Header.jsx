import { NavLink } from "react-router";

const Header = () => {
    return (
        <div>
            <nav className='flex gap-5'>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/Sobre" end>
                    Sobre
                </NavLink>
                <NavLink to="/blog" end>
                    Blog
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
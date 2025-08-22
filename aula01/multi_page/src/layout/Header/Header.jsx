import { NavLink } from "react-router";

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/Sobre" end>
                    Sobre
                </NavLink>
                
            </nav>
        </div>
    )
}

export default Header
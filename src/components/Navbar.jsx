import { Link, NavLink } from "react-router-dom"


function Navbar() {
    return (<>
        <ul>
            <li > <NavLink to={'/Home'}>Home</NavLink></li>
            <li > <NavLink to={'/Trip-List'}>Lista Dei Viaggi </NavLink></li>
            <li> <NavLink to={'/Preferiti'}>Preferiti</NavLink></li>
            <li > <NavLink to={'/Comparatore'}>Comparatore</NavLink></li>
        </ul>
    </>)
}

export default Navbar
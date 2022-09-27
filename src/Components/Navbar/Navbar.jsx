import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineStars } from "react-icons/md"
const Navbar = () => {
    return <header className='headerNav'>
        <div className="mycontainer">
            <nav>
                <div className="nav-navigation d-flex align-items-center">
                    <Link to={'/'} className={"navbarBrand"}><MdOutlineStars /> <strong>Game store</strong> </Link>
                    <ul className='d-flex justify-content-between mt-3'>
                        <li>
                            <Link to={"/games"} >Games</Link>
                        </li>
                        <li>
                            <Link to={"/comunity"} >Comunity</Link>
                        </li>
                        <li>
                            <Link to={"/about"} >About</Link>
                        </li>
                        <li>
                            <Link to={"/support"} >Support</Link>
                        </li>
                    </ul>
                </div>
                <Link to={"/sign-in"}>Sign-in</Link>
            </nav>
        </div>
    </header>

}

export default Navbar
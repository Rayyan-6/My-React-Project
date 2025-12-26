import { Link } from 'react-router-dom'
import '../App.css'

function NavBar(){
    return(
        <div>
            <nav className="nav-bar">
                <ul className='nav-bar-list'>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About</Link></li>
                    <li><Link to='/contactus' >Contact Us</Link></li>
                    <li><Link to='/blogs' >Blogs</Link></li>
                    <li><Link to='/dicegame' >Dice Game</Link></li>
                </ul>
            </nav>
        </div>
    )
    
}

export default NavBar
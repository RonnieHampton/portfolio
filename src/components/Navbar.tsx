import Navlink from './Navlink.tsx'
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav>
                <Navlink desc="Home" path="/" />
                <Navlink desc="About" path="/about" />
                <Navlink desc="Projects" path="/projects" />
                <Navlink desc="Contact" path="/contact" />
            </nav>
        </header>
    )
}

export default Navbar
import Navlink from './Navlink.tsx'

function Navbar() {
    return (
        <nav>
            <Navlink target="Home" path="/" />
            <Navlink target="About" path="/about" />
            <Navlink target="Projects" path="/projects" />
            <Navlink target="Contact" path="/contact" />
        </nav>
    )
}

export default Navbar
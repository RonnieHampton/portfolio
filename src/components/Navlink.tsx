import { Link } from 'react-router-dom'

type NavlinkProps = {
  desc: string
  path: string
}

function Navlink({ desc, path }: NavlinkProps) {
    return <Link to={path}>{desc}</Link>
}

export default Navlink
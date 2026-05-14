import { Link } from 'react-router-dom'

type NavlinkProps = {
  target: string
  path: string
}

function Navlink({ target, path }: NavlinkProps) {
    return <Link to={path}>{target}</Link>
}

export default Navlink
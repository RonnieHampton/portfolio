import Content from '../components/Content'
import './Home.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <Content>
        <section className="hero">
            <h1 className="hero-title">
            Hi, I'm Ronnie Hampton.
            </h1>

            <p className="hero-description">
            Software developer focused on building clean,
            responsive, and user-friendly web applications.
            </p>
            <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                    View Projects
                </Link>

                <Link to="/about" className="btn btn-secondary">
                    Learn More
                </Link>
            </div>
        </section>
    </Content>
  )
}

export default Home

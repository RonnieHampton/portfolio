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
            <section className="skills-section">
                <h2>Skills & Technologies</h2>

                <div className="skills-grid">
                    <article className="skill-category">
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    </article>

                    <article className="skill-category">
                    <h3>Backend</h3>
                    <ul>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                    </ul>
                    </article>

                    <article className="skill-category">
                    <h3>Tools & Others</h3>
                    <ul>
                        <li>Git</li>
                        <li>Figma</li>
                    </ul>
                    </article>
                </div>
                </section>
                <section className="projects-section">
                <h2>Featured Projects</h2>

                <div className="projects-grid">TBA</div>
                </section>
        </section>
    </Content>
  )
}

export default Home

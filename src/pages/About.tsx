import Content from '../components/Content'
import './About.css'

function About() {
  return (
    <Content>
      <section className="about-page">
        <div className="about-card">
          <h1>About Me</h1>
          <p>
            I'm a software developer with a background in computer science and a focus
            on building clean, responsive web applications. I enjoy working with React,
            TypeScript, and thoughtful UI design.
          </p>
          <p>
            I'm currently sharpening my frontend skills, building projects, and
            expanding into backend development with Node, Express and PostgreSQL.
          </p>
        </div>
      </section>
    </Content>
  )
}

export default About

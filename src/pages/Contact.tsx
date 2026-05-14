import Content from '../components/Content'
import './Contact.css'

function Contact() {
  return (
    <Content>
      <section className="contact-page">
        <div className="contact-card">
          <h1>Contact</h1>

          <p>
            Feel free to reach out regarding opportunities, collaborations, or
            general questions.
          </p>

          <div className="contact-links">
            <a href="mailto:ronniehampton051@gmail.com">
              ronniehampton051@gmail.com
            </a>

            <a
              href="https://github.com/RonnieHampton"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ronnie-hampton/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </Content>
  )
}

export default Contact

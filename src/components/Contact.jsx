export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content fade-in">
        <h3>Let's Connect!</h3>
        <p>
          I am currently <strong>Open for Opportunities</strong> as a Backend
          Developer, Fullstack Developer, and Machine Learning enthusiast.
          <br />
          Have a project in mind or want to discuss a job offer? Let's create
          something amazing together.
        </p>

        <div className="contact-cards">
          <a
            href="mailto:ahmadzainulmufid12@email.com"
            className="glass-card contact-card"
          >
            <div className="icon-box">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info">
              <h4>Email Me</h4>
              <span>ahmadzainulmufid12@email.com</span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ahmadzainulmufid/"
            target="_blank"
            rel="noreferrer"
            className="glass-card contact-card"
          >
            <div className="icon-box">
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="info">
              <h4>LinkedIn</h4>
              <span>Let's Connect</span>
            </div>
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/ahmadzainulmufid"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ahmadzainulmfd_/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/6282334064668"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <footer className="footer-copyright">
        <p>
          Successful people are not those who never fail, but those who never
          give up.
        </p>
      </footer>
    </section>
  );
}

export default function About() {
  return (
    <div className="about">
      <h3>About Me</h3>

      <div className="about-container">
        <div className="image-content">
          <div className="img-wrapper">
            <img src="/Foto Bebas.jpg" alt="Zainul Profile" />
          </div>
        </div>

        <div className="text-content">
          <h4>My Journey & Interests</h4>
          <p>
            I am an Informatics Engineering student with a deep curiosity about
            how technology solves real-world problems. While I have a strong
            foundation in <strong>Web & Mobile Development</strong>, my true
            passion lies in exploring <strong>Artificial Intelligence</strong>.
          </p>
          <p>
            Currently, I am focusing on integrating{" "}
            <strong>Machine Learning</strong> and
            <strong> Natural Language Processing (NLP)</strong> into practical
            applications. I enjoy the challenge of making data meaningful and
            building systems that are not only functional but also intelligent.
          </p>

          <a
            href="/CV_Ahmad Zainul Mufid (Rev1).pdf"
            target="_blank"
            className="btn-cv"
          >
            <i className="fas fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

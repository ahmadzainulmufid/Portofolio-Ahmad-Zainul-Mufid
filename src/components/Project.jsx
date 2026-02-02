import { useState } from "react";
import { projects } from "./data/ProjectItems";
import { certificates } from "./data/CertificateItems";

export default function Project() {
  const [activateTab, setActivateTab] = useState("project");

  return (
    <div className="project">
      <h3>My Projects</h3>

      <div className="tab-buttons">
        <button
          className={activateTab === "project" ? "active" : ""}
          onClick={() => setActivateTab("project")}
        >
          Project
        </button>
        <button
          className={activateTab === "certificate" ? "active" : ""}
          onClick={() => setActivateTab("certificate")}
        >
          Certificate
        </button>
      </div>

      <div className="content-container">
        {activateTab === "project" ? (
          <div className="grid-container fade-in">
            {projects.map((item, index) => (
              <div className="glass-card project-card" key={index}>
                <div className="card-img">
                  <span
                    className={`category-badge ${item.category.replace(/\s+/g, "-").toLowerCase()}`}
                  >
                    {item.category}
                  </span>
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200";
                    }}
                  />
                </div>
                <div className="card-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <div className="tech-stack">
                    {item.tech.map((t, i) => (
                      <span key={i}>{t}</span>
                    ))}
                  </div>
                  <div className="card-actions">
                    {item.github && (
                      <a
                        href={item.github}
                        className="btn-action"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    )}
                    {item.demo && (
                      <a
                        href={item.demo}
                        className="btn-action"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="certificate-grid fade-in">
            {certificates.map((item, index) => (
              <div className="cert-card" key={index}>
                <div className="cert-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200?text=No+Image";
                    }}
                  />
                </div>
                <div className="cert-content">
                  <h4>{item.title}</h4>
                  <p>
                    {item.issuer} • {item.date}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="cert-btn"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

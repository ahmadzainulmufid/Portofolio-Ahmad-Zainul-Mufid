import { useState } from "react";
import { internships } from "./data/InternshipItems";
import { organizations } from "./data/OrganizationItems";

export default function Experience() {
  const [activateTab, setActivateTab] = useState("internship");

  return (
    <div className="experience">
      <h3>My Experience</h3>

      <div className="tab-buttons">
        <button
          className={activateTab === "internship" ? "active" : ""}
          onClick={() => setActivateTab("internship")}
        >
          Internship
        </button>
        <button
          className={activateTab === "organization" ? "active" : ""}
          onClick={() => setActivateTab("organization")}
        >
          Organization
        </button>
      </div>

      <div className="content-container">
        {activateTab === "internship" && (
          <div className="experience-list fade-in">
            {internships.map((item, index) => (
              <div className="glass-card experience-card" key={index}>
                <div className="exp-header">
                  <div className="exp-role">
                    <h4>{item.role}</h4>
                    <span className="exp-company">@ {item.company}</span>
                  </div>
                  <span className="exp-date">{item.date}</span>
                </div>
                <p className="exp-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activateTab === "organization" && (
          <div className="experience-list fade-in">
            {organizations.map((item, index) => (
              <div className="glass-card experience-card" key={index}>
                <div className="exp-header">
                  <div className="exp-role">
                    <h4>{item.role}</h4>
                    <span className="exp-company">@ {item.company}</span>
                  </div>
                  <span className="exp-date">{item.date}</span>
                </div>
                <p className="exp-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

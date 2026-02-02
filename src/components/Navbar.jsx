import { useState, useEffect } from "react";
import { NavItems } from "./data/NavItems";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NavItems.map((item) => {
        const id = item.url.replace("#", "");
        return document.getElementById(id);
      });

      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="NavbarItems">
      <h3 className="logo">Portofolio</h3>
      <div className="Hamburger-Cross-Icons" onClick={handleClick}>
        <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={open ? "MenuItems active" : "MenuItems"}>
        {NavItems.map((item, index) => {
          const isActive = activeSection === item.url.replace("#", "");

          return (
            <li key={index}>
              <a
                href={item.url}
                className={`${item.cName} ${isActive ? "active-link" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

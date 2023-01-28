import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubMenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  // const { pageName, links } = page;
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { centerOfBtn, bottom } = location;
    submenu.style.left = `${centerOfBtn}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length === 4) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside
      className={`${isSubMenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link) => {
          const { label, icon, url } = link;
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;

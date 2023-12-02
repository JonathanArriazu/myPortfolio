import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { myProjects } from "./data/myProjects";
import { useTranslation } from "react-i18next";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [array, setArray] = useState(myProjects);

  const {t} = useTranslation();

  const filterData = (filter) => {
    setCurrentActive(filter);

    if (filter === "all") {
      return setArray(myProjects);
    }

    const selectedItem = myProjects.filter((item) =>
      item.technologies.includes(filter)
    );

    setArray(selectedItem);
  };

  return (
    <div id="projects" className="main">
      <h1  className="projects-title">{t('projects')}</h1>
      <main className="flex">
        <section className="flex left-section">
          <button
            onClick={() => {
              filterData("all");
            }}
            className={currentActive === "all" ? "active" : null}
          >
            {t('all-projects')}
          </button>

          <button
            onClick={() => {
              filterData("html-css");
            }}
            className={currentActive === "html-css" ? "active" : null}
          >
            HTML && CSS
          </button>

          <button
            onClick={() => {
              filterData("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JavaScript
          </button>

          <button
            onClick={() => {
              filterData("react");
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React && MUI
          </button>

          <button
            onClick={() => {
              filterData("node-express");
            }}
            className={currentActive === "node-express" ? "active" : null}
          >
            Node && Express
          </button>
        </section>

        <section className="flex right-section">
          {array.map((item) => {
            return (
              <article key={item.id} className="card">
                <img src={item.imgPath} alt="" />

                <div className="box">
                  <h3 className="title">{item.projectTitle}</h3>
                  <p className="sub-title">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem nesciunt qui deleniti cum illum harum.{" "}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <Link className="flex link" to="">
                      more
                      <span className="icon-arrow-right"></span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Main;

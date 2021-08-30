import React from 'react';

import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="container">
        <h2 className="section-title">
          О проекте
        </h2>

        <ul className="about-project__text-wrap">
          <li className="about-project__text-item">
            <h3 className="about-project__text-subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text-paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </li>
          <li className="about-project__text-item">
            <h3 className="about-project__text-subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text-paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
              чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className="about-project__duration-wrap">
          <li className="about-project__duration-item about-project__duration-item_type_back-end">
            <p className="about-project__duration-time about-project__duration-time_type_back-end">
              1 неделя
            </p>
            <p className="about-project__duration-dev">
              Back-end
            </p>
          </li>
          <li className="about-project__duration-item about-project__duration-item_type_front-end">
            <p className="about-project__duration-time about-project__duration-time_type_front-end">
              4 недели
            </p>
            <p className="about-project__duration-dev">
              Front-end
            </p>
          </li>
        </ul>

      </div>
    </section>
  );
}

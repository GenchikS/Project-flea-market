import {NavLink, Outlet } from "react-router-dom";
import css from "./HomePages.module.css";

import auto from "../../image/car.png";
import work from "../../image/work.png";
import housing from "../../image/housing.png";
import services from "../../image/services.png";
import animals from "../../image/animals.png";
import differents from "../../image/differents.png";
import gifts from "../../image/gifts.png";
import { AppBar } from "../../components/AppBar/AppBar.jsx";

export const HomePages = () => {
    return (
      <div className={css.containerAll}>
        <AppBar />
        <div className={css.captersSvc}>
          <h4 className={css.titleHomePage}>
            Барахолка на <span className={css.spanS}>s</span>
            <span className={css.spanA}>a</span>
            <span className={css.spanV}>V</span>
            <span className={css.spanIn}>ynt</span>
            <span className={css.spanC}>s</span>
            <span className={css.spanI}>i </span>:
          </h4>
          <ul className={css.listAnnouncement}>
            <li className={css.titleList}>
              <NavLink to="/announcement/auto" className={css.listTitle}>
                <img src={auto} alt="auto" className={css.img} />
                Авто
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/work" className={css.listTitle}>
                <img src={work} alt="робота" className={css.img} />
                Робота
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/housing" className={css.listTitle}>
                <img src={housing} alt="нерухомість" className={css.img} />
                Нерухомість
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/services" className={css.listTitle}>
                <img src={services} alt="послуги" className={css.img} />
                Послуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/animals" className={css.listTitle}>
                <img src={animals} alt="тварини" className={css.img} />
                Тварини
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/differents" className={css.listTitle}>
                <img src={differents} alt="різне" className={css.img} />
                Різне
              </NavLink>
            </li>
            <li>
              <NavLink to="/announcement/gifts" className={css.listTitle}>
                <img src={gifts} alt="дарую" className={css.img} />
                Дарую
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
}
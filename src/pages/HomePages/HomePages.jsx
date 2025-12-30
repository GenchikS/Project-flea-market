import {NavLink } from "react-router-dom";
import css from "./HomePages.module.css";
import auto from "../../image/car.png";
import work from "../../image/work.png";
import housing from "../../image/housing.png";
import technics from "../../image/technics.png";
import garden from "../../image/garden.png"
import services from "../../image/services.png";
import animals from "../../image/animals.png";
import differents from "../../image/differents.png";
import gifts from "../../image/gifts.png";
import list from "../../image/list.png";


// import banerOne from "../../imageBaner/banerOne.jpg"

export const HomePages = () => {
  // console.log(`isLogin HomePages`, isLogin);
  return (
    <div className={css.containerAll}>
      <div className={css.captersSvc}>
        <h4 className={css.titleHomePage}>
          Барахолка на <span className={css.spanS}>s</span>
          <span className={css.spanA}>a</span>
          <span className={css.spanV}>V</span>
          <span className={css.spanIn}>ynt</span>
          <span className={css.spanC}>s</span>
          <span className={css.spanI}>i </span>:
        </h4>
        <ul className={css.containerAnnouncement}>
          <li>
            <ul className={css.containerListAnnouncement}>
              <li className={css.titleList}>
                <NavLink to="/announcement/auto" className={css.listTitle}>
                  <img src={auto} alt="авто" className={css.img} />
                  Авто
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcement/work" className={css.listTitle}>
                  <img src={work} alt="робота" className={css.img} />
                  Робота
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul className={css.containerListAnnouncement}>
              <li>
                <NavLink to="/announcement/housing" className={css.listTitle}>
                  <img src={housing} alt="нерухомість" className={css.img} />
                  Нерухомість
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcement/garden" className={css.listTitle}>
                  <img src={garden} alt="сад та город" className={css.img} />
                  Сад та город
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul className={css.containerListAnnouncement}>
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
            </ul>
          </li>
          <li>
            <ul className={css.containerListAnnouncement}>
              <li>
                <NavLink
                  to="/announcement/differents"
                  className={css.listTitle}
                >
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
          </li>
          <li>
            <ul className={css.containerListAnnouncement}>
              <li>
                <NavLink to="/announcement/housing" className={css.listTitle}>
                  <img src={technics} alt="нерухомість" className={css.img} />
                  Техніка
                </NavLink>
              </li>
              <li>
                <NavLink to="/announcement/housing" className={css.listTitle}>
                  <img src={list} alt="нерухомість" className={css.img} />
                  Всі оголошення
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/* <ul className={css.containerSection}>
        <li>
          <div className={css.containerBaner}>
            <img src={banerOne} className={css.banerImage} />
            <p className={css.textBanerOneTitle}>Віталій</p>
            <p className={css.textBanerOneText}>т. 050-632-55-95</p>
          </div>
        </li>

        <li>
          <div className={css.containerBaner}>
            <img src={banerOne} className={css.banerImage} />
            <p className={css.textBanerOneTitle}>Віталій</p>
            <p className={css.textBanerOneText}>т. 050-632-55-95</p>
          </div>
        </li>

        <li>
          <div className={css.containerBaner}>
            <img src={banerOne} className={css.banerImage} />
            <p className={css.textBanerOneTitle}>Віталій</p>
            <p className={css.textBanerOneText}>т. 050-632-55-95</p>
            <p className={css.taxtBanerTwoText}>+ причіп</p>
          </div>
        </li>

        <li>
          <div className={css.containerBaner}>
            <img src={banerOne} className={css.banerImage} />
            <p className={css.textBanerOneTitle}>Віталій</p>
            <p className={css.textBanerOneText}>т. 050-632-55-95</p>
            <p className={css.taxtBanerTwoText}>+причіп</p>
          </div>
        </li>
      </ul> */}
    </div>
  );
};
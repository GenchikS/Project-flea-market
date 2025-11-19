import { useId, useState } from "react";
import css from "./AnnouncementFilterChapter.module.css";
import CategoryAuto from "../../FormAnnouncementData/SelectCategory/CategoryAuto/CategoryAuto.jsx";
import CategoryWork from "../../FormAnnouncementData/SelectCategory/CategoryWork/CategoryWork.jsx";
import CategoryHousing from "../../FormAnnouncementData/SelectCategory/CategoryHousing/CategoryHousing.jsx";
import CategoryServices from "../../FormAnnouncementData/SelectCategory/CategoryServices/CategoryServices.jsx";
import CategoryAnimals from "../../FormAnnouncementData/SelectCategory/CategoryAnimals/CategoryAnimals.jsx";
import CategoryDifferents from "../../FormAnnouncementData/SelectCategory/CategoryDifferents/CategoryDifferents.jsx";
import CategoryGifts from "../../FormAnnouncementData/SelectCategory/CategoryGifts/CategoryGifts.jsx";
import { ButtonUserDate } from "../../../Button/ButtonUserDate.jsx";
import { fetchAnnouncementFilterChapter } from "../../../../api/articlesAnnouncements-api.js";

export default function AnnouncementFilterChapter({ chapter, setChapter, setItems }) {
  const selectCarterId = useId();
  const [category, setCategory] = useState("");
  const [purchaseSale, setPurchaseSale] = useState("");
  const [sourse, setSoursce] = useState(false);

  const handleChange = (evt) => {
    // console.log(`evt`, evt.target.value);
    // setSoursce(true);
    setChapter(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(`chapter`, chapter);
    // console.log(`category`, category);
    // console.log(`purchaseSale`, purchaseSale);
    const response = await fetchAnnouncementFilterChapter({
      chapter: chapter,
      category: category,
      purchaseSale: purchaseSale,
    });
    setItems(response);
    // console.log(`response`, response);

    setPurchaseSale("");
    setCategory("");
    setChapter("");
    document.formAnnouncement.reset();
  };
  return (
    <div className={css.containerChapter}>
      <form
        className={css.listAddAnnouncement}
        name="formAnnouncement"
        type="submit"
        onSubmit={handleSubmit}
      >
        <label className={css.label} htmlFor={selectCarterId}>
          choose chapter
        </label>
        <select
          className={css.selectChapter}
          id={selectCarterId}
          name={chapter}
          onChange={handleChange}
        >
          <option className={css.option} value="">
            - - -
          </option>
          <option className={css.option} value="auto">
            auto
          </option>
          <option className={css.option} value="work">
            work
          </option>
          <option className={css.option} value="housing">
            housing
          </option>
          <option className={css.option} value="services">
            services
          </option>
          <option className={css.option} value="animals">
            animals
          </option>
          <option className={css.option} value="differents">
            differents
          </option>
          <option className={css.option} value="gifts">
            gifts
          </option>
        </select>
        {chapter === "auto" && (
          <CategoryAuto
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            sourse={sourse}
          />
        )}
        {chapter === "work" && (
          <CategoryWork setCategory={setCategory} category={category} />
        )}
        {chapter === "housing" && (
          <CategoryHousing
            set={{ setCategory, setPurchaseSale }}
            category={category}
            purchaseSale={purchaseSale}
            sourse={sourse}
          />
        )}
        {chapter === "services" && (
          <CategoryServices setCategory={setCategory} category={category} />
        )}
        {chapter === "animals" && (
          <CategoryAnimals setCategory={setCategory} category={category} />
        )}
        {chapter === "differents" && (
          <CategoryDifferents
            set={{ setCategory, setPurchaseSale }}
            // category={category}
            purchaseSale={purchaseSale}
          />
        )}
        {chapter === "gifts" && (
          <CategoryGifts
            set={{ setCategory, setPurchaseSale }}
            // category={category}
            purchaseSale={purchaseSale}
          />
        )}
        <ButtonUserDate type="submit" value="search">
          Search
        </ButtonUserDate>
      </form>
    </div>
  );
}
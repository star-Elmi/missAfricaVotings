import React from "react";
// import CompotitorsWomen from "../../assets/Compotitors.json";
import style from "./Compotitors.module.scss";
import { Compotitor } from "../Compotitor/Compotitor";
import { useSelector } from "react-redux";
// import { competitors } from "../../features/Competitor/competitorSlice";

export const Compotitors = () => {

  const { competitors } = useSelector((store) => store.competitor);
  
  return (
    <>
      <div className={style.competitors_container}>
        <div className={style.competitors_header}>
          <span>Miss Africa</span>
          <p>
            Miss Africa organization is an organization that has future plans
            of establishing a grassroots women skills training center for girls
            and women where they can be trained in livelihood skills that they
            can use the skills to earn a living as well as provide basic needs,
            confidence and self-reliance.
          </p>
        </div>

        <div className={style.competitors}>
          {competitors.map((competitor) => (
              <Compotitor key={competitor.id} competitor={competitor} />
        ))}
        </div>
      </div>
    </>
  );
};

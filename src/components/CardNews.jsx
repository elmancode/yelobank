import React from "react";
import { Link } from "react-router-dom";
import { ArrowBlue } from "../SVG/index";
import "../style/components/CardNews.scss"


const CardNews = ({title, more, date }) => {
  return (
    <div className="card_news">
    
        <Link to="AwardNews">
        <h3>{title}</h3> 
        <div className="Link_date">
        <p> {more}  <ArrowBlue /> </p>
        <span>{date}</span>
        </div>
        </Link>

    </div>
  );
};

export default CardNews;

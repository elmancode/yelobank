
import React from 'react'

import { useState } from "react";

import CardNews from "../components/CardNews";
import { newsData } from "../data";

import "../style/pages/allnews.scss"

const AllNews = () => {

  const [newsDatas, setnewsDatas] = useState(newsData);

  return (
    <div className ="allNews">

        <div className="container">
            <h1>
             Xəbərlər
            </h1>

            <div className="dataCardNews" >
            {newsDatas.map((item) => (
              <CardNews 
                key={item.id}
                title={item.title}
                more={item.more} 
                date={item.date}
              />
            ))}
          </div>

         
       

        </div>
        

    </div>
  )
}

export default AllNews
import React from "react";
import ChashPhoto from "../images/yelo_kart_cashback.jpg";
import { FiSearch } from "react-icons/fi";


const Cashback = () => {
  return (
    <div className="cashback">

        
      <div className="leftside ">
        <div className="content">
          <h3> Cashback </h3>
          <p>Pulunuz cibinizə qayıdır</p>

        </div>
      </div>
      <div className="rightside">
        <img src={ChashPhoto} alt="" />
      </div>
    

   
    </div>
  );
};

export default Cashback;

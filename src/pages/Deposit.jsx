import React from "react";
import Deposit_1 from "../images/deposit_1.webp";
import Deposit_2 from "../images/deposit_2.png";

import { Link } from "react-router-dom";

const Deposit = () => {
  return (
    <div className="deposit">
      <div className="container">
        <div className="content">
          <h1>Əmanətlər</h1>

          <p>
          Pulunuz sizin üçün işləsin
          </p>
        </div>

        <div className="yelo_sabit">
          <div className="dep_img">
            <img src={Deposit_1} alt="" />
          </div>
          <div className="y_s_desc">
            <h2>Yelo Sabit</h2>
            <p>Pulunuz sizin üçün işləsin</p>

            <div className="y_s_i">
              <div className="y_s item">
                <p>Məbləğ</p>
                <b>min. 100 AZN/USD</b>
              </div>
              <div className="y_s item">
                <p>Müddət</p>
                <b>12 / 18 / 24 ay</b>
              </div>
              <div className="y_s item">
                <p>Faizlərin ödənişi</p>
                <b>aylıq və ya müddətin sonunda</b>
              </div>
            </div>

            <div className="d_order">
              <Link to="deposit">
                <span>Əmanət Sifariş et</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="yelo_yigim">
          <div className="dep_img">
            <img src={Deposit_2} alt="" />
          </div>
          <div className="y_s_desc">
            <h2>Yelo Sabit</h2>
            <p>Pulunuz sizin üçün işləsin</p>

            <div className="y_s_i">
              <div className="y_s item">
                <p>Məbləğ</p>
                <b>100 AZN/USD</b>
              </div>
              <div className="y_s item">
                <p>Müddət</p>
                <b>12 ay</b>
              </div>
              <div className="y_s item">
                <p>Faizlərin ödənişi</p>
                <b>aylıq və ya müddətin sonunda</b>
              </div>
            </div>

            <div className="d_order">
              <Link to="deposit">
                <span>Əmanət Sifariş et</span>
              </Link>
            </div>
          </div>
        </div>

     
      </div>

    </div>
  );
};

export default Deposit;

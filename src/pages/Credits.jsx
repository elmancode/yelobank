import React from "react";
import Yelocard from "../images/yelo_card.jpg";
import IstehlakKrediti from "../images/istehlak_krediti.png"
import { Link } from "react-router-dom";

import "../style/pages/credits.scss";

const Credits = () => {
  return (
    <div className="credits">
      <div className="container">
        <div className="content">
          <h1>Kreditlər</h1>

          <p>
            Xərclərini təxirə salma, çünki dəstək üçün hər zaman Yelo Bank var.
            İndi kredit pul götürmək çox asan və sürətlidir. Sizə uyğun ən
            sərfəli bank kredit şərtləri və aşağı faizləri ilə istənilən növ
            kredit pul almaq üçün elə indi müraciət edərək, cəmi 7 dəqiqəyə bank
            krediti əldə edin!
          </p>
        </div>

        <div className="yelo_credit_card">
          <div className="y_c_img">
            <img src={Yelocard} alt="" />
          </div>
          <div className="y_c_desc">
          <h2>Yelo Kredit kartı</h2>
            <p>Yelo Kredit kartı - rahat xərcləmək üçün</p>

            <div className="y_c_i">
              <div className="y_c item">
                <p>Məbləğ</p>
                <b>300 - 10 000 AZN</b>
              </div>
              <div className="y_c item">
                <p>Güzəşt müddəti</p>
                <b>45 günədək</b>
              </div>
              <div className="y_c item">
                <p>Cashback</p>
                <b>30%-dək</b>
              </div>
            </div>

            <div className="credit">
                  <Link to="credit">
                    <span>Sifariş et</span>
                  </Link>
                </div>
          </div>
        </div>

        <div className="istehlak_credit">
          <div className="i_c_img">
            <img src={IstehlakKrediti} alt="" />
          </div>
          <div className="i_c_desc">
          <h2>İstehlak krediti</h2>
            <p>Daha yaxşı həyat üçün</p>

            <div className="i_c">
              <div className="I_c item">
                <p>Məbləğ</p>
                <b>300 - 50 000 AZN</b>
              </div>
              <div className="i_c item">
                <p>Müddət</p>
                <b>6 - 48 ay</b>
              </div>
              <div className="i_c item">
                <p>İllik faiz dərəcəsi</p>
                <b>30min. 11.7%dək</b>
              </div>
            </div>

            <div className="credit">
                  <Link to="credit">
                    <span>Sifariş et</span>
                  </Link>
                </div>
          </div>
        </div>
      

        
      </div>
    </div>
  );
};

export default Credits;

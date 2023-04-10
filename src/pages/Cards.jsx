import React from "react";
import Yelocard from "../images/yelo_card.jpg";
import Premiumcard from "../images/card-premium.png";
import { Link } from "react-router-dom";

import "../style/pages/cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="content">
          <h1>Kartlar</h1>

          <p>
            Online kart sifarişi xidməti: İndi siz evdən çıxmadan plastik kart
            sifariş edə bilərsiniz. Yelo Bankın təqdim etdiyi plastik kartlar
            ilə üstünlüklərdən yararlanmaq üçün tələsin. İstənilən yerdə
            istifadəsinin rahatlığı və üstünlükləri ilə Yelo Bank hesab kartları
            hər kəsin ürəyincə olacaq.
          </p>
        </div>

        <div className="yelo_card">
          <div className="y_c_img">
            <img src={Yelocard} alt="" />
          </div>
          <div className="y_c_desc">
            <h2>Yelo Light</h2>
            <p>
              Yelo kart rahatlıq anlayışını dəyişəcək - rahat xərcləyəcəksən,
              rahat izləyəcəksən, qazanacaqsan, endirimlər alacaqsan.
            </p>

            <div className="y_c_i">
              <div className="y_c item">
                <p>Müddət</p>
                <b>1 il / 3 il</b>
              </div>
              <div className="y_c item">
                <p>Valyuta</p>
                <b>AZN / USD / EUR</b>
              </div>
              <div className="y_c item">
                <p>Cashback</p>
                <b>30%-dək</b>
              </div>
            </div>

            <div className="card_order">
              <Link to="card">
                <span>Sifariş et</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="premium_card">
          <div className="p_c_img">
            <img src={Premiumcard} alt="" />
          </div>
          <div className="p_c_desc">
            <h2> Yelo Premium</h2>
            <p>
              Yelo kart rahatlıq anlayışını dəyişəcək - rahat xərcləyəcəksən,
              rahat izləyəcəksən, qazanacaqsan, endirimlər alacaqsan.
            </p>

            <div className="p_c_i">
              <div className="p_c item">
                <p>Müddət</p>
                <b>3 il</b>
              </div>
              <div className="p_c item">
                <p>Valyuta</p>
                <b>AZN / USD / EUR</b>
              </div>
              <div className="p_c item">
                <p>Cashback</p>
                <b>30%-dək</b>
              </div>
            </div>

            <div className="card_order">
              <Link to="card">
                <span>Sifariş et</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

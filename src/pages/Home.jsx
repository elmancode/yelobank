import "../style/pages/home.scss";
import Cover from "../images/onlayn_kredit-saytcover_1.webp";
import Gift from "../images/birthday_-_karusel_2.webp";
import Card from "../images/card.webp";
import Credit from "../images/7_deqiqe.webp";
import Flag from "../images/flag.png";
import Storykredit from "../images/storykredit.png";
import Storycard from "../images/stories-card.png";
import Yelocard from "../images/yelo_card.jpg";
import Phone from "../images/phone_app.png";
import { ArrowRight } from "../SVG/index";
import { ArrowBlue } from "../SVG/index";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper";
import { useState } from "react";

import CardNews from "../components/CardNews";
import { newsData } from "../data";

export const Home = () => {
  const [newsDatas, setnewsDatas] = useState(newsData);

  const [salary, setSalary] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  const calculateMonthlyPayment = () => {
    const interestRate = 0.1;
    const monthlyInterestRate = interestRate / 12;
    const totalLoanAmount = parseFloat(loanAmount);
    const months = parseFloat(loanTerm);
    const monthlyPayment =
      (totalLoanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -months));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="home">
      {/* section 1  */}
      <section className="introduction">
        <Swiper
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "10px",
          }}
          pagination={{
            // dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="slideitmes">
            <div className="leftside ">
              <div className="content">
                <h3>Banka gəlmədən</h3>
                <p>Tam onlayn kredit</p>
                <div className="credit">
                  <Link to="onlinecredit">
                    <span>Sifariş et</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightside">
              <img src={Cover} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slideitmes">
            <div className="leftside ">
              <div className="content">
                <h3>Ad günü hədiyyəsi </h3>
                <p>Endirilmi və komissiyasız kredit</p>

                <div className="credit">
                  <Link to="onlinecredit">
                    <span>Sifariş et</span>
                  </Link>
                </div>

                <div className="news">
                  <Link to="birthdayNews">
                    <span>Daha ətraflı</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightside">
              {" "}
              <img src={Gift} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slideitmes">
            <div className="leftside ">
              <div className="content">
                <h3>Baxışını dəyiş</h3>
              </div>
            </div>
            <div className="rightside">
              <img src={Card} alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="slideitmes">
            <div className="leftside ">
              <div className="content">
                <h3>Kredit cəmi 7 dəqiqəyə al</h3>
                <p>Onlayn sifariş et, filiala gəlmə</p>

                <div className="credit">
                  <Link to="onlinecredit">
                    <span>Sifariş et</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rightside">
              <img src={Credit} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* section 2 */}
      <section className="stories ">
        <div className="stories">
          <div className="container">
            <div className="title">
              <b>Storilər</b>
              <span>3</span>
            </div>

            <div className="story_content">
              <div className="s_itmes" style={{ backgroundColor: "#d82a34" }}>
                <Link to="storyContent">
                  <div className="desc">
                    <span className="tag">#SəninləyikTürkiyə</span>
                    <b>
                      Türkiyədə zəlzələdən zərərçəkmişlərə Yelo App-də yardım et
                    </b>
                  </div>

                  <div className="backgraound">
                    <img src={Flag} alt="" />
                  </div>
                </Link>
              </div>

              <div className="s_itmes" style={{ backgroundColor: "#0071C7" }}>
                <Link to="storyContent">
                  <div className="desc">
                    <span className="tag" style={{ color: "#0071C7" }}>
                      Kredit
                    </span>
                    <b>
                      Xərclərini təxirə salma, hər zaman dəstək üçün Yelo Bank
                      var
                    </b>
                  </div>

                  <div className="backgraound">
                    <img src={Storykredit} alt="" />
                  </div>
                </Link>
              </div>

              <div className="s_itmes" style={{ backgroundColor: "#81BD5B" }}>
                <Link to="storyContent">
                  <div className="desc">
                    <span class="tag" style={{ color: "#81BD5B" }}>
                      Yelo kart
                    </span>
                    <b>
                      Yelo Kart hər əməliyyatda rahatlıq anlayışını dəyişəcək
                    </b>
                  </div>

                  <div className="backgraound">
                    <img src={Storycard} alt="" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="card_cal_block">
        <div className="container">
          <div className="block">
            <div className="card_block">
              <div className="c_b_img">
                <img src={Yelocard} alt="" />
              </div>
              <div className="c_b_desc">
                <b class="cb_b">Yelo Light</b>
                <p class="cb_p">İstənilən ödənişlər üçün doğru seçim</p>

                <div className="re_cb">
                  <div className="r_c item">
                    <p>Qalığa gəlir</p>
                    <b>4%</b>
                  </div>
                  <div className="r_c item">
                    <p>Cashback</p>
                    <b>30%-dək</b>
                  </div>
                </div>

                <Link to="cards"> Sifariş et</Link>
              </div>
            </div>

            <div className="cal_block">
              <div className="cal_title">
                <b>Kredit kalkulyatoru</b>
                <Link to="credit">
                  <span>Daha ətraflı</span>
                  <ArrowBlue />
                </Link>
              </div>

              <div className="cal_input">
                <label className="cal_item">
                  Əmək haqqı:
                  <input
                    type="number"
                    className="range_result"
                    value={salary}
                    onChange={handleSalaryChange}
                  />
                  <span>AZN</span>
                  <input
                    type="range"
                    className="slider"
                    min={350}
                    max={15000}
                    step={1}
                  />
                </label>

                <label className="cal_item">
                  Məbləğ:
                  <input
                    type="number"
                    className="range_result"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                  />
                  <span>AZN</span>
                  <input
                    type="range"
                    className="slider"
                    min={350}
                    max={15000}
                    step={1}
                  />
                </label>

                <label className="cal_item">
                  Müddət:
                  <input
                    type="number"
                    className="range_result"
                    value={loanTerm}
                    onChange={handleLoanTermChange}
                  />
                  <span>ay</span>
                  <input
                    type="range"
                    className="slider"
                    min={350}
                    max={15000}
                    step={1}
                  />
                </label>
              </div>

              <div className="result">
                <button type="button" onClick={calculateMonthlyPayment}>
                  <h2>Hesabla</h2>
                </button>
                {monthlyPayment > 0 && (
                  <p>
                    aylıq ödəniş: <strong>{monthlyPayment}AZN</strong>
                  </p>
                )}
                <Link to="onlinecredit"> Sifariş et</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 4  */}
      <section className="app_exchange_block">
        <div className="container">
          <h2>Sizin üçün faydalı</h2>
          <div className="app_exchange">
            <div className="app">
              <div className="app_desc">
                <b>Yelo App</b>
                <p>
                  Yelo-dan yeni və parlaq mobil əlavə. Hesablarını izlə, köçürmə
                  və ödənişlərini sürətli et.
                </p>
              </div>

              <div className="app_image">
                <img src={Phone} alt="" />
              </div>
            </div>

            <div className="exchange">
              <div className="ex_title">
                <b>Valyuta məzənnələri</b>
                <select name="" id="">
                  <option value="">Nəğd</option>
                  <option value="">Nəğdsiz</option>
                </select>
              </div>

              <div className="input">
                <div className="sell">
                  <input type="text" placeholder="Satıram" />
                  <select name="" id="">
                    <option value="">AZN</option>
                    <option value="">USD</option>
                    <option value="">EUR</option>
                  </select>
                </div>

                <div className="buy">
                  <input type="text" placeholder="Alıram" />

                  <select name="" id="">
                    <option value="">AZN</option>
                    <option value="">USD</option>
                    <option value="">EUR</option>
                  </select>
                </div>
              </div>

              <div className="result">
                <div className="ex_item">
                  <h3>Valyuta</h3>
                  <p>USD</p>
                  <p>EUR</p>
                </div>
                <div className="ex_item">
                  <h3>Alış</h3>
                  <p>1.6990</p>
                  <p>1.7600</p>
                </div>
                <div className="ex_item">
                  <h3>Satış</h3>
                  <p>1.7025</p>
                  <p>1.8500</p>
                </div>
              </div>

              <p>Region filiallarında məzənnələr fərqli ola bilər</p>

              <Link className="all_exchange" to="exchage-rate">
                Bütün məzənnələr
                <HiArrowLongRight size={"2em"} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* section 5  */}
      <section className="lastNews">
        <div className="container">
          <h2>Son xəbərlər</h2>

          <div className="newsDatas">
            {newsDatas.map((item) => (
              <CardNews
                key={item.id}
                title={item.title}
                more={item.more}
                date={item.date}
              />
            ))}
          </div>

          <div className="all_news">
            <Link to="allnews">
              <p>Bütün xəbərlər</p>
              <span>
                {" "}
                <HiArrowLongRight size={"2.5em"} />{" "}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

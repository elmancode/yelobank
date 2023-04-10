import "../style/components/header.scss";
import Logo from "../images/yelobank.png"
import { LocationIcon, CallIcon} from "../SVG/index";
import { BsArrowRightSquare } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { GrMenu } from "react-icons/gr";
import { Link } from "react-router-dom";
import Button from "./Button";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [onBankingsize, setonBankingsize] = useState("11rem");
  const [internet, setInternet] = useState(true);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    window.scrollY > 10 ? setonBankingsize("3.5rem") : setonBankingsize ("11rem");
    window.scrollY > 10 ? setInternet("none") : setInternet (true);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  
  

  const [searchShow, setSearchShow] = useState(true);
  const handleClick = (e) => {
    setSearchShow((current) => !current);
  };

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header>
      <div className="header_top">
        <div className="hd_left">
          <ul>
            <li>
              <Link to="/">Fərdi</Link>
            </li>

            <li>
              <Link to="/business">Biznes</Link>
            </li>

            <li className="about">
              <Link to="/about">Bank haqqında</Link>
            </li>
          </ul>
        </div>

        <div className="hd_right">
          <ul>
            <li className="online_service">
              <Link to="/onlineservice">Onlayn Növbə</Link>
            </li>

            <li>
              <Link to="/atm-and-branchs">
                <LocationIcon />
                <span>ATM və Filiallar</span>
              </Link>
            </li>

            <li>
              <Link to="/call">
                <CallIcon />
                <span>981</span>
              </Link>
            </li>

            <li>
              <button
                onClick={handleClick}
                style={{ border: "none", background: "none" }}
              >
                <FiSearch
                  style={{ fontSize: "18px", color: "rgba(0, 0, 0, 0.5)" }}
                />
              </button>
            </li>
            <li>
              <select name="" id="">
                <option value="">AZ</option>
                <option value="">EN</option>
                <option value="">RU</option>
              </select>
            </li>
          </ul>
        </div>

        <div
          className="search_wrap"
          style={{ visibility: searchShow ? "hidden" : "visible" }}
        >
          <div className="search_self">
            <div className="container">
              <input type="text" placeholder="Axtarış" />
              <FiSearch style={{ fontSize: "25px" }} />
              <button
                onClick={handleClick}
                style={{ border: "none", background: "none" }}
              >
                <GrClose style={{ fontSize: "25px", marginLeft: "20px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header_bottom" style={{
          backgroundColor: navColor,
          transition: "all 1s",
        }}>
        <div className="container">
      <div className="bottom"
        style={{
          height: navSize, 
          transition: "all 1s",
        }}
      >
        <div className="head_left">
          <div className="logoside">
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link> 
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/credits">Kreditlər</Link>
              </li>

              <li>
                <Link to="/cards">Kartlar</Link>
              </li>

              <li>
                <Link to="/deposit">Əmanətlər</Link>
              </li>

              <li>
                <Link to="/cashback">Cashback</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="head_right">
          <div className="Letter">
            <HiOutlineMail />
          </div>

          <div className="OnBanking"
           style={{
            width: onBankingsize,  
            transition: "all 1s",
          }}>
            
            <Link to="https://ibank.yelo.az/az/login/" target="_blank" > 
              <BsArrowRightSquare/>
              <span className="internet"
              style={{ display: internet }}
              >
                İnternet Bank </span>
            </Link>
          </div>

          <div className="MenuIcon">
            <Button
              icon={menuOpen ? <GrClose /> : <GrMenu className="grmenu" />}
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </div>
      </div>
      </div>

      <div className="menu"
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
      >
        <div className="menu_toogle">
          <div className="nav1">
            <div className="nav_item">
              <ul>
                <Link to="credits">Kreditlər</Link>

                <li>
                  <Link to="consumer-loan">İstehlak krediti</Link>
                </li>
                <li>
                  <Link to="online-credit"> Onlayn kredit</Link>
                </li>
                <li>
                  <Link to="deposit-credit">Əmanət təminatlı kredit</Link>
                </li>
                <li>
                  <Link to="ipoteka-credit">İpoteka krediti</Link>
                </li>
              </ul>
            </div>
            <div className="nav_item">
              <ul>
                <Link to="cards">Kartlar</Link>

                <li>
                  <Link to="yelo-card">Yelo Light</Link>
                </li>
                <li>
                  <Link to="premiun-card"> Yelo Premium </Link>
                </li>
                <li>
                  <Link to="digital-card">Yelo Digital Card</Link>
                </li>
                <li>
                  <Link to="credit-card">Yelo Kredit kartı</Link>
                </li>
              </ul>
            </div>
            <div className="nav_item">
              <ul>
                <Link to="deposits">Əmanətlər</Link>

                <li>
                  <Link to="yelo-sabit">Yelo Sabit</Link>
                </li>
                <li>
                  <Link to="yelo-yığım"> Yelo Yığım</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="nav2">
            <div className="nav_item">
              <ul>
                <Link to="credits">Kart xidmətləri</Link>

                <li>
                  <Link to="consumer-loan"> Google Pay</Link>
                </li>
                <li>
                  <Link to="online-credit"> Onlayn PIN SET</Link>
                </li>
                <li>
                  <Link to="deposit-credit"> Cashback </Link>
                </li>
                <li>
                  <Link to="ipoteka-credit"> PIN Reset </Link>
                </li>
              </ul>
            </div>
            <div className="nav_item">
              <ul>
                <Link to="cards">Onlayn xidmətlər</Link>

                <li>
                  <Link to="yelo-card"> Online kredit sifarişi</Link>
                </li>
                <li>
                  <Link to="premiun-card"> Onlayn ödəmə </Link>
                </li>
                <li>
                  <Link to="digital-card"> Online kredit ödənişi</Link>
                </li>
                <li>
                  <Link to="credit-card"> ƏDV geri al</Link>
                </li>
                <li>
                  <Link to="credit-card"> Onlayn növbə </Link>
                </li>
              </ul>
            </div>
            <div className="nav_item">
              <ul>
                <Link to="deposits">Pul köçürmələri</Link>

                <li>
                  <Link to="yelo-sabit"> Zolotaya Korona</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </header>
  );
};

export default Header;

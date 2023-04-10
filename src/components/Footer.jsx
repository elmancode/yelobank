import React from "react";
import "../style/components/footer.scss";

import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Logo } from "../SVG/index";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <nav className="nav_footer">
            <ul>
              <h3>Fərdi</h3>
              <li>
                <Link to="credits">Kreditlər</Link>  
                </li>
              <li>
              <Link to="cards">Kartlar</Link>  
              </li>
              <li>
              <Link to="deposit">Əmanətlər</Link>  
              </li>
            
              <li>Pul köçürmələri</li>
            </ul>

            <ul>
              <h3>Biznes</h3>
              <li>Biznes Kreditlər</li>
              <li>Kartlar</li>
              <li>Biznes xidmətlər</li>
            </ul>

            <ul>
              <h3>Bank haqqında</h3>
              <li>Rəhbərlik</li>
              <li>Karyera</li>
              <li>Hesabatlar</li>
              <li>Komitələr</li>
              <li>Sənədlər</li>
              <li>
                <Link to="allnews" target="_blank">
                Xəbərlər
                </Link>
                </li>
            </ul>

            <ul>
              <h3>Onlayn xidmətlər</h3>
              <li>Online kredit sifarişi</li>
              <li>Online kredit ödənişi</li>
              <li>Onlayn ödəmə</li>
              <li>Onlayn növbə</li>
              <li>ƏDV geri al</li>
            </ul>
          </nav>

          <div className="footer_top">
            <div className="social">
              <ul>
                <li>
                  <Link to="https://www.facebook.com/yelo.az">
                    <GrFacebookOption />
                  </Link>
                </li>

                <li>
                  <Link to="https://www.instagram.com/yelobank/">
                    <AiFillInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/company/yelo-bank/">
                    <GrLinkedinOption />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/channel/UCz7siujqcwxQz3OcWqK5NLQ">
                    <AiFillYoutube />
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com/yelo_bank">
                    <AiOutlineTwitter />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="contact">
              <div className="address">
                <p>Bizi tap</p>
                <Link 
                  to="https://www.google.com/maps?q=Yelo+Bank+Ba%C5%9F+Ofis+-+20+Yanvar,+Zardabi+8,+Baku+1122&ftid=0x403087d489586865:0x300b8218eaf9a7b1&hl=en-US&gl=us&entry=gps&g_ep=CAIYAA%3D%3D&shorturl=1"
                  style={{ color: "black" }}
                  target="_blank"
                >
                  <span>Zardabi 81k, Baku, Azerbaijan</span>
                </Link>
              </div>

              <div className="call">
                <p>Əlaqə</p>
                <span> 981</span>
              </div>

              <div className="message">
                <p>Bizə yazın</p>
                <span>bank@yelo.az</span>
              </div>
            </div>
          </div>

          <div className="footer_botton">
            <div className="logo">
              <Logo />
            </div>

            <ul>
              <li>© 2023 Yelo Bank</li>
              <li>
                <Link to="https://www.e-gov.az/">E-portal</Link>
              </li>
              <li>
                <Link to="https://www.adif.az/">ADİF</Link>
              </li>
              <li>
                <Link to="https://infobank.az/">infobank.az</Link>
              </li>

              <li>
                <Link to="https://qdf.gov.az/iane-imkanlari/">
                  Qarabağ Dirçəliş Fondu
                </Link>
              </li>
              <li>
                <Link to="https://gpp.az/WebPortal/Infosite/Sc/989000/Category/8">
                  YAŞAT Fondu
                </Link>
              </li>
            </ul>

            <p>
              Site by{" "}
              <Link to="https://github.com/elmancode" target="_blank">
                Elman ASGAROV
              </Link>{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

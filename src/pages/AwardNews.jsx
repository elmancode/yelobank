import React from "react";
import { Link } from "react-router-dom";

const AwardNews = () => {
  return (
    <div className="awardNews">
      <div className="container">
        <span>Xəbərlər</span>
        <h1>Yelo Bank 5 mükafata layiq görüldü</h1>
        <span>2 Mart 2023</span>

        <div className="content">
          <p>
            Yelo Bank-ın 2022-ci il ərzində parlaq fəaliyyəti Azərbaycan Banklar
            Assosiasiyasının (ABA) diqqətindən də yayınmayıb. Bank, ABA-nın
            təşkilatçılığı ilə keçirilən ənənəvi “Bankçılıq Mükafatları - 2022”
            tədbirində 5 nominasiya üzrə qalib seçilib:
          </p>
          <br />

          <ul>
            <li>Korporativ Sosial Məsuliyyət</li>
            <li>Ən fəal təhsil dəstəkçisi</li>
            <li>Elektron bankçılıq </li>
            <li>
              Nağdsız ödənişlərin təşviqi sahəsində tədbirlərlə fərqlənən ABA
              üzvü
            </li>
            <li>Rəqəmsal ödənişlərdə təhlükəsizliyə dair maarrifləndirmə</li>
          </ul>

          <br />

          <p>
            Ötən illərdə bir çox layihələr həyata keçirən Yelo Bank gələcəkdə də
            korporativ sosial məsuliyyət, təhsil, nağdsız ödənişlərin təşviqi və
            digər istiqamətlərdə təşəbbüskar addımlarını fəal şəkildə davam
            etdirəcək.
          </p>
          <br />

          <p>
            <Link
              to="/"
              style={{ color: "#0563c1", textDecoration: "underline" }}
              target="_blank"
            >
              {" "}
              Bank xidmətləri{" "}
            </Link>{" "}
            haqqında əlavə sualınız var? O zaman 981 nömrəsinə zəng edin və ya{" "}
            <Link
              to="https://www.facebook.com/yelo.az"
              style={{ color: "#0563c1", textDecoration: "underline" }}
              target="_blank"
            >
              Facebook
            </Link>
            ,{" "}
            <Link
              to="https://www.instagram.com/yelobank/"
              style={{ color: "#0563c1", textDecoration: "underline" }}
              target="_blank"
            >
              Instagram
            </Link>{" "}
            və ya{" "}
            <Link
              to="https://api.whatsapp.com/send/?phone=994504000981"
              style={{ color: "#0563c1", textDecoration: "underline" }}
              target="_blank"
            >
              Whatsapp
            </Link>{" "}
            hesablarımıza yazın.
          </p>
          <br />

          <p>Yelo Bank – Parlaq bankçılıq!</p>
        </div>
      </div>
    </div>
  );
};

export default AwardNews;

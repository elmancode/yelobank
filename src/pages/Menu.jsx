import { Link } from "react-router-dom";
import "../components/Button";
import "../style/pages/menu.scss";

const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="menu">
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
      </div>
    </div>
  );
};

export default Menu;

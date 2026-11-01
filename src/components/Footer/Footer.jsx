import Logo from "../Logo/Logo";
import Information from "./Information";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import "./Footer.css";

const informationLinks = [
  { text: "Sobre Drip Store", link: "/about" },
  { text: "Segurança", link: "/seguranca" },
  { text: "Wishlist", link: "/wishlist" },
  { text: "Blog", link: "/blog" },
  { text: "Trabalhe conosco", link: "/trabalhe-conosco" },
  { text: "Meus Pedidos", link: "/meus-pedidos" },
];

const categoryLinks = [
  { text: "Camisetas", link: "/produtos?categoria=camisetas" },
  { text: "Calças", link: "/produtos?categoria=calcas" },
  { text: "Bonés", link: "/produtos?categoria=bones" },
  { text: "Headphones", link: "/produtos?categoria=headphones" },
  { text: "Tênis", link: "/produtos?categoria=tenis" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-about">
            <Logo variant="footer" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="footer-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <img src={facebook} alt="" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <img src={twitter} alt="" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>

          <Information title="Informação" informations={informationLinks} />

          <Information title="Categorias" informations={categoryLinks} />

          <div className="footer-contact">
            <h3>Contato</h3>

            <p>
              Av. Santos Dumont, 1510 - 1º andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>

            <p>(85) 3051-3411</p>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="footer-copyright">© 2024 Digital Store</p>
      </div>
    </footer>
  );
}

import "./styles/app.scss";
import Logo from "./logo.png";
import Devices from "./devices.png";
import About from "./about.jpg";
import Developement from "./developement.png";
import Seo from "./seo.png";
import Increase from "./increase.png";
import FormTemplate from './FormTemplate';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img className="logo" src={Logo} alt="Logo neocoding" />
        <ul>
          <li> <a href="#NEOCODING">À propos</a></li> 
          <li> <a href="#SERVICES">Services</a></li>
          <li><a href="#CONTACT">Contact</a></li>
        </ul>
      </header>
      <div className="card-container">
        {/* <div><img className="fond" src ={Fond} alt ="Fond abstrait"/></div> */}
        <div className="card">
          <div className="circle"></div>
          <div className="content">
            <h1 >
              Sites Internet, optmisation du référencement, applications web et
              web mobile
            </h1>
          </div>
          <img
            className="devicesimg"
            src={Devices}
            alt="Écran d'ordinateur, un ordinateur portable, une tablette et un smartphone "
          />
        </div>
      </div>
      {/* <div className="banner">
        <img
          className="devicesimg"
          src={Devices}
          alt="Écran d'ordinateur, un ordinateur portable, une tablette et un smartphone "
        />
        Sites Internet, optmisation du reférencement, applications web et web
        mobile
      </div> */}
      <div id="NEOCODING" className="about">
        <div className="abouttxt">
          <p >
            NEOCODING est une entreprise spécialisée dans le développement de
            sites Internet, d'applications web et web mobile. Installée dans le
            bassin rennais, elle intervient partout en France pour accroître la
            productivité et la popularité de votre entreprise.
          </p>
        </div>
        <img className="aboutimg" src={About} alt="Bureau de travail" />
      </div>

      <div id="SERVICES" className="services">
        <p>
          <br />
          <br />
          <h2 >
            Soyez présent sur Internet et attirez de nouveaux clients grâce au
            savoir-faire de NEOCODING.
          </h2>
          <br />
          <br />
          Création de sites "responsive", sites vitrines et web services.
          Installation, mise en service et référencement dans les moteurs de
          recherche (Google, Firefox, Bing, Yahoo, ...) font partie des
          nombreuses prestations que nous pouvons réaliser pour vous afin de
          mettre votre entreprise en avant.
          <div className="icone-container">
            <div className="icone-div">
              <img
                className="icone"
                src={Developement}
                alt="Ordinateur et smartphone avec des rouages"
              />
            </div>
            <div className="icone-div">
              <img
                className="icone"
                src={Increase}
                alt="Graphique avec une flèche qui monte"
              />
            </div>
            <div className="icone-div">
              <img className="icone" src={Seo} alt="SEO avec une loupe" />
            </div>
          </div>
        </p>
      </div>
      <div className="contact">
        <h2 id="CONTACT">Nous contacter</h2>
        <FormTemplate/>
      </div>
      <footer>
        Copyright © 2023 NEOCODING - Tous droits réservés - Mentions légales -
        Politique de confidentialité
      </footer>
    </div>
  );
}

export default App;

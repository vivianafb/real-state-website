import "./header.css"
import logo from '../../assets/icons/logo.svg'
import facebookIcon from '../../assets/icons/facebookIcon.svg'
import instagramIcon from '../../assets/icons/instagramIcon.svg'
import linkedinIcon from '../../assets/icons/linkedinIcon.svg'


const Header = () => {
  return (
    <>
      <div className="topHeader">
        <div className="container topHeader_container">
          <div className="contactInfo">
            <div><a className="link" href={`tel:+56912345456`}>+569 1234 5456</a></div>
            <div><a className="link" href={`mailto:info@gmail.com`}>information@gmail.com</a></div>
            <div><a className="link" href='/'><img src={facebookIcon} alt="Facebook" /></a></div>
            <div><a className="link" href='/'><img src={instagramIcon} alt="Instagram" /></a></div>
            <div><a className="link" href='/'><img src={linkedinIcon} alt="Linkedin" /></a></div>
          </div>
        </div>
      </div>
      <div className="bottomHeader">
        <div className="container bottomHeader_container">
          <div className="bottomHeader_left">
            <img src={logo} alt="logo"></img>
            <h1>Inmobiliaria<br /> Fajardo</h1>
          </div>
          <div className="bottomHeader_right">
            <div className="menu">
              <div className="menu_title"><a className="menu_link" href="/">Propiedades</a></div>
              <div className="menu_title"><a className="menu_link" href="/about-us">Sobre nosotros</a></div>
              <div className="menu_title"><a className="menu_link" href="/about-us">Nuestros Asesores</a></div>
              <button className="menu_button">Contacto</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;

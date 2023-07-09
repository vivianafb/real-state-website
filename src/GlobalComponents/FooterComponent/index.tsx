import "./footer.css"
import logo from '../../assets/icons/logoWhite.svg'
import facebookIcon from '../../assets/icons/facebookIcon.svg'
import instagramIcon from '../../assets/icons/instagramIcon.svg'
import linkedinIcon from '../../assets/icons/linkedinIcon.svg'
const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_top">
          <div className="footer_left">
            <div className="footer_name">
              <img src={logo} alt="logo" />
              <div className="footer_title">Inmobiliaria <br /> Fajardo</div>
            </div>
            <div className="footer_icons">
              <div><a className="link" href='/'><img src={facebookIcon} alt="Facebook" /></a></div>
              <div><a className="link" href='/'><img src={instagramIcon} alt="Instagram" /></a></div>
              <div><a className="link" href='/'><img src={linkedinIcon} alt="Linkedin" /></a></div>
            </div>
          </div>
          <div className="footer_right">
            <div className="footer_info">
              <h5>Nuestro Servicios</h5>
              <div><a href="/" className="link">Tasaciones</a></div>
              <div><a href="/" className="link">Compras</a></div>
              <div><a href="/" className="link">Arriendos</a></div>
              <div><a href="/" className="link">Ventas</a></div>
            </div>
            <div className="footer_info">
              <h5>Recursos</h5>
              <div><a href="/" className="link">Preguntas Frecuentes</a></div>
              <div><a href="/" className="link">Sobre Nosotros</a></div>
              <div><a href="/" className="link">Novedades</a></div>
              <div><a href="/" className="link">Políticas de Privacidad</a></div>
            </div>
            <div className="footer_info">
              <h5>Soporte</h5>
              <div><a href="/" className="link">Email</a></div>
              <div><a href="/" className="link">Contactanos</a></div>
              <div><a href="/" className="link">Centro de Soporte</a></div>
              <div><a href="/" className="link">Terminos de Servicios</a></div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_divisor container"></div>
          <div>Copyright 2023, Inmobiliaria Fajardo SaS. Todos los derechos reservados</div></div></div>
    </div>
  )
};

export default Footer;

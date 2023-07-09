import "./banner.css"
import line from '../../assets/icons/divisor.svg'
const BannerComponent = () => {
  return (
    <>
      <div className="banner_background">
        <div className="banner_title">Encuentra tu lugar Ideal</div>
        <div className="banner_actions">
          <div className="banner_actions_title"><a className="link" href="/">Quiero Comprar</a></div>
          <div className="banner_actions_divisor"><img src={line} alt="line"/></div>
          <div className="banner_actions_title"><a className="link" href="/">Quiero Vender</a></div>
          <div className="banner_actions_divisor"><img src={line} alt="line"/></div>
          <div className="banner_actions_title"><a className="link" href="/">Quiero Arrendar</a></div>
        </div>
      </div>
    </>
  )
};

export default BannerComponent;

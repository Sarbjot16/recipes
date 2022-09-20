import "../../styles/page5.scss";
import appStore from "../images/appStore.png";
import phoneCapture from "../images/phoneCapture.png";
import googlePlay from "../images/googlePlay.png";
import gobi from "../images/gobi.png";
export default function Page5() {
  return (
    <div className="Container page3Container">
      <div className="textContent">
        <div className='paraContainer row'>
          <div className='coloredDiv col-sm-1'></div>
          <p className="downloadText col">Download app for Exciting Deals</p>
        </div>
        <div className="spanHolder">
          <span className="lorenText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </span>
        </div>
        <div className='storeContainer row'>
          <button type='button' className='btn btn-primary col googlePlay'><img src={googlePlay} className="googlePlayImg" alt="..."/></button>
          <button type='button' className='btn btn-primary col appStore'><img src={appStore} className="appStoreImg" alt="..."/></button>
        </div>
      </div>
      <div className="ImageContainer">
        <img src={phoneCapture} className="phoneCapture" alt="..."/>
        <img src={gobi} className="gobi" alt="..."/>
      </div>
    </div>
  );
}
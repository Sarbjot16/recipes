import '../../styles/page2.scss';
import burger from '../images/burger.png';
import food from '../images/food.png';
import SeeMore from '../images/SeeMore.png';
import placeholder from '../images/placeholder.png';
const Page2 = () => {
    return(
        <div className="InnerContainer page2">
            <div className='paraContainer row'>
                <div className='coloredDiv col-sm-1'></div>
                <div className='paraOne col'><p>some top restaurant for<br/>dining out or in!</p></div>
                <div className='paraTwo col'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />do eiusmod tempor incididunt ut labore et dolore magna<br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation<br/> ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 cardHolder">
                <div className="col Col1">
                    <div className="card">
                        <img src={food} className="card-img-top foodImg" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Fire Water</h5>
                            <p className="card-text">we are all about we are all about to the fullest and all<br/>content dining out or in!dining out or in!</p>
                            <div className='bookNow'>
                                <div className='locationDiv'>
                                    <img className='locationImg' src={placeholder} alt='locationIcon'/>
                                    <p className='locationCity'>Hitech City</p>
                                </div>
                                <button type='button' className='btn btn-primary goButton'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col Col2">
                    <div className="card">
                        <img src={burger} className="card-img-top burgerImg" alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">the wonton</h5>
                            <p className="card-text">we are all about we are all about to the fullest and all<br/>content dining out or in!dining out or in!</p>
                            <div className='bookNow'>
                                <div className='locationDiv'>
                                    <img className='locationImg' src={placeholder} alt='locationIcon'/>
                                    <p className='locationCity'>gachibowli</p>
                                </div>
                                <button type='button' className='btn btn-primary goButton'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col Col3'>
                    <img src={SeeMore} className='seeMore' />
                    <button type='button' className='btn btn-primary seeMoreBtn'>see more</button>
                </div>
            </div>
        </div>
    );
}
export default Page2;
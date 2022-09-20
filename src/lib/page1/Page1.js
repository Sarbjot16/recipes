import pata from '../images/pata.png';
import plate from '../images/plate.png';
import location from '../images/location.png';
import '../../styles/page1.scss';
const Page1 = () => {
    return(
        <div className="InnerContainer page1">
            <div className="contentRight box">
                <div className='heading'>
                    <p>Discover Restaurant <br />& Delicious Food</p>
                    <div className="inputContainer">
                        <form className="d-flex">
                            <input className="form-control search me-2" type="search" placeholder="search restaurant" aria-label="Search" />
                            <button type='button' className='btn btn-primary goButton'>GO</button>
                        </form>
                    </div>
                </div>
                <div className='locationDiv'>
                    <div className='locationImg'>
                        <img src={location} alt='locationIcon'/>
                    </div>
                    <div className='pt-4 para'><p>hyderabad</p></div>
                </div>
            </div>
            <div className="contentLeft box "></div>
            <div className='imageContanier'>
                <div className='pataDiv'><img src={pata} className="pata" alt='Pata' /></div>
                <div className='plateDiv'><img src={plate} className="plate" alt='Plate' /></div>
            </div>
        </div>
    );
}
export default Page1;
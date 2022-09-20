import '../../styles/page3.scss';
import leftPata from '../images/leftPata.png';
import rightPata from '../images/rightPata.png';
export default function Page3() {
    return (
        <div className="InnerContainer page3">
            <div className='row'>
                <div className='col pataLeft'>
                    <img src={leftPata} alt='...'/>
                </div>
                <div className='col mainContext'>
                    <div className='upperBorder'></div>
                    <div className='header'><p>advanced booking</p></div>
                    <div className='searchBar'>
                        <form className="d-flex">
                            <input className="form-control search me-2" type="search" placeholder="search restaurant" aria-label="Search" />
                            <button type='button' className='btn btn-primary goButton'>GO</button>
                        </form>
                    </div>
                    <div className='extraContent row'>
                        <div className='col date'>
                            <p className='hC'>Date</p>
                            <p className='dC'>9/18/2022</p>
                        </div>
                        <div className='col time'>
                            <p className='hC'>Time</p>
                            <p className='dC'>9/18/2022</p>
                        </div>
                        <div className='col guests'>
                            <p className='hC'>Guests</p>
                            <p className='dC'>2</p>
                        </div>
                    </div>
                </div>
                <div className='col pataRight'>
                    <img src={rightPata} alt='...'/>
                </div>
            </div>
        </div>
    );
}
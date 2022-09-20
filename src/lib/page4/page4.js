import React from 'react'
import cardImg1 from '../images/cardImg1.png'
import cardImg2 from '../images/cardImg2.png'
import cardImg3 from '../images/cardImg3.png'
import cardImg4 from '../images/cardImg4.png'
import cardImg5 from '../images/cardImg5.png'
import cardImg6 from '../images/cardImg6.png'
import '../../styles/page4.scss'
function Page4() {
  const images = [cardImg2,cardImg1,cardImg3,cardImg4,cardImg5,cardImg6];
  return (
    <div className='pageCardContainer page4'>
      <div>
        <div className='page4Header'><p>Explore Our Foods</p></div>
        <div className='page4Text'><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br/>tempor invidunt ut labore et dolore magna.</p></div>
        <div className="row row-cols-1 row-cols-md-3 g-4 cardRow">
          {
            images.map((cardImage) => {
              return(
                <div className="col">
                  <div className="card comp">
                    <img src={cardImage} className="card-img-top cardImg" alt="..."/>
                    <div className="card-body">
                      <div className='card-header row'>
                        <p className='col name'>Ham Sandwich</p>
                        <p className='col price'>$10.50</p>
                      </div>
                      <p className="card-text">Lorem ipsum dolor sit amet, consetetur<br/>sadipscing elitr,</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Page4
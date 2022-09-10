import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../inc/Slider'
import Vmc from './Vmc'
import Website from '../images/Website.jpg'
import laptop from '../images/laptop.jpg'
import Power from '../images/Power.jpg'

export default function Home() {
  return (
    <div>
      <Slider />
      <section className='section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h3 className='main-heading'>Our Company</h3>
              <div className='underline mx-auto'></div>
            <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ornare tempus aliquet. Pellentesque finibus, 
          est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, 
          pulvinar eget ornare ac, ultrices eget risus. Ut lobortis 
          pellentesque pretium. Praesent sollicitudin vestibulum iaculis.
          Mauris a finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut,
          aliquam quis dui. Phasellus interdum leo eu ipsum malesuada, 
          et interdum diam egestas. Maecenas pretium fermentum tortor 
          ac tincidunt. Curabitur consectetur dolor libero, 
          at aliquam est ornare eleifend. Aliquam at finibus dolor.


            </p>
            <Link to="/about" className="btn btn-warning shadow">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    {/* Our vision, mission, values */}
      <Vmc />

      {/* Our Services */}

      <section className='section border-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 mb-4 text-center'>
              <h3 className='main-heading'>Our Services</h3>
              <div className='underline mx-auto'></div>
            
            </div>
          <div className='col-md-4'>
            <div className='card shadow'>
                <img src={Website} className="w-100 border-bottom" />
              <div className='card-body'>
                <h6>Service 1</h6>
                <div className='underline'></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ornare tempus aliquet. Pellentesque finibus, 
          est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, 
          pulvinar eget ornare ac, ultrices eget risus. 
            </p>
            <Link to="/services" className="btn btn-link">read more..</Link>
              </div>
            </div>
           </div>

           <div className='col-md-4'>
            <div className='card shadow'>
                <img src={laptop} className="w-100 border-bottom" />
              <div className='card-body'>
                <h6>Service 1</h6>
                <div className='underline'></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ornare tempus aliquet. Pellentesque finibus, 
          est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, 
          pulvinar eget ornare ac, ultrices eget risus. 
            </p>
            <Link to="/services" className="btn btn-link">read more..</Link>
              </div>
            </div>
           </div>

           <div className='col-md-4'>
            <div className='card shadow'>
                <img src={Power} className="w-100 border-bottom" />
              <div className='card-body'>
                <h6>Service 1</h6>
                <div className='underline'></div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ornare tempus aliquet. Pellentesque finibus, 
          est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, 
          pulvinar eget ornare ac, ultrices eget risus. 
            </p>
            <Link to="/services" className="btn btn-link">read more..</Link>
              </div>
            </div>
           </div>
    </div>
    </div>
    
    </section>
    </div>
  )
}

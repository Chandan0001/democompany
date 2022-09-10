import React from 'react'
import Vmc from './Vmc'

export default function About() {
  return (
      <div>
       <section className='py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>About Us</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>
                Home / About Us
              </h6>
            </div>
          </div>
        </div>
       </section>

       <section className='section bg-light border-bottom'>
        <div className='container'>
          <h5>Our Company</h5>
          <div className='underline'>

          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam ornare tempus aliquet. Pellentesque finibus, 
          est et iaculis suscipit, dolor nulla commodo dui, 
          nec ultricies arcu nisl tristique eros. Morbi eros est, 
          pulvinar eget ornare ac, ultrices eget risus. 
          </p>
        </div>
       </section>

       <Vmc />
    </div>
  )
}

import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className='py-4 bg-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 my-auto'>
              <h4>Contact Us</h4>
            </div>
            <div className='col-md-8 my-auto'>
              <h6 className='float-end'>
                Home / Contact Us
              </h6>
            </div>
          </div>
        </div>
       </section>

       <section className='section'>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6 '>
                  <h6>Contact Form</h6>
                  <hr />
                  <div className='form-group'>
                    <label className='mb-1'>Full Name:</label>
                    <input type="text" className='form-control' placeholder="Enter your Full Name" />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Phone Number:</label>
                    <input type="text" className='form-control' placeholder="Enter your Phone Number" />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Email Address:</label>
                    <input type="text" className='form-control' placeholder="Enter your Email Address" />
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Message:</label>
                    <textarea rows="3" className="form-control" placeholder="Type your message..."></textarea>
                  </div>

                  <div className='form-group py-3'>
                    <button type='button' className='btn btn-primary shadow w-100'>Send Message</button>
                  </div>
                  </div>
                  <div className='col-md-6 border-start'>
                    <h5 className='main-heading'>Address Information</h5>
                    <div className='underline'></div>
                    <p>
                      Bengaluru, Karnataka, India - 560070
                    </p>
                    <p>
                      Phone: +80  234 567 88
                    </p>
                    <p>
                    +80 234 567 89
                    </p>
                    <p>
                    info@example.com
                    </p>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
       </section>
    </div>
  )
}

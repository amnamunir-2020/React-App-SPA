import React from 'react'

const Contactus = () => {
  return (
   <>
   <section className='contactus-section'>
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-10 mx-auto '>
                <div className='row'>
                    <div className='contact-left-side col-12 col-lg-5 '>
                      <h1 className='main-heading fw-bold'>Connect With Our <br/> Sales Team</h1>
                      <p className='main-hero-para '>Timely delivery is our first priority. you do not have to pay us even if we're a minute late. It's free!</p>
                       <figure>
                       <img src="./images/main-image.jpg" alt="contactus" className='img-fluid'/>
                       </figure>
                       </div>
                   {/* RightSide Contact Form */}
                   <div className='contact-right-side col-12 col-lg-7'>
                    <form method='POST'>
                            <div className='row'>
                                <div className='col-12 col-lg-6 contact-input-field'>
                                  <input 
                                  type="text"  className='form-control'
                                   name="" 
                                    id="" 
                                 placeholder='First Name' />
                                </div>
                                <div className='col-12 col-lg-6 contact-input-field'>
                                  <input 
                                  type="text"  className='form-control'
                                  name=""  
                                  id=""  
                                  placeholder='Last Name' />
                                </div>
                            </div>  

                            <div className='row'>
                                <div className='col-12 col-lg-6 contact-input-field'>
                                  <input 
                                  type="text"  className='form-control'
                                  name="" 
                                   id="" 
                                    placeholder='Phone Number' />
                                </div>
                                <div className='col-12 col-lg-6 contact-input-field'>
                                  <input 
                                  type="text"  className='form-control'
                                  name="" 
                                   id="" 
                                    placeholder='Email ID' />
                                </div>
                            </div>

                                <div className='row'>
                                    <div className='col-12 contact-input-field '>
                                      <input type="text"  className='form-control' name=""  id=""  placeholder='Add Address'/>
                                    </div> 

                                    <div className='col-12 '>
                                      <input type="text" className='form-control'  name=""  id=""  placeholder='Enter Your Message' />
                                    </div>

                                </div>

                                <div class="form-check form-checkbox-style">
                               <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                <label class="form-check-label" className='main-hero-para'>
                                 I Agree We will contact you as per your preferred choice to brief you about our service guarantees and quote you the fee.
                               </label>
                            </div>

                           <button type='submit' className='btn btn-style w-100'>Submit</button>


                    </form>

                   </div>
                       



                   
                    

                </div>

            </div>

        </div>

    </div>
   </section>
   
   </>
  )
}

export default Contactus

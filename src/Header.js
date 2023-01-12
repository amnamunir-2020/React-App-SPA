import React from 'react'

const Header = () => {
  return (
   <>
   <header>
   <section className='container main-hero-section'>
    <div className='row'>
         {/* Left Side */}
        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
            <h1 className='display-2'>Get   Help <br/>By  PHD Experts </h1>
            <p className='main-hero-para'>At Mr. Academic we guarantee professional assistance in completing academic work for all levels and subjects.</p>
            <h3>Get Early Access To You!</h3>
          <div className='input-group mt-3'>
           <input type="text"  className="rounded-pill w-75 form-control-text me-2 p-2" placeholder='Enter Your Email'  />
           <div className='input-group-button'>Get It Now</div>
          
          </div>
        </div>

        {/* Right Side */}

        <div className='col-12 col-lg-6 header-right-side d-flex justify-content-center  align-items-center main-hero-images'>
        <img  src="./images/laptop.jpg" className='img-fluid '    alt="Main-Hero-Image" />
        <img  src="./images/main.png" className='img-fluid main-hero-img2'    alt="Main-Hero-Image" />
        </div>




    </div>
   </section>
   </header>
   </>
  )
}

export default Header

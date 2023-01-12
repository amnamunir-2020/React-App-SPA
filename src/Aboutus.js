import React, { useState } from 'react';
import howToUseApp  from './API/howtouse';

const Aboutus = () => {
const [AboutData,setAboutData]=useState(howToUseApp);


  return (
    <>
    <section className='common-section aboutus-section'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 about-left-side-img text-center'>
                 <img src='./images/laptop1.jpg'/>
                </div>

                <div className='col-12 col-lg-7 about-right-side-list '>
                    <h3 className='line-title'>--@Google & Ios Android App Only Available </h3>
                    <h1 className='main-heading'>How To Use The  App</h1>
                    {AboutData.map((curElem)=>{

                        const {id,title,info}=curElem;
                        return(<>
                      <div className='row our-app-info' key={id}>
                      <div className='col-1 app-numbers'>{id}
                      </div>
                      <div className='col-10 app-data'>
                          <h2>{title}</h2>
                          <p className='main-hero-para'> {info}</p>
                      </div>
                   </div>
                   </>)
                    })}
                 
                 <br/>
                <button className="btn btn-style-border" > Learn More </button>


                </div>
            </div>
        </div>
    </section>



    <section className='common-section aboutus-section aboutus-right-content'>
        <div className='container mb-5'>
            <div className='row'>
                

                <div className='col-12 col-lg-7 about-right-side-content d-flex justify-content-center flex-column align-items-start '>
                    <h3 className='line-title'>--Support In Any Language </h3>
                    <h1 className='main-heading'>World Class Support is<br/> Available 24/7</h1>
                    {AboutData.map((curElem)=>{

                        const {id,title,info}=curElem;
                        return(<>
                      <div className='row our-app-info' key={id}>
                      <div className='col-1 app-numbers'>{id}
                      </div>
                      <div className='col-10 app-data'>
                          <h2>{title}</h2>
                          <p className='main-hero-para'> {info}</p>
                      </div>
                   </div>
                   </>)
                    })}
                 
                 <br/>
                <button className="btn btn-style-border" > Learn More </button>
                </div>

                <div className='col-12 col-lg-5 about-right-side-img '>
                 <img src='./images/laptop3.jpg'/>
                </div>





            </div>
        </div>
    </section>







    </>
  )
}

export default Aboutus


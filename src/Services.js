import React, { useState } from 'react';
import servicesapi from './API/serviceApi';

const Services = () => {

    const[serviceData,setserviceData]=useState(servicesapi);




  return (
   <>
   <section className='services-section'>
    <div className='container services-container'>
        <h1 className='main-heading text-center fw-bold'>How To Send Money</h1>
        <div className='row'>
            {serviceData.map((curElem)=>{
                const{id,logo,title,info}=curElem;
               
                return(
                 <>

             <div className='col-11 col-lg-4 col-xxl-4  work-box service-box' key={id}>    
             <i className={`fontawesome-Style ${logo}`}></i>
             <h2 className='sub-heading'>{title}</h2>
             <p className='main-hero-para'>{info}</p>
            </div>



                 </>
                )


            })}
             

        </div>

    </div>



   </section>
   </>
  )
}

export default Services

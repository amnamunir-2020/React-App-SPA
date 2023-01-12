import React, { useState } from 'react'
import apiwork from './API/workApi'

const HowItWorks = () => {

  const [workData,setworkData]=useState(apiwork);
console.log(workData);


  return (
    <>
    <section className='how-it-works-section'>
   <div className='container work-section'>
   <h1 className='main-heading text-center'>How Does It Works?</h1>
   <div className='row'>
    {
      workData.map((curElem)=>{
        //Destructuring
        const{id,logo,title,info}=curElem;
        
        
        return(
          <>
          <div className='col-12 col-lg-4 text-center work-box'>
    <i class={`fontawesome-Style ${logo}`}></i>
    <h2 className='sub-heading'>{title}</h2>
    <p className='main-hero-para w-100'>{info}</p>
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

export default HowItWorks

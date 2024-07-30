import React from 'react'
import img1 from './../assets/1.jpg'
import img_2 from './../assets/2.jpg'
import img_3 from './../assets/3.jpg'

function OurGellery() {
  return (
    <>
    

  


    <h1 className="head">Miss Africa organization (MFO)</h1>
  
  <div className="ourGellery">
  <div class="group1 ">
							
              {/* <p class="text-uppercase josefin grey fontsize_20">Ourrtttt</p> */}
              <img src={img1} alt="" className='img1' />
             
            {/* <h2>misssion</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
             Excepturi tenetur aliquam asperiores quidem, accusamus placeat.</p>
           */}
            <div>
            {/* <p>
                          Establishing of nationalmovement empowerswomen eadersthe community who are solving the Somalia's greatest challenges.
                            Steered by the believe that women are key stakeholders to the progress of a community.  we identify women
                           with a bold vision for change and equip them with the necessary leadership skills to make
            </p> */}
            </div>
          
          
           
   

            </div>
          
           <div className='group2'>
                                
       
           {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            Eum provident ut quibusdam ad ipsum illo!</p> */}
            <img src= {img_2} alt="" className='bart' />
                                
               </div>
           
                                
                              
        <div className='group3'>
        
     
      
       
          
        </div>
        <img src={img_3} alt="" className='img3' />           
        <div class="group1 ">
            
            {/* <p class="text-uppercase josefin grey fontsize_20">Ourrtttt</p> */}
            <img src={img1} alt="" className='img1' />
           
          {/* <h2>misssion</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
           Excepturi tenetur aliquam asperiores quidem, accusamus placeat.</p>
         */}
          <div>
          {/* <p>
                        Establishing of nationalmovement empowerswomen eadersthe community who are solving the Somalia's greatest challenges.
                          Steered by the believe that women are key stakeholders to the progress of a community.  we identify women
                         with a bold vision for change and equip them with the necessary leadership skills to make
          </p> */}
          </div>
        
        
         
 

          </div>
        
         <div className='group2'>
                              
     
         {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
          Eum provident ut quibusdam ad ipsum illo!</p> */}
          <img src= {img_2} alt="" className='bart' />
                              
             </div>
         
                              
                            
      <div className='group3'>
      
   
    
     
        
      </div>
      <img src={img_3} alt="" className='img3' />    
  </div>
 


     
  </>
  )
}

export default OurGellery

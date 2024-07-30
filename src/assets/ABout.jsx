import React from 'react'
import img1 from './../assets/1.jpg'
import img_2 from './../assets/2.jpg'
import img_3 from './../assets/3.jpg'

function ABout() {
  return (
    <>
    

  <div className="col-sm-12 text-center">
  <div className="heading text-center bottom_border">

    <h1 className="section_header topmargin_5">Miss Africa organization (MFO)</h1>
  </div>
  
 

  <div class="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6">
                          <div class="heading bottommargin_40"> 
                              {/* <p class="text-uppercase josefin grey fontsize_20">Ourrrr</p> */}
                             
                          </div>
                          
                          {/* <p className='body'>
                            
                     
                          Establishing of a national movement that empowers women leaders in the community who are solving the Somalia's greatest challenges.
                          </p> <p>  Steered by the believe that women are key stakeholders to the progress of a community. </p><p> we identify women
                           with a bold vision for change and equip them with the necessary leadership skills to make that vision a reality through networking and visibility.
                          </p> */}
                          
                      </div>
                      </div>
  <div class="col-md-offset-1 col-md-10 col-lg-offset-0 col-lg-6 d-inline ">
							<div class="heading bottommargin_40 ">
								{/* <p class="text-uppercase josefin grey fontsize_20">Ourrtttt</p> */}
                <img src={img1} alt="" className='img1' />
               
							<h2>misssion</h2>
							</div>
							<p>
                            Establishing of nationalmovement empowerswomen eadersthe community who are solving the Somalia's greatest challenges.
                              Steered by the believe that women are key stakeholders to the progress of a community.  we identify women
                             with a bold vision for change and equip them with the necessary leadership skills to make
							</p>
              
           
              <div class="heading ">
          
          {/* <p className="text-uppercase josefin grey fontsize_20 text-center ">Location</p>
          <h2 className="section_header topmargin_5 bottommargin_0 text-center"> and Coverage</h2> */}
    
      <img src={img_3} alt="" className='img3'  />
      <p>
      We are a community of individuals and non-profit institutions located at the heart of Mogadishu City with working access 
      in the entire nation.</p>  
     

              </div>
						</div>

 
                     
                      
         
                                  <div className='d-inline'>
                                  <img src= {img_2} alt="" className='bart' />
                                  
            
                                  <p className='d-flex'>Lorem ipsum dolor sit amet consectetur adipisicing<br/>
                                   elit. Enim eius suscipit nihil rem perspiciatis incidunt?</p>
                                  </div>
                                 
  </>
  )
}

export default ABout

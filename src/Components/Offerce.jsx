import React from 'react'
import offer1 from '../assets/img/offer1.png'
import offer2 from '../assets/img/offer2.png'
import offer3 from '../assets/img/offer3.png'
import offer4 from '../assets/img/offer4.png'

function Offerce() {
  return (
<>
      {/* <div className="offeres" style={{width:'100%',height:'400px'}}><img style={{width:'100%'}} src="https://images.freekaamaal.com/post_images/1571122469.png" alt="" /></div> */}
  <div className="row mt-6 d-flex align-items-center justify-content-center">
    <h1 className='text-center mt-5' >Special Offers</h1>
    <div className=" col-lg-4" >
<a>
        <img src={offer1} alt="" />
  
</a>      
    </div>
    {/* <div className="col-lg-1"></div> */}
    <div className="col-lg-4 " >
      <img src={offer2} alt="No image" />
    </div>

  </div>
  <div className="row mt-2 d-flex align-items-center justify-content-center">
    <div className=" col-lg-4" >
      <img src={offer3} alt="" />
    </div>
    {/* <div className="col-lg-1"></div> */}
    <div className="col-lg-4 " >
      <img src={offer4} alt="No image" />
    </div>

  </div>
</>    )
}

export default Offerce
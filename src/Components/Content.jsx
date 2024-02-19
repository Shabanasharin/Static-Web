import React from 'react'
import Card from 'react-bootstrap/Card';
function Content() {
  return (
   <>
      <div className='container Home d-flex align-items-center justify-content-center ' style={{width:'100%', height:'500px', padding:'0px'}}>
<div  >
<h1 style={{fontWeight:'700', marginLeft:'130px',color:'brown'}} className=' mt-5 ' ><b>Beauty &</b> </h1>
<h1 style={{fontWeight:'700', marginLeft:'130px', color:'brown'}} ><b>Cosmetics</b> </h1>

       <p style={{fontWeight:'700', fontSize:'22px', marginRight:'140px',marginTop:"20px"}} ><b>Healthy Skin is a Reflection Of Wellness</b> </p>
        {/* <h1 style={{fontWeight:'600'}}  >Reflection Of Wellness</h1>  */}

        <button className='btn btn-primary s-butt ' style={{marginLeft:"180px"}}>Shop Now</button>
</div>       
      {/* <img style={{width:'100%',height:'500px'}} src="https://wallpaperaccess.com/full/2484120.jpg" alt="" /> */}
      </div>
      {/* <div className="offeres" style={{width:'100%',height:'500px'}}><img style={{width:'100%'}} src="https://images.freekaamaal.com/post_images/1571122469.png" alt="" /></div> */}
     
      <div className="container">
        <h1 className='mt-5' style={{textAlign:'center'}}> CATEGERIES</h1>
        <div className="row">
          <div className="col-lg-3">
          <Card className='shadow ' style={{ width: '18rem'}}>
      <Card.Img style={{height:'150px'}} variant="top" src="https://wallpaperaccess.com/full/2090351.jpg" />
      <Card.Body>
        <Card.Title>Makep</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'150px'}} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/58b19575277511.5c483922dd0c1.jpg" />
      <Card.Body>
        <Card.Title>Skin</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'150px'}} variant="top" src="http://www.salonsleek.com/wp-content/uploads/2016/10/hair-conditioning.jpg" />
      <Card.Body>
        <Card.Title>Hair Care</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3">
          <Card style={{ width: '18rem' }}>
      <Card.Img style={{height:'150px'}} variant="top"  src="https://vioralondon.com/wp-content/uploads/2020/10/Best-Armaf-Perfumes-For-Women-Main-Image.jpg" />
      <Card.Body>
        <Card.Title>Fragrens</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
   </>
    
  )
}

export default Content
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  return (
   <> 
   <div className='container mt-5'>
    <h1 className='text-center'>Best Selling Products</h1>
    <div className='row mt-5 text-center' style={{width:'100%',height:'auto'}}>
      <div className='col-lg-4'>
        <Card style={{ width: '18rem' ,height:'420px' }}>
          <Card.Img variant="top"  style={{ height:'200px' }} src="https://www.jiomart.com/images/product/600x600/rvbujnvsej/mars-smudge-proof-long-lasting-matte-lip-crayon-i-am-powerful-3-5g-ls14-08-product-images-orvbujnvsej-p600081644-3-202304020151.jpg" />
          <Card.Body>
            <Card.Title>MARS</Card.Title>
            <p>Smudge Proof Long Lasting  Matte Lip CraYone </p>
              <p style={{color:'green'}}>₹199</p>
            
            <Button variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
      <Card style={{ width: '18rem',height:'420px' }}>
          <Card.Img variant="top" style={{ height:'200px' }} src="https://m.media-amazon.com/images/I/51urZJ--MsL._SL1200_.jpg" />
          <Card.Body>
            <Card.Title >THE DERMA CO </Card.Title>
            <p>Vitamin C Face Serum For Skin Radiance </p>
            <p style={{color:'green'}}>₹551</p>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
      <Card style={{ width: '18rem',height:'420px'}}>
          <Card.Img variant="top" style={{ height:'200px' }} src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/2/124180c8903380025057_1TY.jpg" />
          <Card.Body>
            <Card.Title>FACES CANADA</Card.Title>
            <p>Weightless Stay Matte Compact SPF-20 Vitamin E &Shea Butter</p>
            <p style={{color:'green'}}>₹170</p>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    <div className='row mt-5 text-center' style={{width:'100%',height:'auto'}}>
      <div className='col-lg-4'>
        <Card style={{ width: '18rem' ,height:'420px' }}>
          <Card.Img variant="top" style={{ height:'200px' }} src="https://ik.imagekit.io/bfrs/tr:w-550,h-582,pr-true,cm-pad_resize,bg-FFFFFF/image_cuffsnlashes/data/Swiss-Beauty-Baked-Blusher--Highlighter-SB-806-Shade-No--02---Copy-2.jpg" />
          <Card.Body>
            <Card.Title>SWISS BEUTY</Card.Title>
            <p>Baked Blusher & Highlater</p>
            <p style={{color:'green'}}>₹350</p>

            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button className='mt-3' variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
      <Card style={{ width: '18rem',height:'420px' }}>
          <Card.Img variant="top" style={{ height:'200px' }} src="https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg" />
          <Card.Body>
            <Card.Title>MAMAERTH</Card.Title>
            <p>Ubtan face wash with TUrmeric & Saffron For Tan Removal</p>
            <p style={{color:'green'}}>₹410</p>

            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
      <div className="col-lg-4">
      <Card style={{ width: '18rem',height:'420px'}}>
          <Card.Img variant="top" style={{ height:'200px' }} src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/n/y/nyk_sccmlt_new_1_walk-the-walk.jpg" />
          <Card.Body>
            <Card.Title>NykA Costmetics</Card.Title>
            <p>So Creme! Creamy Matte Lipstick</p>
            <p style={{color:'green'}}>₹250</p>
            <p></p>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
            <Button  variant="primary">Buy now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
   </>
  )
}

export default Products
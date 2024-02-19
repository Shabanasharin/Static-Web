import React from 'react'
import { Col, Row } from 'react-bootstrap'
function Footer() {
  return (
    <div style={{ height: 'auto', backgroundColor: 'pink' }} className='container mt-5 w-100'>
      <div className='container w-100 h-100  mb-5 mt-5'>

        <div className="footer-content  d-flex justify-content-between" style={{ margin: '0px', padding: '0px' }}>
          <Row>

            <Col sm  >
              <div className=" d-flex flex-column " style={{ width: '400px' }}>
                <h4 style={{ height: '55px', color: 'black' }}>About Us</h4>
                <ul>
                  <li>FAQ</li>
                  <li>Services</li>
                  <li>Offerce</li>
                  <li>Review</li>
                </ul>
              </div>
            </Col>
            <Col sm  >
              <div className=" d-flex flex-column " style={{ width: '400px' }}>
                <h4 style={{ height: '55px', color: 'black' }}>Categeries</h4>
                <ul>
                  <li>Mekup</li>
                  <li>Skin care</li>
                  <li>Hair Care</li>
                  <li>FragrenS</li>
                </ul>
              </div>
            </Col>
            {/* <Col sm  >
      <div className="links d-flex flex-column ">
        <h4 style={{ height: '55px', color: 'black' }}>Discover</h4>
        <ul>
            <li>Dresses</li>
              <li>Bottoms</li>
              <li>Accessories</li>
          </ul>
      </div>
    </Col> */}
            <Col sm >
              <div style={{ color: 'black' }} className="contact">
                <h4 style={{ height: '55px' }}>Contact Us</h4>
                <div className='d-flex'>
                  <input placeholder='Enter Your Mail' type="text" className="form-control" />
                  <button className='btn btn-danger ms-2'><i class="fa-solid fa-arrow-right "></i></button>
                </div>
                <div style={{ color: 'black' }} className="icons mt-3 d-flex justify-content-between">
                  <i style={{ height: '55px' }} class="fa-solid fa-envelope fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-twitter fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-facebook fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-instagram fa-2x"></i>
                  <i style={{ height: '55px' }} class="fa-brands fa-linkedin fa-2x"></i>

                </div>
              </div>

            </Col>
          </Row>

        </div>
        <div className='mt-5'>
          <p style={{ color: 'black' }} className='text-center '>Copyright &copy; 2023 & All Rights Reserved.</p>

        </div>      </div>
    </div>
  )
}

export default Footer
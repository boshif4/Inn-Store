import React from 'react';
import './styles.css';



function Footer({ products }) {
//products: قائمة تحتوي على بيانات المنتجات 
  return (
      <footer className=''>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 py-2">
              <div className="py-2"> 
            
                <h1 href="">INNOVATION-STORE</h1>
              </div>
            
            </div>
          
            <div className="col-sm-12 col-md-3 py-4">
              <form className="form my-4 my-lg-0">
                <div className="d-grid gap-2">
                  <input className="form-control" type="email" placeholder="Email" aria-label="Email Address" />
                  <button className="btn btn-outline-light" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <p className='copyright py-0'>2024 &copy; INNOVATION-STORE</p>
          </div>
        </div>
      </footer>
      //div.row: صف يحتوي على حقوق النشر واسم المتجر
  );
}

export default Footer;

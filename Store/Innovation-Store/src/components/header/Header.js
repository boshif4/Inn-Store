import React, { useEffect, useState } from 'react';

import './styles.css';

import half_logo from '../../img/logo_shape.svg';
import icon_cart from '../../img/icon_cart.svg';
import icon_menu from '../../img/icon_menu.svg';

//cart: قائمة تحتوي على عناصر السلة
//toggleCart: دالة تُنفذ لفتح أو إغلاق سلة المشتريات.
//products: قائمة تحتوي على بيانات المنتجات للمني

function Header({ cart, toggleCart, products }) {
//menuOpen: تحدد حالة إغلاق أو فتح القائمة (false مغلقة، true مفتوحة).
//itemCount: عدد العناصر في سلة المشتريات.
  const [menuOpen, setMenuOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0); //قوم بحساب عدد العناصر (itemCount) 
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);//تظهر فقط عند فتح القائمة (menuOpen)
  }


  useEffect(() => {
    let totalCount = 0;

    if (cart) {
      cart.forEach(item => totalCount += item.qty);
    }
    
    setItemCount(totalCount);
  }, [cart]);


  return (
    <header>
        
        <div className="container header">
          <div>
          <div className='Store'>Innovation-Store  </div>
            <img className='half-logo' src={half_logo} alt="Innovation  Store logo" />
          </div>
          <div className='menu-cart'>
            <div className='menu-icon icon_cart' onClick={toggleCart}>
              <img src={icon_cart} alt="Shopphing Cart button" />
              {itemCount > 0 && <span className='cartCount'>{itemCount}</span>}
            </div>
            <div className='menu-icon icon_menu'>
              <img src={icon_menu} alt="Menu button" onClick={toggleMenu}/>
            </div>

            {menuOpen && (
              <div className="menu-list">
                <ul>
                  {products.map((product, idx) => <li key={product.id} onClick={toggleMenu}><a type='button' data-bs-target='#maincarousel' data-bs-slide-to={idx} href=' '>{product.short_description}</a></li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
    </header>
  );
}

export default Header;

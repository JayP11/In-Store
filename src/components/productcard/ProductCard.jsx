import React from 'react'
import "./ProductCard.css";
const ProductCard = () => {
  return (
    <div className="pc_main_wrapp">
      <div className="pc_sec1">
        <img
          src="https://images.unsplash.com/photo-1591892204579-530edbd4724d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eHVyeSUyMGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="pc_sec2">
        <h6 >CHANEL PARIS</h6>
              <p>Perfume</p>
              <p>chanel gabrielle</p>
              <p>orange</p>
              <p>400ml</p>
      </div>
    </div>
  );
}

export default ProductCard
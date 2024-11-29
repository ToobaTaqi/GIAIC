import React from "react";

function ProductCard() {
  return (
    <div className="productCard">
      <div className="cardHeader ">
        <div className="cardIcons ">
          {/* sale % */}
          <p className="sale ">-40%</p>

          {/* icons */}
          <div className="icons ">
            <img
              src="https://w7.pngwing.com/pngs/799/396/png-transparent-heart-gold-heart-icon-thumbnail.png"
              alt=""
            />
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linetype-icon/eye-43.png"
              alt=""
            />
          </div>
        </div>

        {/* product image */}
        <div className="productImage">
          <img
            src="https://png.pngtree.com/png-vector/20230408/ourmid/pngtree-led-tv-television-screen-vector-png-image_6673700.png"
            alt=""
          />
        </div>
      </div>

      <button>Add To Cart</button>

      <div className="details">
        <h3>Product Name</h3>
        <div className="price">
          <p className="salePrice">${"{SalePrice}"}</p>
          <p className="actualPrice">${"{ActualPrice}"}</p>
        </div>
        <p>Reviews</p>
      </div>
    </div>
  );
}

export default ProductCard;

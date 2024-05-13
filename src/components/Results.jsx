
import React, { useState } from 'react';
import faker from 'faker';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import './Results.css'
import { Filters } from './Filters';

export const Results=()=>{
  const [products, setProducts] = useState([]);

  
const generateFakeProducts = () => {
    const fakeProducts = [];
    for (let i = 0; i < 8; i++) {
        const mrpPrice = faker.datatype.number({ min: 500, max: 2000 });
        const discountedPrice = faker.datatype.number({ min: 400, max: mrpPrice });
        const product = {
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            mrpPrice: mrpPrice,
            discountedPrice: discountedPrice,
            rating: faker.datatype.number({ min: 100, max: 300 }),
        };
        fakeProducts.push(product);
    }
    return fakeProducts;
};

 
  useState(() => {
    const fakeProducts = generateFakeProducts();
    setProducts(fakeProducts);
  }, []);

  const images=[p1,p2,p3,p4,p5,p6,p7,p8];
return (
    <>
    <div className="res">
        <h2>Search Results</h2>
        <div className="results">
        <div className="filters">
        <Filters/>
       
      </div>
        <div className="grid-container">
            {products.map((product, index) => (
                <div key={product.id} className="product-card">
                    <img src={images[index]} alt={product.name} className="product-image" />
                    <div className="product-details">
                        <p>{product.name}</p>
                        <span id="mrp">Rs. {product.mrpPrice}</span> <span id="discount">Rs. {product.discountedPrice}</span>
                        <p><span id="star">&#9733;&#9733;&#9733;&#9733;&#9733;</span> ({product.rating})</p>
                        
                    </div>
                </div>
            ))}
        </div>
        </div>
        </div>
    </>
);
};



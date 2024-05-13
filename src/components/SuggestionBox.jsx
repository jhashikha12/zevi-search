import React from 'react';
import './SuggestionBox.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'

function SuggestionBox() {
return (
    <div className='container'>
            <p>Latest Trends</p>
            <div className="images">
                    <div className="image">
                            <img src={img1} alt="Image 1" />
                            <p>Shirt with puffed sleeves</p>
                    </div>
                    <div className="image">
                            <img src={img2} alt="Image 2" />
                            <p>Linen jumpsuit</p>
                    </div>
                    <div className="image">
                            <img src={img3} alt="Image 3" />
                            <p>White formal suit</p>
                    </div>
                    <div className="image">
                            <img src={img4} alt="Image 4" />
                            <p>Pattern dresses</p>
                    </div>
                    <div className="image">
                            <img src={img5} alt="Image 5" />
                            <p>Leather shirt dresses</p>
                    </div>
            </div>
            <p>Popular suggestions</p>
            <div className="pop">
                <p>Striped shirt dress</p>
                <p>Satin shirts</p>
                <p>Denim jumpsuit</p>
                <p>Leather dresses</p>
                <p>Solid tshirts</p>
            </div>
    </div>
);
}
export default SuggestionBox;

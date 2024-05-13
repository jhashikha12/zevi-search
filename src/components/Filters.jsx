import React from 'react'
import './Filters.css'

export const Filters = () => {
return (
    <>
        <div className='filter'>
            <p>BRAND</p>
            <ul>
                <li>
                    <input type="checkbox" name="item1" />
                    <label htmlFor="item1">Mango</label>
                </li>
                <li>
                    <input type="checkbox"  name="item2" />
                    <label htmlFor="item2">H&M</label>
                </li>
            </ul>
        </div>
        <div className='filter'> 
            <p>PRICE RANGE</p>
            <ul>
                <li>
                    <input type="checkbox"  name="item1" />
                    <label htmlFor="item1">Under 500</label>
                </li>
                <li>
                    <input type="checkbox" name="item2" />
                    <label htmlFor="item2">1000 to 3000</label>
                </li>
            </ul>
        </div>
        <div className='filter'>
            <p>RATINGS</p>
            <ul>
                <li>
                    <input type="checkbox"  name="item5" />
                    <label htmlFor="item5">
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox"  name="item4" />
                    <label htmlFor="item4">
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                    </label>
                </li>
                
                <li>
                    <input type="checkbox"  name="item3" />
                    <label htmlFor="item3">
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="item2" />
                    <label htmlFor="item2">
                        <span className="star yellow">&#9733;</span>
                        <span className="star yellow">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                    </label>
                </li>
                <li>
                    <input type="checkbox" name="item1" />
                    <label htmlFor="item1">
                        <span className="star yellow">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                        <span className="star gray">&#9733;</span>
                    </label>
                </li>
            </ul>
        </div>
    </>
);
}

import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}){
    const [{basket},dispatch] = useStateValue()

    console.log('basket content', basket)
    const addToBasket = () => {
        dispatch({
        type: 'ADD_TO_BASKET',
           item:{
                id:id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <h3>Rating:</h3>
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <h2>*</h2>
                        ))
                    }

                </div>

            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>view</button>

        </div>

    );
}
export default Product;
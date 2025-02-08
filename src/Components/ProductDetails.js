import React from 'react';
import products from './ProductData';
import { useParams } from 'react-router-dom';

function ProductDetails() {
	const { id } =  useParams();
	const product = products.find((r) => r.id === Number(id));
	//handling invalid product id's (e.g...products/999)
	if (!product) {
		return <h2>Product Not Found</h2>;
	}
	return(<div>
		<h1>{product.name}</h1>
		<p>Price: Rs{product.price}</p>
		<p>{product.description}</p>
	</div>);
}

export default ProductDetails;
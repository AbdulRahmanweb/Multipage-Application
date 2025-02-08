import React from 'react';
import { Link } from 'react-router-dom';
import products from './ProductData';

function Products() {
	return(<div>
		<h1>Product List</h1>
		<ul>
			{products.map((product) => (
				<li key={product.id}>
				<Link style={{color : "white", margin : "15px", padding : "10px"}} to={`/products/${product.id}`}>{product.name}</Link>
			</li>))}
		</ul>
	</div>);
}

export default Products;
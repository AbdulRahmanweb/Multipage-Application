import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return(<nav>
	<NavLink to='/' className={({isActive}) => (isActive ? "active-link" : "")}>Home</NavLink>
	<NavLink to='/about' className={({isActive}) => (isActive ? "active-link" : "")}>About</NavLink>
	<NavLink to='/contact' className={({isActive}) => (isActive ? "active-link" : "")}>Contact</NavLink>
	<NavLink to='/products' className={({isActive}) => (isActive ? "active-link" : "")}>Products</NavLink>
	</nav>);
}

export default Navbar;
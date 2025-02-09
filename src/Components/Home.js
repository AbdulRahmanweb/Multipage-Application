import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Home() {

	const [post, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	const api = "https://jsonplaceholder.typicode.com/posts";
	console.log(api);

	useEffect(() => {
		fetch(api).then((response) => response.json()).then((data) => { 
			setPost(data.slice(0, 10));
			setLoading(false);
		}).catch((error) => console.error("Error fetching post:", error));
	 }, []);

	 if (loading) return <h2>Loading...</h2>
	return(<div>
		<h1>Post</h1>
		<br></br>
		<ul>
			{post.map((post) => 
			(<li key={post.id}><h2><Link style={{color : "white", margin : "15px", padding : "10px"}} to={`/post/${post.id}`}>{post.title}</Link></h2>
			<p>{post.body.substring(0, 100)}...</p></li>))}
		</ul>
	</div>);
}

export default Home;
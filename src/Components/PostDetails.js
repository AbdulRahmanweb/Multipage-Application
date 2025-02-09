import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetails() {
	const {id} = useParams();
	const [post, setPost] = useState(null);
	const [losding, setLoading] = useState(true);
	const api = `https://jsonplaceholder.typicode.com/posts/${id}`;

	useEffect(() => {
			fetch(api).then((response) => response.json()).then((data) => { 
				setPost(data);
				setLoading(false);
			}).catch((error) => console.error("Error fetching post:", error));
		 }, [id]);

		 if (losding) return <h2>Loading...</h2>
		 if (!post) return <h2>Post not found</h2>

	return(<div>
		<h1>{post.title}</h1>
		<p>{post.body}</p>
		<h2><Link style={{color : "white", margin : "15px", padding : "10px"}} to='/'>Back to Home</Link></h2>
	</div>);
}

export default PostDetails;
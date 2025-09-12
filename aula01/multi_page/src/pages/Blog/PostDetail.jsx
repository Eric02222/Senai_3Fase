import { useEffect, useState } from "react";
import { useParams } from "react-router"

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPosts] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [id])

    return (
        <div className="flex flex-col gap-5 p-4 bg-gray-100">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <img src={post.image} alt="imagem"/>
            <p>{post.description}</p>
            <p className="bg-green-200 w-10 text-center">{post.views}</p>
{/* 
            {!post ? (

            )

            } */}
        </div>
    )
}

export default PostDetail;
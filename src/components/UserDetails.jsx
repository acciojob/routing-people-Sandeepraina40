import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/users/${id}`)

            .then(res => res.json())
            .then(data => {
                setUser = (data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch user:", err);
                setLoading(false);
            });
    },[id]);

    if (loading) return <div>Loading...</div>;
    if (!user) return <div>User not found</div>;


    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.Phone}</p>
            <Link to="/users">Back to User List</Link>
        </div>
    )
}

export default UserDetails;
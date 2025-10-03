import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const UserDetails = () => {
    const { id } = useParams();
    const users = [
        { id: 1, name: "Sandy Sandman", email: "sandy@mail.com", username: "sandman", Phone: "1234567890" },
        { id: 2, name: "Rina Ray", email: "rina@mail.com", username: "rinray", Phone: "0987654321" },
        { id: 3, name: "Alex Storm", email: "alex@mail.com", username: "astorm", Phone: "1122334455" },
        { id: 4, name: "John Doe", email: "johndoe@mail.com", username: "john", Phone: "6677889900" },
        { id: 5, name: "Jane Smith", email: "jane@mail.com", username: "jsmith", Phone: "5566778899" },
        { id: 6, name: "Mike Johnson", email: "mike@mail.com", username: "mjohnson", Phone: "4455667788" },
        { id: 7, name: "Emily Davis", email: "emily@mail.com", username: "edavis", Phone: "3344556677" },
        { id: 8, name: "Chris Brown", email: "chris@mail.com", username: "cbrown", Phone: "2233445566" },
        { id: 9, name: "Sarah Wilson", email: "sarah@mail.com", username: "swilson", Phone: "7788990011" },
        { id: 10, name: "David Lee", email: "david@mail.com", username: "dlee", Phone: "8899001122" },
        { id: 11, name: "Laura Kim", email: "laura@mail.com", username: "lkim", Phone: "9900112233" },
        { id: 12, name: "Tom Harris", email: "tom@mail.com", username: "tharris", Phone: "1011121314" },
        { id: 13, name: "Anna Scott", email: "anna@mail.com", username: "ascott", Phone: "1213141516" },
        { id: 14, name: "James White", email: "james@mail.com", username: "jwhite", Phone: "1314151617" },
    ];

    const [user, setUser] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            const foundUser = users.find(u => u.id === parseInt(id));
            setUser(foundUser);
        }, 1000); // simulate async fetch

        return () => clearTimeout(timer);
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

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
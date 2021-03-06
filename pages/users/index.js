import Link from "next/link";
import React from "react";

const index = ({ users }) => {
    return (
        <div>
            <h2>This is user main page : {users.length}</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>Name: {user.name}</h3>
                    <Link href={`/users/${user.id}`}>Explore</Link>
                </div>
            ))}
        </div>
    );
};

export default index;
export async function getStaticProps(context) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        props: { users: data }, // will be passed to the page component as props
    };
}

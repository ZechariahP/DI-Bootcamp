import React, {Component} from 'react';
import posts from "./../data/posts.json";

export class PostList extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const allPosts = posts.map((post) => (
            <div>
                <h1>{post.title}</h1>
                <h2>{post.content}</h2>
                <p>{post.date}</p>
            </div>
        ));
        return allPosts;
    }
      
}

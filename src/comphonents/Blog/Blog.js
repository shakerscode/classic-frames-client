import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-post">
                <div className="post">
                    <h4> Difference between authorization and authentication</h4>
                    <hr />
                </div>
                <div className="post">
                <h4> Why are you using firebase? What other options do you have to implement authentication?</h4>
                <hr />
                </div>
                <div className="post">
               <h4>What other services does firebase provide other than authentication?</h4>
               <hr />
                </div>
            </div>
        </div>
    );
};

export default Blog;
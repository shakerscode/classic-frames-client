import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-post">
                <div className="post">
                    <h4> Difference between authorization and authentication</h4>
                    <hr />
                    <p>
                        By authentication, we can verify a user. It actually contain users identity. It's a process of identifying a user and validating the identity of a user.
                        Authorization is a process that happen when the authentication is successful.With this process, we can define what resource a user can access. It gives permission to a user to access some specific or spatial data or anything else.
                    </p>
                </div>
                <div className="post">
                    <h4> Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <hr />
                    <p>It's an easier process to get connected with users.It provide simple backend services, ready made UI libraries etc. Its authentication system is easy to build and pretty much maintained. It support Google, Facebook, GitHub, Twitter, Email/Password, Email/Password, Phone, Phone, Apple, Anonymous, Microsoft, Twitter and Yahoo authentication system.
                        <br />
                        <b>The other option to implement authentication is: </b>
                        <br />
                        Single-Factor/Primary Authentication,
                        Two-Factor Authentication (2FA),
                        Single Sign-On (SSO),
                        Multi-Factor Authentication (MFA),
                        Password Authentication Protocol (PAP),
                        Challenge Handshake Authentication Protocol (CHAP) and
                        Extensible Authentication Protocol (EAP)
                    </p>
                </div>
                <div className="post">
                    <h4>What other services does firebase provide other than authentication?</h4>
                    <hr />
                    <p>It provides backend services, easy to use SDKs and ready-made ui libraries to authenticate with users. It provide several authentication system that i mentioned earlier.Beside this, it also provide hosting, google analytics, cloud storage, cloud function, cloud massiging  and many more. And it almost free for a short services website.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
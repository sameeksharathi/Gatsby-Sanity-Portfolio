import React from 'react';
import './navbar.scss'
import { SocialIcon } from 'react-social-icons';
import { Link, graphql } from 'gatsby';

const NavBar = ({ children }) => {
    return (
        <div>
            <header className="nav-head">
                <div className="container">
                    <nav className="nav-links">
                        <Link to="/" activeClassName="active-navlink-home" className="navlink-home text-4xl font-bold cursive tracking-widest">Sameeksha</Link>
                        <Link to="/about" className="navlink" activeClassName="active-navlink">About Me!</Link>
                        <Link to="/project" className="navlink" activeClassName="active-navlink">Projects</Link>
                        <Link to="/experience" className="navlink" activeClassName="active-navlink">Experience</Link>
                        <Link to="/skills" className="navlink" activeClassName="active-navlink">Skills</Link>
                    </nav>
                    <div className="social-icons">
                        <SocialIcon url="https://www.github.com/sameeksharathi" className="social-icon" target="_blank" />
                        <SocialIcon url="https://www.linkedin.com/in/sameeksha-rathi-7a0164141/" className="social-icon" target="_blank" />
                        <SocialIcon url="https://twitter.com/sameeksha__r" className="social-icon" target="_blank" />
                        {/* <Link to="https://www.github.com/sameeksharathi" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
                        <Link to="https://www.linkedin.com/in/sameeksha-rathi-7a0164141/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}><i className="fa fa-linkedin fa-2x" aria-hidden="true" style={{ color: "#0A66C2" }}></i></Link>
                        <Link to="https://twitter.com/sameeksha__r" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} ><i className="fa fa-twitter fa-2x" aria-hidden="true" style={{ color: "#1DA1F2" }}></i></Link> */}
                    </div>
                </div>
            </header>
            {children}
        </div>
    )
}


export default NavBar

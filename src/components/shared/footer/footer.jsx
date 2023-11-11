import React from 'react';
import "./footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <h2 className="footer-text">
                    Weblab3 - SPA on React | <Link to="/">Головна сторінка</Link>
                </h2>
            </footer>
        </div>
    );
};

export default Footer;
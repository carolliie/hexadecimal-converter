import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer>
            <p>Copyright Carile© {currentYear}</p>
        </footer>
    )  
}

export default Footer;
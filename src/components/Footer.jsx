import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer className="footer">
            <p>
                <a href="https://carolliie.github.io/web/" id="svg">
                <img src="https://raw.githubusercontent.com/carolliie/web/9a5242fb29b610ee72dd335b097d3c9d943c81db/images/magician.svg" height="28" weight="28"/>
                </a>        © {currentYear} Carile, Inc.
            </p>
        </footer>
    )  
}

export default Footer;
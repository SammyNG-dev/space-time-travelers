import "./Loader.css";

function Footer() {
    return (
      <footer className="footer">
        <h2 className="texte_footer">© 2074 THE SPACE TIME TRAVELERS</h2>
        <div className="imagesRS">
          <a href="https://www.facebook.com/">
            <img
              id="facebook"
              src="src/assets/images/facebook.png"
              alt="on s'en fout"
            />
          </a>
          <a href="https://x.com/">
            <img id="twitter" src="src/assets/images/twitter.png" alt="c'est pas du porno" />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} FlowSuite. All rights reserved.</p>
      <p className="footer-links">
        <a href="#features">Features</a>
        <span>•</span>
        <a href="#pricing">Pricing</a>
        <span>•</span>
        <a href="#contact">Contact</a>
      </p>
    </footer>
  );
}

export default Footer;

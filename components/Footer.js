import GitHubIcon from "@mui/icons-material/GitHub";
const styles = {
  textAlign: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    <footer id="footer" style={styles}>
      <div>
        <p>
          <a href="https://github.com/drnareshchauhan" className="text-muted">
            <GitHubIcon />
            drnareshchauhan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

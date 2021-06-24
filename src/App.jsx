import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./styles.css";
import { ReactComponent as Logo } from "../public/images/svg/logo.svg";
import { ReactComponent as Mail } from "../public/images/svg/mail.svg";

export const App = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Logo
            src="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          fueri
        </Navbar.Brand>
        <div class="d-block d-md-none ml-auto mr-2">
          <Mail
            src="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center"></Nav>
          <Nav>
            <Nav.Link>トップ</Nav.Link>
            <Nav.Link>サービス</Nav.Link>
            <Nav.Link>制作の流れ</Nav.Link>
            <Nav.Link>よくある質問</Nav.Link>
            <Nav.Link>プロフィール</Nav.Link>
            <Nav.Link className="d-block d-md-none">お問い合わせ</Nav.Link>
          </Nav>
          <div className="d-none d-md-block ml-auto mr-2">
            <Button variant="success">お問い合わせ</Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <main>
        <div className="h2 text-center mt-4 mb-4">
          <span>システム開発・ツール開発</span>
          <br />
          <span className="border-top">業務の手助け、イメージを形にする。</span>
          <div className="mt-4">
            <p></p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-outline-warning">サービスを見る</button>
        </div>
        <section id="services"></section>
        <section id="prices"></section>
        <section id="flow"></section>
        <section id="contact"></section>
      </main>
      <footer></footer>
    </>
  );
};

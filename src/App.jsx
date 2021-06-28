import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./styles.css";
import Logo from "../public/images/png/logo.png";
import Mail from "../public/images/png/mail.png";
import mindMap from "../public/images/png/mindMap.png";
import website from "../public/images/png/website.png";
import data from "../public/images/png/data.png";
import Bg from "../public/images/jpg/bg.jpg";
import { render } from "react-dom";

// const setBg = () => {
//   render.
// };

// React.render();

export const App = () => {
  return (
    <>
      <header id="header">
        <Navbar collapseOnSelect className="fixed-top" expand="lg">
          <Navbar.Brand className="me-auto">
            <img src={Logo} alt="logo" width="40" />
            <span className="text-light">fueri</span>
          </Navbar.Brand>
          <div class="d-block d-md-none">
            <img src={Mail} alt="mail" width="40" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#top" className="text-light">
                トップ
              </Nav.Link>
              <Nav.Link href="#service" className="text-light">
                サービス
              </Nav.Link>
              <Nav.Link href="#workFlow" className="text-light">
                制作の流れ
              </Nav.Link>
              <Nav.Link href="#price" className="text-light">
                料金紹介
              </Nav.Link>{" "}
              <Nav.Link href="#fAQ" className="text-light">
                よくある質問
              </Nav.Link>
              <Nav.Link href="#profile" className="text-light">
                プロフィール
              </Nav.Link>
              <Nav.Link href="" className="d-block d-md-none text-light">
                お問い合わせ
              </Nav.Link>
            </Nav>
            <div className="d-none d-md-block ml-auto mr-2">
              <Button variant="success">お問い合わせ</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        {/* Top */}
        <div
          style={{
            backgroundImage: `url(${Bg}`,
            backgroundSize: "cover",
            // width: "100%",
            height: "100vh",
            // paddingBottom: "66.6666666667%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            // textAlign: "center",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="">
            <div className="h4 text-light text-center mb-5">
              <div className="mb-4">
                <span>システム開発・ツール開発</span>
              </div>
              <div>
                <span className="border-top p-2">
                  業務の手助け、イメージを形にする。
                </span>
              </div>
            </div>
            <div className="text-center pt-5">
              <button className="btn btn-outline-warning">
                サービスを見る
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="service">
          <div>
            <div className="h2 text-center">
              <span className="border-bottom border-info border-3">
                About
                <br />
                fueri.
              </span>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <p>
                  fueri（フエリ）ではGoogleのサービスを中心に、
                  <br />
                  作業の効率化を図ったシステム/ツールを開発しております。
                </p>
                <img className="" src={mindMap} alt="mindMap" width="500" />
              </div>
              <div className="row justify-content-center">
                <p>
                  例えば、
                  <br />
                  書類作成の自動化 / 商品・予約管理システム
                  <br />
                  メールやカレンダーの同期 / データツールの作成等
                  <br />
                  あらゆる業務をサポート致します。
                </p>
                <img className="" src={data} alt="data" width="500" />
              </div>
              <div className="row justify-content-center">
                <p>
                  その他、
                  <br />
                  WebデザインやHTML/CSS/Java Scriptといった
                  <br />
                  フロントエンド開発も行っております。
                </p>
                <img className="" src={website} alt="website" width="500" />
              </div>
            </div>
          </div>
        </section>
        <section id="workFlow"></section>
        <section id="price"></section>
        <section id="fAQ"></section>
        <section id="profile"></section>
      </main>
      <footer></footer>
    </>
  );
};

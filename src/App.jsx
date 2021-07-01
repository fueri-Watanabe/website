import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./styles.css";
import Logo from "../public/images/png/logo.png";
import Mail from "../public/images/png/mail.png";
import mindMap from "../public/images/png/mindMap.png";
import website from "../public/images/png/website.png";
import data from "../public/images/png/data.png";
import Bg from "../public/images/jpg/bg.jpg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const App = () => {
  const [ref, inView] = useInView({
    threshold: 0
  });

  const [toggle, setColor] = useState(false);

  return (
    <>
      <header id="header">
        <Navbar
          collapseOnSelect
          className="fixed-top container-fluid py-1 px-4"
          expand="md"
          style={{
            backgroundColor: toggle
              ? "rgba(255, 255, 255, 0.9)"
              : inView && "rgba(255, 255, 255, 0.5)",
            boxShadow: (toggle || inView) && "0 3px 6px rgba(0, 0, 0, 0.05)"
          }}
        >
          <Navbar.Brand className="me-auto fs-3" href="#">
            <img src={Logo} alt="logo" width="40" />
            <span
              className={
                toggle || inView ? "text-dark ms-2" : "text-light ms-2"
              }
            >
              fueri
            </span>
          </Navbar.Brand>
          <div class="d-block d-md-none me-4">
            <img src={Mail} alt="mail" width="40" />
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setColor(true)}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="text-center align-baseline"
              style={{ fontSize: "1.1rem" }}
            >
              <Nav.Link
                href="#top"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                トップ
              </Nav.Link>
              <Nav.Link
                href="#service"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                サービス
              </Nav.Link>
              <Nav.Link
                href="#workFlow"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                制作の流れ
              </Nav.Link>
              <Nav.Link
                href="#price"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                料金紹介
              </Nav.Link>{" "}
              <Nav.Link
                href="#fAQ"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                よくある質問
              </Nav.Link>
              <Nav.Link
                href="#profile"
                className={
                  toggle || inView ? "text-dark me-md-4" : "text-light me-md-4"
                }
              >
                プロフィール
              </Nav.Link>
              <Nav.Link
                href=""
                className={
                  toggle || inView
                    ? "d-block d-md-none text-dark"
                    : "d-block d-md-none text-light"
                }
              >
                お問い合わせ
              </Nav.Link>
            </Nav>
            <div className="d-none d-md-block ms-2">
              <Button variant="success">お問い合わせ</Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
        {/* Top */}
        <div
          style={{
            backgroundImage: `url(${Bg}`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="">
            <div
              className="fw-bold text-light text-center mb-5"
              style={{ fontSize: "3vmax", textShadow: "black 2px 2px 4px" }}
            >
              <div className="mb-4">
                <span>システム開発・ツール開発</span>
              </div>
              <div>
                <span className="border-top pt-2">
                  業務の手助け、イメージを形にする。
                </span>
              </div>
            </div>
            <div className="text-center pt-5">
              <a href="#service">
                <button className="btn btn-outline-warning btn-lg mt-4">
                  サービスを見る
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="service" ref={ref}>
          <div style={{ fontWeight: "800" }}>
            <div className="h2 text-center mt-4 mb-5">
              <span className="border-bottom border-info border-3">
                About
                <br />
                fueri.
              </span>
            </div>
            <div className="container text-center text-md-start">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <p>
                    fueri（フエリ）ではGoogleのサービスを中心に、
                    <br />
                    作業の効率化を図ったシステム/ツールを開発しております。
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    className="float-end"
                    src={mindMap}
                    alt="mindMap"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4 order-md-1">
                  <p>
                    例えば、
                    <br />
                    書類作成の自動化 / 商品・予約管理システム
                    <br />
                    メールやカレンダーの同期 / データツールの作成等
                    <br />
                    あらゆる業務をサポート致します。
                  </p>
                </div>{" "}
                <div className="col-md-4 order-md-0">
                  <img
                    className="float-start"
                    src={data}
                    alt="data"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-md-4">
                  <p>
                    その他、
                    <br />
                    WebデザインやHTML/CSS/Java Scriptといった
                    <br />
                    フロントエンド開発も行っております。
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    className="float-end"
                    src={website}
                    alt="website"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
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

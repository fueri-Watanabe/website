import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Card, CardGroup } from "react-bootstrap";
import "./styles.css";
import Logo from "../public/images/png/logo.png";
import Logo2 from "../public/images/png/logo2.png";
import Mail from "../public/images/png/mail.png";
import mindMap from "../public/images/png/mindMap.png";
import website from "../public/images/png/website.png";
import data from "../public/images/png/data.png";
import Bg from "../public/images/jpg/bg.jpg";
import Profile from "../public/images/jpg/profile.jpg";
import webIcons from "../public/images/png/WebIcons.png";
import googleIcons from "../public/images/png/GoogleAppIcons.png";
import stars from "../public/images/png/5stars.png";
import Number1 from "../public/images/png/number1.png";
import Number2 from "../public/images/png/number2.png";
import Number3 from "../public/images/png/number3.png";
import Number4 from "../public/images/png/number4.png";
import Number5 from "../public/images/png/number5.png";
import Number6 from "../public/images/png/number6.png";
import PageTop from "../public/images/png/upwards-arrow.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const App = () => {
  const [ref, inView] = useInView({
    threshold: 1
  });

  const [state, setState] = useState(false);

  const navFontWhite = "rgba(255, 255, 255, 0.8)";
  const navFontBlack = "rgba(0, 0, 0, 0.8)";
  const spacing = "2px";
  return (
    <>
      <header id="header">
        <Navbar
          collapseOnSelect
          className="fixed-top container-fluid py-1 px-4 m-0"
          expand="md"
          style={{
            // backgroundColor: (!inView || state) && "rgba(255, 255, 255, 0.8)",
            backgroundColor: (!inView || state) && "rgba(255, 255, 255, 0.4)",
            // boxShadow: (!inView || state) && "0 3px 6px rgba(0, 0, 0, 0.05)"
            boxShadow: (!inView || state) && "0 3px 6px rgba(0, 0, 0, 0.05)"
            // filter: (!inView || state) && "blur(1px)"
          }}
        >
          <Navbar.Brand className="me-auto" href="#">
            <div className="d-none d-md-block fs-3">
              <img src={Logo} alt="logo" width="40" />
              <span
                // className={!inView || state ? "text-dark ms-2" : "text-light ms-2"}
                // className={!inView || state ? "text-black-50 ms-2" : "text-white-50 ms-2"}
                className={"ms-3"}
                style={{
                  letterSpacing: "7px",
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                fueri
              </span>
            </div>
            <img
              src={Logo2}
              alt="logo"
              className="d-block d-md-none mt-1"
              width="50"
            />
          </Navbar.Brand>
          <div className="d-block d-md-none me-4">
            <img src={Mail} alt="mail" width="40" />
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            // onClick={() => setState(prevState => !prevState)}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav
              className="text-center align-baseline"
              style={{
                fontSize: "1.1rem"
              }}
            >
              <Nav.Link
                href="#top"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
                // onMouseOver={() => setState((preState) => setState({...state,onMouse:!preState}))}
                // onMouseLeave={() => setState((preState) => setState({...state,onMouse:!preState}))}
                // style={
                //   {
                // color: setState ? "black" : "white",
                // opacity: setState ? "0.7" : "1"
                //   }
                // }
              >
                トップ
              </Nav.Link>
              <Nav.Link
                href="#service"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                サービス
              </Nav.Link>
              <Nav.Link
                href="#workFlow"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                制作の流れ
              </Nav.Link>
              <Nav.Link
                href="#price"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                料金紹介
              </Nav.Link>{" "}
              <Nav.Link
                href="#fAQ"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                よくある質問
              </Nav.Link>
              <Nav.Link
                href="#profile"
                className={"me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
              >
                プロフィール
              </Nav.Link>
              <Nav.Link
                href=""
                className={"d-block d-md-none me-md-4"}
                style={{
                  letterSpacing: spacing,
                  color: !inView || state ? navFontBlack : navFontWhite
                }}
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
          ref={ref}
        >
          <div>
            <div
              className="fw-bold text-light text-center"
              style={{
                // letterSpacing: spacing,
                fontSize: "3vmax",
                textShadow: "black 2px 2px 4px",
                margin: "110px 0px 130px"
              }}
            >
              <div className="mb-3">
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
                <button className="btn btn-outline-warning btn-lg">
                  サービスを見る
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* About  */}
        <section id="service">
          <div className="pb-5">
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
                <div className="row align-items-center justify-content-center">
                  <img
                    className="col-md-4"
                    src={googleIcons}
                    alt="googleicons"
                    style={{ maxWidth: "70vw" }}
                  />{" "}
                  <img
                    className="col-md-4"
                    src={webIcons}
                    alt="webicons"
                    style={{ maxWidth: "70vw" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* お客様の声 */}
        <section id="Testimonials">
          <div style={{ backgroundColor: "#00AC5A" }}>
            <div
              className="container py-5 text-white"
              style={{ maxWidth: "960px" }}
            >
              <div className="text-center">
                <div className="h2" style={{ fontWeight: "800" }}>
                  <span className="border-bottom border-info border-3">
                    Testimonials.
                  </span>
                </div>
                <p>お客様の声</p>
              </div>
              <div className="">
                <div className="col border-top">
                  <img src={stars} alt="5stars" width="100" />
                  <div className="">
                    <p>
                      Googleカレンダーを日毎にスプレッドシートに反映させ、
                      <br />
                      会社の日報を自動で作成できるようスクリプトを組んでいただきました。
                      <br />
                      別シートにかなり丁寧な説明書きも頂き、
                      <br />
                      もちろんスクリプトも問題なく動作し大満足の仕上がりです。
                      <br />
                      社内をGoogleアプリケーションで統一している最中ですので、
                      <br />
                      ぜひまた依頼させて頂こうと思います。ありがとうございました。
                    </p>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col">2020年10月1日</div>
                    <div className="col text-end">IT・通信・インターネット</div>
                  </div>
                </div>
                <div className="col border-top">
                  <img src={stars} alt="5stars" width="100" />
                  <div className="col-md-4">
                    <p>
                      対応から修正まで素早い対応でありがとうございます。
                      <br />
                      また何かございましたらお願い致します。
                      <br />
                      ありがとうございました。
                    </p>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col">2020年12月25日</div>
                    <div className="col text-end">卸売・小売</div>
                  </div>
                </div>
                <div className="col border-top">
                  <img src={stars} alt="5stars" width="100" />
                  <div className="col-md-4">
                    <p>
                      とても丁寧に対応してもらいました。
                      <br />
                      顧客の「思い」をくみ取る想像力と提案力に裏打ちされたいい仕事をしていただきました。
                      <br />
                      ありがとうございました。
                    </p>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col">2020年12月26日</div>
                    <div className="col text-end">スポーツ・フィットネス</div>
                  </div>
                </div>
                <div className="col border-top">
                  <img src={stars} alt="5stars" width="100" />{" "}
                  <div className="col-md-4">
                    <p>
                      この度も誠にありがとうございました。
                      <br />
                      レスポンスが早く、想像通りのものを作成頂きありがとうございます。
                      <br />
                      今後ともよろしくお願いいたします。
                    </p>
                  </div>
                  <div className="row align-items-center justify-content-between">
                    <div className="col">2021年4月23日</div>
                    <div className="col text-end">卸売・小売</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 制作の流れ */}
        <section id="workFlow">
          <div style={{ backgroundColor: "#666666" }}>
            <div className="container py-5 text-white">
              <div className="text-center">
                <div className="h2" style={{ fontWeight: "800" }}>
                  <span className="border-bottom border-info border-3">
                    Work
                    <br />
                    Flow.
                  </span>
                </div>
                <p>制作の流れ</p>
              </div>
              <div
                className="container border border-white p-5"
                style={{ maxWidth: "1040px" }}
              >
                <div className="py-5">
                  <div className="row align-items-center text-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number1}
                      alt="No.1"
                    />
                    <span className="col-1 d-block d-md-none fs-3">①</span>
                    <span className="col fs-4">お問い合わせ</span>
                  </div>
                  <div className="row">
                    <div
                      className="col-1 col-md-1 py-3 text-center"
                      style={{ fontSize: "0.1vmax" }}
                    >
                      ●<br />●<br />●
                    </div>
                    <span className="col">
                      まずはメールフォームにてお気軽にご連絡ください。
                    </span>
                  </div>
                  <div className="row align-items-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number2}
                      alt="No.2"
                    />
                    <span className="col-1 d-block d-md-none fs-3">②</span>
                    <span className="col fs-4">ヒアリング</span>
                  </div>
                  <div className="row">
                    <div
                      className="col-1 col-md-1 py-3 text-center"
                      style={{ fontSize: "0.1vmax" }}
                    >
                      ●<br />●<br />●
                    </div>
                    <span className="col">
                      作成したい物のイメージなどをお伝え下さい。
                      <br />
                      参考資料・サンプルなど御座いますとより一層早く仕上がります。
                    </span>
                  </div>
                  <div className="row align-items-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number3}
                      alt="No.3"
                    />
                    <span className="col-1 d-block d-md-none fs-3">③</span>
                    <span className="col fs-4">お見積り</span>
                  </div>
                  <div className="row">
                    <div
                      className="col-1 col-md-1 py-3 text-center"
                      style={{ fontSize: "0.1vmax" }}
                    >
                      ●<br />●<br />●
                    </div>
                    <span className="col">
                      打ち合わせ後、数日以内にお見積りを出させていただきます。
                    </span>
                  </div>
                  <div className="row align-items-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number4}
                      alt="No.4"
                    />
                    <span className="col-1 d-block d-md-none fs-3">④</span>
                    <span className="col fs-4">作成開始</span>
                  </div>
                  <div className="row">
                    <div
                      className="col-1 col-md-1 py-3 text-center"
                      style={{ fontSize: "0.1vmax" }}
                    >
                      ●<br />●<br />●
                    </div>
                    <span className="col">
                      作成中のご連絡をスムーズにして頂けると手直しの必要が無くなるなど
                      <br />
                      しっかりした物が出来上がります。
                    </span>
                  </div>
                  <div className="row align-items-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number5}
                      alt="No.5"
                    />
                    <span className="col-1 d-block d-md-none fs-3">⑤</span>
                    <span className="col fs-4">最終確認</span>
                  </div>
                  <div className="row">
                    <div
                      className="col-1 col-md-1 py-3 text-center"
                      style={{ fontSize: "0.1vmax" }}
                    >
                      ●<br />●<br />●
                    </div>
                    <span className="col">
                      出来上がった物を実際に触っていただき、
                      <br />
                      修正箇所や追加の発注が御座いましたらお気軽にお申し付け下さい。
                    </span>
                  </div>
                  <div className="row align-items-center fw-bold">
                    <img
                      className="d-none d-md-block col-2 col-md-1"
                      src={Number6}
                      alt="No.6"
                    />
                    <span className="col-1 d-block d-md-none fs-3">⑥</span>
                    <span className="col fs-4">完了(納品)</span>
                  </div>
                  <div className="row">
                    <div className="col-1 col-md-1 py-3 text-center"></div>
                    <span className="col">
                      ご依頼終了後でもご質問・ご相談等ありましたらお気軽にご連絡ください。
                      <br />
                      ※納品後1ヶ月間は無料で手直しをしております。
                      <br />
                      ※追加の修正の場合は別途のご依頼となり追加料金を頂く場合があります。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 料金紹介 */}
        <section id="price">
          <div className="container pb-5" style={{ maxWidth: "1100px" }}>
            <div
              style={{ fontWeight: "800" }}
              className="border-bottom border-3 border-warning"
            >
              <div className="text-center mt-4 mb-5">
                <div className="h2">
                  <span className="border-bottom border-info border-3">
                    Price.
                  </span>
                </div>
                <p>料金紹介</p>
              </div>
              <div className="mx-2">※税込料金</div>
              <CardGroup className="text-center rounded-0">
                <Card className="mx-2 border">
                  <Card.Header className="bg-primary text-white fs-5 rounded-0 py-4">
                    ツール開発(ライト)
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Card.Title className="m-0 py-5 fs-3">22,000円</Card.Title>
                    <Card.Text className="py-3 bg-light">
                      単一プログラム作成
                    </Card.Text>
                    <Card.Text>サービス内成形アシスト</Card.Text>
                    <Card.Text className="py-3 bg-light">
                      改修(修正)作業
                    </Card.Text>
                    <Card.Text className="pb-3">
                      (例)スプレッドシート成形
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mx-2 border">
                  <Card.Header className="bg-warning text-white fs-5 py-4">
                    ツール開発(標準)
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Card.Title className="m-0 py-5 fs-3">44,000円</Card.Title>
                    <Card.Text className="py-3 bg-light">
                      複数プログラム作成
                    </Card.Text>
                    <Card.Text>各Googleサービス連携</Card.Text>
                    <Card.Text className="py-3 bg-light">
                      データツール開発
                    </Card.Text>
                    <Card.Text className="pb-3">
                      (例)メール本文の情報抽出
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mx-2 border">
                  <Card.Header className="bg-primary text-white fs-5 py-4">
                    システム開発
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Card.Title className="m-0 py-5 fs-3">
                      132,000円～
                    </Card.Title>
                    <Card.Text className="py-1 bg-light">
                      Googleサービスでの
                      <br />
                      システム開発
                    </Card.Text>
                    <Card.Text>予約管理システム</Card.Text>
                    <Card.Text className="py-3 bg-light">
                      業務管理ステム
                    </Card.Text>
                    <Card.Text className="pb-3">
                      (例)顧客管理＆
                      <br />
                      スケジュール管理システム
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="mx-2 border rounded-0">
                  <Card.Header className="bg-primary text-white fs-5 rounded-0 py-4">
                    ツール・システム点検
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Card.Title className="m-0 py-5 fs-3">
                      10,000円/
                      <span className="fs-5">
                        4回分
                        <br />
                        (又は、3,000円/1回)
                      </span>
                    </Card.Title>
                    <Card.Text className="py-3 bg-light">
                      エラー原因究明
                    </Card.Text>
                    <Card.Text>改善方法の提案</Card.Text>
                    <Card.Text className="py-3 bg-light">
                      コンサルティング
                    </Card.Text>
                    <Card.Text className="pb-3">簡易修正</Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
              <div className="mx-2 pb-5">
                作成時間及びプログラム量により追加で料金が発生する場合があります。
                <br />
                上記以外にもWebデザイン・フロントエンド開発、保守業務も行っております。お気軽にご相談・お問い合わせください。
              </div>
              <div className="my-5 pb-5 text-center fs-5">
                多数のクライアント様から想像通りのものが出来ると仰っていただき、
                <br />
                納品の早さと修正の迅速な対応にご好評いただいております。
              </div>
              <Button
                variant="danger"
                className="d-grid mx-auto rounded-pill btn-lg my-5 px-5"
              >
                相談する
              </Button>
            </div>
          </div>
        </section>
        {/* よくある質問 */}
        <section id="fAQ">
          <div className="container pb-5" style={{ maxWidth: "1100px" }}>
            <div style={{ fontWeight: "800" }}>
              <div className="text-center mt-4 mb-5">
                <div className="h2">
                  <span className="border-bottom border-info border-3">
                    FAQ.
                  </span>
                </div>
              </div>
              <table className="table table-striped table-borderless">
                <tbody>
                  <tr>
                    <th>Q.</th>
                    <td>ざっくりとした案しかありませんが大丈夫ですか？</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      初めはざっくりした案でも大丈夫です！
                      <br />
                      相談や提案をしていきご満足頂けるものを作っていきます。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>
                      専門的な知識が無く、作成出来るか分かりませんが依頼しても良いでしょうか？
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      Googleサービスなどの機能では作成出来ないものはこちらで代替案をご提案させていただきます。
                      勿論、相談は無料です。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>
                      ある程度固めてきましたのでプログラムの開発だけお願い出来ないでしょうか？
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      ありがとうございます。
                      概要や設計がありますと仕上がりも早くより良いものが出来上がります。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>
                      大事な顧客情報が載っているのでサービスの共有が出来ないですがよろしいでしょうか？
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      作成作業やデバッグに支障が無ければ大丈夫です。
                      <br />
                      作成内容により作業が進まない場合がございますので事前にお伝えください。
                      <br />
                      fueriでは、個人情報の保護に関する法律その他の関係法令を遵守いたします。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>相談やお見積りは無料でしょうか？</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      はい、無料です。
                      <br />
                      幅広くお受けしておりますのでお気軽にご連絡ください。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>
                      相場が分からず費用が心配です。金額は相談出来ますか？
                    </td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      お客様のご予算に合わせた提案をさせて頂きますのでご安心ください。
                      <br />
                      予算内で可能な範囲を提案させていただきます。料金ページをご参考ください。
                    </td>
                  </tr>
                  <tr>
                    <th>Q.</th>
                    <td>納期の短縮（スピード仕上げ）は対応してますか？</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>
                      対応しております。別途で費用が掛かってきますのでご了承ください。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="d-flex flex-column flex-md-row m-auto text-center justify-content-center border  border-3 border-warning rounded-3 py-4 my-5"
              style={{ maxWidth: "600px" }}
            >
              <div className="pe-md-5">
                <p className="fs-5 fw-bold m-0 pb-2">
                  お手頃な価格で発注いただけます。
                </p>
                <p className="fw-bold">
                  相談・お見積り無料。
                  <br className="d-block d-md-none" />
                  お気軽にお問い合わせください。
                </p>
              </div>
              <Button variant="success" className="align-self-center btn-lg">
                お問い合わせ
              </Button>
            </div>
          </div>
        </section>
        {/* プロフィール */}
        <section id="profile">
          <div className="container pb-5" style={{ maxWidth: "800px" }}>
            <div className="d-flex justify-content-center flex-column flex-md-row align-items-center mt-5">
              <div className="row mx-auto align-items-center">
                <p className="col-md-3 fs-5">渡部　弘</p>
                <p className="col-md-6">HIROSHI WATANABE</p>
                <p className="col-md-12 pb-3">
                  広島県生まれ。独学でプログラミングを学ぶ。
                  <br />
                  2020年9月に初めてプログラム開発の依頼を受け、それ以降
                  <br />
                  Googleサービスのプログラム開発を中心に沢山の仕事を請け負う。
                  <br />
                  お客様からのリピート率が高い。
                </p>
              </div>
              <img src={Profile} alt="profile" width="300px" height="auto" />
            </div>
          </div>
        </section>
      </main>
      {/* フッター */}
      <footer>
        <div className="text-center py-4 text-black-50 mt-5 bg-light">
          ©2021 fueri
        </div>
      </footer>
      {/* ページトップ */}
      <div className="fixed-bottom m-4">
        <a href="#">
          <img
            src={PageTop}
            alt="pageTopAllow"
            className="float-end"
            width="30px"
          />
        </a>
      </div>
    </>
  );
};

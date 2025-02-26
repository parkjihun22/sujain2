import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import


import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `앞선 직주근접 라이프`,
    text2: `세계최대규모 규모 삼성전자 평택캠퍼스<br />
            송탄·칠괴 산단,KG모빌리티 등 <br /> 직주근접 프리미엄`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `안심학세권 프리미엄`,
    text2: `브레인시티 내 초·중·고 모두 개교예정,<br />
              카이스트평택캠퍼스 2027년 개교예정`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `경기도권내 펜타역세권 광역교통망`,
    text2: `평택지제역 1호선,SRT·KTX·GTX A,C라인<br />
            동부화고속도로(예정) 등 교통편리`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `합리적인 분양가 상한제`,
    text2: `입주자의 경제적 부담을 낮춘<br />
            내집마련의 기회`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (방문일자 필드 포함)
  const [registration, setRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistration((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
    <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />

        {/* SEO 최적화를 위한 메타 태그 추가 */}
        <title>브레인시티 수자인</title>
        <meta
          name="description"
          content="브레인시티 수자인ㅣ☎1533-8848ㅣ브레인시티 수자인 모델하우스ㅣ분양가ㅣ평택브레인시티수자인ㅣ입지환경ㅣ프리미엄ㅣ오시는길ㅣ평택 브레인시티"
        />
        <meta
          name="keywords"
          content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인 모델하우스"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ys-sujain.co.kr/" />

        {/* 모바일 친화성을 위한 추가 태그 */}
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph - 소셜 미디어(페이스북, LinkedIn 등) 공유 최적화 */}
        <meta
          property="og:title"
          content="브레인시티 수자인"
        />
        <meta
          property="og:description"
          content="브레인시티 수자인ㅣ☎1533-8848ㅣ브레인시티 수자인 모델하우스ㅣ분양가ㅣ평택브레인시티수자인ㅣ입지환경ㅣ프리미엄ㅣ오시는길ㅣ평택 브레인시티"
        />
        <meta property="og:url" content="https://www.ys-sujain.co.kr/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ys-sujain.co.kr/Main1.png" // 실제 메인 이미지 URL로 변경하세요.
        />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="브레인시티 수자인"
        />
        <meta
          name="twitter:description"
          content="브레인시티 수자인ㅣ☎1533-8848ㅣ브레인시티 수자인 모델하우스ㅣ분양가ㅣ평택브레인시티수자인ㅣ입지환경ㅣ프리미엄ㅣ오시는길ㅣ평택 브레인시티"
        />
        <meta
          name="twitter:image"
          content="https://www.ys-sujain.co.kr/Main1.png" // 실제 이미지 URL로 변경하세요.
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도를 높이기 위한 스키마 마크업 */}
        <script type="application/ld+json">
          {`
      {
        "@context": "http://schema.org",
        "@type": "ApartmentComplex",
        "name": "브레인시티 수자인",
        "description": "브랜드 평판 7위 프리미엄 아파트. 방문 예약 시 신세계상품권 증정 등 다양한 혜택을 제공합니다.",
        "url": "https://www.ys-sujain.co.kr/",
        "image": "https://www.ys-sujain.co.kr/Main1.png",
        "telephone": "1533-8848",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "평택시 장안동 8BL",
          "addressLocality": "평택시 장안동",
          "addressRegion": "경기도",
          "postalCode": "우편번호"
        }
      }
    `}
        </script>
      </Helmet>
    
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )}

          <div className={styles.imageContainer}>
            <img src={mainImage} className={styles.mainImage} alt="브레인시티수자인-mainimage1" />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                분양가 상한제 적용 <span className={styles.greyText}>착한분양가</span> | 부담을 덜어주는 <span className={styles.greyText}>착한 옵션</span> | 계약금 5%로 내집마련기회 <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>평택이 기다린 가장 착한 아파트</div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>평택 브레인시티 수자인</div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="브레인시티푸르지오 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  " 방문 예약 고객 전원 스타벅스 기프티콘 100% 증정 "
                </div>
                <div className={styles.text3}>
                  - 브레인시티 중심상업지구 매우인접 <br />
                  - 첨단 아주대학교 종합병원 도보 5분 <br />
                  - 평택 지제역 1호선, STR, KTX, GTX-A · C 확정으로 펜타역세권 <br />
                  - 모두를 누리는 평택 브레인시티 수자인
                </div>
                <div className={styles.text4}>
                  <a href="https://naver.me/55rUFpYq" target="_black">
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img src={section1_Image1} alt="브레인시티수자인브랜드소개-image2" />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는<br />
                  <span>착한가격의 아파트 브레인시티 수자인</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해<br />
                    브레인시티 수자인이 함께합니다
                  </div>
                </div>
              </div>
              <img src={section8Img3} alt="브레인시티수자인입지환경소개-image2" />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이<br />평택 브레인시티 수자인에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른<br />프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span><br />안전한 이동을 위한 세심한 <span>단지설계</span><br />편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img src={section2_Image1} alt="브레인시티수자인아파트 조감도-image3" />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div className={styles.boxText1} dangerouslySetInnerHTML={{ __html: section.text1 }} />
                  <div className={styles.boxText2} dangerouslySetInnerHTML={{ __html: section.text2 }} />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img src={section4_Image1} alt="브레인시티수자인브랜드소개-image4" />
                <div className={styles.text1}>평택 브레인시티 수자인</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>당신의 삶, 브레인시티수자인에서 시작됩니다</div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>더 알아보기 {">"}</Link>
              </div>
            </div>
          </div>

          {/* 관심고객 등록 섹션 (PC 버전) */}
          <div className={styles.section}>
            <div className={styles.registrationContainer}>
              {/* 왼쪽 안내 문구 영역 */}
              <div className={styles.registrationInfo}>
                <div className={styles.text1}>
                  <p>
                    평택 브레인시티 수자인
                    <br />
                    주변이 궁금하시나요?
                  </p>
                </div>
                <div className={styles.text2}>
                  <p>
                    평택 브레인시티 수자인
                    <br />
                    현장 정보 및 견본주택 정보를 보실 수 있습니다.
                  </p>
                  <p>
                    상담신청을 남겨주시거나 전화로 문의주시면
                    <br />
                    친절하고 자세히 안내해 드리겠습니다.
                  </p>
                </div>
                <div className={styles.text3}>
                  <p>상담문의</p>
                </div>
                <div className={styles.text4}>
                  <p>1533-8848</p>
                </div>
              </div>
              {/* 오른쪽 관심고객 등록 폼 영역 */}
              <div className={styles.registrationSection}>
                <div className={styles.registrationHeader}>브레인시티 수자인</div>
                <div className={styles.registrationDescription}>
                  방문예약
                  
                </div>
                {/* Formspree 연동: onSubmit 제거, action, method 추가 */}
                <form
                  className={styles.registrationForm}
                  action="https://formspree.io/f/xvgzrdkj"
                  method="POST"
                >
                  <label htmlFor="name">이름<span style={{ color: 'red' }}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder=""
                    value={registration.name}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="phonenumber">연락처<span style={{ color: 'red' }}>*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder=""
                    value={registration.phone}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <button type="submit">등록하기</button>
                </form>
              </div>
            </div>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  평택 브레인시티 수자인<br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해<br />
                    평택 브레인시티 수자인이 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="브레인시티수자인오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>

          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
            <img src={mobileImageMain} className={styles.mainImage} alt="브레인시티수자인mobilemain-image1" />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox1}>
              <div className={styles.mainImageTextSub1}>
                분양가 상한제 적용<br />
                <span className={styles.greyText}>착한분양가</span><br />
                부담을 덜어주는<br />
                <span className={styles.greyText}>착한 옵션</span><br />
                계약금 5%로 내집마련기회<br />
                <span className={styles.greyText}>착한조건</span>
              </div>
              <div className={styles.mainImageTitleBox1}>
                <div className={styles.mainImageText1}>평택이 기다린<br /> 가장 착한 아파트</div>
                <div className={styles.mainImageText1}>브레인시티 수자인</div>
              </div>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.text1}>Location</div>
            <div className={styles.text2}>
              "방문예약을 하시면 신세계 상품권 100% 증정 "
            </div>
            <div className={styles.text3}>
              - 브레인시티내 핵심인프라 인접한 입지<br />
              - 첨단 아주대학교 AI종합병원 도보 5분<br />
              - 평택 지제역 KTX, GTX-A · C 확정 삼성전자 평택캠퍼스, 초등학교<br />
              - 모두를 누리는 반도체밸리 주거 타운의 프리미엄
            </div>
            <div className={styles.text4}>
              <a href="https://naver.me/55rUFpYq" target="_black">
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>

          <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
                평택 브레인시티의 중심으로 사는<br />
                <span>착한 가격의 분상제 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해<br />
                  브레인시티 수자인이 함께합니다
                </div>
              </div>
            </div>
            <img src={section8Img3} alt="브레인시티수자인mobile입지안내-image1" />
          </div>

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이<br />
                평택 브레인시티 수자인에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른<br />
                프리미엄 주거라이프를 브레인시티 수자인 모델하우스에서 확인하세요
              </div>
            </div>
            <img src={section2_Image1} alt="브레인시티수자인mobile조감도-image1" />
          </div>

          <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div>

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>

          {/* 관심고객 등록 섹션 (모바일 버전) */}
          <div className={styles.containerRegistration}>
            <div className={styles.registrationHeader}>브레인시티 수자인</div>
            <div className={styles.registrationDescription}>
              방문예약
            </div>
            {/* Formspree 연동: onSubmit 제거, action, method 추가 */}
            <form
              className={styles.registrationForm}
              action="https://formspree.io/f/xvgzrdkj"
              method="POST"
            >
              <label htmlFor="name">이름<span style={{ color: 'red' }}>*</span></label>
              <input
                type="text"
                name="name"
                placeholder=""
                value={registration.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="phonenumber">연락처<span style={{ color: 'red' }}>*</span></label>
              <input
                type="tel"
                name="phone"
                placeholder=""
                value={registration.phone}
                onChange={handleInputChange}
                required
              />
              
              <button type="submit">등록하기</button>
            </form>
          </div>

          <div className={styles.container2}>
            <div>
              <img src={section1_Image1} alt="브레인시티수자인브랜드소개 mobile-image5" />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img src={mobilemap1} alt="브레인시티수자인오시는길안내-mobileimage2" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "인터넷 청약", url: "/SalesInfo/guide" },
    { title: "체크포인트", url: "/SalesInfo/SubscriptionGuide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>평택 브레인시티 수자인 - 인지세안내</title>
        <meta
          name="description"
          content="평택브레인시티수자인의 인지세 안내 페이지는 분양과 관련된 세금 정보를 제공합니다. 인지세는 계약서 작성 시 부과되는 세금으로, 이를 사전에 파악하고 준비하는 것이 중요합니다. 이 페이지에서는 인지세의 계산 방법, 세액, 납부 절차 등을 쉽게 설명하여 고객들이 정확하게 준비할 수 있도록 돕습니다."
        />
        <meta
          name="keywords"
          content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인모델하우스"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/SalesInfo/stampTax" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="평택 브레인시티 수자인 - 인지세안내"
        />
        <meta
          property="og:description"
          content="평택브레인시티수자인의 인지세 안내 페이지는 분양과 관련된 세금 정보를 제공합니다. 인지세는 계약서 작성 시 부과되는 세금으로, 이를 사전에 파악하고 준비하는 것이 중요합니다. 이 페이지에서는 인지세의 계산 방법, 세액, 납부 절차 등을 쉽게 설명하여 고객들이 정확하게 준비할 수 있도록 돕습니다."
        />
        <meta
          property="og:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.vaaclubs.com/SalesInfo/stampTax"
        />
        <meta property="og:site_name" content="평택 브레인시티 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 수자인 - 인지세안내"
        />
        <meta
          name="twitter:description"
          content="평택브레인시티수자인의 인지세 안내 페이지는 분양과 관련된 세금 정보를 제공합니다. 인지세는 계약서 작성 시 부과되는 세금으로, 이를 사전에 파악하고 준비하는 것이 중요합니다. 이 페이지에서는 인지세의 계산 방법, 세액, 납부 절차 등을 쉽게 설명하여 고객들이 정확하게 준비할 수 있도록 돕습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.vaaclubs.com/SalesInfo/stampTax"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                 {
             "@context": "https://schema.org",
             "@type": "WebPage",
             "name": "평택 브레인시티 수자인 - 인지세안내",
             "description": "평택브레인시티수자인의 인지세 안내 페이지는 분양과 관련된 세금 정보를 제공합니다. 인지세는 계약서 작성 시 부과되는 세금으로, 이를 사전에 파악하고 준비하는 것이 중요합니다. 이 페이지에서는 인지세의 계산 방법, 세액, 납부 절차 등을 쉽게 설명하여 고객들이 정확하게 준비할 수 있도록 돕습니다.",
             "url": "https://www.vaaclubs.com/SalesInfo/stampTax"
                 }
                 `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택브레인시티수자인 - 인지세안내
      </h1>
      <p className={styles.screenReaderOnly}>
        평택브레인시티수자인의 인지세 안내 페이지는 분양과 관련된 세금 정보를
        제공합니다. 인지세는 계약서 작성 시 부과되는 세금으로, 이를 사전에
        파악하고 준비하는 것이 중요합니다. 이 페이지에서는 인지세의 계산 방법,
        세액, 납부 절차 등을 쉽게 설명하여 고객들이 정확하게 준비할 수 있도록
        돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>인터넷 청약하는 방법을 확인하세요</div>
        <div>소수만 누리는 프리미엄 브레인시티 수자인</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="브레인시티수자인인지세안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;

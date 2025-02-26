import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

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
        <title>평택 브레인시티 수자인 - 커뮤니티</title>
        <meta
          name="description"
          content="평택브레인시티수자인의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다."
        />
        <meta
          name="keywords"
          content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인모델하우스"
        />
        <link
          rel="canonical"
          href="https://www.vaaclubs.com/ComplexGuide/community"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="평택 브레인시티 수자인 - 커뮤니티"
        />
        <meta
          property="og:description"
          content="평택브레인시티수자인의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다."
        />
        <meta
          property="og:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.vaaclubs.com/ComplexGuide/community"
        />
        <meta property="og:site_name" content="평택 브레인시티 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 수자인 - 커뮤니티"
        />
        <meta
          name="twitter:description"
          content="평택브레인시티수자인의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다."
        />
        <meta
          name="twitter:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.vaaclubs.com/ComplexGuide/community"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
					{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "평택 브레인시티 수자인 - 커뮤니티",
			"description": "평택브레인시티수자인의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티 시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한 다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을 높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다.",
			"url": "https://www.vaaclubs.com/ComplexGuide/community"
					}
					`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="단지안내" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택브레인시티수자인 - 커뮤니티
      </h1>
      <p className={styles.screenReaderOnly}>
        평택브레인시티수자인의 커뮤니티 페이지에서는 단지 내 다양한 커뮤니티
        시설을 소개합니다. 헬스장, 독서실, 카페 등 주민들의 편리한 생활을 위한
        다양한 시설들이 준비되어 있습니다. 이러한 시설들이 입주민들의 삶의 질을
        높이고, 더 나은 공동체 생활을 만들어주는 역할을 합니다.
      </p>

      <div className={styles.textBox}>
        <div>브레인시티 수자인이 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="브레인시티커뮤니티안내-image1"
        onLoad={handleImageLoad} // 이미지 로드 후 애니메이션 실행
      />

      <Footer />
    </div>
  );
};

export default ComplexGuide3;

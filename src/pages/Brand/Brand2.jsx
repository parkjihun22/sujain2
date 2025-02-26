import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

import styles from "./Brand.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
  const menuContents = [
    { title: "홍보영상", url: "/brand/intro" },
    { title: "홍보 영상", url: "/brand/video" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
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
        <title>평택 브레인시티 수자인 - 홍보영상</title>
        <meta
          name="description"
          content="최첨단 영상 기술과 감성적 스토리텔링이 어우러진 홍보영상으로, 브랜드의 미래 비전과 핵심 가치를 생생하게 전달합니다. 창의적 연출이 고객의 마음을 사로잡아 잊지 못할 경험을 선사합니다. 혁신적 비주얼과 감동 스토리로 모두를 사로잡습니다."
        />
        <meta
          name="keywords"
          content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인모델하우스"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/Brand/video" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="평택 브레인시티 수자인 - 홍보영상" />
        <meta
          property="og:description"
          content="최첨단 영상 기술과 감성적 스토리텔링이 어우러진 홍보영상으로, 브랜드의 미래 비전과 핵심 가치를 생생하게 전달합니다. 창의적 연출이 고객의 마음을 사로잡아 잊지 못할 경험을 선사합니다. 혁신적 비주얼과 감동 스토리로 모두를 사로잡습니다."
        />
        <meta
          property="og:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.vaaclubs.com/Brand/video"
        />
        <meta property="og:site_name" content="평택 브레인시티 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 수자인 - 홍보영상"
        />
        <meta
          name="twitter:description"
          content="최첨단 영상 기술과 감성적 스토리텔링이 어우러진 홍보영상으로, 브랜드의 미래 비전과 핵심 가치를 생생하게 전달합니다. 창의적 연출이 고객의 마음을 사로잡아 잊지 못할 경험을 선사합니다. 혁신적 비주얼과 감동 스토리로 모두를 사로잡습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.vaaclubs.com/Brand/video"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
															{
																"@context": "https://schema.org",
																"@type": "WebPage",
																"name": "평택 브레인시티 수자인 - 홍보영상",
																"description": "최첨단 영상 기술과 감성적 스토리텔링이 어우러진 홍보영상으로, 브랜드의 미래 비전과 핵심 가치를 생생하게 전달합니다. 창의적 연출이 고객의 마음을 사로잡아 잊지 못할 경험을 선사합니다. 혁신적 비주얼과 감동 스토리로 모두를 사로잡습니다.",
																"url": "https://www.vaaclubs.com/Brand/video"
															}
															`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="홍보영상" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택브레인시티수자인 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>
        평택브레인시티수자인의 홍보 영상은 이 프로젝트의 주요 특징과 장점을
        시각적으로 잘 전달하는 매체입니다. 고품질의 영상으로 이 단지의 설계,
        입지, 편의 시설 등 다양한 요소를 소개하며, 분양을 고민하는 고객들에게
        유익한 정보를 제공합니다. 영상 시청을 통해 평택브레인시티수자인의 매력을
        더 깊이 이해할 수 있습니다.
      </p>

      <div
        className={`${styles.textBox} ${isTextVisible ? styles.active : ""}`}
      >
        <div>브레인시티 수자인이 눈부신 가치 위에</div>
        <div>새로운 자부심으로 찾아옵니다.</div>
      </div>

      <div className={styles.videoContainer}>
        <YouTube
          videoId="jziyaoDz2Ns"
          opts={{
            width: isMobile ? "400" : "1300",
            height: isMobile ? "300" : "500",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0); // 비디오 종료 시 정지
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brand2;

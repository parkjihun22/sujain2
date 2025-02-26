import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './FloorPlan.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";




const FloorPlanVideos= () => {
  const [activeTab, setActiveTab] = useState(1); // 기본적으로 첫 번째 탭 활성화
  const [isScroll, setIsScroll] = useState(false);

  // 동영상 파일 경로들 (Vimeo 비디오 URL)
  const videoFiles = [
    { id: 1, title: "입지환경 안내영상", src: "https://player.vimeo.com/video/1050694620?autoplay=1" },
    { id: 2, title: "59타입 안내영상", src: "https://player.vimeo.com/video/1050694286?autoplay=1" },
    { id: 3, title: "84타입 안내영상", src: "https://player.vimeo.com/video/1050686637?autoplay=1" }
  ];

  const handleTabClick = (id) => {
    setActiveTab(id); // 탭 클릭 시 활성화된 탭 변경
  };

  const menuContents = [
    { title: "59㎡", url: "/FloorPlan/59A" },
    { title: "84㎡", url: "/FloorPlan/59B" },
    { title: "세대안내영상", url: "/FloorPlan/videos" }  // 세대안내영상 링크
  ];

  const { pathname } = useLocation();
  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
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
              <title>평택 브레인시티 수자인 - 세대안내영상</title>
              <meta
                name="description"
                content="세대안내영상 안내 페이지는 평택브레인시티수자인의 각 아파트 세대안내영상를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요."
              />
              <meta
                name="keywords"
                content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인모델하우스"
              />
              <link rel="canonical" href="https://www.vaaclubs.com/FloorPlan/videos" />
      
              {/* Open Graph - 소셜 미디어 공유 최적화 */}
              <meta
                property="og:title"
                content="평택 브레인시티 수자인 - 세대안내영상"
              />
              <meta
                property="og:description"
                content="세대안내영상 안내 페이지는 평택브레인시티수자인의 각 아파트 세대안내영상를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요."
              />
              <meta
                property="og:image"
                content="https://www.vaaclubs.com/Main1.png"
              />
              <meta
                property="og:url"
                content="https://www.vaaclubs.com/FloorPlan/videos"
              />
              <meta property="og:site_name" content="평택 브레인시티 수자인" />
      
              {/* Twitter 카드 설정 */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta
                name="twitter:title"
                content="평택 브레인시티 수자인 - 세대안내영상"
              />
              <meta
                name="twitter:description"
                content="세대안내영상 안내 페이지는 평택브레인시티수자인의 각 아파트 세대안내영상를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요."
              />
              <meta
                name="twitter:image"
                content="https://www.vaaclubs.com/Main1.png"
              />
              <meta
                name="twitter:url"
                content="https://www.vaaclubs.com/FloorPlan/videos"
              />
      
              {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
              <script type="application/ld+json">
                {`
                  {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "평택 브레인시티 수자인 - 세대안내영상",
              "description": "세대안내영상 안내 페이지는 평택브레인시티수자인의 각 아파트 세대안내영상를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요.",
              "url": "https://www.vaaclubs.com/FloorPlan/videos"
                  }
                  `}
              </script>
            </Helmet>
                    <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="세대안내" />

      <MenuBar contents={menuContents} />

      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>평택브레인시티수자인 - 세대영상안내</h1>
			<p className={styles.screenReaderOnly}>세대안내영상 안내 페이지는 평택브레인시티수자인의 각 아파트 세대안내영상를 제공합니다. 고객들이 아파트의 구조를 정확히 이해하고, 자신의 생활 스타일에 맞는 평형을 선택할 수 있도록 돕습니다. 다양한 평면 설계를 확인하고 자신에게 맞는 최적의 공간을 찾아보세요.
			</p>

			<div className={styles.textBox}>
				<div>평택 브레인시티의 눈부신 가치위에 찾아오는는</div>
				<div>수자인의 가치를 영상으로 확인해보세요</div>
			</div>

      {/* 두 번째 메뉴바 (탭 메뉴) */}
      <div className={styles.tabMenu}>
        {videoFiles.map((video) => (
          <button
            key={video.id}
            className={activeTab === video.id ? styles.activeTab : styles.tabButton}
            onClick={() => handleTabClick(video.id)}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* 동영상 표시 */}
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoPlayer}
          src={videoFiles.find(video => video.id === activeTab)?.src}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlanVideos;

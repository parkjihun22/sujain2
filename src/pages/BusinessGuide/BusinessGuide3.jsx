import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

const BusinessGuide2 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "계약서류안내", url: "/BusinessGuide/plan" },
    { title: "선착순계약 서류안내", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
  const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
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

  // 이미지 표시 여부를 변경하는 로직 추가 (예시)
  useEffect(() => {
    const handleImageVisibility = () => {
      if (window.scrollY > 200) {
        // 예시: 스크롤이 200px 이상 내려갔을 때
        setIsImageVisible(true);
      } else {
        setIsImageVisible(false);
      }
    };

    window.addEventListener("scroll", handleImageVisibility);

    return () => {
      window.removeEventListener("scroll", handleImageVisibility);
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
        <title>평택 브레인시티 수자인 - 계약서류안내</title>
        <meta
          name="description"
          content="계약서류안내 페이지에서는 분양 당첨 후 필요한 서류들에 대해 안내합니다. 계약 체결을 위해 준비해야 할 서류 목록과 함께, 각 서류의 제출 기한과 정확한 준비 방법을 안내하여 고객들이 혼동 없이 준비할 수 있도록 돕습니다."
        />
        <meta
          name="keywords"
          content="브레인시티수자인, 평택브레인시티수자인, 브레인시티수자인모델하우스"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/BusinessGuide/documents" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="평택 브레인시티 수자인 - 계약서류안내" />
        <meta
          property="og:description"
          content="계약서류안내 페이지에서는 분양 당첨 후 필요한 서류들에 대해 안내합니다. 계약 체결을 위해 준비해야 할 서류 목록과 함께, 각 서류의 제출 기한과 정확한 준비 방법을 안내하여 고객들이 혼동 없이 준비할 수 있도록 돕습니다."
        />
        <meta
          property="og:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.vaaclubs.com/BusinessGuide/documents"
        />
        <meta property="og:site_name" content="평택 브레인시티 수자인" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="평택 브레인시티 수자인 - 계약서류안내"
        />
        <meta
          name="twitter:description"
          content="계약서류안내 페이지에서는 분양 당첨 후 필요한 서류들에 대해 안내합니다. 계약 체결을 위해 준비해야 할 서류 목록과 함께, 각 서류의 제출 기한과 정확한 준비 방법을 안내하여 고객들이 혼동 없이 준비할 수 있도록 돕습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.vaaclubs.com/BusinessGuide/documents"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
								{
						"@context": "https://schema.org",
						"@type": "WebPage",
						"name": "평택 브레인시티 수자인 - 계약서류안내",
						"description": "계약서류안내 페이지에서는 분양 당첨 후 필요한 서류들에 대해 안내합니다. 계약 체결을 위해 준비해야 할 서류 목록과 함께, 각 서류의 제출 기한과 정확한 준비 방법을 안내하여 고객들이 혼동 없이 준비할 수 있도록 돕습니다.",
						"url": "https://www.vaaclubs.com/BusinessGuide/documents"
								}
								`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="사업개요" />
      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택브레인시티수자인 - 계약서류안내
      </h1>
      <p className={styles.screenReaderOnly}>
        계약서류안내 페이지지에서는 분양 당첨 후 필요한 서류들에 대해
        안내합니다. 계약 체결을 위해 준비해야 할 서류 목록과 함께, 각 서류의
        제출 기한과 정확한 준비 방법을 안내하여 고객들이 혼동 없이 준비할 수
        있도록 돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>평택 브레인시티의 눈부신 가치 위에</div>
        <div>평택 브레인시티 수자인의 새로운 자부심으로 찾아옵니다.</div>
      </div>

      {/* 이미지에 isImageVisible 상태 적용 */}
      <img
        className={`${styles.image4} ${isImageVisible ? styles.visible : ""}`}
        src={page1}
        alt="브레인시티수자인계약서류안내-image1"
      />

      <Footer />
    </div>
  );
};

export default BusinessGuide2;

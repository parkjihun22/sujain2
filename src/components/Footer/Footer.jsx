import React from "react";
import { useMediaQuery } from 'react-responsive';
import { IoCall } from "react-icons/io5";

import styles from "./Footer.module.scss"
import footerlogo from "../../assets/logo/footerlogo.png";

const Footer = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

	return (
		<>
			{!isMobile ? (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>
						<div className={styles.textContainer}>
							<div className={styles.text1}>본사 : 우21556 인천광역시 남동구 미래로 14, 201호 ㅣ 시공: ㈜한양건설 </div>
							<div className={styles.text1}>※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}>대표자명: 박지훈 / eyeful31@naver.com </div>

							<div className={styles.text2}>COPYRIGHTⓒ 평택 브레인시티 수자인 ALL RIGHTS RESERVED.</div>
						</div>

						<a href="https://naver.me/55rUFpYq"><IoCall size={25} /> 1533-8848</a>
					</div>
				</div>
			) : (
				<div className={styles.container}>
					<img src={footerlogo} />

					<div className={styles.innerContainer}>

						<div className={styles.textContainer}>
							<div className={styles.text1}>본사 : 우21556 인천광역시 남동구 미래로 14, 201호 ㅣ 시공: ㈜한양건설</div>
							<div className={styles.text1}>※본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.</div>
							<div className={styles.text1}> 대표자명: 박지훈 / eyeful31@naver.com </div>
							<div className={styles.text2}>COPYRIGHTⓒ 평택 브레인시티 수자인 ALL RIGHTS RESERVED.</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Footer
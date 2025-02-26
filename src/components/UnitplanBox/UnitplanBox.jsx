import React, { useEffect, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import styles from "./UnitplanBox.module.scss";
import room59A from "../../assets/UnitplanBox/59A.png";
import room59B from "../../assets/UnitplanBox/59B.png";
import room84A from "../../assets/UnitplanBox/59A.png";
import room84B from "../../assets/UnitplanBox/59A.png";
import room114A from "../../assets/UnitplanBox/59A.png";
import room114B from "../../assets/UnitplanBox/59A.png";
import { useMediaQuery } from "react-responsive";

const contents = [
    { type: '59㎡', src: room59A },
    { type: '84㎡', src: room59B },


]

const UnitplanBox = () => {
    const [istype, setIsType] = useState(contents[0]); // 기본값은 첫 번째 객체
    const [isIdx, setIdx] = useState(0);
    const [isImage, setIsImage] = useState(room59A);
    const [isLeft, setIsLeft] = useState(false); // 처음에는 왼쪽으로 갈 수 없음
    const [isRight, setIsRight] = useState(true); // 처음에는 오른쪽으로 갈 수 있음
    const [animationClass, setAnimationClass] = useState(''); // 애니메이션 클래스 상태
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

    // istype 변경 시 이미지 변경
    useEffect(() => {
        setAnimationClass(styles.fadeIn); // 이미지 변경 시 애니메이션 트리거
        setIsImage(istype.src);

        const timeout = setTimeout(() => {
            setAnimationClass(''); // 애니메이션이 끝나면 클래스 제거
        }, 500); // 애니메이션 지속 시간과 일치하게 설정

        return () => clearTimeout(timeout); // 메모리 누수를 방지하기 위한 cleanup
    }, [istype]);

    // isIdx에 따라 왼쪽, 오른쪽 버튼 활성화 상태 변경
    useEffect(() => {
        setIsLeft(isIdx > 0);
        setIsRight(isIdx < contents.length - 1);
    }, [isIdx]);

    // 왼쪽 화살표 클릭 시 이전 이미지로 변경
    const leftArray = () => {
        if (isIdx > 0) {
            const newIndex = isIdx - 1;
            setIsType(contents[newIndex]);
            setIdx(newIndex);
        }
    }

    // 오른쪽 화살표 클릭 시 다음 이미지로 변경
    const rightArray = () => {
        if (isIdx < contents.length - 1) {
            const newIndex = isIdx + 1;
            setIsType(contents[newIndex]);
            setIdx(newIndex);
        }
    }

    return (
        <>
            <div className={styles.btnContainer}>
                {contents.map((value, idx) => (
                    <div
                        key={idx}
                        className={value.type === istype.type ? styles.clickedTypeBtn : styles.typeBtn}
                        onClick={() => { setIsType(value); setIdx(idx); }}
                    >
                        {value.type}
                    </div>
                ))}
            </div>

            <div className={styles.imgContainer}>
                <AiOutlineLeft
                    size={!isMobile? 150 : 60}
                    color={isLeft ? '#d1af73' : '#eedec3'} // 조건에 맞게 색상 변경
                    onClick={isLeft ? leftArray : undefined} // isLeft가 true일 때만 클릭 가능
                />
                <img className={`${styles.typeImg} ${animationClass}`} src={isImage} alt={istype.type} />
                <AiOutlineRight
                    size={!isMobile? 150 : 60}
                    color={isRight ? '#d1af73' : '#eedec3'} // 조건에 맞게 색상 변경
                    onClick={isRight ? rightArray : undefined} // isRight가 true일 때만 클릭 가능
                />
            </div>
        </>
    )
}

export default UnitplanBox;

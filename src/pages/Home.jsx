import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "./Home.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = () => {
  useEffect(() => {
    myIntroContentSwap();
  }, []);

  // 배너 이름 밑에 글자 바꿔주는 기능
  const myIntroContentSwap = () => {
    const content = document.querySelectorAll(`.myIntroduce .content`);
    const arrow = document.querySelector(".arrowDirection");

    content.forEach((item, idx) => {
      new Promise((resolve) => {
        setTimeout(() => {
          item.style.opacity = 1;
          resolve(0);
        }, idx * 300);
      })
        .then(() => {
          setTimeout(() => {
            item.style.opacity = 0;
          }, 300);
        })
        .catch((err) => {
          console.log("myIntroContentSwap에러 :" + err);
        });
    });

    setTimeout(() => {
      arrow.style.opacity = 1;
    }, content.length * 300 + 700);
  };

  return (
    <>
      <div className="wrap">
        <div className="top-container">
          <span>
            <h2>FE개발자 .......test</h2>
          </span>
          <div className="myIntroduce">
            <div className="content" style={{ opacity: 0 }}>
              1994.11.26
            </div>
            <div className="content" style={{ opacity: 0 }}>
              컴퓨터소프트웨어학
            </div>
            <div className="content" style={{ opacity: 0 }}>
              ....
            </div>
            <div className="content" style={{ opacity: 0 }}>
              MBTI : INTP
            </div>
            <div className="content" style={{ opacity: 0 }}>
              HTML/CSS
            </div>
            <div className="content" style={{ opacity: 0 }}>
              JavaScript
            </div>
            <div className="content" style={{ opacity: 0 }}>
              React
            </div>
            <div className="content" style={{ opacity: 0 }}>
              TypeScript
            </div>
            <div className="content" style={{ opacity: 0 }}>
              MUI / Styled-Component
            </div>
            <div className="content" style={{ opacity: 0 }}>
              Web Front-End Developer
            </div>
            <div className="arrowDirection" style={{ opacity: 0 }}>
              <img src="./ArrowDirection.png" />
              <div>아래로 스크롤 해주세요!</div>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="outerDiv">
            <span>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                lazy={true}
                autoplay={{
                  // delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/2a2afef3-db1f-4b19-90c9-3cbf35611ca6" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/cc470c38-27e8-4b12-a20d-0ca46a1f297d" loading="lazy" />
                </SwiperSlide>
              </Swiper>
            </span>
            <ul>
              <li>DOK 프로젝트</li>
              <li>로그인 , 회원가입 기능 구현</li>
              <li>
                <p>회원가입 폼의 입력 값이 조건에 안 맞을 시 즉시 사용자에게 알려줍니다. </p>
                <p>제출 시 회원가입 정보가 암호화되어 DB에 저장됩니다.</p>
              </li>
            </ul>
          </div>
          <div className="outerDiv">
            <ul>
              <li>DOK 프로젝트</li>
              <li>
                <p>마이페이지에서 정보 조회,추가,수정,작성글 확인</p>
              </li>
              <li>
                <p>마이페이지에서 각 카테고리 클릭 시</p>
                <p>프로필 조회, 추가, 수정, 작성글 조회등이 가능하게 구현하였습니다.</p>
              </li>
            </ul>
            <span>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                lazy={true}
                autoplay={{
                  // delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/7e192b8e-511e-44ac-82ad-0db2a8b22636" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/3d2d79a4-a7f4-4eb7-a176-41ac59fc7284" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/98975b35-f3f4-4f9c-a5af-5eae293d3efe" loading="lazy" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://github.com/pado0711/DokProject-backend/assets/109504714/b9449c0a-ab36-4b3c-aae4-65e22a116c9f" loading="lazy" />
                </SwiperSlide>
              </Swiper>
            </span>
          </div>
          <div className="outerDiv">
            <span>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                lazy={true}
                autoplay={{
                  // delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <video controls width="100%" height="auto" autoPlay loop muted>
                    <source src="./PandaFlower/주문하기.mp4" type="video/mp4" />
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video controls width="100%" height="auto" autoPlay loop muted>
                    <source src="./PandaFlower/장바구니.mp4" type="video/mp4" />
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video controls width="100%" height="auto" autoPlay loop muted>
                    <source src="./PandaFlower/검색기능.mp4" type="video/mp4" />
                  </video>
                </SwiperSlide>
              </Swiper>
            </span>
            <ul>
              <li>쇼핑몰 프로젝트</li>
              <li>주문하기, 장바구니, 검색기능</li>
              <li>
                <p>순수 JS만 사용하여 쇼핑몰 프로젝트를 진행했습니다.</p>
                <p>주문하기, 장바구니, 검색기능 등을 구현하였습니다.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-container">
          <span>
            <p>감사합니다</p>
          </span>
          <span>
            <a href="#top">Top</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;

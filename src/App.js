/* eslint-disable-next-line */
import './App.css';
import React, { useEffect, useState } from 'react';


const { kakao } = window; //kakao is not defined 오류 해결

function App() {
  //Kakao Map 코드
  useEffect(() => {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
	    center: new kakao.maps.LatLng(37.566526, 126.987338), //지도의 중심 좌표, 현재 서울 중구 을지로 IBK 파이낸스 타워
	    level: 3 //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [])

  //버튼 색 변경 Event 코드
  let data = ["전체", "외식업", "서비스업", "소매업"];

  let [btnActive, setBtnActive] = useState("-1"); // 변수, 함수 선언

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value; // value 반환
    });
  };

  return (
    <div className="App">
      {/* header */}
      <header class="header">
        <a href='https://www.ibk.co.kr/' class="link">|기업은행 바로가기|</a>
      </header>

      {/* nav */}
      <div class="tablist">
        <img class="box" src="/img/box.png" alt="box"></img>
      </div>

      {/* content */}
      <div class="content">

        {/* aside */}
        <div class="aside">
          <div class="boxstartImg">
            <img class="boxstart" src="/img/boxstart.png" alt="boxstart"></img>
          </div>
          <div class="choicebar">
            <button class="pbtn">점포위치</button>
            <button class="cbtn">업종선택</button>
          </div>
          <div class="searchtxt">검색하거나 지도에서 위치를 선택하세요</div>
          <div class="search">
		        <input type="text" title="검색" class="search_input"></input>
		        <button type="button" class="search_button">검색</button>
	        </div>
          <div class="checkmap">
          <input type='checkbox' name='map' value='mapval' />지도에 직접 위치 선택하기
          </div>
          <div class="businessbar">
            {/*<button value="0" class="btn">전체</button>
            <button value="1"class="btn">외식업</button>
            <button value="2" class="btn">서비스업</button>
            <button value="3" class="btn">소매업</button>*/}
            { data.map((item, idx) => {
                return (
                  <>
                  <button
                    value={idx}
                    className={"btn" + (idx == btnActive ? "Active" : "")}
                    onClick={toggleActive}>{item}</button></>
                );
            })}
          </div>
          <div class="submit">
            <button class="submitbtn">적용</button>
          </div>
        </div>

        {/* main */}
        <div class="main">
          <div id="map" style={{ width : "1240px", height : "auto"}}></div>
        </div>

        {/* raside */}
        <div class="raside">
            <button class="mapbtn">위치탐색</button>
            <button class="people">유동인구</button>
            <button class="dashboard">대시보드</button>
            <button class="findproperty" onClick={() => window.open('https://new.land.naver.com/complexes?ms=37.5663278,126.98847759884775,18&a=APT:ABYG:JGC&e=RETAIL/', '_blank')}>매물 찾기</button>
        </div>
      </div>

      {/* footer */}
      <footer class="footer">
        <div class="banner">
          <div>
            <a href="https://pos.ibkbox.net/main/index.do"><img class="boxpos" src="/img/footImg.png" alt="boxpos"></img></a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;

/* eslint-disable-next-line */
import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <header class="header">
        <a href='https://www.ibk.co.kr/' class="link">|기업은행 바로가기|</a>
      </header>
      {/* nav */}
      <div class="tablist">
        <div class="logo">
            <img class="box" src="/img/box.png" alt="box"></img>
            <ul class="list">
	            <li><a href="#" class="tab">서비스 소개</a></li>
	            <li><a href="#" class="tab">튜토리얼</a></li>
	            <li><a href="#" class="tab">분석 방법</a></li>
            </ul>
        </div>
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
          <div class="submit">
            <button class="submitbtn">적용</button>
          </div>
        </div>
        {/* main */}
        <div class="main">
        </div>
        {/* raside */}
        <div class="raside">
            <button class="people">유동인구</button>
            <button class="dashboard">대시보드</button>
        </div>
      </div>
      {/* footer */}
      <footer class="footer">
        <div class="banner">
          <div>
            <img class="boxpos" src="/img/footImg.png" alt="boxpos"></img>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

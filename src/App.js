/* eslint-disable */
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <a className="header" href="https://www.ibk.co.kr/">[기업은행 바로가기]</a>

      {/* navigation bar */}
      <div className="nav">
        <img className="logo" src="img/logo.png"></img>
        {/*<img className="dropbox" src="img/dropbox-black.png"></img>*/}
        {/*<span className="start">IBK BOX START</span>*/}
        <span className="logo-name">START</span>
        <span class="introduce">서비스 소개</span>
        <span class="tutorial">튜토리얼</span>
        <span class="analysis">분석 방법</span>  
      </div>

      {/* 사이드바 left */}
      <div className="aside-left">
      </div>

      {/* center 화면 */}
      <div className="center">
      </div>

      { /* 사이드바 right */}
      <div className="aside-right">
      </div>

      {/* footer */}
      <div className="footer">
      </div>
    </div>
  );
}

export default App;

/*eslint-disable*/ //터미널에서 warning 메세지(Lint) 지워줌

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛짐', '파이썬 독학'])

  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">

      <div className="black-nav">
        <h4 style={{color:'pink', fontSize:'16px'}}>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copylst = [...글제목];
        copylst.sort();
        글제목변경(copylst);
      }}>정렬</button>

      <div className = "list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>🤵‍♂️</button>
        <p>12월 18일 발행</p>
      </div>

      <div className = "list">
        <h4>{ 글제목[1] }</h4>
        <p>12월 18일 발행</p>
      </div>
      
      <div className = "list">
        <h4>{ 글제목[2] }</h4>
        <p>12월 18일 발행</p>
      </div>

      <Modal></Modal>
      
    </div>
  );
}

//component
function Modal(){
  return (
    <div className="madal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

let comp = () => {
  return (
    <div></div>
  )
}

export default App;
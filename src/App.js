/*eslint-disable*/ //터미널에서 warning 메세지(Lint) 지워줌

import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['웹 프로그래밍 언어', '앱테크 추천', '하루 만에 어플 만들기', '프론트엔드 백엔드 차이점', '프론트엔드 기술 면접', '프론트엔드 사이드 프로젝트'])

  let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0, 0]);
  let [다운, 다운변경] = useState([0, 0, 0, 0, 0, 0]);

  let [모달, 모달변경] = useState(0);

  let [모달제목, 모달제목변경] = useState('');

  return (
    <div className="container">

      {
        글제목.map(function (element, count) {

          return (
            <List index={count} 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉변경={따봉변경} 다운={다운} 다운변경={다운변경} 모달={모달} 모달변경={모달변경} 모달제목변경={모달제목변경}></List>
          )
        })
      }

      {
        모달 == 1 ? <Modal 모달제목={모달제목}></Modal> : null
      }


    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.모달제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

function List(props) {
  return (
    <div className="list">
      <h4
        onClick={() => {
          if (props.모달 == 0) {
            props.모달제목변경(props.글제목[props.index]);
            props.모달변경(1);
          }
          else {
            props.모달변경(0);
          }
        }}
      >{props.글제목[props.index]}
        <span onClick={(event) => {
          event.stopPropagation();
          let copy따봉 = [...props.따봉];
          copy따봉[props.index] += 1;
          props.따봉변경(copy따봉);
        }}>👍</span>{props.따봉[props.index]}
        <span onClick={(event) => {
          event.stopPropagation();
          let copy다운 = [...props.다운];
          copy다운[props.index] += 1;
          props.다운변경(copy다운);
        }}>👎</span>{props.다운[props.index]}
      </h4>
      <p>12월 18일 발행</p>
    </div>
  )
}

export default App;
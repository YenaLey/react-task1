import './App.css';
import { useState } from 'react';

function App() {

    let [글제목, 글제목변경] = useState(['웹 프로그래밍 언어', '앱테크 추천', '하루 만에 어플 만들기', '프론트엔드 백엔드 차이점', '프론트엔드 기술 면접', '프론트엔드 사이드 프로젝트'])

    let [따봉, 따봉변경] = useState([0, 0, 0, 0, 0, 0]);

    let [모달, 모달변경] = useState(0);

    let [모달제목, 모달제목변경] = useState('');

    let [입력값, 입력값변경] = useState('');

    return (
        <div className="container">

            <div className="input-box">
                <input onChange={(e) => {
                    입력값변경(e.target.value);
                }}></input>
                <button onClick={() => {
                    if (입력값.trim() == '') {
                        alert("제목을 입력하세요.");
                    }
                    else {
                        let copy글제목 = [...글제목];
                        let copy따봉 = [...따봉];
                        copy글제목.unshift(입력값);
                        copy따봉.unshift(0);
                        글제목변경(copy글제목);
                    }
                }}>업로드</button>
            </div>

            {
                글제목.map(function (element, count) {
                    return (
                        <List index={count} 글제목={글제목} 글제목변경={글제목변경} 따봉={따봉} 따봉변경={따봉변경} 모달={모달} 모달변경={모달변경} 모달제목변경={모달제목변경}></List>
                    )
                })
            }

            {
                모달 == 1 ? <Modal 모달제목={모달제목}></Modal> : null
            }

        </div>
    );
}

function Modal({ 모달제목 }) {

    return (
        <div className="modal">
            <h4>{모달제목}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

function List(props) {

    return (
        <div className="list">
            <h4 onClick={() => {
                props.모달변경(!props.모달);
                props.모달제목변경(props.글제목[props.index]);
            }}>{props.글제목[props.index]} <span onClick={(event) => {
                let copy따봉 = [...props.따봉];
                copy따봉[props.index] += 1;
                props.따봉변경(copy따봉);
                event.stopPropagation();
            }}>👍</span> {props.따봉[props.index]} </h4>
            <p>12월 18일 발행</p>
            <button onClick={()=>{
                let copy글제목 = [...props.글제목];
                let copy따봉 = [...props.따봉];
                copy글제목.splice(props.index, 1);
                copy따봉.splice(props.index, 1);
                props.글제목변경(copy글제목);
                props.따봉변경(copy따봉);
            }}>삭제</button>
        </div>
    )
}

export default App;
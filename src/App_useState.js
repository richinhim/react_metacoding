import { useState } from 'react';
import './App.css';
import Sub from './Sub';

//0.React 엔진- 데이터변경감지에서 UI그려주는
//1.실행과정(index.html) -SPA
//2.문법 JSX문법
//3.nextjs - hooks
//4.바벨(자바스크립트ES5) -> ES6
//5.

//(1)return시에 하나의 DOM만 리턴할 수 있다.
//(2)변수선언은 let 혹은 const로만 해야 함.
//(3) if 사용 불가능X -> 삼항연산자(조건?값(true):값(false))
//(4) 조건부 렌더링 -> (조건 && 값(true))
//(5) css 디자인
//  - 내부에 적는 방법
//  - 외부 파일에 적는 방법
//  - 라이브러리 사용(부트스르랩,component-styled)

// let a = 10; //변수
// const b = 20; //상수

function App() {
  //function add() {}

  // let number = 1; // 상태값 아님.
  const [number, setNumber] = useState(1); //React안에 hooks 라이브러리 상태값이 됨.

  const add = () => {
    //number++;
    setNumber(number + 1); //리엑트한테 number값 변경할께 라고 요청
    console.log('add', number);
  };

  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자:{number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}

export default App;

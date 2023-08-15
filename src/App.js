import './App.css';

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

let a = 10; //변수
const b = 20; //상수

function App() {
  let c;
  let d = undefined;
  console.log(c);
  const mystyle = {
    color: 'red',
  };

  let list = [1, 2, 3];

  return (
    /* <div>
      <div style={mystyle}>안녕{a === 20 ? '10입니다.' : '10이 아닙니다.'}</div>
      <h1 className="box-style">해딩태그{b === 10 && '20입니다.'}</h1>
      <hr />
    </div> */

    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}

export default App;

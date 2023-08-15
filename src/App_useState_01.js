import './App.css';
import { useState } from 'react';

function App() {
  console.log('App 실행됨');
  // 다운로드 받음.

  const [num, setNum] = useState(5);
  let sample = [
    { id: 1, name: '홍길동' },
    { id: 2, name: '임꺽정' },
    { id: 3, name: '장보고' },
    { id: 4, name: '코스' },
  ];
  const [users, setUsers] = useState(sample); //레퍼런스 변경되야 동작!!

  const download = () => {
    //fetch().then().then();
    //setUsers([...sample]);
    //setUsers(sample);
    //기존 데이터 세팅
    //sample.push({ id: 5, name: '조자룡' }); //push는 기존 데이터를 변경한다.
    //const a = sample.concat({ id: 5, name: '조자룡' });
    //console.log(sample);

    //기존 데이터 세팅
    setUsers([...sample, { id: num, name: '조자룡' }]);
    setNum(num + 1);
  };
  // 랜더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id},{u.name}
        </h1>
      ))}
    </div>
  );
}

export default App;

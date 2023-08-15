import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(0);

  const [search, setSearch] = useState();
  const download = () => {
    //다운로드 받고 (통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };

  //실행시점 :
  // (1) App() 함수가 최초 실행될 때(마운트될 때/ App()그림이 최초 그려질 때)
  // (2) 상태 변수가 변경될 때(그게 dependencList에 등록되어 있어야 함.)
  // (3)의존리스트 관리를 할수 있다.
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);

  return (
    <div>
      <h1>검색</h1>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터: {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;

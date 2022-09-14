import { useState, useEffect } from "react";

function App() {
  // count 변경하는 함수
  const [counter, setValue] = useState(0);
  // keyword 변경하는 함수
  const [keyword, setKeyword] = useState("");
  // 클릭할 때 마다 count + 1씩 올리는 함수 / setValue ((현재값) = > 현재값 + 1)
  const onClick = () => setValue((prev) => prev + 1);
  // event > target > value를 인식해서 keyword 변경하는 함수
  const onChange = (event) => setKeyword(event.target.value);

  // useEffect 언제 함수를 실행할지 지정하는 함수

  // useEffect(() => {실행할 함수}, [react가 감지할 데이터, 이 값이 변경되면 실행 / 공란이면 한번만 실행한다는 뜻])
  useEffect(() => {
    console.log("i run only once.")
  }, []);
  // useEffect(() => {실행할 함수}, [keyword가 변경될 때 마다 실행])
  useEffect(() => {
      console.log("I run when 'keyword' changes.", keyword)
  }, [keyword]);
  // useEffect(() => {실행할 함수}, [counter가 변경될 때 마다 실행])
  useEffect(() => {
      console.log("I run when 'counter' changes.")
  }, [counter]);
  // useEffect(() => {실행할 함수}, [counter와 keyword가 변경될 때 마다 실행])
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes.")
}, [keyword, counter]);
  // useEffect(() => {if(keyword의 길이가 5개 보다 클 경우에 실행) {실행할 함수}}, [keyword가 변경될 때 마다 실행])
  useEffect(() => {
    if(keyword.length > 5) {
    console.log("keyword's length more than 5")
  }
}, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
// 자식 요소 전달방법
// 1. props 속성을 사용해서 전달
// 2. props에 내장되어진 children 속성을 사용해서 전달.

export default function Props3({ ch1, children }) {
  // console.log(props);
  // const ch1 = <h2>chapter 1</h2>;
  return (
    <div>
      <h1>자식요소 학습하기</h1>
      {ch1}
      {children}
    </div>
  );
}

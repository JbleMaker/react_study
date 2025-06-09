// 매개변수에 들어올 때부터 구조분해
// 구조 분해 할당

export default function Props2({ a, b }) {
  console.log(a, b);
  return (
    <div>
      <p>a - {a}</p>
      <p>b - {b}</p>
    </div>
  );
}

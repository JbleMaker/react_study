/**
 *  [[JSX의 특징]]
 *
 *
 */
function HelloJsx() {
  // 1. 태그가 열리면 꼭 닫혀야 한다.
  const jsx1 = (
    <div>
      <p>JSX의 특징</p>
      <input type="text" />
    </div>
  );

  // 2. 두개 이상의 JSX는 하나의 JSX로 감싸야한다.
  const jsx2 = (
    <div>
      <div></div>
      <div></div>
    </div>
  );

  // 3. 변수, 상수, 리스트, 값 등을 표현하려면 {}로 감싸서 표현한다.
  const name = "jongbo";
  const age = 34;
  const dd = "ddd";

  const jsx3 = (
    <div>
      <h3>NAME: {name}</h3>
      <h3>AGE: {age + 1}</h3>
    </div>
  );

  // 4. 2번에서 2개 이상의 jsx는 하나로 감싸야한다고 했음\
  //    이때, 그룹을 위해 만들어진 태그가 있다.

  const jsx4 = (
    <>
      <div></div>
      <div></div>
    </>
  );
  const jsx5 = (
    <>
      <div></div>
      <div></div>
    </>
  );
  const jsx6 = (
    <div>
      {jsx4}
      {jsx5}
    </div>
  );

  const nameList = [
    <div key={1}>1</div>,
    <div key={2}>2</div>,
    <div key={3}>3</div>,
    <div key={4}>4</div>,
    <div key={5}>5</div>,
  ];

  const nameList2 = ["rla", "whd", "qh", "kim", "joing"];

  return (
    <div>
      {jsx1}
      {jsx2}
      {jsx3}
      {nameList}
      {nameList2}
    </div>
  );
}

export default HelloJsx;

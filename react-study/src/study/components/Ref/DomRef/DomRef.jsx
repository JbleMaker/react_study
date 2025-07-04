import React, { useEffect, useRef } from "react";

function DomRef(props) {
  const inputRef = useRef();

  // 마운트, 언마운트 관리
  useEffect(() => {
    console.log("마운트(장착)");
    console.log(inputRef.current.value);
    return () => {
      console.log("언마운트(해제)");
    };
  });

  console.log("렌더링");

  return (
    <div>
      <input type="text" ref={inputRef} value={"abc"} />
    </div>
  );
}

export default DomRef;

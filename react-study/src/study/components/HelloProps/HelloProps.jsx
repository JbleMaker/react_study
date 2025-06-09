import Props1 from "./Props1/Props1";
import Props2 from "./Props2/Props2";
import Props3 from "./Props3/Props3";

export default function HelloProps() {
  return (
    <div>
      <Props3 ch1={<h2>chapter 1</h2>} />
      <Props3>
        <h2>chapter 2</h2>
      </Props3>
    </div>
  );
}

export default function CountButton({ text, value, onClick }) {
  console.log("CountButton Rendering");
  return (
    <>
      <button onClick={onClick} value={value}>
        {text}
      </button>
    </>
  );
}

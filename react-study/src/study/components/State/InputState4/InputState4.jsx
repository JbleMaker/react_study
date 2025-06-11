/**
 * input 3개를 만든다 (productNmae, price, stock)
 * 확인 버튼을 누르면 table에 추가한다.
 */

import { useRef, useState } from "react";

function InputState4() {
  const productEmpty = {
    productName: "",
    price: "",
    stock: "",
  };

  const [products, setProducts] = useState([]);
  const [saveProduct, setSaveProduct] = useState(productEmpty);
  const inputSet = useRef();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSaveProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleOnClick = () => {
    setProducts((prev) => [...prev, saveProduct]);
    setSaveProduct(productEmpty);
    inputSet.current.focus();
  };

  return (
    <div>
      <div>
        <label htmlFor="">상품명</label>
        <input
          name="productName"
          type="text"
          onChange={handleOnChange}
          value={saveProduct.productName}
          ref={inputSet}
        />
      </div>
      <div>
        <label htmlFor="">가격</label>
        <input
          name="price"
          type="text"
          onChange={handleOnChange}
          value={saveProduct.price}
        />
      </div>
      <div>
        <label htmlFor="">수량</label>
        <input
          name="stock"
          type="text"
          onChange={handleOnChange}
          value={saveProduct.stock}
        />
      </div>
      <div>
        <button onClick={handleOnClick}>확인</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;

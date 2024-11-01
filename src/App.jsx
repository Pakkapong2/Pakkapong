import React, {useState} from "react";

const App = () => {
  let [price, setCounter] = useState(5);
  const update = ()=> {
    setCounter(price+1);
  }
  const decrease = ()=> {
    setCounter(price-1);
  }
  return (
    <div>
      <h2>ไก่ปิ้งถึงสวรรค์</h2>
      <h2>ราคาไม้ละ {price} บาท
      <button onClick={update}>+</button>
      <button onClick={decrease}>-</button>
      </h2>
      <p>5ไม้ {price*5}บาท </p>
      <p>10ไม้ {price*10}บาท </p>
      <p>20ไม้ {price*20}บาท </p>
      <p>30ไม้ {price*30}บาท </p>
      
    </div>
  );
};

export default App;

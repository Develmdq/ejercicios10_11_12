import { useState } from "react";

const Cuadrado = () => {
  const [color, setColor] = useState("rgb(0,0,0)");
  const [intervalChange, setIntervalChange] = useState(0);

  const styleDiv = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
  };

  const styleCuadrado = {
    width: "255px",
    height: "255px",
    transition: "background 1s",
    backgroundColor: `${color}`,
  };

  console.log(intervalChange);

  const changeRandomColor = (e) => {
    setIntervalChange(
      setInterval(() => {
        const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum);
        const r = getRandomNumber(255);
        const g = getRandomNumber(255);
        const b = getRandomNumber(255);

        setColor(`rgb(${r},${g},${b})`);
      }, 1000)
    );

    console.log(e.type, intervalChange);
  };

  const stopRandomColor = (e) => {
    clearInterval(intervalChange);
    console.log(e.type, intervalChange);
  };

  return (
    <div style={styleDiv}>
      <div
        style={styleCuadrado}
        onMouseOver={changeRandomColor}
        onMouseLeave={stopRandomColor}
        onDoubleClick={stopRandomColor}
      />
    </div>
  );
};

export default Cuadrado;

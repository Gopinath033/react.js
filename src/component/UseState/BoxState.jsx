import React, { useState , useEffect} from "react";

let boxColor = "black"
let borderColor = 'white'

function BoxState() {
  const [dynamicColor, setDynamicColor] = useState(boxColor, borderColor)

  const click = () => {
    setDynamicColor(
        dynamicColor === "black" ? "white" : "black"
    );
  };

  useEffect(() => {
    borderColor = dynamicColor
  }, [dynamicColor])

  return (
    <div>
    <h3>useState</h3>
      <div style={{ backgroundColor: dynamicColor, border: ` 2px solid ${borderColor}`,
      color: borderColor,  width: '100px', padding: '25px', textAlign: 'center' }}>Color Box</div>
      <button onClick={click}>change</button>
    </div>
  );
}

export default BoxState;

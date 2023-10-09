import React from "react";

function DynamicData(props) {

  const defaultData = {
    name: "No Name",
    icon: "No Icon",
  };

  // destructure
  const { dynamicData = defaultData } = props
  // futher destructure
  const { name, aboutMe } = dynamicData

  return (
    <div>
      <h3>Plant Type</h3>
      <div>
        Name : {dynamicData.name} <br />
        Icon: {dynamicData.icon} <br /><br />
        { name === 'Rose' ? <span>⭐..rose as expected(ternary condition)</span> : <span></span>}
        { aboutMe.map( (data, index) => <div key={index}>{index+1}. {data}</div>) }

      </div>
    </div>
  );
}

export default DynamicData;

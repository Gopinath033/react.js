import React from "react";

function Content({ listData, isLoad }) {
  return (
    <div>
      {isLoad && <p>Loading</p>}
      {!isLoad && <ul>
        {listData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>}
    </div>
  );
}

export default Content;

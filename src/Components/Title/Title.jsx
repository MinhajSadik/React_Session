import React from "react";

const Title = () => {
  console.log("rendering title");
  return <div>Title</div>;
};

export default React.memo(Title);

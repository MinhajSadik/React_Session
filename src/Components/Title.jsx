import React from "react";

function Title() {
  console.log(`rendering Title`);

  return (
    <div>
      <h3>Learning useCallback & memo & useMemo hooks</h3>
    </div>
  );
}
export default React.memo(Title);

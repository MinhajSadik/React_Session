import React, { useContext } from "react";
import { DataContext } from "../../../App";

export default function Login() {
  const dataContext = useContext(DataContext);

  return (
    <div>
      {dataContext.map((data) => (
        <ul key={data.id}>
          <li>{data.title}</li>
        </ul>
      ))}
    </div>
  );
}

import React from "react";

export const UserList = ({ list }) => {
  return (
    <div>
      {" "}
      <div className="userList">
        <ul>
          {list.map((item, i) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

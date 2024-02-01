import { useState, useEffect } from "react";

const List = function({onSelectUser, id, url}) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`${url}users.json`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setUserList(await response.json());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="userList">
      {userList.map((user) => (
        <div
          className={id !== user.id ? "list-item" : "list-item active"}
          key={user.id}
          onClick={() => onSelectUser(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default List;
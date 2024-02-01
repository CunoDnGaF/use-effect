import { useState, useEffect } from "react";

const Details  = function({id, url}) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}.json`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      setUser(await response.json());
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  if(loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="details">
        <img className="user-avatar" src={user.avatar} />
        <div className="details-item name">{user.name}</div>
        <div className="details-item">City: {user.details.city}</div>
        <div className="details-item">Company: {user.details.company}</div>
        <div className="details-item">Position: {user.details.position}</div>
      </div>
    );
  }
}

export default Details;
import { useState } from 'react';
import List from './List/List';
import Details from './Details/Details';

const UsersWidget  = function() {
  const [user, setUser] = useState({});
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

  return (
    <div className="users-widget">
      <List onSelectUser={setUser} id={user.id} url={url}/>
      {user.id ? <Details id={user.id}  url={url} /> : null}
    </div>
  );
}

export default UsersWidget;
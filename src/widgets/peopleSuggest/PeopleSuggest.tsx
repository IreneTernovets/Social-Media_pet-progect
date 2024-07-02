import { useEffect, useState } from "react";
import PeopleSuggestElement from "./PeopleSuggestElement.tsx";

interface User {
  id: number;
  name: string;
  email: string;
}

const getRandomUsers = (users: User[], count: number): User[] => {
  const shuffled = [...users].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const PeopleSuggest = () => {
  const [randomUsers, setRandomUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setRandomUsers(getRandomUsers(data, 5));
      });
  }, []);

  return (
    <div className="widget">
      <h3 className="widget-header">Who to follow</h3>
      <div className="widget-elements">
        {randomUsers.map((user) => (
          <PeopleSuggestElement key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default PeopleSuggest;

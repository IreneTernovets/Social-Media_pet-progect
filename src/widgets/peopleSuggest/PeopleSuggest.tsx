import { useEffect, useState } from "react"
import PeopleSuggestElement from "./PeopleSuggestElement.tsx";

interface User {
  id: number;
  name: string;
  email: string;
  }

const PeopleSuggest = () => {

    const [usersArray, setUsersArray] = useState<User[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
         .then(res => res.json())
         .then (data => setUsersArray(data))
    }, [])

     
  return (
    <div className='people-suggest-widget'>
      <h3 className='people-suggest-widget-header'>Who to follow</h3>
      <div className='people-suggest-widget-elements'>
       {usersArray.map(user => (
          <PeopleSuggestElement key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default PeopleSuggest

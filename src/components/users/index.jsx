import { useEffect, useState } from "react";



export default function users() {

    const [userList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);
    async function fetchAllUsers(){
        try {
            setPending(true);
            const  apiResponse = await fetch('https://dummyjson.com/users')
            const result = await apiResponse.json()
            
            if (result?.users) {

                setUsersList(result?.users);
                setPending(false);
            }else{
                setUsersList([]);
                setPending(false);
            }
            console.log(result);
            
        } catch (error) {
            
        }
    }

    // function HandleFetchListOfUser(){
    //     fetchAllUsers();
    // }

    // useEffect(() =>{
    //     fetchAllUsers();
    // },[])

    console.log(userList);
    if(pending) {
        return <h1>Fetching Users. Please wait...</h1>
    }
    return (
        <div>
            <h1>All users lists is</h1>
            <button onClick={fetchAllUsers}>Fetch Users List</button>
            <ul>
                {userList && userList.length > 0 ?(
                userList.map((userItem) => (
                   <li key={userItem?.id}>
                    <p>{userItem?.firstName} {userItem?.lastName}</p>
                   </li>
                    ))
                ):(  <h1>No User Found</h1>)}
            </ul>
        </div>
    );
}
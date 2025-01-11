import Button from "@/components/common/Button";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get<UserProps[]>(
              "https://jsonplaceholder.typicode.com/users"
            );
            console.log(response.data)
            setUsers(response.data); 
          } catch (error) {
            console.error("Error fetching users:", error);
          } 
        };
    
        fetchUsers();
      }, []);
    
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-between items-center">
        <h1>Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
          {users &&
            users.map((user) => (
                <UserCard key={user.id} {...user} />
              ))}
        </div>
      </main>
    </div>
  );
};


export default Users;

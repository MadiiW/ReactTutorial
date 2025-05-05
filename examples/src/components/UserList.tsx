const users = ['Anna', 'Tom', 'Dieter'];

 export default function UserList() {
 return (
   <ul>
     {users.map(user => <li>{user}</li>)}
   </ul>
 );
}

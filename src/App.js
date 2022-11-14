// import { useState } from "react";
// import AddUserForm from "./forms/AddUserForm";
// import UserTable from "./table/userTable";
import React, { }  from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return(
    <div className="main">
     <h2>Crud Operations</h2>
<BrowserRouter>
<Routes>
  <Route exact path='/create' element={<Create/>} />
  <Route exact path='/read' element={<Read/>} />
  <Route exact path='/update' element={<Update/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

// function App() {

//   const usersData = [
//     {id:1,name:"Ramesh",username:"ramesh"},
//     {id:2,name:"Sankar",username:"sankar"},
//     {id:3,name:"Ram",username:"ram"}
//   ];

// const addUser = (user) => {
//   user.id = users.length +1;
//   setUsers([...users,user])
// }

// const [users,setUsers] = useState(usersData);


//   return (
//     <div className='container'>
//       <h1>Crud Operation in React Js</h1>
//       <div className='flex-row'>
//         <div className='flex-large'>
//           <h2>Add User</h2>
//           <AddUserForm addUser={addUser}/>
//         </div>
//         <div className='flex-large'>
//           <h2>View Users</h2>
//           <UserTable users = {users}/>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;

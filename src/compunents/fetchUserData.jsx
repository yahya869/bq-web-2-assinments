// import { useEffect, useState } from "react"

// export function fetchUserData() {
//   const [user,setUser] = useState(null)
//   useEffect(()=>{
//     async function fetchData() {
//       const respons = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await respons.json()
//       // console.log(respons);
//       console.log(data[0].name);
//       setUser(data[0]);
//     }
//     fetchData()
//   },[])
//   if (!user) {
//     return(
//       <div>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
//       </div>
//     )
//   }
//   return(
//     <>
//     <h1>Use Effect</h1>
//     <h2>User Data</h2>
//     <span>{user.name}</span>
//     </>
//   )
// }

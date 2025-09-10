// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// const API = () => {
//   const [users, setUser] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const fetchApi = async () => {
//     setLoading(true)

//     try {
//       const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
//       setUser(res.data)
//     }
//     catch (err) {
//       setError(err.message)
//     }
//     finally {
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchApi()
//   }, [])
//   if (loading) return <h1>Loading......</h1>
//   if (error) return <h2 style={{ color: "red" }}>{error}</h2>
//   return (
//     <div>
//       <h1>Total Count {users.length}</h1>
//       {
//         users.map((item, i) => (
//           <div className="container">
//             {users.map((item) => (
//               <div className='card' key={item.id}>
//                 <p>ID: {item.id}</p>
//                 <h1>{item.title}</h1>
//                 <h2>{item.completed ? "Completed" : "Not Completed"}</h2>
//               </div>
//             ))}
//           </div>
//         ))
//       }
//       <button onClick={() => fetchApi(users)} >ReFetch Data</button>
//     </div>
//   )
// }

// export default API
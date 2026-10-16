
// import "./App.css";

import { useEffect, useState } from "react";

function App(){

  const [count, setCount] = useState(1);

  // function increaseCount(){
  //   setCount(currVal => currVal + 1);
  // }

  // function increaseCount(){
  //   setCount(function(currVal){ 
  //     return currVal + 1;
  //   });
  // }

  useEffect(function(){
    console.log("above setinterval")
    setInterval(increaseCount, 1000);
  }, [])

  return(
    <div>
      {count}
    </div>
  )
}

// function App() {
//   return (
//     <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//       <Greeting name={"raman"} />
//       <div style={{ display: "#flex", justifyContent: "center" }}>
//         <div>
//           <div>
//             <PostComponent
//               name={"harkirat"}
//               followerCount={20}
//               time={"2m ago"}
//               img={
//                 "https://pixabay.com/photos/budapest-chain-bridge-st-10498528/"
//               }
//               description={"what to know big all the individual "}
//             />
//             <br />
//           </div>
//           <div>
//             <PostComponent
//               name={"raman"}
//               followerCount={30}
//               time={"3m ago"}
//               img={
//                 "https://pixabay.com/photos/sea-nature-ship-sailboat-ocean-10206814/"
//               }
//               description={"How to get hired in 2026"}
//             />
//             <br />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const style = {width: 200, backgroundColor:"white", borderRadius:10 , borderColor: "gray", borderWidth: 1, padding : 20}

// function PostComponent({name, followerCount, time, image, description}) {
//   return (
//     <div style={style}>
//       <div style={{ display: "flex" }}>
//         <img
//           src={image}
//           style={{ width: 30, height: 30, borderRadius: 30 }}
//         />
//         <div style={{ fontSize: 20, marginLeft: 10 }}>
//           <b>{name}</b>
//           <div>{followerCount}</div>
//           <div>{time}</div>
//         </div>
//       </div>

//       <div style={{ fontSize: 12 }}>{description}</div>
//     </div>
//   );
// }

// const Greeting = ({name}) =>{
//   return <h1>Hello, {name}</h1>
// }

export default App;

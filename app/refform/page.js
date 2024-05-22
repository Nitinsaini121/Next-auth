"use client";
import React, { useRef } from "react";

function page() {
  const refff = useRef(null);
  const handleclick = (e) => {
    e.preventDefault();
    const value = refff.current;
    console.log("full form value" , value)
    ;
    console.log("value", value["name"].value);
    console.log("value", value["email"].value);
    console.log("value", value["number"].value);
    console.log("value", value["text"].value);

  };

  return (
    <div>
      <form ref={refff}>
        <input placeholder="Enter your Name" name="name" />
        <input placeholder="Enter your Email" name="email" />
        <input placeholder="Enter your Number" name="number" />
        <input placeholder="Enter your Any Text" name="text" />
        <button onClick={(e) => handleclick(e)}>submit</button>
      </form>
    </div>
  );
}

export default page;


// "use client"


// import React, { useState } from 'react';

// function App() {
//   const [url, setUrl] = useState("");

//   const handleSubmit = () => {
//     let constructedUrl = "ndfjdnjfj?";
//     document.querySelectorAll('input[type="checkbox"]').forEach(input => {
//       constructedUrl += `${input.name}=${input.checked}&`;
//       input.checked = false;
//     });
//     constructedUrl = constructedUrl.slice(0, -1);
//     setUrl(constructedUrl);
//     console.log(constructedUrl);
//     // window.open(constructedUrl, '_blank');
//   };

//   return (
//     <div>
//       <label>Option 1</label><input name="option1" type="checkbox" />
//       <br />
//       <label>Option 2</label><input name="option2" type="checkbox" />
//       <br />
//       <button id="submit-button" onClick={handleSubmit}>Submit</button>
//       {url && <p>Constructed URL: {url}</p>}
//     </div>
//   );
// }

// export default App;

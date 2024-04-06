import { useState } from "react"

export default function Todo(){
    const [input,setInput]=useState("")
    const [array,setArray]=useState([])
    let handlechange=(event)=>{
        setInput(event.target.value)

    }

    let handleSubmit=(evnt)=>{
        evnt.preventDefault();
        if(input!==""){
        setArray([...array,input])
        setInput("");
    }
    }
    const deleteItem = (indx) => {
        const newArray = [...array];
        newArray.splice(indx, 1);
        setArray(newArray);
    };
    const cleaerItem=()=>{
        setArray([]);
    }
    return(
        <div className="Tod">
            <form action="" onSubmit={handleSubmit}>
            <h1>Todo list</h1>
            <input type="text" value={input} onChange={handlechange } />
            </form>
          
            <ol>
          {array.map((data,index) => (
          
            <li key={index}>
                <input type="checkbox" />
                <input type="text" value={data} />
            <button onClick={()=>deleteItem(index)} >delete</button>
            </li>
          ))}
          </ol>
          
          <button onClick={cleaerItem}>clear all</button>

        </div>
    )
}



// import React, { useState } from "react";

// export default function Todo() {
//     const [input, setInput] = useState("");
//     const [array, setArray] = useState([]);
//     const [editingIndex, setEditingIndex] = useState(null);
//     const [editInput, setEditInput] = useState("");

//     const handleChange = (event) => {
//         setInput(event.target.value);
//     };

//     const handleEditChange = (event) => {
//         setEditInput(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (input.trim() !== "") {
//             setArray([...array, input]);
//             setInput("");
//         }
//     };

//     const handleEditSubmit = (index) => {
//         const newArray = [...array];
//         newArray[index] = editInput;
//         setArray(newArray);
//         setEditingIndex(null);
//         setEditInput("");
//     };

//     const deleteItem = (index) => {
//         const newArray = array.filter((item, i) => i !== index);
//         setArray(newArray);
//     };

//     const handleClearAll = () => {
//         setArray([]);
//     };

//     const handleEditClick = (index) => {
//         setEditingIndex(index);
//         setEditInput(array[index]);
//     };

//     return (
//         <div className="Todo">
//             <form onSubmit={handleSubmit}>
//                 <h1>Todo list</h1>
//                 <input type="text" value={input} onChange={handleChange} />
//             </form>

//             <ol>
//                 {array.map((data, index) => (
//                     <li key={index}>
//                         {editingIndex === index ? (
//                             <>
//                                 <input type="text" value={editInput} onChange={handleEditChange} />
//                                 <button onClick={() => handleEditSubmit(index)}>Save</button>
//                             </>
//                         ) : (
//                             <>
//                                 <input type="checkbox" />
//                                 {data}
//                                 <button onClick={() => handleEditClick(index)}>Edit</button>
//                             </>
//                         )}
//                         <button onClick={() => deleteItem(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ol>

//             <button onClick={handleClearAll}>Clear All</button>
//         </div>
//     );
// }

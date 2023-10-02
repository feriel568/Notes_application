// import { useEffect } from "react";
// const NoteDetails = ({note})=>{

    // const handleDelete = async()=>{
    //     const response = await fetch("/api/notes/" + note._id , {
    //         method: "DELETE",
    //     }).then(() => this.setState({ status: 'Delete successful' }));
    //     // const JSON = await response.json()
    //     // if(response.ok){
    //     //     onDelete(note._id);
    //     // }
    // };

//     handleDelete = () => {
//         fetch('/api/notes'  + note._id, {
//           method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
//       }
//     return (<div className="noteDetails">
//     <h3>{note.title}</h3>
//     <p>{note.content}</p>
//     <p>{note.createdAt}</p>
//     <span onClick={handleDelete}>Delete</span>

// </div>)
    
// }

// export default NoteDetails


import React from 'react';
import { Link } from 'react-router-dom';
function NoteComponent({ note }) {
  const handleDelete = () => {
    fetch('/api/notes/' + note._id, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="noteDetails">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <p>{note.createdAt}</p>
      <span onClick={handleDelete}>Delete</span>
      <Link to='/update-note'>
        <span className="updateNote">Update</span>
      </Link>
    </div>
  );
}

export default NoteComponent;

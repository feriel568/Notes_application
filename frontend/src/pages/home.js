
import { useEffect,useState } from "react";
import  NoteComponent from "../compnents/noteDetails"


import{Link} from 'react-router-dom';
const Home = ()=>{
    const [notes,setNotes]=useState(null)

    useEffect(()=>{
        const fetchNote = async ()=>{
            const response= await fetch('/api/notes');
            const json = await response.json();
            if (response.ok) {
                setNotes(json)

            }
        }
        fetchNote()


    },[])
    return (
        <div>
             <div className="notes">
                {notes && notes.map((note)=>(
                    <NoteComponent key={note._id} note={note}/>
                ))}
               
             </div>
             <Link to="/add-note">
        <button className="myButton">Add note</button>
      </Link>
        </div>
    )
}

export default Home
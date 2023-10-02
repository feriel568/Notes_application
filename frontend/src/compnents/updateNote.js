import {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const UpdateNote = ({}) => {
    



  return (
          

    <form className="" > 
      <h3>Update your note</h3>

      <label>Note Title:</label>
      <input 
        type="text" 
        
    
      />

      <label>Content:</label>
      <textarea id="message" name="message" rows="25"   ></textarea>


    

      <button>Update note</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>

    
  )
}

export default UpdateNote;

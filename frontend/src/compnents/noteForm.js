import { useState } from "react"



const NoteForm = ()=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [error,setError]=useState('')

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const note = {title,content}
        const response = await fetch('/api/notes',{method:'POST',body:JSON.stringify(note),headers:{'Content-Type': 'application/json'}})

        const json = await  response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setContent('')
            setError(null)
            console.log("note added",JSON)
        }
    }
 return (
      
<form className="create" onSubmit={handleSubmit}> 
      <h3>Add a new note</h3>

      <label>Note Title:</label>
      <input 
        type="text" 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
      />

      <label>Content:</label>
      <textarea id="message" name="message" rows="25"   onChange={(e)=>setContent(e.target.value)} value={content}></textarea>


    

      <button>Add note</button>
      {error && <div className="error">{error}</div>}
    </form>

 )


}

export default NoteForm
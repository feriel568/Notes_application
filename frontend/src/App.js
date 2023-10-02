import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Navbar from './compnents/navBar'
import NoteForm from "./compnents/noteForm"
import UpdateNote from "./compnents/updateNote"



function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navbar />
        <div className="pages">
          <Routes>
            <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/add-note"
                element={<NoteForm />}
              />

              <Route
                path="/update-note"
                element={<UpdateNote />}
              />
          </Routes>
        </div>


              
            
        
      </BrowserRouter>
    </div>
  );
}

export default App;

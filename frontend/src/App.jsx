import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

import Insert from "./pages/Insert";
import Display from "./pages/Display";

const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout/>}>
   
        <Route path="insert" element={<Insert/>} />
        <Route path="display" element={<Display/>} />
  
  

        </Route>
       </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App;
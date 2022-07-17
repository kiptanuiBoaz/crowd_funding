import Poster from "./components/poster/Poster";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Story from "./components/poster/Story";
import ContactUs from "./components/contactUs/ContactUs";



function App() {
  return (
    <>
    
      <Router >
          <Navbar/>
        <Routes>

            <Route  path='/'  strict element={<Poster/>} />
            <Route path='/story' element={<Story/>} />
            <Route path='/contactUs' element={<ContactUs/>} />
     

        </Routes>
      </Router>
    </>
  );
}

export default App;

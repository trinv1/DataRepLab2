import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'; 
import Content from './Components/Content';
import Footer from './Components/Footer';
import NavigationBar from './Components/NavBar';
{/*Importing components*/}

function App() {
  return (
      <Router>
        <NavigationBar />
        <Routes>
          {/*Each route displays different component when clicked*/}
          <Route path="/home" element={<Content />} />
          <Route path="/read" element={<Footer />} /> {/*diplays footer component when url changes to read */}
          <Route path="/create" element={<Header />} />{/*diplays header component when url changes to read */}
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

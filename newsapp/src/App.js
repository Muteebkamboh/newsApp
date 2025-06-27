import './App.css';
import React, {useState} from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router, Routes, Route,
  // Link,

} from "react-router-dom";


  const App = () => {
    const pageSize = 15;
    const apikey = process.env.REACT_APP_NEWS_API

    const [progress, setProgress] = useState(0)

  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route path='/general' element={<News setProgress={setProgress} apikey={apikey} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apikey={apikey} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route path='/Entertainment' element={<News setProgress={setProgress} apikey={apikey} key='Entertainment' pageSize={pageSize} country='us' category='Entertainment' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apikey={apikey} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apikey={apikey} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apikey={apikey} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apikey={apikey} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>

          </Routes>
        </Router>
      </div>
    )
  
}

export default App;

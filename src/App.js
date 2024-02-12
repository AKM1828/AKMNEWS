import './App.css';
import React, {useState} from 'react'
import NAVBAR from './Components/NAVBAR';
import News from './Components/News';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"; // route is used in place of Switch= it is used in older version of react-router-dom Route,
import LoadingBar from 'react-top-loading-bar'


// Enabling dark light button
const App =()=>{
 const  pageSize = 8; // default page size
 const apiKey = process.env.REACT_APP_AKM_NEWS
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NAVBAR />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General" />}></Route> 
            <Route exact path="/General" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General" />}> </Route>  {/* used to update site acoording to the components */}
            <Route exact path="/Business" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Buisness" />}></Route>/ 
            <Route exact path="/Entertainment" element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Entertainment" />}></Route> 
            <Route exact path="/Health"element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Health" />}></Route> 
            <Route exact path="/Science"element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Science" />}></Route> 
            <Route exact path="/Sports"element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Sports" />}></Route> 
            <Route exact path="/Technology"element={ <News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="Technology" />}></Route> 

          </Routes>
        </Router>
      </div>

    )
    }

export default App;
    








import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import Banner from './components/Banner'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { UserContextProvider } from './context/UserContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
import i18n from './i18n'

function App () {
  
  const[allData, setAllData] = useState({})
  const[loading, setLoading] = useState(true)


const fetchData = () => {
  axios
  .post("https://reqres.in/api/users", i18n)
  .then(function (response) {
    console.log(response);
    setAllData(response.data);
    
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(() => {
    setLoading(false);
  })
}

useEffect(() => {
  fetchData();
}, []);

  return (
    
    
    <UserContextProvider>
      <Switch>
        <Route path="/">
        
            <Banner />
          <Skills/>
          <Profile/>
          <Projects/>
          <Footer/>
          </Route>
      </Switch>
      </UserContextProvider>
    
    
    
  )
}

export default App;

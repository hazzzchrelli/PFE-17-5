import React from 'react'
import { Route, Routes} from 'react-router-dom'
import App from './App'
import Contact from './Pages/Contact'
import SeConnecter from './Pages/SeConnecter'

function Routing() {
  return (
<Routes>
<Route path='/' element={<App/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/SeConnecter' element={<SeConnecter/>}/>

</Routes>  
)
}

export default Routing
import React, { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Solutions from './pages/Solutions/Solutions'
import HomePage from './mainPages/Home'
import WorkListFilterBlock from './pages/works/WorkListFilterBlock'



export default function Router() {


  return (
    <div>
      <Header/>
        <Routes>
            
                        <Route exact path='/' element={<HomePage/>} />
                        <Route path='/solutions' element={<Solutions/>}/>
                        {/* <Route path='/works' element={<WorkListFilterBlock/>}/> */}

                        {/* <Route path='/medical' element={<ServiceMedical/>} />
                        <Route path='/maping-ecommerce' element={<ServiceMapingEcommerce/>} />
                        <Route path='/Contact' element={<Contact/>} />
                        <Route path='/thank' element={<ThankYou/>} />
                        <Route path='/success' element={<AppoinmentSuccess/>} />
                        <Route path='/view' element={<View/>} />   
                        <Route path='*' element={<NotFoundPage/>}/>             */}
                        {/* <Route path='/backHome' element={  <BackEndRouter/>}/>                    */}
        </Routes>
<Footer/>
    </div>
  )
}

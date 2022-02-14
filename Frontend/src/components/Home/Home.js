import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Slider from './Slider'
import Search from './Search'

function Home() {
    return (
        <div>
            <div>
                <div className="row mb-5">
                    <Navbar/>
                </div>

                <div className="row mb-2">
                    <Search/>                  
                </div>

                <div className="row mb-5">
                    <Slider/>                  
                </div>

                <div className="row">
                    <Footer/>                  
                </div>
            </div>
        </div>
    )
}

export default Home
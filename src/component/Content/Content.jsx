import React from 'react'
import schoolBus01 from '../image/schoolbus_slider_bg1.jpg'
import schoolBus02 from '../image/schoolbus_slider_bg2.jpg'
import './Content.css'
const Content = () => {
  return (
    <div>
        <div className="container-xl">
            <div className="row py-5">
                <div className="col">
                    <img src={schoolBus01} alt="" />
                </div>
                <div className="col">
                    <img src={schoolBus02} alt="" />
                </div>
            </div>
            <div className="row py-5">
                <a href="#" className='py-2 subContent'>Privacy Policy</a>
                <a href="#" className='py-2 subContent'>Contact Us</a>
                <a href="#" className='py-2 subContent'>About Us</a>
            </div>
        </div>
    </div>
  )
}

export default Content
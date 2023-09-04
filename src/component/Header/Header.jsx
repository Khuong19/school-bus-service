import React from 'react'
import logo from '../image/schoolbus_logo.png'
import { BsList } from 'react-icons/bs'
import './Header.css'
const Header = () => {
  return (
    <div>
        <div className="container-lg d-flex p-2 align-items-center">
            <div className="mx-auto">
                <img src={logo} alt="logo" />
            </div>
            <div class="dropdown">
                <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-4 fa-solid fa-bars"></i>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item p-3" href="#">School Policy</a></li>
                    <li><a class="dropdown-item p-3" href="#">Privacy Policy</a></li>
                    <li><a class="dropdown-item p-3" href="#">Contact Us</a></li>
                    <li><a class="dropdown-item p-3" href="#">About Us</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
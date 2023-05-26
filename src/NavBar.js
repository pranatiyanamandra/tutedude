import './NavBar.css'
import tutedude from './Tutedude.svg'
const NavBar = () => {

    return <div className="topnav" id="myTopnav">
       
        <img src={tutedude} ></img>
        <a href="#profileMenu" className="baseline active">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className='svg-icon'>
                <path fill="purple" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48Zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93ZM256 432a175.49 175.49 0 0 1-126-53.22a122.91 122.91 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 0 1 382 378.78A175.45 175.45 0 0 1 256 432Z" />
            </svg>
            <span>
            Profile Name
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='svg-icon'>
                <g id="evaArrowIosDownwardFill0"><g id="evaArrowIosDownwardFill1">
                    <path id="evaArrowIosDownwardFill2" fill="purple" d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16Z"/>
                    </g>
                </g>
            </svg>
            </a>
            <a href="#chatWithMentor">Chat with Mentor</a>
            <a href="#myAssignment" >My Assignment</a>

    </div>
}

export default NavBar;
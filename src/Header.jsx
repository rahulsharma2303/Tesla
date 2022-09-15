import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Fade from 'react-reveal/Fade';


function Header() {
    const [scrollNav , setValue] = useState(false);
    let rightValue = (scrollNav)? 0:"-200px";
   function hide (e){
        e.preventDefault();
        setValue(true)
    }
  return (
    <>
    
    
        <Fade down>
        <div id="header">
            <div className="navigation">
                <div className="logo">
                   <a href=""> <img src="tesla images/logo.svg" alt="" /></a>
                </div>
                <div className="nav_left">
                    <ul>
                        <li><a href="#section1">Model S</a></li>
                        <li><a href="#section2">Model Y</a></li>
                        <li><a href="#section3">Model Z</a></li>
                        <li><a href="#section4">Model T</a></li>
                        <li><a href="#section5">Solar Panel</a></li>
                        <li><a href="#section6">Model 3</a></li>
                    </ul>

                </div>
                <div className="nav_right">
                    <ul>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href="" onClick={hide}>Menu</a></li>
                    </ul>

                </div>
            </div>
                    
                <ul className="sideNav"  style={{right:rightValue}}>
                    <CloseIcon  className='cross' onClick={()=>setValue(false)}/>
                    <li><a href="">Model S</a></li>
                    <li><a href="">Model 3</a></li>
                    <li><a href="">Model X</a></li>
                    <li><a href="">Model Y</a></li>
                    <li><a href="">Model Z</a></li>
                    <li><a href="">Model T</a></li>
                    <li><a href="">Solar Panel</a></li>
                    <li><a href="">Model G</a></li>
                </ul>
            
        </div>
        </Fade>
       
    
    
    </>
  )
}

export default Header
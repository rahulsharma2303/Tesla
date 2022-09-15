import React from 'react'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Section1(props) {
    const bg = {
        backgroundImage:`url('tesla images/${props.backgroundImg}')`,
        backgroundRepeat: "no-repeat",
	      backgroundSize: "cover",
        backgroundPosition:"center"
    }

    function prevent(e){

      
      e.preventDefault();
      

    }
  return (
   
    <div className="section_1" style={bg}>
        <div className="tagline">
        <Fade right>
        <h1>{props.name}</h1>
        </Fade>
        <Zoom>
        <p>{props.tag}</p>
        </Zoom>
        </div>
        <Fade left>
        <div className="top_btns">
                <a className='gray white' href="">{props.button1}</a>
                {props.button2 && <a className='white' href="">{props.button2}</a>}
        </div>
        </Fade>
        <div className="down_arrow">
            {props.arrow && <a href="" onClick={prevent}><img src="tesla images/down-arrow.svg" alt="" /></a>}
        </div>
        
    </div>
    
  )
}

export default Section1

import React from 'react';
import '../../stylesheet/splash.css'
import splashImg from './splash_image.jpg'

class Splash extends React.Component {
    
    render() {
        return (
            <div >
               <div className='main-page-background-img'>
                    <p>Splash Page</p>
                    <img src={splashImg} alt="background" className="splash-image"/>
               </div>
            </div>
        );
    }
}

export default Splash;

import React from 'react';
import '../../stylesheet/splash.scss'
import splashImg from './splash_image.jpg'

class Splash extends React.Component {
    render() {
        return (
            <div >
               <div className='main-page-background-img'>
                    <img src={splashImg} alt="background" className="splash-image"/>
                    <div className="content">

                    </div>
               </div>
            </div>
        );
    }
}

export default Splash;
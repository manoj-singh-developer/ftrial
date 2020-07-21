import React, { Component } from 'react';
import TopBanner from './component/TopBanner';
import Otp from './component/Otp';
import AddChild from './component/AddChild';
import Booking from './component/Booking';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="Hide-none"></div>
               <Otp/>
                 
            </div>
        );
    }
}

export default Home;
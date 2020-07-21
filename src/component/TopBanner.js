import React, { Component } from 'react';

class TopBanner extends Component {
    render() {
        return (
            <div>
                 <img className="img-responsive" src={process.env.PUBLIC_URL+"img/book-now.jpg"} alt={"Book"}/>
            </div>
        );
    }
}

export default TopBanner;
import React, { Component } from "react";
import { Link } from "react-router-dom";


class MobileMenu extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" >
         <div className="button" onClick={this.showDropdownMenu}><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span> </div>

          { this.state.displayMenu ? (
          <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="">Feed</Link></li>
          <li><Link to="">Stories</Link></li>
          <li><Link to="">News</Link></li>
          <li><Link to="">Activity</Link></li>
      </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default MobileMenu;
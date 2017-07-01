import React from 'react';
import NavBar from './NavBar.jsx'
class MainPage extends React.Component {
   render() {
      return (
         <div>
            MainPage
            <NavBar />
            {this.props.children}
         </div>
      );
   }
}

export default MainPage;

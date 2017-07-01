import React from 'react';

class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(this.refs.location.value);
    let val = this.refs.location.value;
    this.refs.location.value = '';
    this.props.onSubmit(val);
  }

   render() {
      return (
           <div>
             <form onSubmit={this.onSubmit}>
                <input type="text" ref="location"/>
                <button type="submit">Submit</button>
             </form>
           </div>
      );
   }
}

export default WeatherForm;

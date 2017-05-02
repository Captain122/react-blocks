import React, { Component } from 'react';

class RegistationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '' //asum enq te statum inchneq pahelu
    };
    this.handleEmailChange = this.handleEmailChange.bind(this); //naxoroq kapum enq bind in,vor undefind chta
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// stexcenq obrabotchiknery ,voronc grel enq inputum
  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted. ', this.state.email);
  }

  handleEmailChange(event) {
    console.log('email  changed', event.target.value); // eventi mej pti lini value-iarjeqy
    this.setState({email: event.target.value}); // email-i mej texadrenq mutqayin arjeqy
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <input
          type="text"
          placeholder="please your email"
          value={this.state.email} //state-i mej pahel email-y
          onChange={this.handleEmailChange}  // sexmelu depqum ,petq e ashxati
        />
        <button>save</button> 
      </form>
    );
  }
}

export default RegistationForm;
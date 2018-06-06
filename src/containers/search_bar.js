import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bellow is how we bind the 'this' keyword the the onChange function
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this); 
    }

    onInputChange(event) {
        // console.log(event.target.value);
        // when it gets here It cant find this in this.setState So
        // we bind the 'this' keyword above to work in this function
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
        // we need to go and fetch data
        // when the user clicks submit take the state and send it into the action creator 
        this.props.fetchWeather(this.state.term);
        // clear the search box
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                placeholder='Choose a city'
                className='form-control'
                value={this.state.term}
                // Bellow we are calling the onInputChange BUT it is not in a fat arrow function
                // If you call like below an error will occure with 'this'.
                // react runs the onChange function above
                onChange={this.onInputChange} 
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        );
    }
}
// Hooking up the fetchWeather action creator to the searchbar container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
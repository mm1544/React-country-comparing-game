import React, {Component} from 'react';
import './Countrycard.css';

class Countrycard extends Component {
    render() {
        return (
            <div className="Countrycard">
                <h1 className="Countrycard-title">{this.props.name}</h1>
                <div className="Countrycard-image">
                    <img src={this.props.picture} alt={this.props.name}/>
                </div>
                <img className="Countrycard-Flag" src={this.props.flag} alt="flag"/>
                <div className="Countrycard-data">Capital : {this.props.capital}</div>
                <div className="Countrycard-data">Population: {this.props.population}</div>
                
            </div>
        )
    }
}

export default Countrycard;
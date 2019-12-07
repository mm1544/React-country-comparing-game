import React, { Component } from 'react';
import Countrycard from './Countrycard';
import './Countrydex.css';

class Countrydex extends Component{
    render(){
        let title;
        if(this.props.morePeople) {
            title = <h1 className="Countrydex-winner">Winning player</h1>
        } else {
            title = <h1 className="Countrydex-loser">Losing player</h1>
        }
        return (
            <div className="Countrydex">
                {title}
                <h4>Total Population: {this.props.popul}</h4>

                {/* Other way to do it */}
                {/* <p className={this.props.morePeople ? "Countrydex-winner" : "Countrydex-looser"}>{this.props.morePeople ? 'WINNING!' : 'LOOSING!'}</p> */}
                
                <div className="Countrydex-cards">
                    {/* will loop through the array and will make a card for each country */}
                    {this.props.country.map((c) => (
                    <Countrycard id={c.id} name={c.name} population={c.population} capital={c.capital} picture={c.picture} flag={c.flag} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Countrydex;
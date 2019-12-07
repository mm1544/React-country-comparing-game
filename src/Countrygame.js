import React, { Component } from 'react'
import Countrydex from './Countrydex'

class Countrygame extends Component {
    static defaultProps = {
        country: [
            {
                id: 1,
                name: 'Germany',
                population: 83019200,
                capital: 'Berlin',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Germany_-_Location_Map_%282013%29_-_DEU_-_UNOCHA.svg/250px-Germany_-_Location_Map_%282013%29_-_DEU_-_UNOCHA.svg.png',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png'
            },
            {
                id: 2,
                name: 'France',
                population: 67022000,
                capital: 'Paris',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/France_-_Location_Map_%282013%29_-_FRA_-_UNOCHA.svg/250px-France_-_Location_Map_%282013%29_-_FRA_-_UNOCHA.svg.png',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png'
            },
            {
                id: 3,
                name: 'Italy',
                population:  60359546,
                capital: 'Rome',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Italy_-_Location_Map_%282013%29_-_ITA_-_UNOCHA.svg/250px-Italy_-_Location_Map_%282013%29_-_ITA_-_UNOCHA.svg.png',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png'
            },
            {
                id: 4,
                name: 'Spain',
                population:  46733038,
                capital: 'Madrid',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Spain_-_Location_Map_%282013%29_-_ESP_-_UNOCHA.svg/250px-Spain_-_Location_Map_%282013%29_-_ESP_-_UNOCHA.svg.png',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png'
            },
            {
                id: 5,
                name: 'United Kingdom',
                population:  67545757,
                capital: 'London',
                picture: 'http://www.emcdda.europa.eu/sites/default/files/united-kingdom250.gif',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/320px-Flag_of_the_United_Kingdom.svg.png'
            },
            {
                id: 6,
                name: 'Sweden',
                population:  10302984,
                capital: 'Stockholm',
                picture: 'https://www.facinghistory.org/sites/default/files/styles/fh_chunk_breakpoints_theme_facing_history_mobile_1x/public/Denmark_Sweden_0.jpg?itok=vs9zVjHh&timestamp=1392161565',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png'
            },
            {
                id: 7,
                name: 'Poland',
                population:  38386000,
                capital: 'Warsaw',
                picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Poland_-_Location_Map_%282013%29_-_POL_-_UNOCHA.svg/250px-Poland_-_Location_Map_%282013%29_-_POL_-_UNOCHA.svg.png',
                flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/320px-Flag_of_Poland.svg.png'
            },
            {
                id: 8,
                name: 'Romania',
                population:  19401658,
                capital: 'Bucharest',
                picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cl6NTa19qrRpuzzwPMW2WOrRor86GjEWPeeELHfZCP6i_efoeA&s',
                flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/320px-Flag_of_Romania.svg.png'
            }
        ]
    };

    render(){
        // creating to hands/two players
        let hand1 = [];
        // initialy filling 2nd hand with the content of "this.props.country"
        let hand2 = [...this.props.country];

        // will randomly pick one item from hand2 and put to hand1 until both hands are equal
        while (hand1.length < hand2.length) {
            let randInd = Math.floor(Math.random() * hand2.length);
            let randCountry = hand2.splice(randInd, 1)[0];
            hand1.push(randCountry);
        }

        // will go through hand1 and for each element in there,
        //  it will take population and will add it to initial 
        // value of 0 
        let population1 = hand1.reduce((popul, country) => popul + country.population, 0);
        let population2 = hand2.reduce((popul, country) => popul + country.population, 0);

        return (
            <div>
                <Countrydex country={hand1} popul={population1} morePeople={population1 > population2}/>
                <Countrydex country={hand2} popul={population2} morePeople={population2 > population1}/>
            </div>
        )
    }
}

export default Countrygame
import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import '../../styles/analytics.css'

library.add(faGlobeAmericas)

class HottestCountry extends Component {
    country = () => {
        let countries = {};
        for (let i of this.props.users) { //יצרנו אובייקט שיש בו את המדינה כמילת מפתח
            if (countries[i.country]) { //ובכל מדינה יש כמו מכירות
                countries[i.country]++ //ספרנו את המכירות
            } else {
                countries[i.country] = 1;
            }
        }
        let hottestCountry = {name: "", sales: 0};
        let keys = Object.keys(countries); //חיפשנו איזה מדינה עם הכי הרבה מכירות
        for (let i of keys) {
            if(countries[i]>hottestCountry.sales) {
                hottestCountry = {name: i, sales: countries[i]}
            }
        }
        return hottestCountry.name;
    }
    render() {

        return (
            <div>
                <FontAwesomeIcon className="iconGlobe" icon="globe-americas" size="4x" color="white" style={{ backgroundColor: "rgb(230, 230, 7)", padding: "15px", borderRadius: "50%" }} />
                <span className="countrySale">{this.country()}</span>
                <div className="country1">Hottest Country</div>
            </div>

        )
    }
}

export default HottestCountry;


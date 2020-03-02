import React from 'react';
import './layout.css'
import './style.css'
import TiersContainer from '../../components/TiersContainer'


function Tiers() {
    return (

        <div className="container-tiers">
            <div className="title">TITLE: CHOOSE YOUR TIER</div>
            <div className="tier1"></div>
            <div className="tier2"></div>
            <TiersContainer />

        </div>
    )
}


export default Tiers;

// [
//     {
//         name: "Spiderman",
//         grid- name: "hero1",
//     show - collapsible: "show-spiderman"
//     }
// ]

// function TierHero(props) {
//     return (
//         <div className="heroCard" style={{ "grid-area": props["grid-name"] }} >
//             <div className="hoverImage hover1"></div>
//         </div>
//     )
// }


{/* <HeroCard shadow={element["shadow-image"]} gif={element["gif"]} key={"box-" + element.name} name={element.name} /> */ }
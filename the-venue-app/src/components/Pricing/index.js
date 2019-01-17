import React, { Component } from 'react';
import MyButton from '../Utils/MyButton.js';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['General', 'Vip', 'Platinum'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['http://www.flydsaarena.co.uk/whats-on/ariana-grande-5620', 'https://vipnation.eu/arianagrande', 'https://www.ticketmaster.co.uk/event/1F00558EE1DBC619?brand=cce2&camefrom=CFC_UKAFF_CCE1_CLEAR&_ga=2.137733552.1400253498.1547693485-629946199.1547693485'],
        delay: [500,0,500]

    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
<               div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                    <span>{this.state.desc[i]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton 
                            text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
            ))
            )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        );
    }
}

export default Pricing;
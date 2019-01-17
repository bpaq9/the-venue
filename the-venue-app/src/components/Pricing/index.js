import React, { Component } from 'react';
import MyButton from '../Utils/MyButton';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony', 'Lower Level', 'VIP'],
        desc:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        ],
        linkto:['http://sales/b', 'http://sales/ll', 'http://sales/vip']
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>{box[i]}</span>
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
        )
        ))

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;
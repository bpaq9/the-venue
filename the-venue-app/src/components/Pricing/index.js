import React, { Component } from 'react';

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

    showBoxes = () => {
        return (
            <div>
            hello
        </div>
        )
    }

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
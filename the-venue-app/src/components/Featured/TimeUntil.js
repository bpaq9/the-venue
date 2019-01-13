import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class TimeUntil extends Component {

    

    render() {
        return (
            <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in:
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            23
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            4
                        </div>
                        <div className="countdown_tag">
                            Hours
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            56
                        </div>
                        <div className="countdown_tag">
                            Minutes
                        </div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">
                            5
                        </div>
                        <div className="countdown_tag">
                            Seconds
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        );
    }
}

export default TimeUntil;
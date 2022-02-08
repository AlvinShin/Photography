import React, { Component } from 'react';
import pfp from '../pfp.jpg';

class aboutMe extends Component {
    render() { 
        return (
            <>
                <div className="pfp-div">
                    <img src={pfp} className="pfp" />
                    <div className="name-div">
                        <h2 className="name-txt">👋 Hi, I'm Alvin Shin</h2>
                    </div>
                </div>
                <div className="txt-div">
                    <p className="txt">
                        &emsp;I am a junior at Benjamin N. Cardozo High School 
                        enrolled in the Computer Science program. As of present 
                        day, I am taking AP Computer Science A this year, which 
                        is a Java course. I started pursuing a future career path 
                        in Computer Science at the start of 2020. Despite the 
                        fact that this is a photography website, I enjoy 
                        programming/software development as well as weight 
                        lifting. Nonetheless, my admiration for photography 
                        remains present.
                    </p>
                </div>
            </>
        );
    }
}
 
export default aboutMe;
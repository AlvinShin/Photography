import React, { Component } from 'react';
import Section from './section';
import AboutMe from './aboutMe';
import MyGear from './gear';
import Socials from './socials';

class about extends Component {
    state = { 
        sections: [
            {id: 1, name: 'About Me', content: <AboutMe />},
            {id: 2, name: 'My Gear', content: <MyGear />},
            {id: 3, name: 'Socials', content: <Socials />}
        ]
    } 


    render() { 
        return (
            <div className="about-page">
                {this.state.sections.map(section => (
                <Section 
                    key={section.id}
                    name={section.name}
                    content={section.content}
                /> 
                ))}
            </div>
        );
    }
}
 
export default about;
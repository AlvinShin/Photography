import React, { Component } from 'react';

class section extends Component {
    state = {
        name: this.props.name,
        content: this.props.content,
    } 

    render() { 
        return (
            <div className="section-div">
                <div className="header">
                    <h1>{this.state.name}</h1>
                </div>
                {this.state.content}
            </div>
        );
    }
}
 
export default section;
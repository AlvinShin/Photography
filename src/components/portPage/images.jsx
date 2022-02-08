import React, { Component } from 'react';

class images extends Component {
    state = {
        imgTag: this.props.imgTag,
        iso: this.props.iso,
        zoom: this.props.zoom,
        aperture: this.props.aperture,
        sSpeed: this.props.sSpeed
    } 

    render() { 
        return (
            <div className="img-div">
                <img src={this.state.imgTag} alt="Loading..." className="imgDim" />
                <div className="imgDet-div">
                    <span className="det-txt">ISO {this.state.iso}</span>
                    <span className="det-txt">{this.state.zoom} mm</span>
                    <span className="det-txt">ƒ{this.state.aperture}</span>
                    <span className="det-txt">1/{this.state.sSpeed} s</span>
                </div>
            </div>
        );
    }
}
 
export default images;
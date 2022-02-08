import React, { Component } from 'react';

class myGear extends Component {
    render() { 
        return (
            <>
                <ul className="gearUl">
                    <li>Nikon D3500</li>
                    <li>AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR</li>
                    <li>AF-P DX NIKKOR 70-300mm f/4.5-6.3G ED</li>
                </ul>
                <div className="btn-div">
                    <a 
                    className="buy-btn" 
                    href="https://www.nikonusa.com/en/nikon-products/product/dslr-cameras/1588/d3500.html" 
                    >
                        Buy my gear!
                    </a>
                </div>
            </>
        );
    }
}
 
export default myGear;
import React, { Component } from 'react';
import img from  '../photos/ALV_0571.JPG';

class SlideShow extends Component {
    state = { 
        // img: [
        //     {imgTag: '../photos/ALV_0571.JPG'},
        //     {imgTag: '../photos/ALV_3525.JPG'},
        //     {imgTag: '../photos/HJC_7375.JPG'},
        //     {imgTag: '../photos/HJC_8996.JPG'},
        //     {imgTag: '../photos/HJC_9083.JPG'},
        //     {imgTag: '../photos/HJC_9197.JPG'},
        // ]
    }

    render() { 
        return (
            <>  
                <img src={img} alt="#" className="slideshow-img"/>
            </>
        );
    }
}
 
export default SlideShow;
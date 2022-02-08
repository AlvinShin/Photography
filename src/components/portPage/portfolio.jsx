import React, { Component } from 'react';
import Images from './images';
import SearchBar from './seachBar';

class Portfolio extends Component {
    state = { 
        imgs: [
            { id: 1, 
                imgTag: require('../photos/ALV_3525.JPG'), 
                iso: 100, zoom: 82, aperture: 5.6, sSpeed: 200 
            },
            { id: 2, 
                imgTag: require('../photos/HJC_9083.JPG'), 
                iso: 200, zoom: 27, aperture: 3.5, sSpeed: 800 
            },
            { id: 3, 
                imgTag: require('../photos/HJC_7375.JPG'), 
                iso: 900, zoom: 78, aperture: 5.6, sSpeed: 125 
            },
            { id: 4, 
                imgTag: require('../photos/HJC_8996.JPG'), 
                iso: 3200, zoom: 46, aperture: 4.2, sSpeed: 1000 
            },
            { id: 5, 
                imgTag: require('../photos/HJC_9197.JPG'), 
                iso: 400, zoom: 63, aperture: 5, sSpeed: 250 
            },
            { id: 6, 
                imgTag: require('../photos/ALV_0571.JPG'), 
                iso: 400, zoom: 105, aperture: 4.5, sSpeed: 500 
            },
        ],
     } 

    render() { 
        return (
            <div className="port-pg">
                {this.state.imgs.map(image => (
                <Images 
                    key={image.id}
                    imgTag={image.imgTag}
                    iso={image.iso}
                    zoom={image.zoom}
                    aperture={image.aperture}
                    sSpeed={image.sSpeed}
                />
                ))}
            </div>
        );
    }
}
 
export default Portfolio;
import React, { Component } from 'react';

class Catgories extends Component {
    state = { 
        catgoryList: [
            {
                id: 1, 
                category: "Street Photography",
            },
            {
                id: 2, 
                category: "Food Photography",
            },
            {
                id: 3, 
                category: "Architectural Photography",
            },
            {
                id: 4, 
                category: "Still life Photography",
            }
        ]
    }
    updateToggle() {
        this.setState({toggle: true})
    }

    render() { 
        return (
            <>
            {this.state.catgoryList.map(categoryName => (
                <p
                    key={categoryName.id}
                    category={categoryName.category}
                >
                    {categoryName.category}
                </p>
            ))}
            </>
        );
    }
}
 
export default Catgories;
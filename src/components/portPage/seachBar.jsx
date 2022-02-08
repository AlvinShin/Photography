import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Catgories from './categories';

class SearchBar extends Component {
    state = { 
        toggle: false,
    } 
    // const {searchToggle} = this.props;
    searchClicked = () => {
        this.setState( {toggle: !this.state.toggle} );
    }

    categoryStyle() {
        let name = "searchbar ";
        name += (this.state.toggle === true) ? "dropdown-toggle" : "";
        return name;
    }

    render() { 
        return (
            <div className="searchbar-container">
                <div className={this.categoryStyle()} >
                    <label htmlFor="category">
                        <FontAwesomeIcon icon={faSearch} className="searchIcon"/>
                    </label>
                    <input 
                        type={"text"}
                        id={"category"}
                        className={"category-input "}
                        autoComplete={"off"}
                        onFocus={this.searchClicked}
                    />
                </div>
                {this.state.toggle === true && 
                    <div className="categories">
                        <Catgories />
                    </div>
                }
                
            </div>
        );
    }
}
 
export default SearchBar;
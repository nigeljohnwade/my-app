import React, { Component } from 'react';
import Heading from './heading.js';

class Header extends Component {
    render() {
        return(
        <header>
            <Heading level="1" content="Heading"/>
        </header>
        )
    }
}

export default Header; // Don’t forget to use export default!
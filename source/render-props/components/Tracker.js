// Core
import React, { Component } from 'react';

export default class Tracker extends Component {
    state = {
        x: 0,
        y: 0,
    };

    _handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        });
    };

    render () {
        const { render, children, component } = this.props;

        if (Object.keys(this.props).length > 1) {
            throw new Error('Use only one render-props!');
        }

        let result = null;

        if (children) {
            result = children(this.state);
        }

        if (render) {
            result = render(this.state);
        }

        if (component) {
            result = React.createElement(component, this.state);
        }

        return (
            <div className = 'tracker' onMouseMove = { this._handleMouseMove }>
                { result }
            </div>
        );
    }
}

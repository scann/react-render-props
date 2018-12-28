// Core
import React, { Component } from 'react';

//Instruments
import cat from '../assets/cat.png';
import mouse from '../assets/mouse.png';

export default {
    Cat (props) {
        return (
            <img
                src = { cat } style = { {
                    top:  props.y - 50,
                    left: props.x - 120,
                } }
            />
        );
    },
    Mouse (props) {
        return (
            <img
                src = { mouse } style = { {
                    top:  props.y - 50,
                    left: props.x,
                } }
            />
        );
    },
    Tile (props) {
        return (
            <span>
                x:&nbsp;{props.x}, y:&nbsp;{props.y}
            </span>
        );
    },
};

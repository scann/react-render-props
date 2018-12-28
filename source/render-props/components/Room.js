// Core
import React, { Component } from 'react';

//Components
import Tracker from './Tracker';
import Animals from './Animals';

const Content = (props) => {
    return (
        <>
            <Animals.Tile { ...props } />
            <Animals.Mouse { ...props } />
            <Animals.Cat { ...props } />
        </>
    );
};

export default class Room extends Component {
    render () {
        return (
            <div className = 'room'>
                <h1>Поиграем в кошки-мышки!</h1>
                <Tracker
                    render = { (coordinates) => {
                        return <Content { ...coordinates } />;
                    } }
                />
                {/*
                //children:
                <Tracker>
                    { (coordinates) => {
                        return <Content { ...coordinates }/>
                    } }
                </Tracker>
                //component:
                <Tracker component = { Content } />
                //render:
                *<Tracker render = { (props) => <Content { ...props } /> } />
                <Tracker render = { (props) => <Content x = { props.x } /> } />*/}
            </div>
        );
    }
}

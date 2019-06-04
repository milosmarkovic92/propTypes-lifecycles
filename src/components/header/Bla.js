import React, { Component } from 'react';

export default class Bla extends Component {
    render() {
        const { title, company, location, salary } = this.props;
        return (
            <div className="CardContainer">
                <h4> {title} </h4>
                <div className="Info">
                    <p> {company} </p>
                    <p> {location} </p>
                    <p> {salary} </p>
                </div>
            </div>
        )
    }
}
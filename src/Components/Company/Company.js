import React, { Component } from 'react';
import './Company.css'

class Company extends Component {
    render() {
        return (
            <tr>
                {this.props.reports.companyName}               
            </tr>
        );
    }
}

export default Company;
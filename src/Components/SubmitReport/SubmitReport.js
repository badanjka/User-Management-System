import React, { Component } from 'react';
import "./SubmitReport.css"


class SubmitReport extends Component {

    state = {
        date: "",
        phase: "",
        status: "",
        note: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            date: event.target.date.value,
            note: event.target.note.value,
            status: event.target.status.value,
            phase: event.target.phase.value
        }, () => {
            this.props.getReportDetails(
                this.state.date,
                this.state.phase,
                this.state.status,
                this.state.note
            )
        })   
    }

    render() {
        return (
            <div id="wrapper">
                <form onSubmit={this.handleSubmit}>
                <div id="select">                    
                    <div className="wrappers">
                        <p>Interview Date:</p>
                        <input type="date" required name="date"></input>
                    </div>
                    <div className="wrappers">
                        <p>Phase:</p>
                        <select required name="phase">
                            <option>Technical</option>
                            <option>Hr</option>
                            <option>Ceo</option>
                            <option>Web</option>
                        </select>
                    </div>
                    <div className="wrappers">
                        <p>Status:</p>
                        <select required name="status">
                            <option>Passed</option>
                            <option>Declined</option>
                        </select>
                    </div>                    
                </div>
                <p>Notes:</p>
                <textarea  rows="6" required name="note"></textarea>
                <div id="reportButtons">
                    <button className="click" onClick={this.props.backToSelectCompany}>Back</button>
                    <button  className="click" >Submit</button>
                </div>
                </form>
            </div>
        );
    }
}

export { SubmitReport };
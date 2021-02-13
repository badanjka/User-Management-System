import React, { Component } from 'react';
import "./CandidatesListUser.css"

class CandidatesListUser extends Component {

    state = {
        changeClass: false
    }

    a = () => {
        this.props.getCandidateData(this.props.data)
        this.setState({
            changeClass: true
        })
    }

    render() {
        return (
            <div id="candidateUser" onClick={() => this.a()} className={this.state.changeClass === true ? "selected" : ""}>
                <div id="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixhnZxucLmfqq5yDQ2Gyd08Z1XRAa44_LJQ&usqp=CAU" />
                </div>
                <div id="description">
                    <p className="userPreferences">{this.props.data.name}</p>
                    <p className="userEmail">{this.props.data.email}</p>
                </div>
            </div>
        );
    }
}

export { CandidatesListUser };
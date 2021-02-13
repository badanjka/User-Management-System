import React, { Component } from 'react';
import './Candidate.css'

class Candidate extends Component {
    render() {
        return (
            <div className='wrapper'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixhnZxucLmfqq5yDQ2Gyd08Z1XRAa44_LJQ&usqp=CAU"></img>
                <div className="infoWrapper">
                <div>
                    <ul className="infoAboutCandidate">
                        <li>Name:</li>
                        <li>Email:</li>
                        <li>Date of birth:</li>
                        <li>Education:</li>
                    </ul>
                </div>
                <div> 
                    <ul>     
                    <li>{this.props.candidate.name}</li>               
                    <li>{this.props.candidate.email}</li>                                    
                    <li>{this.props.candidate.birthday}</li>                                 
                    <li>{this.props.candidate.education}</li>
                    </ul>             
                </div>
                </div>
            </div>
        );
    }
}
export default Candidate;
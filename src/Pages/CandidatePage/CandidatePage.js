import React, { Component } from 'react';
import "./CandidatePage.css"
import Candidate from "../../Components/Candidate/Candidate"
import ReportTable from '../../Components/ReportTable/ReportTable'
import { ReportOverview } from "../../Components/ReportOverview/ReportOverview"
import { Route } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';


class ScndPage extends Component {
    state = {
        candidate: [],
        reports: [],
        reportData: [],
        showReportOv: false
    }

    showReport = (event) => {
        this.setState({
            reportData: event,
            showReportOv: true
        })
        console.log(event, 'dd')
    }

    removeReport = () => {
        this.setState({
            showReportOv: false
        })
    }

    componentDidMount() {
        this.getData()
    }
    getData = () => {
        const candidateId = this.props.match.params.id;
        fetch("http://localhost:3333/api/candidates/" + candidateId)
            .then(data => data.json())
            .then(
                (result) => {
                    console.log(result, "ovo je result")                  

                    this.setState({
                        candidate: result,                      
                    });
                    this.getCandidateReport(candidateId);
                },
            )
    }
    getCandidateReport = (candidateId) => {
        fetch("http://localhost:3333/api/reports")
            .then(data => data.json())
            .then(
                (result) => {
                    const candidateReports = result.filter((el) => el.candidateId == candidateId);
                    this.setState({
                        reports: candidateReports,
                    });
                },
            )
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.showReportOv === true && <ReportOverview userData={this.state.reportData} removeReport={this.removeReport}></ReportOverview>}
                <Candidate candidate={this.state.candidate} />
                <ReportTable reports={this.state.reports} showReport={this.showReport} />                
            </div>
        );
    }
}
export default ScndPage;
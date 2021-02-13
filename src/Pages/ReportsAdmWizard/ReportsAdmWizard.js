import React, { Component } from 'react';
import Header2 from "../../Components/Header2/Header2"
import { CandidatesList } from "../../Components/CandidatesList/CandidatesList"
import "./ReportsAdmWizard.css"
import { SelectCompany } from '../../Components/SelectCompany/SelectCompany';
import { SubmitReport } from "../../Components/SubmitReport/SubmitReport"
import { saveReport } from "../../communicator"


class ReportsAdmWizard extends Component {
    state = {
        selectCompany: '',
        homePage: true,
        submitReport: "",
        candidate: {
            name: "",
            id:"",
            company: "",
            date: "",
            phase: "",
            status: "",
            note: ""
        }
    }

    getCandidateData = (data) => {
        console.log(data, "ovo je candidate data")
        this.setState({
            candidate: {
                name: data.name,
                id: data.id,
                company: "",
                date: "",
                phase: "",
                status: "",
                note: ""
            }
        })
    }

    getCompanyData = (data) => {
        console.log(data)
        this.setState({
            candidate: {
                id:this.state.candidate.id,
                name: this.state.candidate.name,
                company: data.name,
            }
        })
    }

    getReportDetails = (date, phase, status, note) => {
        console.log(date)
        console.log("STATE PRE SETOVANJA", this.state.candidate)
        this.setState({
            candidate: {
                id:this.state.candidate.id,
                name: this.state.candidate.name,
                company: this.state.candidate.company,
                date: date,
                phase: phase,
                status: status,
                note: note
            }
        }, () => {
            console.log("STATE POSLE SETOVANJA", this.state.candidate)
            saveReport(this.state.candidate, this.props.token)
        })
       
       
    }
    selectCompany = () => {
        this.setState({
            selectCompany: true,
            homePage: false
        })
    }
    submitReport = () => {
        this.setState({
            submitReport: true,
            selectCompany: false,
            homePage: false
        })
    }
    backToSelectCompany = () => {
        this.setState({
            selectCompany: true,
            submitReport: false,
            homePage: false,
        })
    }
    backToSelectCandidate = () => {
        this.setState({
            selectCompany: false,
            homePage: true
        })
    } 

    showThisPage = () => {
        if (this.state.selectCompany === true) {
            return <SelectCompany SubmitReport={this.submitReport} showThisPage={this.showThisPage} backToSelectCandidate={this.backToSelectCandidate} getCompanyData={this.getCompanyData}></SelectCompany>
        } else if (this.state.submitReport === true) {

            return <SubmitReport backToSelectCompany={this.backToSelectCompany} getReportDetails={this.getReportDetails} fieldData={this.fieldData}></SubmitReport>
        }
        else {
            return <CandidatesList selectCompany={this.selectCompany} getCandidateData={this.getCandidateData}></CandidatesList>
        }
    }



    render() {
        return (
            <>
                <Header2 />
                <div id="reportWizard">

                    <div id="reportWizardSteps">
                        <ul>
                            <li ><span className="number">1</span> <span className={this.state.homePage ? "bolded" : ""}>Select Candidate</span></li>
                            <li ><span className="number">2</span> <span className={this.state.selectCompany ? "bolded" : ""}>Select Company</span></li>
                            <li ><span className="number">3</span> <span className={this.state.submitReport ? "bolded" : ""}>Fill Report Details</span></li>
                        </ul>
                        <div id="reportWizardData">
                        {this.state.homePage === true && <div>
                                <p className="chose">Candidate</p>
                                <p className="chosen">{this.state.candidate.name}</p>
                            </div>}
                            {this.state.selectCompany === true && <div>
                                <p className="chose">Candidate</p>
                                <p className="chosen">{this.state.candidate.name}</p>
                                <p className="chose">Company</p>
                                <p className="chosen">{this.state.candidate.company}</p>
                            </div>}

                            {this.state.submitReport === true && <div>
                                <p className="chose">Candidate</p>
                                <p className="chosen">{this.state.candidate.name}</p>
                                <p className="chose">Company</p>
                                <p className="chosen">{this.state.candidate.company}</p>
                            </div>}
                        </div>

                    </div>
                    {this.showThisPage()}
                </div>
            </>
        );
    }
}

export { ReportsAdmWizard }
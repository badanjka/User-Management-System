import apiUrl from './config.js';
const communicatorUrl = apiUrl + 'api/';
export const getData = (url) => {
    return fetch(communicatorUrl + url)
        .then(response => response.json())
}
export const getCompany = () => {
    return fetch(communicatorUrl + 'companies')
        .then(response => response.json())
}

export const saveReport = (savedReport, token) => {
    console.log(savedReport, 'savedReport')
    fetch(communicatorUrl + 'reports', {
        method: 'POST',
        body: JSON.stringify({    
            "candidateId": savedReport.id,
            "candidateName":savedReport.name,
            "companyId": 2,
            "companyName": savedReport.company,
            "interviewDate": savedReport.date,
            "phase": savedReport.phase,
            "status": savedReport.status,
            "note": savedReport.note
        }),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}

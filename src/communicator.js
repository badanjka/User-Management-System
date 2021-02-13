export const getData = (url) => {
    return fetch("http://localhost:3333/api/" + url)
        .then(response => response.json())
}
export const getCompany = () => {
    return fetch("http://localhost:3333/api/companies")
        .then(response => response.json())
}

export const saveReport = (savedReport, token) => {
    console.log(savedReport, "savedReport")
    fetch("http://localhost:3333/api/reports", {
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

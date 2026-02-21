import {useRef} from "react";
import medical_records from "../medicalRecords";

function Records({ record , setRecord }) {
  const patientsDetails = useRef(medical_records.map((record) => record.data));
  function handleNext(){
    setRecord(patientsDetails.current[(record[0].userId) === patientsDetails.current.length ? 0 : record[0].userId])
  }  
  if (record.length === 0) {
    return null;
  }
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{record[0].userName}</h4>
          <h5 id="patient-dob">DOB: {record[0].userDob}</h5>
          <h5 id="patient-height">Height: {record[0].meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={handleNext}>
          Next
        </button>
      </div>
      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
          {
            record.map((data , index) => {
              const date = new Date(data.timestamp * 1000);
              const formatedDate = `${String(date.getMonth()).padStart(2 , "0")}/${String(date.getDate()).padStart(2 , "0")}/${String(date.getFullYear()).padStart(4 , "0")}`
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{formatedDate}</td>
                <td>{data.diagnosis.name}</td>
                <td>{data.meta.weight}</td>
                <td>{data.doctor.name}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Records;

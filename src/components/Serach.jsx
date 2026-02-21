import { useRef } from "react";
import medical_records from "../medicalRecords";

function Search({ setRecord, setId, id }) {
  const patients = useRef(medical_records.map((record) => { return { id: record.data[0].userId, userName: record.data[0].userName } }));
  const patientsDetails = useRef(medical_records.map((record) => record.data));
  function handleShow(e) {
    e.preventDefault();
    if (id === "") {
      alert("Please select a patient name");
    }
    else {
      setRecord(patientsDetails.current[id - 1]);
    }
  }
  return (
    <div className="layout-row align-items-baseline select-form-container">
      <div className="select">
        <select data-testid="patient-name" defaultValue="0" onChange={(e) => setId(e.target.value)}>
          <option value="0" disabled>
            Select Patient
          </option>
          {
            patients.current.map((patient, index) => {
              return <option key={index} value={patient.id}>{patient.userName}</option>
            })
          }
        </select>
      </div>

      <button onClick={handleShow} type="submit" data-testid="show">
        Show
      </button>
    </div>
  );
}

export default Search;

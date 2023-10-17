import React, { useState } from 'react'
import Table from './Table'

const AttendancePage = () => {

  const [formData, setFormData] = useState({
    date: '',
    timeSlot: '',
    year: '',
    branch: '',
    division: ''
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Call a function to send formData to the Table component or perform other actions
    console.log('Form submitted:', formData);
    // Here you can send formData to the Table component as props
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div className='container mt-5'>
      <div className="row">

        <div className="col-md-12 border border-danger p-2 bg-white">
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-around p-2">

                <div className="mb-3 w-25">
                  <label htmlFor="date" className="form-label fw-bold">Date</label>
                  <input type="date"
                    className="form-control"
                    id="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required />
                </div>

                <div className="mb-3 w-25">
                  <label htmlFor="timeslot" className="form-label fw-bold">Time Slot</label>
                  <input type="time" className="form-control" id="timeslot" value={formData.time}
                    onChange={handleInputChange} required />
                </div>

                <div className="mb-3 w-25">
                  <label htmlFor="year" className="form-label fw-bold">Year</label>
                  <select className="form-select" id="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    required>
                    <option value="">Select Year</option>
                    <option value="first">First Year</option>
                    <option value="second">Second Year</option>
                    <option value="third">Third Year</option>
                    <option value="fourth">Fourth Year</option>
                  </select>
                </div>
              </div>

              <div className="col-md-12 d-flex justify-content-around">

                <div className="mb-3 w-25">
                  <label htmlFor="branch" className="form-label fw-bold">Branch</label>
                  <select className="form-select" id="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    required>
                    <option value="">Select Branch</option>
                    <option value="first">CMPN</option>
                    <option value="second">INFT</option>
                    <option value="third">EXTC</option>
                    <option value="fourth">ELC</option>
                    <option value="fourth">MECH</option>
                  </select>
                </div>

                <div className="mb-3 w-25">
                  <label htmlFor="division" className="form-label fw-bold">Division</label>
                  <select className="form-select" id="division"
                    value={formData.division}
                    onChange={handleInputChange}
                    required>
                    <option value="">Select Division</option>
                    <option value="first">A</option>
                    <option value="second">B</option>
                  </select>
                </div>
              </div>
              <div className="button-submit d-flex justify-content-end mt-3">
                <button type="submit" className="btn btn-primary w-25">Submit</button>
              </div>

            </div>
          </form>
        </div>


        <div className="col-md-12 border border-info mt-4 bg-white">
          <Table formData={formData} />
        </div>

      </div>
    </div>
  )
}

export default AttendancePage
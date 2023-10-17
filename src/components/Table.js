import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react'

const Table = ({ formData }) => {
  const toast = useToast();

  console.log(formData);

  const [tableData, setTableData] = useState([
    { id: 1, pid: 211003, name: "Amet", year: "TE", branch: "INFT", division: "A", attendance: true },
    { id: 2, pid: 211004, name: "John", year: "TE", branch: "INFT", division: "A", attendance: true },
    { id: 3, pid: 211005, name: "Smith", year: "TE", branch: "INFT", division: "B", attendance: true },
  ]);

  const [absentData, setAbsentData] = useState([]);

  const handleCheckboxChange = (id) => {
    setTableData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          item.attendance = !item.attendance;
          if (!item.attendance) {
            // If absent, add to absentData state
            setAbsentData(prevAbsentData => [...prevAbsentData, item]);
          } else {
            // If present, remove from absentData state
            setAbsentData(prevAbsentData => prevAbsentData.filter(student => student.id !== item.id));
          }
        }
        return item;
      });
    });
  };

  const handleSubmit = () => {
    console.log("Absent Data:", absentData);
    toast({
      title: 'Attendance Submitted',
      description: "success",
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
    setTableData([])

  };




  return (
    <div className="col-md-12 mt-4 bg-white">
      <div className="row">
        <div className="col-md-12">
          <h1 className='fw-bold'>
            Records
          </h1>
        </div>
        <div className="col-md-12 mt-2">


          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered table-light border-light">
              <thead>
                <tr>
                  <th scope="col">SR.NO</th>
                  <th scope="col">PID</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Year</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Division</th>
                  <th scope="col">Mark Absent</th>
                </tr>
              </thead>

              {/* <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>211003</td>
                  <td>Amet</td>
                  <td>TE</td>
                  <td>INFT</td>
                  <td>A</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="attendanceCheck1" />
                      <label className="form-check-label" htmlFor="attendanceCheck1">
                        Absent
                      </label>
                    </div>

                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>211004</td>
                  <td>John</td>
                  <td>TE</td>
                  <td>INFT</td>
                  <td>A</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="presentCheck1" />
                      <label className="form-check-label" htmlFor="presentCheck1">
                        Absent
                      </label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>211004</td>
                  <td>Smith</td>
                  <td>TE</td>
                  <td>INFT</td>
                  <td>A</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="presentCheck1" />
                      <label className="form-check-label" htmlFor="presentCheck1">
                        Absent
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody> */}

              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">{row.id}</th>
                    <td>{row.pid}</td>
                    <td>{row.name}</td>
                    <td>{row.year}</td>
                    <td>{row.branch}</td>
                    <td>{row.division}</td>
                    <td>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`attendanceCheck${row.id}`}
                          checked={!row.attendance}
                          onChange={() => handleCheckboxChange(row.id)}
                        />
                        <label className="form-check-label" htmlFor={`attendanceCheck${row.id}`}>
                          {row.attendance ? "Present" : "Absent"}
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <div className="button-table-submit d-flex justify-content-end mt-1 p-2">
            <button type="submit" className="btn btn-primary w-25"
              onClick={handleSubmit}>Submit</button>
          </div>

        </div>

      </div>


    </div>


  )
}

export default Table
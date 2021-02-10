import React from "react";

const Log = () => {
  let Lists = [];
  Lists = JSON.parse(localStorage.getItem("Logs"));

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Selfie</th>
            <th scope="col">Email</th>
            <th scope="col">Person to visit</th>
            <th scope="col">Type of visit</th>
            <th scope="col">Date of visit</th>
            <th scope="col">Time of Entry</th>
            <th scope="col">Time of Exit</th>
          </tr>
        </thead>
        <tbody>
          {Lists && Lists.map((list, index) => {
            const rw =  <tr>
              <th scope="row">{index+1}</th>
              <td>{list.Name}</td>
              <td class="w-25"><img src={list.imgsrc} alt="" className="img-fluid" style={{height:'100px'}}/></td>
              {/* <td>{list.imgsrc}</td> */}
              <td>{list.Email}</td>
              <td>{list.Person}</td>
              <td>{list.Type}</td>
              <td>{list.Date}</td>
              <td>{list.Tentry}</td>
              <td>{list.Texit}</td>
            </tr>;
            return rw;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Log;

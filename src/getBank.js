import React, { useState, useEffect } from "react";
import "./style.css";
function Api() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const apiUrl = "https://dev.obtenmas.com/catom/api/challenge/banks/";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
      })
      .catch((error) => {
        console.error("Hubo un error:", error);
      });
  }, []);
  return (
    <div>
      {apiData.length > 0 && <Table banks={apiData} />}
    </div>
  );
}
function Table({ banks }) {
  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Description</th>
              <th>Age</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {banks.map((bank, index) => (
              <tr key={index}>
                <td>{bank.bankName}</td>
                <td>{bank.description}</td>
                <td>{bank.age}</td>
                <td>
                  <a href={bank.url}>URL</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Api;

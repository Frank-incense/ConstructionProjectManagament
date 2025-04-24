import React from "react";

function SafetyTable({ data = [] }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">No safety entries found.</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.role}</td>
                <td>{item.date}</td>
                <td>
                  <span className={`badge ${item.status === "Pending" ? "bg-warning" : "bg-success"}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SafetyTable;

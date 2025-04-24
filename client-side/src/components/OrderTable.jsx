import React from "react";

function OrderTable({ orders = [] }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Supplier</th>
            <th scope="col">Delivery</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">No orders found.</td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.amount}</td>
                <td>{order.supplier}</td>
                <td>{order.delivery}</td>
                <td>
                  <span className={`badge ${order.status === 'Pending' ? 'bg-warning' : 'bg-success'}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    <i className="bi bi-gear"></i> Manage
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderTable;

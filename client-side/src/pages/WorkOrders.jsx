import React from 'react';
import { useState } from 'react';
import WorkOrderModal from '../components/WorkOrders/WorkOrderModal';
import Modal from 'react-bootstrap/Modal';

function WorkOrders() {
  const [show, setShow] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [workOrders, setworkOrders] = useState([
    {
      description: 'Do saftey satndup',
      assigned: 'Dennis',
      category: 'safty',
      status: 'pending',
    }
  ]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='p-4'>
      <div className="d-flex flex-column flex-md-row justify-content-between my-2">
          <h1 className="custom-color-dark fw-bold">Work Orders</h1>
          <div className="d-flex flex-column flex-md-row gap-2 align-items-center">
              <input type="search" placeholder='search transactions' className='form-control form-control-sm' onChange={(e)=>{setsearchQuery(e.target.value)}}/>
              <button className='btn btn-sm custom-bg-primary custom-color-secondary fw-bold d-flex flex-row align-items-center gap-2' onClick={handleShow}>New</button>
          </div>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <WorkOrderModal setworkOrders={setworkOrders} workOrders={workOrders}/>
      </Modal>
      <table class="table table-hover table-stripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Assigned</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {workOrders.map((order, index)=>{
            return(
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{order.description}</td>
                <td>{order.assigned}</td>
                <td>{order.category}</td>
                <td><span className='badge bg-success'>{order.status}</span></td>
                <td>
                  <div className='d-flex flex-row gap-2'>
                    <button className='btn btn-sm btn-primary' onClick={handleShow}>manage</button>
                    <button className='btn btn-sm btn-danger'>delete</button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WorkOrders
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, } from 'formik';

function WorkOrderModal({setworkOrders,workOrders}) {
  return (
    <div className="modal show"
    style={{ display: 'block', position: 'initial' }}>
        <Modal.Header closeButton>
          <Modal.Title>Create Work Order</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <Formik
            initialValues={{
              description: '',
              assigned: '',
              category: '',
              status: 'pending',
            }}
            onSubmit={async (values) => {
              console.log(values);
              setworkOrders([...workOrders,values]);
            }}
          >
            <Form>
              <div className='d-flex flex-column'>
                <label htmlFor="description">Description</label>
                <Field id="description" name="description" placeholder="Jane" className='form-control my-2'/>

                <label htmlFor="assigned">Assigned</label>
                <Field id="assigned" name="assigned" placeholder="Doe" className='form-control my-2'/>

                <label htmlFor="category">Category</label>
                <Field
                  id="category"
                  name="category"
                  placeholder="supervision"
                  className='form-control my-2'
                />
                <button type="submit" className='btn btn-sm btn-primary my-2'>Submit</button>
              </div>
            </Form>
          </Formik>
        </Modal.Body>
    </div>
  )
}

export default WorkOrderModal

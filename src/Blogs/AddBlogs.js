import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Add Your Blog
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     
        <form>
          <div className="mb-3">
            <h5 htmlFor="title" className="form-h5">Title</h5>
            <input type="text" className="form-control" id="title" placeholder="Enter title" />
          </div>
          <div className="mb-3">
            <h6 htmlFor="content" className="form-h6">Content</h6>
            <textarea className="form-control" id="content" rows="5" placeholder="Enter content"></textarea>
          </div>
          <button type="submit" className="btn btn-success" style={{lineHeight:'17px', textAlign:"center"}}>Submit</button>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button className='btn-danger' style={{lineHeight:'17px'}} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddBlogs() {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddBlogs;
/* TODO: This component will eventually need to:
- Contain menu items or copyright data
*/
import React from 'react'
import { connect } from 'react-redux';
import { Modal, ProgressBar } from 'react-bootstrap';

function _Modal( uistate ) {
  return (
    <Modal className="uistate-loading" show={uistate.isLoading}>
      <Modal.Body>
        <ProgressBar active now={100} />
      </Modal.Body>
      <Modal.Footer className="uistate-loading-text">
        Loading ...
      </Modal.Footer>
    </Modal>
  );
}

export default connect(
  state => ( state.uistate.toJSON() ),
  { }
)( _Modal )

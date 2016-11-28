import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchWeather } from '../actions/index';
import { save } from '../actions/form';

// components
import ProgressBar from '../components/ProgressBar';
import ProjectWorkflowHeader from '../components/ProjectWorkflowHeader';
import FRC from 'formsy-react-components';
import FormState from '../components/form/FormState';
import { Col, Row, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

const { Input,
        //Checkbox,
        //Select,
      } = FRC;

let staticText="lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom ";

function onValidSubmit( formname, data ) {
  console.log("data", data);
  loading(true);
  data.status = 'pending';
  save('negotiable', data);
  setTimeout(function () {
    loading(false);
    // browserHistory.push('/contract/1234');
  }, 5000);
}

export default class NonResourceBudget extends Component {
  render() {
    let description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        firstWidth = 40;

      console.log("in project info");
    return (
      <div className="container">
        <ProgressBar />
        <ProjectWorkflowHeader title="Non-Resource Budget" description={description} />
        <FormState name={ 'project' }
        onValidSubmit={ onValidSubmit.bind( this, 'projectAdd' ) }
        disabled={false}
        onSave={ save }
        className="update_bid_form">
          <Row>
            <Col xs={firstWidth} className="form_row">
              <Input
                label="Commission"
                name="commission"
                placeholder=""
                addonAfter={<span className="input-percent-glyph">%</span>}
                type="number" />
            </Col>
          </Row>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <label>blah</label>
                <input type="text" aria-label="..." name="blah"/>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Row>
            <Col xs={firstWidth} className="form_row">
              <Input
                label="Commission"
                name="commission"
                placeholder=""
                addonAfter={<span className="input-percent-glyph">%</span>}
                type="number" />
            </Col>
          </Row>
        </FormState>*/}
      </div>
    )
  }
}

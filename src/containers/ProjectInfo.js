import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fieldValues } from './staticData';

// actions
import { fetchWeather } from '../actions/index';
import { save } from '../actions/form';

// components
import ProgressBar from '../components/ProgressBar';
import ProjectWorkflowHeader from '../components/ProjectWorkflowHeader';
import FRC from 'formsy-react-components';
import FormState from '../components/form/FormState';
import { Col, Row, FormGroup, InputGroup, FormControl, Radio, RadioGroup, Button, ButtonGroup } from 'react-bootstrap';
import { SelectField } from '../components/SelectField';

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

export default class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this)
  }
  getOptions(opts){
    console.log("opts", opts);
    let options = _.map(opts,(opt) => {
      return <option key={opt.value} value={opt.value}>{opt.label}</option>
    })
    return options;
  }
  render() {
    let description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        firstWidth = 3,
        secondWidth= 9,
        requireAll = true;

    return (
      <div className="page-container">
        <ProgressBar />
        <ProjectWorkflowHeader title="Project Information" description={description} />
        <FormState name={ 'project' }
        onValidSubmit={ onValidSubmit.bind( this, 'projectAdd' ) }
        disabled={false}
        onSave={ save }
        className="project-form basic">
          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Location</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
              <div className="field-container">
                <label htmlFor="region">Region</label>
                <SelectField label="Region"
                  name="region"
                  defaultValue="Select a Region"
                  className="col-sm-3">
                  { this.getOptions(fieldValues.dropdowns.region) }
                </SelectField>
              </div>
              <div className="field-container">
                <label htmlFor="country">Country</label>
                <SelectField label="Country"
                  name="country" >
                  { this.getOptions(fieldValues.dropdowns.country) }
                </SelectField>
              </div>
              <div className="field-container">
                <label htmlFor="billingOffice">Billing Office</label>
                <SelectField label="Billing Office"
                  name="billingOffice" >
                  { this.getOptions(fieldValues.dropdowns.billingOffice) }
                </SelectField>
              </div>
              <div className="field-container">
                <label htmlFor="currency">Currency</label>
                <SelectField label="Currency"
                  name="currency" >
                  { this.getOptions(fieldValues.dropdowns.currency) }
                </SelectField>
              </div>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Project Details</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
              <div className="radio_row row">
                <Radio bsClass="col"
                  name="client_type"
                  value="existing_client">Existing Client</Radio>
                <Radio bsClass="col"
                  name="client_type"
                  value="new_client">New Client</Radio>
              </div>
              <div className="field-container">
                <label htmlFor="region">Region</label>
                <SelectField label="Region"
                  name="region"
                  defaultValue="Select a Region"
                  className="col-sm-3">
                  { this.getOptions(fieldValues.dropdowns.region) }
                </SelectField>
              </div>
              <div className="field-container">
                <label htmlFor="project_name">Project Name</label>
                <input type="text"
                  name="project_name"
                  className="something" />
              </div>
              <div className="field-container">
                <SelectField label="Compensation Type"
                  name="compensation_type" >
                  { this.getOptions(fieldValues.dropdowns.currency) }
                </SelectField>
              </div>
              <div className="field-container">
                <input type="text"
                  name="job_number"
                  placeholder="Job Number (optional)"
                  className="something" />
              </div>
              <div className="field-container">
                <input type="text"
                  name="sow_number"
                  placeholder="show Number (optional)"
                  className="something" />
              </div>
              <div className="field-container">
                <input type="text"
                  name="upload_SOW"
                  placeholder="Upload SOW (optional)"
                  className="something" />
              </div>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Timing</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Deliverables/ Work Streams</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Comments/ Project Notes</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
            </Col>
          </FormGroup>
        </FormState>
      </div>
    )
  }
}

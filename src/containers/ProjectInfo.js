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
import ProjectWorkflowButtons from '../components/ProjectWorkflowButtons';
import FRC from 'formsy-react-components';
import FormState from '../components/form/FormState';
import { Col, Row, FormGroup, InputGroup, FormControl, Radio, Glyphicon, Button } from 'react-bootstrap';
import { SelectField } from '../components/SelectField';

const { Input } = FRC;

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
    this.state = {
      endDate: '',
      planningUnits: 'Hours',
      weekStarting: ''
    }
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
            <div className="clearfix" />
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
                  { this.getOptions(fieldValues.dropdowns.compenationType) }
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
            <div className="clearfix" />
          </FormGroup>

          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Timing</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
              <div className="field-container">
                <SelectField label="Plan By"
                  name="duration_increment" >
                  { this.getOptions(fieldValues.dropdowns.durationIncrement) }
                </SelectField>
              </div>
              <div className="field-container">
                <input type="text"
                  name="upload_SOW"
                  placeholder="Upload SOW (optional)"
                  className="something" />
              </div>
              <div className="field-container">
                <input type="number"
                  name="Duration"
                  placeholder="(# of months)"
                  className="something" />
              </div>
              <div className="controlled_components">
                <div className="field-container">
                  <label htmlFor="planning_units">Planning Units</label>
                  <input type="number"
                    name="planning_units"
                    className="something"
                    placeholder={this.state.planningUnits}
                    disabled={true} />
                </div>
                <div className="field-container">
                  <label htmlFor="week_starting">Week Starting</label>
                  <input type="text"
                    name="week_starting"
                    className="something"
                    placeholder={this.state.weekStarting}
                    disabled={true} />
                </div>
                <div className="field-container">
                  <label htmlFor="end_date">Estimated End Date</label>
                  <input type="text"
                    name="end_date"
                    className="something"
                    placeholder={this.state.endDate}
                    disabled={true} />
                </div>
              </div>
            </Col>
            <div className="clearfix" />
          </FormGroup>

          <FormGroup>
            <Col sm={firstWidth} className="label">
              <h3>Deliverable/Work Stream</h3>
            </Col>
            <Col sm={secondWidth} className="deliverables_col">
              <div className="field-container col-sm-9">
                <input type="text"
                  name="deliverable-1"
                  className="something"
                  placeholder="Add a deliverable" />
              </div>
              <div className="field-container col-sm-9">
                <input type="text"
                  name="deliverable-2"
                  className="something"
                  placeholder="Add a deliverable" />
              </div>
              <div className="field-container col-sm-9">
                <input type="text"
                  name="deliverable-3"
                  className="something"
                  placeholder="Add a deliverable" />
              </div>
              <div className="field-container col-sm-9">
                <input type="text"
                  name="deliverable-4"
                  className="something"
                  placeholder="Add a deliverable" />
              </div>
              <div className="field-container col-sm-9">
                <input type="text"
                  name="deliverable-5"
                  className="something"
                  placeholder="Add a deliverable" />
              </div>
            </Col>
            <div className="clearfix" />
        </FormGroup>

          {/*}<Col sm={12} className="form_row deliverables_row">
            <Input label="Deliverable/Work Stream"
              name="deliverable"
              placeholder="deliverable"
              elementWrapperClassName={['col-sm-2 input-percent']}
              addonAfter={<Glyphicon glyph="glyphicon-trash" />}
              type="text" />
            <Button className="col-sm-9 col-sm-offset-3">Add Deliverable to Workstream</Button>
            <div className="clearfix" />
          </Col>*/}

          <FormGroup>
            <ProjectWorkflowButtons />
          </FormGroup>

        </FormState>
        <div className="clearfix"></div>
      </div>
    )
  }
}

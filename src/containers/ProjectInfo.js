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
import { Col, Row, FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { SelectField } from '../components/SelectField';

const { Input, Radio } = FRC;

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
        firstWidth = 100,
        secondWidth= 600,
        requireAll = true;

    return (
      <div className="container">
        <ProgressBar />
        <ProjectWorkflowHeader title="Project Information" description={description} />
        <FormState name={ 'project' }
        onValidSubmit={ onValidSubmit.bind( this, 'projectAdd' ) }
        disabled={false}
        onSave={ save }
        className="project-form basic">
          <FormGroup>
            <Col sm={firstWidth}>
              <h3>Location</h3>
            </Col>
            <Col sm={secondWidth} className="form_row">
              <SelectField label="Region"
                name="region"
                defaultValue="Select a Region"
                className="col-sm-3">
                { this.getOptions(fieldValues.dropdowns.region) }
              </SelectField>
              <SelectField label="Country"
                name="country" >
                { this.getOptions(fieldValues.dropdowns.country) }
              </SelectField>
              <SelectField label="Billing Office"
                name="billingOffice" >
                { this.getOptions(fieldValues.dropdowns.billingOffice) }
              </SelectField>
              <SelectField label="Currency"
                name="currency" >
                { this.getOptions(fieldValues.dropdowns.currency) }
              </SelectField>
            </Col>
          </FormGroup>
          <FormGroup>
            <InputGroup>
                <label>blah</label>
                <se className="col-6-sm" type="text" aria-label="..." name="blah"/>
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
        </FormState>
      </div>
    )
  }
}

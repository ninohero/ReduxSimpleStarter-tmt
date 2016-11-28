import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { fetchWeather } from '../actions/index';
import { save } from '../actions/form';

// components
import { ProgressBar } from '../components/ProgressBar';
import { ProjectWorkflowHeader } from '../components/ProjectWorkflowHeader';
import FRC from 'formsy-react-components';
import FormState from '../components/form/FormState';
import { Col, Row, FormGroup, InputGroup } from 'react-bootstrap';

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

class ProjectInfo extends Component {
  render() {
    return (
      <div className="container">
        <ProgressBar stage={1} />
        <ProjectWorkflowHeader title="ProjectInformation" description={description} />
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
        <FormState name={ 'project' }
        onValidSubmit={ onValidSubmit.bind( this, 'projectAdd' ) }
        disabled={false}
        onSave={ save }
        className="update_bid_form">
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <label>blah</label>
                <input type="radio" aria-label="..." name="blah"/>
              </InputGroup.Addon>
              <FormControl type="text" />
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
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
          <Row>

          </Row>
        </FormState>
      </div>
    )
  }
}

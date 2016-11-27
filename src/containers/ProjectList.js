import _ from 'lodash';
import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { projects } from './staticData';

function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

function contractIdFormatter(cell, row){
  return <Link to={"contract/" + cell }>{cell}</Link>;
}

function mapProjects( projects ) {
  let projectMap = _.map( projects, ( project ) => { // blah
    return {
      id: _.get( project, 'data[0]._id'),
      name: _.get( project, 'data[0].data.name'),
      billingOffice: _.get( project, 'data[0].data.billingOffice'),
      durationMonths: _.get( project, 'data[0].data.durationMonths'),
      totalBudget: _.get( project, 'data[0].data.totalBudget'),
      win: _.get( project, 'data[0].data.win'),
      status: _.get( project, 'data[0].data.status'),
    }
  });

  return projectMap;
}

function ProjectList( { projects } ) {

  //console.log('********** LOADING CONTRACTS ************', contracts );

  return (
    <div className="list-view">
      <h1>Contract Listing</h1>
      <p>This is a listing of all current contracts being tracked on the distributed ledger</p>
      <BootstrapTable data={ mapProjects( projects ) } striped={true} hover={true}>
        <TableHeaderColumn dataSort={true} isKey={true} dataField="id" dataFormat={contractIdFormatter}>Contract ID</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="name">Project Name</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="billingOffice" >Billing Office</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="durationMonths">Duration</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="totalBudget" dataFormat={priceFormatter}>Total Budget</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="win">Win/Loss</TableHeaderColumn>
        <TableHeaderColumn dataSort={true} dataField="status">Status</TableHeaderColumn>
      </BootstrapTable>
      <p className="table-totals">
        <label>Totals:</label>
        <span className="money">
          <i className="glyphicon glyphicon-usd"></i>{ getTotals( contracts ) }
        </span>
      </p>
      <Link to="/reinsurance">
        <input className="btn btn-primary" formNoValidate={true} type="submit" defaultValue="Enter New Contract" />
      </Link>
    </div>
  );
}

export default connect(
  state => ({
    projects: state.projects.getIn(['reinsurance']).toJSON()
  }),
  {  }
)( ProjectList )

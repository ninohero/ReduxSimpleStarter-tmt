import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { fetchProjects } from '../actions/index';
// data
import { staticProjects } from './staticData';
// components
import { Link } from 'react-router'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class  ProjectList extends Component {
  constructor(props) {
    super(props);
  }
  priceFormatter(cell, row){
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
  }

  contractIdFormatter(cell, row){
    //return <Link to={"contract/" + cell }>{cell}</Link>;
    console.log("cell", cell)
    console.log("row", row)
    return <a href={"project/" + cell }>{cell}</a>;
  }

  mapProjects( projects ) {
    let keys = Object.keys(projects);
    let projectMap = _.map( projects, ( project,i ) => { // blah
      console.log("key",i )
      return {
        id: i,
        name: _.get( project, 'name'),
        billingOffice: _.get( project, 'billingOffice'),
        estimatedStart: _.get( project, 'estimatedStart'),
        durationMonths: _.get( project, 'durationMonths'),
        totalBudget: _.get( project, 'totalBudget'),
        win: _.get( project, 'win'),
        status: _.get( project, 'status'),
      }
    });

    return projectMap;
  }

  createCustomSearchField = (props) => {
    return (
      <SearchField
        className='my-custom-class'
        defaultValue={ this.props.defaultSearch }
        placeholder={ this.props.searchPlaceholder }/>
    );
  }

  render() {
    const options = {
      clearSearch: true,
      searchField: this.createCustomSearchField
    };

    console.log("projects", staticProjects);
    return (
      <div className="list-view">
        <h1>Project Listing</h1>
        <p>This is a listing of all current contracts being tracked on the distributed ledger</p>
        <BootstrapTable
            data={ this.mapProjects( staticProjects ) }
            striped={true}
            hover={true}
            search>
          <TableHeaderColumn dataSort={true} isKey={true} width="40" dataField="id" dataFormat={this.contractIdFormatter}>Contract ID</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="name">Project Name</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="billingOffice" >Billing Office</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="estimatedStart">Est. Start</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="durationMonths">Duration</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="totalBudget" dataFormat={this.priceFormatter}>Total Budget</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="win">Win/Loss</TableHeaderColumn>
          <TableHeaderColumn dataSort={true} dataField="status">Status</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

/*export default connect(
  state => ({
    projects: state.projects.getIn(['reinsurance']).toJSON()
  }),
  {  }
)( ProjectList )*/

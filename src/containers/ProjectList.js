import _ from 'lodash';
import moment from 'moment';
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
import ProjectWorkflowHeader from '../components/ProjectWorkflowHeader';

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

  mapCurrentProjects( projects ) {
    let keys = Object.keys(projects);
    let projectMap = _.map( projects, ( project,i ) => {
      let currentDate = moment(),
          startDate   = moment(project.estimatedStart),
          endDate     = startDate.add(project.durationMonths, 'M');

      if(currentDate.isBefore(endDate)){
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
      } else {
        // return nothing
      }
    });

    return _.pull(projectMap, undefined);
  }
  // TODO: combine these two mapProjects methods
  mapArchivedProjects( projects ) {
    let keys = Object.keys(projects);
    let projectMap = _.map( projects, ( project,i ) => {
      let currentDate = moment(),
          startDate   = moment(project.estimatedStart),
          endDate     = startDate.add(project.durationMonths, 'M');

      if(currentDate.isAfter(endDate)){
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
      }
    });

    return _.pull(projectMap, undefined);
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

    let description = "This is a listing of all current contracts being tracked on the distributed ledger";
    return (
      <div className="project-list-view">
        <ProjectWorkflowHeader title="Project Listing" description={description} />
        <div className="dividing-container">
          <h3>Active Projects</h3>
          <BootstrapTable
              data={ this.mapCurrentProjects( staticProjects ) }
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

      <div className="dividing-container">
        <h3>Archived Projects</h3>
        <BootstrapTable
            data={ this.mapArchivedProjects( staticProjects ) }
            striped={true}
            hover={true} >
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

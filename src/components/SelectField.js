import React from "react";
import ReactDOM from "react-dom";

export class SelectField extends React.Component {
	componentWillReceiveProps(nextProps) {
        var input = ReactDOM.findDOMNode(this);
        if (nextProps.defaultValue !== this.props.defaultValue) {
          input.value = nextProps.defaultValue;
        }
  }
  render() {
    var addtlProps={}
    if(!this.props.defaultValue && !this.props.value) {
      addtlProps["data-empty"]=true;
    }
    return <select {...this.props} {...addtlProps}/>
  }
};

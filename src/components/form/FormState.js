import React from 'react'
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';
import _ from 'lodash';

const FormState = React.createClass({

    mixins: [FRC.ParentContextMixin],

    propTypes: {
        children: React.PropTypes.node,
        // onSave: React.PropTypes.function,
        name: React.PropTypes.string
    },

    componentWillUnmount() {
      this.props.onSave( this.props.name, this.refs.formsy.getCurrentValues() );
    },

    render() {
        // Strip onSave from props so React doesn't complain
        let cleanProps = _.omit( this.props, 'onSave');

        return (
            <Formsy.Form
                className={this.getLayoutClassName()}
                {...cleanProps}
                ref="formsy"
            >
                {this.props.children}
            </Formsy.Form>
        );
    }

});

export default FormState;

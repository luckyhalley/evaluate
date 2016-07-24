import React, {Component, PropTypes} from 'react';
import {mapState, mapDispatch} from './param';
import {connect} from 'react-redux';
class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>TODO</div>
    );
  }
}
function mapStateToProps(state) {
  return mapState(state);
}

function mapDispatchToProps(dispatch) {
  return mapDispatch(dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);

import React, {Component, PropTypes} from "react";
import {mapState, mapDispatch} from "./param";
import {connect} from "react-redux";
import Toast from "components/toast";
import Header from "components/header";
import CourseInfo from "components/course-info";
import Star from "components/star";

class Container extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let {
      actionGetCourseInfo
    } = this.props;
    actionGetCourseInfo(0);
  }
  render() {
    let { evaluate } = this.props,
      { course } = evaluate;
    console.log(this.props);
    return (
      <div>
        <Header title="Evaluate"/>
        <CourseInfo {...course}/>
        <Star setScore='' max={5} name='star-1' readonly='true'/>
        <Toast text="in preparation."/>
      </div>
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

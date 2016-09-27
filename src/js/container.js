import styles from '../styles/container.scss?m';
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
      actionGetCourseInfo,
      actionGetScore
    } = this.props;
    actionGetCourseInfo(0);
    actionGetScore();
  }
  render() {
    let { evaluate, evaluate_param } = this.props,
      { course } = evaluate;
    return (
      <div>
        <Header title="Evaluate"/>
        <CourseInfo {...course}/>
        <ul className={styles.list}>
          {
            Object.keys(evaluate_param).map((item, index) =>
              <li className={styles.item} key={index}>
                <label className={styles.label}>{evaluate_param[item]}</label>
                <Star setScore='' max={5} name='star-1' readonly='true'/>
              </li>
            )
          }
        </ul>
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

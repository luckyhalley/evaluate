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
    let { evaluate, evaluate_param, actionUpdateScore } = this.props,
      { course, score } = evaluate;
    return (
      <div>
        <Header title="Evaluate"/>
        <CourseInfo {...course}/>
        <ul className={styles.list}>
          {
            Object.keys(evaluate_param).map((item, index) =>
              <li className={styles.item} key={index}>
                <label className={styles.label}>{evaluate_param[item]}</label>
                <Star setScore={actionUpdateScore} score={score} max={5} name={item} readonly={false}/>
              </li>
            )
          }
            <li className={styles.item}>
              <textarea className={styles.text} value=''></textarea>}
            </li>
            <li className={`${styles.item} ${styles.min} clearfix`}>
              <span className={styles.right}>
                <input type="checkbox" id="anonymous" className={styles.anonymous} onChange=''/>
                <label htmlFor='anonymous'></label>
              </span>
            <label className={`${styles.label} ${styles.right}`}>匿名评价</label>
            </li>
        </ul>
        
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

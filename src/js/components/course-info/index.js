import styles from "./index.scss?m";
import React, {Component} from 'react';

export default class CourseInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2>课程名</h2>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>时间：</label>
          <span></span>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>老师：</label>

            <span>
                <span>
                    <img className="course-teacher-photo"/>
                    <label></label>
                </span>
            </span>
        </li>
      </ul>
    );
  }
}

import styles from "./index.scss?m";
import React, {Component} from 'react';
import { formatDate } from '../../utils';

export default class CourseInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {
      beginTime,
      className,
      endTime,
      teachers
    } = this.props;
    let beginTimeDate = new Date(beginTime),
      endTimeDate = new Date(endTime),
      beginDate = formatDate(beginTimeDate, 'yyyy.MM.dd'),
      bTime = formatDate(beginTimeDate, 'hh:mm'),
      eTime = formatDate(endTimeDate, 'hh:mm');

    return (
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2>{className}</h2>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>时间：</label>
          <span>{beginDate} {bTime}-{eTime}</span>
        </li>
        <li className={styles.item}>
          <label className={styles.label}>老师：</label>
          {teachers && teachers.map((teacher, index) =>
            <span key={index}>
                <span>
                    <img src={teacher.teacherImage} className={styles["course-teacher-photo"]}/>
                    <label>{teacher.teacherName}</label>
                </span>
            </span>
          )}
        </li>
      </ul>

    );
  }
}

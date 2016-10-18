import styles from "./index.scss?m";
import React, { Component } from 'react';

export default class Header extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <i className="hui-icon hui-icon-carat-w"></i>
        </div>
        <div className={styles.center}>{this.props.title}</div>
        <div className={styles.right}>

        </div>
      </div>
    );
  }
}

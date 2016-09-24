import styles from "./index.scss?m";
import React, {Component} from 'react';

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.toast}>
        {this.props.text}
      </div>
    );
  }
}

export default Toast;

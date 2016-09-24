import styles from "./index.scss?m";
import React, {Component} from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);
  }

  starTo(e, sc) {
    let {setScore, name, score, readonly} = this.props;
    if (readonly) {
      return;
    }
    if (!score) {
      score = {};
    }
    if (sc) {
      score[name] = sc;
    }
    setScore(score);
  }

  render() {
    let {max, name, score} = this.props,
      stars = [], style = ``;
    for (let i = 1; i <= max; i++) {
      if (score && score[name] && score[name] >= i) {
        style = `{styles.icon-star-solid} star selected`;
      } else {
        style = `icon-star-solid star unselected`;
      }
      stars.push(<li key={i} className={style} onClick={e => this.starTo(e, i)} data-index={i}></li>);
    }
    return (
      <ul className={styles.stars}>
        {stars}
      </ul>
    );
  }
}

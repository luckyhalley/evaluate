import styles from "./index.scss?m";
import React, {Component} from 'react';

export default class Star extends Component {
  constructor(props) {
    super(props);
  }

  starTo(e, sc) {
    let {setScore, name, score, readonly} = this.props;
    console.log(this.props);

    if (readonly) {
      console.log(5555);

      return;
    }
    console.log(444);


    if (!score) {
      score = {};
    }
    console.log(3333);

    if (sc) {
      score[name] = sc;
    }
    console.log(1111);
    setScore(score);
    console.log(2222);

  }

  render() {
    let {max, name, score} = this.props,
      stars = [], style = ``;
    for (let i = 1; i <= max; i++) {
      if (score && score[name] && score[name] >= i) {
        style = `icon-star-solid ${styles.star} ${styles.selected}`;
      } else {
        style = `icon-star-solid ${styles.star} ${styles.unselected}`;
      }
      console.log(name);
      stars.push(<li key={i} className={style} onClick={e => this.starTo(e, i)} data-index={i}></li>);
    }
    return (
      <ul className={styles.stars}>
        {stars}
      </ul>
    );
  }
}

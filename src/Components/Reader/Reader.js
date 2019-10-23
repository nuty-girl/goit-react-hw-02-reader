import { React, Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import Publication from '../Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ),
  };

  static defaultProps = {
    items: [],
  };

  state = { indexPublication: 0 };

  handleIncrement = () => {
    this.setState(prevState => ({
      indexPublication:
        prevState < this.props.items.lenght && prevState.indexPublication + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      indexPublication: prevState > 1 && prevState.indexPublication - 1,
    }));
  };

  render() {
    const { indexPublication } = this.state;
    const { items } = this.props;
    const item = items[indexPublication];
    return (
      <div className={styles.reader}>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <Counter
          indexPublication={indexPublication}
          publicationQuantity={items.lenght}
        />
        <Publication
          key={item.id}
          indexPublication={indexPublication}
          title={item.title}
          text={item.text}
        />
      </div>
    );
  }
}

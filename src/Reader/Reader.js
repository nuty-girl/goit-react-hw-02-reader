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

  static defaultProps = { items: [] };

  state = { publicationId: 1 };

  item = this.props.items.find(
    i => this.props.items.indexOf(i) + 1 === this.state.publicationId,
  );

  handleIncrement = () => {
    this.setState(prevState => ({
      publicationId: prevState.publicationId + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      publicationId: prevState.publicationId - 1,
    }));
  };

  render() {
    const { publicationId } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <Counter
          publicationId={publicationId}
          publicationQuantity={items.lenght}
        />
        <Publication
          key={this.item.id}
          publicationId={publicationId}
          title={this.item.title}
          text={this.item.text}
        />
      </div>
    );
  }
}

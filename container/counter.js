import {Container} from 'unstated';

class CounterContainer extends Container {
  state = {
    load: '3',
  };

  increment = () => {
    this.setState({load: this.state.load + 1});
  };

  decrement = () => {
    this.setState({load: this.state.load - 1});
  };

  incrementBy3 = () => {
    this.setState((prevState) => ({load: prevState.load + 1}));
    this.setState((prevState) => ({load: prevState.load + 1}));
    this.setState((prevState) => ({load: prevState.load + 1}));
  };
}

export default CounterContainer;

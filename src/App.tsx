import React from 'react';

type Props = {
  changeMessage: string;
};

export class App extends React.Component<Props> {
  state = {
    changeMessage: 'Nothing was pressed yet',
  };

  handleKeyup = (e: KeyboardEvent) => {
    const pressedKey = e.key;

    this.setState({ changeMessage: `The last pressed key is [${pressedKey}]` });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyup);
  }

  render() {
    const { changeMessage } = this.state;

    return (
      <div className="App">
        <p className="App__message">{changeMessage}</p>
      </div>
    );
  }
}

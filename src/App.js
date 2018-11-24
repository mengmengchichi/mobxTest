import React, { Component } from 'react';
import { observer } from "mobx-react";
import { autorun, observable } from 'mobx';

@observer
class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue : ''
    }
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value
    })
  }

  addItem = () => {
    this.props.store.addItem(this.state.inputValue);
    this.setState({
      ...this.state,
      inputValue: ''
    }, () => {console.log(this.state.inputValue)})
  }


  render() {
    const store = this.props.store;  
    return (
      <div className="App">
        <input type="text" value={this.state.inputValue} onChange={this.onChange}/> <div onClick={this.addItem}>添加</div>
        <button onClick={store.changeData}>渲染</button>
        <ul>
          {
            store.data.map(item => {
              return (
                <li key={item.id}
                onClick={store.changeSuccess}
                data-id={item.id}
                style={item.isSuccess ? {color: '#4f0'} : {color: "#f90"}}
                >
                <button onClick={store.reduceCount} data-id={item.id}>-</button>
                {item.title} {item.count}
                <button onClick={store.addCount} data-id={item.id}>+</button>
                </li>
              )
            })
          }
        </ul>
        <div>{store.allCount}</div>
      </div>
    );
  }
}

export default App;

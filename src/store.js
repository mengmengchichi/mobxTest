import { observable, action, autorun, computed } from 'mobx'

const todoList = [
  {
    id:1,
    isSuccess: false,
    count: 2,
    title: "阿诗丹顿"
  },
  {
    id:2,
    isSuccess: false,
    count: 2,
    title: "sd"
  },
  {
    id:3,
    isSuccess: false,
    count: 3,
    title: "十多分"
  },
  {
    id:4,
    isSuccess: true,
    count: 6,
    title: "我"
  }
]

let data = [];



export default class State {
  @observable data = data;

  @action
  changeData = () => {
    let newData = this.data;
    if (newData.length === 0) {
      this.data = todoList;
    } else {
      this.data = [];
    }
  }

  @action
  changeSuccess = (e) => {   
    const id = Number(e.target.getAttribute('data-id'));
    const newData = this.data.map(item => {
      if (item.id === id) {
        item.isSuccess = !item.isSuccess;
      }
      return item;
    });
    this.data = newData;
  }

  @action
  reduceCount = (e) => {
    const id = Number(e.target.getAttribute('data-id'));
    const newData = this.data.map(item => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count -= 1;
        }
      }
      return item;
    });
    this.data = newData;
  }
  @action
  addCount = (e) => {
    const id = Number(e.target.getAttribute('data-id'));
    const newData = this.data.map(item => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });
    this.data = newData;
  }

  @action
  addItem = (title) => {
    const id = this.data.length + 1, isSuccess =false, count = 1;
    const newItem = {
      title,
      id,
      isSuccess,
      count
    }
    this.data.push(newItem);
  }
  
  @computed get allCount() {
    return this.data.reduce((init, item) => {
        return init+item.count
    }, 0)
  }
}

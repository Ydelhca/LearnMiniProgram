Page({
  data: {
    name: 'Coderwhy',
    age: 18,
    students: [
      { id: 110, name: 'kobe', age: 30 },
      { id: 110, name: 'james', age: 28 },
      { id: 110, name: 'Mark', age: 24 },
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误做法：界面不会刷新
    // this.data.counter += 1
    // console.log(this.data.counter)
    // 2.this.setDate()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})
// 编程范式：
// 1.命令式编程：原生操作DOM
// 2.声明式编程：Vue/React/Angular
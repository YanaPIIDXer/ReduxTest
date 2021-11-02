import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();
    this.elements = null;
    this.onSubmitTodo = this.onSubmitTodo.bind(this);   // メソッド内でthisを使えるようにするためのおまじない
  }
  
  onSubmitTodo(event) {
    event.preventDefault();

    const text = this.elements["todo"].value;
    if (text === "") {
      alert("TODOを入力してください。");
      return;
    }
    alert(text);
  }

  render() {
    const { todoes } = this.props;
    return (
      <div class="container">
        <div class="text-center">
          <h1 class="mt-3">Redux Test</h1>
          <hr />
          <form onSubmit={this.onSubmitTodo} ref={elem => this.elements = elem && elem.elements}>
            <input type="text" name="todo" placeholder="TODOを入力" /><br />
            <input type="submit" value="追加" />
          </form>
          <div class="mt-3">
            <table class="table table-stripe">
              <thead>
                <tr><th>Index</th><th>TODO</th><th>Done</th></tr>
              </thead>
              <tbody>
                {todoes.map((todo, index) => {
                  return (
                    <tr>
                      <td>index</td>
                      <td>todo.text</td>
                      <td><input type="checkbox" /> </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

// Storeの保持するTODOリストを返す関数
const list = (state) => {
  return { todoes: state.todoes };
}

// connect関数でComponentをラップすることで、
// propにdispatch関数とstateが渡されるようになる
export default connect(list)(App);

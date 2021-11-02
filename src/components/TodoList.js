import { Component } from 'react';
import { connect } from 'react-redux';
import { setDone } from '../actions/todo';

class TodoList extends Component {
    constructor() {
        super();
        
        this.onUpdateDone = this.onUpdateDone.bind(this);
    }

    onUpdateDone(event, index) {
        const done = event.target.checked;
        this.props.dispatch(setDone(index, done));
    }
    
    render() {
        const { todoes } = this.props;
        return (
            <table class="table table-stripe">
              <thead>
                <tr><th>Index</th><th>TODO</th><th>Done</th></tr>
              </thead>
              <tbody>
                {todoes.map((todo, index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>{todo.text}</td>
                      <td>
                        <input type="checkbox" onChange={(event) => this.onUpdateDone(event, index)} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
        );
    }
}

// Storeの保持するTODOリストを返す関数
const list = (state) => {
    return { todoes: state.todoes };
  }
  
  // connect関数でComponentをラップすることで、
  // propにdispatch関数とstateが渡されるようになる
  export default connect(list)(TodoList);
  
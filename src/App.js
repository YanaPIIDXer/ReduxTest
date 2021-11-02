import { Component } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="text-center">
          <h1 class="mt-3">Redux Test</h1>
          <hr />
          <AddTodoForm />
          <div class="mt-3">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
};

export default App;

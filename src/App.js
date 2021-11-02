import { Component } from 'react';
import AddTodoForm from './components/AddTodoForm';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import Messages from './components/Messages';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="text-center">
          <h1 class="mt-3">Redux Test</h1>
          <hr />
          <Messages />
          <div class="row">
            <div class="col-6"><Link to="/">TODOリスト</Link></div>
            <div class="col-6"><Link to="/add">追加フォーム</Link></div>
          </div>
          <div class="mt-3">
            <Switch>
              <Route path="/" component={TodoList} exact={true} key={0} />
              <Route path="/add" component={AddTodoForm} exact={true}  key={1} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(App);

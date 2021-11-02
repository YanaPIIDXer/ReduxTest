import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="text-center">
          <h1 class="mt-3">Redux Test</h1>
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

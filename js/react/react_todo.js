import React from 'react';
import ReactDom from 'react-dom';

let toDos = React.createClass({


  // I know I need something similar to this but am lost including it
  // getInitialState() {
  //   return (
  //     {completed: false}
  //   );
  // }

  // setState() {
  //   if 'clicked' === true {
  //     return (
  //       {complete: true}
  //     );
  //   };
  // }

  // Need to get an instance of the model and the collection in here


  processItems(items, id) {
    return (
      <li className='todo'>
        <span className='title'>items.('.title')</span>
        <button className='action' data-id='items.id'>
          <i className='fa fa-fa'></i>
        </button>
      </li>
    );
  },

  let itemCollection = new CollectionModel;
  let itemModel = new TodosModel

  submitHandler(event) {
    event.preventDefault();
    let submittedItem = document.querySelector('.fa-plus');
    submittedItem.classList.remove('fa-plus');
    submittedItem.classList.add('fa-spin');
    submittedItem.classList.add('fa-spinner');
    // Still havent defined the collection anywhere.... so collection.save() will work when I have figured out how to define the model

  },

  markedComplete(event) {
    event.preventDefault();
    let button = event.currentTarget();
    let id = button.get(id);
    let selectedItem = document.querySelectorAll('.fa-close');
    selectedItem.classList.remove('.fa-close');
    selectedItem.classList.add('.fa-spin');
    selectedItem.classList.add('.fa-spinner');
    // Still havent defined the model anywhere.... so model.save() will work when I have figured out how to define the model

  },

  unMarkComplete(event) {
    event.preventDefault();
    let button = event.currentTarget();
    let id = button.get(id);
    let selectedItem = document.querySelectorAll('.fa-undo');
    selectedItem.classList.remove('.fa-undo');
    selectedItem.classList.add('.fa-spin');
    selectedItem.classList.add('.fa-spinner');
    // Still havent defined the model anywhere.... so model.save() will work when I have figured out how to define the model
  },


  clearComplete(event) {
    event.preventDefault();
    // something something .remove()
  },

  render() {
    return (
      <div className='todo-collection'>
        <header>
          <h1>Things Todo</h1>
        </header>
        
        <main>
          <form onSubmit={this.props.submitHandler} className='todo-add'>
            <input type='text' name='title' placeholder='Add Something'>
            </input>
            <button onClick={this.props.markedComplete} >
            <i className='fa fa-plus'></i></button>     
          </form>

          <ul className='todo-list'>{this.props.processItems()}</ul>
        </main>
      
        <footer>
          <button onClick={this.props.onClearComplete} className='clear'>
            Clear Complete
          </button>
        </footer>
      </div>
    );
  }
});

let el = document.querySelector('.app');

export default toDos;

ReactDom.render(<toDos/>, el);


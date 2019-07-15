import React from 'react';
import './App.css';
import store from './store/index';
import update_person from './actions/personActions';
import update_animal from './actions/animalActions';

function updatePerson() {
  store.dispatch(update_person);
}

function updateAnimal() {
  store.dispatch(update_animal);
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="textCenter">Redux App</h2>
        <hr/>
        Person: {store.getState().person.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={updatePerson}>update person</button>
        <br/><br/>
        Animal: {store.getState().animal.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={updateAnimal}>update animal</button>
      </div>
    </div>
  );
}

export default App;

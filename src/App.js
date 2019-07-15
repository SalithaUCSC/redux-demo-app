import React from 'react';
import './App.css';
import store from './store/index';
import update_person from './actions/personActions';
import update_animal from './actions/animalActions';
import {connect} from 'react-redux';

function updatePerson() {
  store.dispatch(update_person);
}

function updateAnimal() {
  store.dispatch(update_animal);
}

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <div className="container">
        <h2 className="textCenter">Redux App</h2>
        <hr/>
        Person: {props.person.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={updatePerson}>update person</button>
        <br/><br/>
        Animal: {props.animal.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={updateAnimal}>update animal</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(App);

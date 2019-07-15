import React from 'react';
import './App.css';
import update_person from './actions/personActions';
import update_animal from './actions/animalActions';
import {connect} from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <h2 className="textCenter">Redux App</h2>
        <hr/>
        Person: {props.person.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={props.updatePerson}>update person</button>
        <br/><br/>
        Animal: {props.animal.name}
        <br/>
        <button className="btn btn-primary btn-sm" onClick={props.updateAnimal}>update animal</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    person: state.person,
    animal: state.animal
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updatePerson: () => {dispatch(update_person)},
    updateAnimal: () => {dispatch(update_animal)}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

import logo from "./logo.svg";
import "./App.css";
import { inject, observer } from "mobx-react";
import React, { useContext } from "react";
import PersonContext from "./contexts/PersonContext";
import autobind from "autobind-decorator";
import { action, computed, runInAction } from "mobx";
import PersonStore from "./stores/PersonStores";
import PersonContainer from "./containers/PersonContainer";
import TodoContainer from "./containers/TodoContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";

// function App({ personStore }) {
//   const age10 = computed(() => {
//     return Math.floor(personStore.age / 10) * 10;
//   }).get();

//   console.log("render", personStore.age, personStore.name);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {personStore.age}, {personStore.name}
//         </p>
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//       </header>
//     </div>
//   );

//   function click() {
//     // personStore3.plus();
//     setTimeout(() => {
//       personStore.testAction();
//       // runInAction(() => {
//       //   personStore3.age = 99;
//       //   personStore3.name = "happy";
//       // });
//     }, 500);
//   }
// }

// @inject("personStore")
// @observer
// class App extends React.Component {
//   // static contextType = PersonContext;

//   render() {
//     console.log("render");
//     const { personStore } = this.props;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{personStore.age10}</p>
//           <p>
//             <button onClick={this.click}>plus</button>
//           </p>
//         </header>
//       </div>
//     );
//   }

//   @autobind
//   click() {
//     // const personStore = this.context;
//     this.props.personStore.plus();
//   }
// }

// @inject("personStore")
// @observer
// class AppContainer extends React.Component {
//   // static contextType = PersonContext;

//   render() {
//     console.log("render");
//     const { personStore } = this.props;
//     return <App age10={personStore.age10} plus={this.plus} />;
//   }

//   @autobind
//   plus() {
//     // const personStore = this.context;
//     this.props.personStore.plus();
//   }
// }

// function App({ age10, plus }) {
//   console.log("render");
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{age10}</p>
//         <p>
//           <button onClick={click}>plus</button>
//         </p>
//       </header>
//     </div>
//   );

//   function click() {
//     plus();
//   }
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonContainer />
        <TodoContainer />
        <TodoFormContainer />
        <UserListContainer />
      </header>
    </div>
  );
}

// export default inject("personStore")(observer(App));

export default App;

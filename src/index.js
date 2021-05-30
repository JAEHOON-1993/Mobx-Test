import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { autorun, observable } from "mobx";
import PersonContext from "./contexts/PersonContext";
import PersonStore from "./stores/PersonStores";
import { Provider } from "mobx-react";
import RootStore from "./stores/RootStore";

// const isLogin = observable(true);

// const person = observable({
//   name: "Mark",
//   age: 39,
// });

const rootStore = new RootStore();

// setInterval(() => {
//   personStore.age++;
// }, 500);

// autorun(() => {
//   console.log(isLogin.get());
//   console.log(person.age);
//   console.log(personStore.age);
// });

// isLogin.set(false);

// person.age = 40;

// personStore.age = 49;

ReactDOM.render(
  <React.StrictMode>
    {/* <PersonContext.Provider value={personStore}> */}
    <Provider {...rootStore}>
      <App />
    </Provider>
    {/* </PersonContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

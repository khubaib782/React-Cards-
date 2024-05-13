import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="../images/khubaib.jpg" alt="Khubaib" />;
}

function Intro() {
  return (
    <div>
      <h1> M Khubaib Farooq</h1>
      <p>
        I'm a skilled web developer with a passion for crafting dynamic and
        user-centric websites through a blend of front-end and back-end
        technologies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🤞" color="  blue" />
      <Skill skill="HTML + CSS" emoji="😎" color="orange" />
      <Skill skill="JavaScript" emoji="😊" color="orangered" />
      <Skill skill="Node JS" emoji="😣" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

import { useRef, useState } from "react";

import PPomodoro from "../Pages/Pomodoro";
import SShort from "../Pages/Short";
import LLong from "../Pages/Long";

import Facebook from "../../Assets/img/facebook.png";
import Twitter from "../../Assets/img/twitter.png";
import Swipe from "../../Assets/img/stripe.png";
import Three from "../../Assets/img/three.png";
import Bar from "../../Assets/img/graph.png";
import Setting from "../../Assets/img/setting.png";
import User from "../../Assets/img/user.png";
import Icon from "../../Assets/img/icon.png";
import Plus from "../../Assets/img/plus.png";
import Up from "../../Assets/img/up.png";
import Down from "../../Assets/img/down.png";

function Home() {
  // const Minute = useRef(null);
  // const Second = useRef(null);

  // let minutes = 25;
  // let seconds = "00";

  // function Start(evt) {
  //   minutes = 24;
  //   seconds = 59;

  //   Minute.current.textContent = minutes;
  //   Second.current.textContent = seconds;

  //   let minutes_interval = setInterval(minutesTimer, 60000);
  //   let seconds_interval = setInterval(secondsTimer, 1000);

  //   function minutesTimer() {
  //     minutes = minutes - 1;
  //     Minute.current.textContent = minutes;
  //   }
  //   function secondsTimer() {
  //     seconds = seconds - 1;
  //     Second.current.textContent = seconds;
  //     if (seconds <= 9) {
  //       Second.current.textContent = "0" + seconds;
  //     }
  //     if (seconds <= 0) {
  //       seconds = 60;
  //       if (minutes <= 0) {
  //         clearInterval(minutes_interval);
  //         clearInterval(seconds_interval);
  //       }
  //     }
  //   }
  // }

  const [pages, setPages] = useState("ppomodoro");

  const pomodoro = useRef(null);
  const short = useRef(null);
  const long = useRef(null);
  const Bcg = useRef(null);

  function Pomodoro(evt) {
    short.current.classList.remove("navhover");
    long.current.classList.remove("navhover");
    pomodoro.current.classList.add("navhover");
    Bcg.current.classList.add("red");
    Bcg.current.classList.remove("green");
    Bcg.current.classList.remove("blue");

    setPages("ppomodoro");
  }
  function Short(evt) {
    pomodoro.current.classList.remove("navhover");
    long.current.classList.remove("navhover");
    short.current.classList.add("navhover");
    Bcg.current.classList.remove("red");
    Bcg.current.classList.remove("green");
    Bcg.current.classList.add("blue");

    setPages("sshort");
  }
  function Long(evt) {
    long.current.classList.add("navhover");
    short.current.classList.remove("navhover");
    pomodoro.current.classList.remove("navhover");
    Bcg.current.classList.remove("blue");
    Bcg.current.classList.remove("red");
    Bcg.current.classList.add("green");

    setPages("llong");
  }

  let numb = 1;

  const changeNumber = useRef(null);
  function Dec(evt) {
    if (numb > 0) {
      numb = numb - 1;
      changeNumber.current.textContent = numb;
    } else {
      changeNumber.current.textContent = 0;
    }
  }
  function Upper(evt) {
    numb = numb + 1;
    changeNumber.current.textContent = numb;
  }

  const todoAct = useRef(null)
  const btnAct = useRef(null)
  function vTodo(evt){
    todoAct.current.classList.add('todoAct')
    btnAct.current.classList.remove('dnone')
  }

  function Back(evt){
    todoAct.current.classList.remove('todoAct')
    btnAct.current.classList.add('dnone')
  }

  return (
    <>
      <section ref={Bcg} className="home red">
        <div className="container">
          <div className="header">
            <div className="left_logo">
              <img src={Icon} alt="" />
              <h1>Pomofocus</h1>
            </div>
            <div className="right_logo">
              <ul className="options">
                <li className="option option1">
                  <img src={Bar} alt="bar" />
                </li>
                <li className="option option2">
                  <img src={Setting} alt="Setting" />
                </li>
                <li className="option option3">
                  <img src={User} alt="User" />
                </li>
              </ul>
            </div>
          </div>
          <div className="center_time">
            <div className="navbar">
              <ul>
                <li className="navhover" onClick={Pomodoro} ref={pomodoro}>
                  Pomodoro
                </li>
                <li onClick={Short} ref={short}>
                  Short Break
                </li>
                <li onClick={Long} ref={long}>
                  Long Break
                </li>
              </ul>
            </div>

            {pages === "ppomodoro" && <PPomodoro />}
            {pages === "sshort" && <SShort />}
            {pages === "llong" && <LLong />}
          </div>
          <span className="times">#1</span>
          <p className="time_name">Time to focus!</p>
          <div className="tasks">
            <h2 className="task">Tasks</h2>
            <div className="box">
              <img src={Three} alt="dot" />
            </div>
          </div>
          <span className="addbtn dnone" onClick={vTodo} ref={btnAct} >
            <h2 >
              <img src={Plus} alt="plas" /> Add Tasks
            </h2>
          </span>
          <div ref={todoAct} className="todo">
            <input type="text" placeholder="What are you working on?" />
            <h2>Est Pomodoros</h2>
            <div className="numbers">
              <span ref={changeNumber}>{numb}</span>
              <div onClick={Upper} className="upw">
                <img  src={Up} alt="up" />
              </div>
              <div onClick={Dec} className="downw">
                <img  src={Down} alt="down" />
              </div>
            </div>
            <p>+ Add Note</p>
            <p>+ Add Project</p>
            <div className="save">
              <span onClick={Back}>Cancel</span>
              <button>Save</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="first">
            <h1>An online Pomodoro Timer to boost your productivity</h1>
            <h3>What is Pomofocus?</h3>
            <div className="bottomline"></div>
            <p>
              Pomofocus is a customizable pomodoro timer that works on desktop &
              mobile browser. The aim of this app is to help you focus on any
              task you are working on, such as study, writing, or coding. This
              app is inspired by <span>Pomodoro Technique</span> which is a time
              management method developed by Francesco Cirillo.
            </p>
          </div>
          <div className="second">
            <h3>What is Pomodoro Technique?</h3>
            <div className="bottomline"></div>
            <p>
              The Pomodoro Technique is created by Francesco Cirillo for a more
              productive way to work and study. The technique uses a timer to
              break down work into intervals, traditionally 25 minutes in
              length, separated by short breaks. Each interval is known as a
              pomodoro, from the Italian word for 'tomato', after the
              tomato-shaped kitchen timer that Cirillo used as a university
              student. - <span>Wikipedia</span>
            </p>
            <h3>How to use the Pomodoro Timer?</h3>
            <div className="bottomline"></div>
            <ol>
              <li>
                <span>Add tasks</span> to work on today
              </li>
              <li>
                <span>Set estimate pomodoros</span> (1 = 25min of work) for each
                tasks
              </li>
              <li>
                <span>Select a task</span> to work on
              </li>
              <li>
                <span>Start timer</span> and focus on the task for 25 minutes
              </li>
              <li>
                <span>Take a break</span> for 5 minutes when the alarm ring
              </li>
              <li>
                <span>Iterate</span> 3-5 until you finish the tasks
              </li>
            </ol>
            <h3>Features</h3>
            <div className="bottomline"></div>
            <ul className="circles">
              <li>
                <span> Responsive design </span>that works with desktop and
                mobile
              </li>
              <li>
                <span> Color transition </span>to switch moods between work time
                and rest time
              </li>
              <li>
                <span> Audio notification </span>at the end of a timer period
              </li>
              <li>
                <span> Customizable timer </span>intervals to suit your
                preference
              </li>
            </ul>
            <h3>Download App</h3>
            <div className="bottomline"></div>
            <ul className="list">
              <li>
                <span> For macOS</span>(zip file)
              </li>
              <li>
                <span> For Windows</span>(exe file)
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <div className="container">
            <ul className="additional">
              <li>HOME</li>
              <li>PRIVACY</li>
              <li>CONTACT</li>
              <li>SIMPLE PAGE</li>
            </ul>
            <div className="links">
              <div className="imgwrapper">
                <img src={Facebook} alt="facebok" />
              </div>
              <div className="imgwrapper">
                <img src={Twitter} alt="twitter" />
              </div>
              <div className="imgwrapper">
                <img src={Swipe} alt="swipe" />
              </div>
            </div>
            <div className="made">
              <h4>
                Made with 3 by <span> Yuya Uzu</span>
              </h4>
            </div>
            <p className="last">©Pomofocus 2021. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Home;

import { useRef } from "react";
import { useState } from "react";
import Clickk from '../../Assets/Audios/click.mp3'
import Bell from '../../Assets/Audios/bell.mp3'
import Next from '../../Assets/img/next.png'
import { Redirect } from "react-router-dom";
function Pomodoro() {
  const Minute = useRef(null);
  const Second = useRef(null);
  const stop = useRef(null)
  const start = useRef(null)
  const [inter, setInter] = useState();
  const [interm, setInterm] = useState();
  const activeNext = useRef(null)

  let minutes = 25;
  let seconds = "00";

  var click = new Audio(Clickk)
  var bell = new Audio(Bell)

  function Start(evt) {
    minutes = 24;
    seconds = 59;
    click.play()
    Minute.current.textContent = minutes;
    Second.current.textContent = seconds;

    let minutes_interval = setInterval(minutesTimer, 60000);
    let seconds_interval = setInterval(secondsTimer, 1000);
     
    setInterm(minutes_interval)
    setInter(seconds_interval)
    
    function minutesTimer() {
      minutes = minutes - 1;
      Minute.current.textContent = minutes;
    }
    function secondsTimer() {
      seconds = seconds - 1;
      Second.current.textContent = seconds;
      if (seconds <= 9) {
        Second.current.textContent = "0" + seconds;
      } 
      if (minutes <= 9) {
        Minute.current.textContent = "0" + minutes;
      }
      if (seconds <= 0) {
        seconds = 60;
        if (minutes <= 0) {
          clearInterval(minutes_interval);
          clearInterval(seconds_interval);
        }
        
      }
    }
    stop.current.classList.add('stopon')
    start.current.classList.add('start')
    activeNext.current.classList.add('nonebtn')
 
  }
  function Stop(evt){
    stop.current.classList.remove('stopon')
    start.current.classList.remove('start')
    clearInterval(inter)
    clearInterval(interm)
    bell.play()
    activeNext.current.classList.remove('nonebtn')
  }

  function moveNext(evt){
    <Redirect to="/" />
  }
  return (
    <div className="changeble">
      <span>
        <span ref={Minute}>{minutes}</span>:<span ref={Second}>{seconds}</span>
        
      </span>
      <button className="redbtn" ref={start} onClick={Start}>START</button>
      <img ref={activeNext} onClick={moveNext}  className="nextBtn" src={Next} alt="next" />
      <button className="redbtn stop" ref={stop} onClick={Stop}>STOP</button>
      
    </div>
  );
}

export default Pomodoro;

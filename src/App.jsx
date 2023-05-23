import preguntas  from "./preguntas";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const getData = ()=>{
    const data = localStorage.getItem("Users");
    if (data) {
      return JSON.parse(data);
    }else{
      return [];
    }
  }

  const navigate = useNavigate();
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setisFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(20);
  const [areDisabled, setAreDisabled] = useState(false);
  const [User,setUser] = useState(getData());

 

  function handleAnswerSubmit(isCorrect, e){
    if (isCorrect) {
      setPuntuacion(puntuacion+1);
      setScore(score+100);
    }
    e.target.classList.add(isCorrect ? "correct": "incorrect");

    setTimeout(()=>{
      if (preguntaActual === preguntas.length-1) {
        setisFinished(true);
      }else{
        setPreguntaActual(preguntaActual+1);
        setTiempoRestante(20);
      }
    },500);
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      if (tiempoRestante>0) setTiempoRestante((prev)=> prev-1);
      if(tiempoRestante ===0)setAreDisabled(true);
    },1000)

    return ()=> clearInterval(interval);
  },[tiempoRestante]);

  if (isFinished) {
    localStorage.setItem("Score",JSON.stringify(score));
    return(
      <main className="app">
        <div className="juego-terminado">
          <span>
            {""}obtuviste {puntuacion} de {preguntas.length}{""}
          </span>
          <span>Puntuacion: {score}</span>

          <button onClick={()=>{navigate('/Home')}} >{""}Volver a juagar</button>
        </div>
      </main>

    );
  }


  return <main className="app">
    <div className="ladoIzquierdo">
      <div className="score">
        <span>Score {score}</span>
      </div>
      <div className="questionNumber">
        <span>Pregunta {preguntaActual +1} de</span> {preguntas.length} 
      </div>

      <div className="questionTittle">{preguntas[preguntaActual].titulo}</div>
      <div>{!areDisabled ? (
      <span className="tiempo-restante">Tiempo restante: {tiempoRestante}{""}</span>):
      (<button onClick={()=>{
        setTiempoRestante(20);
        setAreDisabled(false);
        setPreguntaActual(preguntaActual +1);
      }}>Continuar</button>
      )}
        
      </div>

    </div>


    <div className="ladoDerecho">
    {preguntas[preguntaActual].opciones.map((respuesta) =>(
      <button  
      disabled={areDisabled}
      key={respuesta.textoRespuesta}
      onClick={(e)=>handleAnswerSubmit(respuesta.isCorrect, e)}
      >
         {respuesta.textoRespuesta} </button>))}

    </div>

  </main>


  
}

export default App

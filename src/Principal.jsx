import "./styles/Principal.css"

function Principal() {


    return (
      <>
      <nav className="nav">
      <h1>
        seccion destacada
        Canino
        Felino
        Tamaños
        Razas
      <input className="input" type="text" placeholder="Que busca"/>
      </h1>
      </nav>
      <p>Si desea poner una mascota en adopcion dele click al sigiente boton</p>
      <button onClick={("/adopcion")}>Continuar</button>
      </>
    )
  }
  
  export default Principal
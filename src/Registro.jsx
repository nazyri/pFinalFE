import { useRef } from "react"
import Contactos from "./Contactos"
import { useNavigate } from "react-router-dom"

async function PostRegistro(obj) {

    try {
        const respuesta = await fetch(`http://localhost:3001/users`, {
            method: "POST",
            headers: {
            },
            body: JSON.stringify(obj)
        })
        let agregar = await respuesta.json()

        console.log(agregar)
    } catch (error) {
        console.error(error)
    }
}

const Registro = () => {
    const nav = useNavigate()
    const nombre = useRef('')
    const usuario = useRef('')
    const clave = useRef('')

    const espacios = () => {
        if (!nombre.current.value && !usuario.current.value && !clave.current.value) {
            alert("hay espacios vacios")
        } else {
            nav("/login")
        }
    }

    return (
        <>
            <Contactos />
            <input className="inicio" type="text" id="nombre" placeholder="Ingrese su nombre" ref={nombre} />
            <input className="inicio" type="gmail" id="correos" placeholder="Ingrese su correo" ref={usuario} />
            <input className="inicio" type="password" id="clave" placeholder="Ingrese su contraseña" ref={clave} />
            <button className="boton" onClick={PostRegistro}>Guardar</button>
            <button className="boton" id="guardarclave" onClick={espacios}>Login</button>
        </>
    )
}

export default Registro
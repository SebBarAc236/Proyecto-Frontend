import Header from '../header_todos';
import { Link, useNavigate } from "react-router-dom"
import './perfil.css'
import {RUTA_BACKEND} from "../../conf";
import {useEffect, useState} from "react";
import {useInputValue} from "../../hooks/useInputValue";


const Perfil =() =>{

    const token = localStorage.getItem("TOKEN")
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const formData = {
        Nombre: useInputValue(''),
        Apellido: useInputValue(''),
        Correo: useInputValue(''),
        Direccion: useInputValue(''),
        Ciudad: useInputValue(''),
        Departamento: useInputValue(''),
        Codigo_postal: useInputValue(0),
        Telefono: useInputValue(0)
    }


    const getUser = async (email) => {
        // Se hace un llamado al backend para que nos devuelva el usuario.
        const request = await fetch(`${RUTA_BACKEND}/Usuario?Correo=${token}`);
        const data = await request.json();
        // Como el backend nos devuelve un listado con un item, validamos que la data devuelta tenga al menos un item
        if (data.length) {
            // Se recupera el usuario(el primer elemento)
            const user = data[0];
            console.log('--- USER ----');
            console.log(user);
            for (const key of Object.keys(user)) {
                if (formData[key]) {
                    formData[key].onChange(!user[key]? '' : user[key])
                }
            }
            console.log(formData)
            setUser(user)
        }
    }

    const editUser = async (user) => {
        return await fetch(`${RUTA_BACKEND}/Usuario`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers : {
                "Content-Type" : "application/json"
            }
        })
    }

    const onEditProfile = () => {
        console.log('---- ON EDIT -----')
        for(const [key, value] of Object.entries(formData)) {
            if (value.value === '') {
                alert('Por favor, complete todos los campos')
                break
            } else {
                user[key] = value.value
            }
        }
        setUser(user)
        editUser(user).then(async (response) => {
            console.log(response)
            await getUser()
            alert('Datos actualizados correctamente!')
        })
    }

    useEffect(() => {
        getUser(token);
    }, [])

    return <div>
        <div className='row mx-auto'><Header/></div>
        <div className='container mt-5' id="contenedorA">
            <div className='row' align="left">
                <div className='col'>
                    <div id='tituloPerfil' className='display-5 font-weight-bold'>PERFIL</div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <div className='row'>
                        <Link to={"/Perfil"}>
                            <button id='botonblancoP' className='btn btn-primary'>Profile Info</button>
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to={"/orderHistory"}>
                            <button id='botonblancoP' className='btn btn-primary mt-2'>Order History</button>
                        </Link>
                    </div>
                    <div className='row'>
                        <Link to={"/"}>
                            <button id='botonblancoP' className='btn btn-primary mt-2' onClick={()=>{
                                localStorage.clear("TOKEN")
                                localStorage.clear("USUARIO_ID")
                                navigate("/")
                            }}>Log Out</button>
                        </Link>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='container' id='contenidoPerfil'>
                        <div>
                        <h2>DATOS DE PERFIL</h2>
        <div class="container row g-3 mt-3">
                    <div class="col-6">
                        <label for="">Nombre:</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" { ...formData['Nombre'] }/>
                    </div>
                    <div class="col-6">
                        <label for="">Apellido:</label>
                        <input type="text" class="form-control" name="apellido" id="apellido" { ...formData['Apellido'] } />
                    </div>
                    <div class="col-12">
                        <label for="">Correo:</label>
                        <input type="text" class="form-control" name="correo" id="correo" { ...formData['Correo'] }/>
                    </div>
                    <div class="col-12">
                        <label for="">Dirección:</label>
                        <input type="text" class="form-control" name="direccion" id="direccion" { ...formData['Direccion'] }/>
                    </div>
                    <div class="col-4">
                        <label for="">Ciudad:</label>
                        <input type="text" class="form-control" name="ciudad" id="ciudad"  { ...formData['Ciudad'] }/>
                    </div>
                    <div class="col-4">
                        <label for="">País:</label>
                        <input type="text" class="form-control" name="pais" id="pais" { ...formData['Departamento'] }/>
                    </div>
                    <div class="col-4">
                        <label for="">Código postal:</label>
                        <input type="phone" class="form-control" name="codigo" id="codigo" { ...formData['Codigo_postal'] }/>
                    </div>
                    <div class="col-4">
                        <label for="">Teléfono:</label>
                        <input type="phone" class="form-control" name="telefono" id="telefono" { ...formData['Telefono'] }/>
                    </div>
                    <div class="col-12">
                        <button id='botonprofileinfo' class="btn-btn-primary rounded" onClick={onEditProfile}>ACEPTAR</button>
                        <button id='botonprofileinfo' class="btn-btn-primary rounded">CANCELAR</button>
                    </div>
                    </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Perfil;
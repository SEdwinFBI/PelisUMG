import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../style/descripcion.css';


const Listado = () => {
    const urlBase = "http://localhost:8080/edwin-pelis-api/pelis";//end ponit

    const [pelicula, setPelicula] = useState([]);


    useEffect(() => {
        cargarPeliculas();//para Conectar con el back
    }, []);

    //peticion tipo asincrono
    //npm i axios
    const cargarPeliculas = async () => {
        const resultado = await axios.get(urlBase);
        console.log("lista de peliculas");
        console.log(resultado.data);
        setPelicula(resultado.data);
    }




    return (

        <section className='container' style={{ padding: "10px" }}>
            <h1>Peliculas</h1>
            <div className='row row-cols-2 row-cols-md-5'>
                {
                    pelicula.map((peli, indice) => (
                        <div className='col'>
                            <div
                                class="card aux"
                                style={{ backgroundColor: "blue", marginTop: "10px" }}
                                key={indice}
                            >
                                <div
                                    style={{ alignContent: "center", alignItems: "center", padding: "10px 10px 10px 8px" }}

                                >
                                    <img src={peli.urlImg} className="card-img " alt="img pelicula" style={{ objectFit: "cove", height: "14rem" }} />
                                </div>
                                <div className='container descrip' >
                                        <div className="lh-1" style={{ fontSize: "12px", color: "white" }}>
                                            <p class="card-text text-break" >{peli.descripcion}</p>
                                            <p class="card-text">duracion: {peli.duracion}</p>
                                            <p class="card-text">Genero: {peli.genero}</p>
                                            <a href="#" className="btn btn-primary">Ver</a>
                                        </div>
                                    </div>

                                <div class="card-body">
                                    <h5 class="card-title" style={{ color: "white" }}>{peli.titulo}</h5>


                                   



                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>





        </section>
    )
}

export default Listado
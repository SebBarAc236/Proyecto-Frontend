const RUTA_BACKEND = "https://proyectobackend-production.up.railway.app"
var USUARIOIDLOGED
var USUARIOCORREOLOGED
const getUsuarioLoged = (Usuario_ID, Correo) => {
    USUARIOIDLOGED = Usuario_ID
    USUARIOCORREOLOGED = Correo
}
export {
    RUTA_BACKEND,
    USUARIOIDLOGED,
    USUARIOCORREOLOGED,
    getUsuarioLoged
}
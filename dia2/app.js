let campers = [{
    id : '1C',
    cc: '1234567890',
    nombre: 'Juan',
    apellido: 'Pérez',
    direccion: 'Calle Falsa 123',
    acudiente: 'María',
    telefono: '555-1234',
    estado : 'proceso de ingreso',
    ruta : 'sin asignar',
    docente : 'sin asignar',
    area : 'sin asignar',
    rol : 'camper'
}
];
let rutas = [{
    id : '1R',
    nombre : 'NodeJS',
    Fundamentos : 'Python',
    ProgramacionWeb : 'HTML',
    ProgramaciónFormal : 'JavaScript',
    BasesDatos : 'Mysql',
    Backend : 'NetCore'
},
{
    id : '2R',
    nombre : 'Java',
    Fundamentos : 'PSeInt',
    ProgramacionWeb : 'Bootstrap',
    ProgramaciónFormal : 'Java',
    BasesDatos : 'MongoDb',
    Backend : 'Express'
},
{
    id : '3R',
    nombre : 'NetCore',
    Fundamentos : 'Introducción a la algoritmia',
    ProgramacionWeb : 'CSS',
    ProgramaciónFormal : 'C#',
    BasesDatos : 'Postgresql',
    Backend : 'Spring Boot'
}]
function IngresoOtro(nombre) {
    let select = prompt('Desea registrar otro camper?\n\t1.Si\n\t2.No');
    if(select == 1){
        if (nombre == 'camper') registroCamper();
        else if (nombre == 'notaIngreso') registroNotaIngreso();
        else if (nombre == 'ruta') asignarRuta();
    }
    else if(select ==2) menu();
}
function registroCamper() {
    let dicCampers = {
        id : `${campers.length+1}C`,
        cc : prompt('Ingrese la CC'),
        nombre : prompt('Ingrese el nombre'),
        apellido : prompt('Ingrese el apellido:'),
        direccion : prompt('Ingrese la direcion'),
        acudiente : prompt('Ingrese el nombre del acudiente'),
        telefono : prompt('ingrese el numero de telefono'),
        estado : 'inscrito',
        ruta : 'sin asignar',
        docente : 'sin asignar',
        area : 'sin asignar',
        rol : 'camper'
    }
    campers.push(dicCampers);
    IngresoOtro('camper')
}
function registroNotaIngreso() {
    let idCamper = prompt('ingrese la cc del camper');
    campers.forEach(function(camper){
        if (camper['cc'] == idCamper) {
            let nota = prompt('Nota de examen de ingreso');
            if(nota >= 60)camper['estado'] = 'aprobado';
            else camper['estado'] = 'retirado'
        }
        else{
            alert('Camper no existe');
            menu();
        }
    });
    IngresoOtro('notaIngreso');
}
function asignarRuta() {
    let idCamper = prompt('ingrese la cc del camper');
    campers.forEach(function(camper){
        if (camper['cc'] == idCamper){
            let nameRutas = prompt('ingrese el nombre de la ruta').toLocaleLowerCase();
            rutas.forEach(function(ruta){
                if(ruta['nombre'].toLocaleLowerCase() == nameRutas){
                    camper['ruta'] = ruta['id'];
                }
                else alert('Ruta no existe')
            });
        }
        else alert('camper no existe')
    });
    IngresoOtro('ruta');  
}
function menu() {
    console.log(campers);
    let select = Number(prompt('Ingrese el numero de la accion:\n\t1.Registrar Camper\n\t2.Registar nota de la prueba de ingreso\n\t3.Asignar Ruta'));
    if (select == 1) registroCamper();
    else if (select == 2) registroNotaIngreso();
    else if (select == 3) asignarRuta();
}
asignarRuta();
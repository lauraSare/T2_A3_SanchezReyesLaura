const Alumno = require('../models/alumno');

// CONSULTA - Obtener todos
const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener alumnos', error });
    }
};

// CONSULTA - Obtener uno por ID
const getAlumnoById = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });
        res.status(200).json(alumno);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener alumno', error });
    }
};

// ALTA - Crear nuevo alumno
const createAlumno = async (req, res) => {
    try {
        const alumno = new Alumno({
            numControl: req.body.numControl,
            nombre:     req.body.nombre,
            primerAp:   req.body.primerAp,
            segundoAp:  req.body.segundoAp,
            fechaNac:   req.body.fechaNac,
            semestre:   req.body.semestre,
            carrera:    req.body.carrera
        });
        await alumno.save();
        res.status(201).json({ exito: true });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear alumno', error });
    }
};

// CAMBIO - Actualizar alumno
const updateAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });

        alumno.nombre   = req.body.nombre;
        alumno.primerAp = req.body.primerAp;
        alumno.segundoAp = req.body.segundoAp;
        alumno.fechaNac = req.body.fechaNac;
        alumno.semestre = req.body.semestre;
        alumno.carrera  = req.body.carrera;

        const updated = await alumno.save();
        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar alumno', error });
    }
};

// BAJA - Eliminar alumno
const deleteAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        if (!alumno) return res.status(404).json({ message: 'Alumno no encontrado' });
        await alumno.deleteOne();
        res.status(200).json({ message: 'Registro ELIMINADO' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar alumno', error });
    }
};

module.exports = { getAlumnos, getAlumnoById, createAlumno, updateAlumno, deleteAlumno };
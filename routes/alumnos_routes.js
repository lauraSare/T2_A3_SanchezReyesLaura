const express = require('express');
const router = express.Router();
const {
    getAlumnos,
    getAlumnoById,
    createAlumno,
    updateAlumno,
    deleteAlumno
} = require('../controllers/alumno_controller');

router.get('/',              getAlumnos);
router.get('/:id/detalle',   async (req, res) => {
    const alumno = await require('../models/alumno').findById(req.params.id);
    res.render('consultas', { alumno });
});
router.get('/:id',           getAlumnoById);
router.post('/',             createAlumno);
router.put('/:id',           updateAlumno);
router.delete('/:id',        deleteAlumno);

module.exports = router;
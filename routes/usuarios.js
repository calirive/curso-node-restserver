const {Router} = require('express');

const {usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete} = require('../controllers/usuarios');

const router = Router();

router.app.get('/', usuariosGet);

router.app.put('/', usuariosPost);

router.app.post('/:id', usuariosPut);

router.app.patch('/', usuariosPatch);

router.app.patch('/', usuariosDelete);

module.exports = router;
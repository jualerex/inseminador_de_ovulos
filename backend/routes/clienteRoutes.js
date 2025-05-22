import express from 'express';
import {obtenerClientes, crearCliente} from '../controller/clienteController.js';

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);

export default router;



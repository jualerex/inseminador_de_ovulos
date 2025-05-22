import express from 'express';
import { obtenerVentas, registrarventa } from '../controller/ventasController.js';

const router = express.Router();

router.get('/', obtenerVentas);
router.post('/', registrarventa);

export default router;

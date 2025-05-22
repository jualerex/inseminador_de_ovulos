import {
    obtenerVentas as obtenerVentasModel,
    registrarventa as registrarventaModel,
} from '../models/ventasModel.js';

export const registrarventa = (req, res) => {
    const venta = req.body;
    if (!venta.id_cliente || !venta.id_producto || !venta.cantidad) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    registrarventaModel(venta, (err, resultado) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Venta registrada exitosamente', id: resultado.insertId });
    });
};

export const obtenerVentas = (req, res) => {
    obtenerVentasModel((err, ventas) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(ventas);
    });
};

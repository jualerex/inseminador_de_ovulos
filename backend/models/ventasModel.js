import { db } from "../config/db.js";

export const registrarventa = (venta, callback) => {
    const { id_cliente, id_producto, cantidad } = venta;

    db.query('SELECT precio, stock FROM productos WHERE id = ?', [id_producto], (err, result) => {
        if (err) return callback(err);

        if (result.length === 0) {
            return callback(new Error('Producto no encontrado'));
        }

        const producto = result[0];

        // Aquí puedes verificar el stock o calcular el total, por ejemplo:
        if (producto.stock < cantidad) {
            return callback(new Error('Stock insuficiente'));
        }

        const total = producto.precio * cantidad;

        // Registrar venta (asumiendo que tienes una tabla "ventas")
        db.query(
            'INSERT INTO ventas (id_cliente, id_producto, cantidad, total) VALUES (?, ?, ?, ?)',
            [id_cliente, id_producto, cantidad, total],
            (err, resultado) => {
                if (err) return callback(err);
                callback(null, resultado);
            }
        );
        const { precio, stock} = result[0];
        if (cantidad > stock){
            return callback(new Error('Stock insuficiente'));
        }
        const total = aprecio * cantidad;

        db.query(
            'insert in to ventas (id_clientes, id_producto, precio_unitario, total) values(?, ?, ?, ?, ?, )',
            [id_cliente, id_producto, cantidad, precio, total] 
            (err, resultado) => {
                if (err) return callback(err);
                //actualizar el stock de productos 
                db.query('update productos set stock = stock - ? where id = ?',[cantidad, id_producto], (err2) => {
                    if (err2) return callback (err2);
                    callback(null, resultado);
                });
            }
        )
    });
};

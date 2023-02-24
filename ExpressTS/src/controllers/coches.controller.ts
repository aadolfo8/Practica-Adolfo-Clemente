import { Request, Response } from "express";
import { InforCoche } from "../models/inforCoche.model";
import { DeleteResult, UpdateResult } from "typeorm";

export const obtenerTodos = async (req: Request, res: Response) => {
  try {
    const coches: InforCoche[] = await InforCoche.find();

    if (coches.length === 0) {
      return res.status(404).send( "No hay coches que mostrar :(" );
    } else {
      return res.send(coches).status(200);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
  }
};

export const obtenerPorId = async (req: Request, res: Response) => {
  try {

    const coche: InforCoche | null = await InforCoche.findOne({
      where: {
        idunico: req.params.id,
      },
    });

    if (coche) {
      return res.send(coche).status(200);
    } else {
      return res.status(404).json({ message: "No se encontro el coche" });
    }

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

export const crearCoche = async (req: Request, res: Response) => {
  try {
    const coche: InforCoche | null = await InforCoche.findOne({where: {idunico: req.body.idunico}});
    
    if(coche === null) {
      const creado: InforCoche = await InforCoche.create(req.body);
      creado.save();
      console.log(creado);
      return res.send(creado).status(201);

    }else{
      return res.status(400).send("No se pudo crear el coche porque ya existe uno con ese IdUnico ");
      
    }

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
};

export const actualizar = async (req: Request, res: Response) => {
  try {
    const update: UpdateResult = await InforCoche.update(
      { idunico: req.params.id },
      req.body
    );

    if (update.affected) {
      return res.json({mensaje: "Se ha actualizado el coche: ",coche: await InforCoche.findOne({where:{idunico: req.body.id}}) });
    } else {
      return res.send("El coche no se ha podido actualizar");
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

export const eliminarTodos = async (req: Request, res: Response) => {
  try {
    await InforCoche.clear();

    return res.send("Se ha eliminado todos los coches").status(200);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

export const eliminarPorId = async (req: Request, res: Response) => {
  try {

    const borrar: DeleteResult = await InforCoche.delete({
      idunico: req.params.id,
    });

    if (borrar.affected)  {
      return res.send("Has eliminado el coche").status(200);
    } else {
      return res.send("El coche que intentas eliminar no existe").status(400);
    }

  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

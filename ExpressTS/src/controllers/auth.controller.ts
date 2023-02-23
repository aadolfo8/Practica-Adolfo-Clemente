import { Request, Response } from "express";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    return res
      .status(400)
      .send('Falta alguno de los campos de de "usuario" o "contraseña" ');
  }

  let user: User | null;
  try {
    user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const correctPassword: boolean = await user.comparePasswords(password);
    if (!correctPassword) {
      return res.status(401).send("Contraseña incorrecta");
    }

    const token: string = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.TOKEN!,
      { expiresIn: "30m" }
    );

    return res.json(token);
  } catch (error) {
    return res.status(401).send();
  }
};

export const singin = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!(username && password)) {
    return res
      .status(400)
      .send('Falta alguno de los campos de de "usuario" o "contraseña" ');
  }

  const user = await User.findOne({ where: { username } });

  if (user) {
    return res.send("Este usuario ya existe").status(400);
  }

  try {
    const newUser = await User.create({ username, password });
    await newUser.save();
    return res.send(newUser);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
};

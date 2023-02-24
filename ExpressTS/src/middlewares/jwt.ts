import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const comprobarJwt = (req: Request, res: Response, next: NextFunction) => {
  const token: string = <string>req.headers["auth"];
  let jwtPayload;

  try {
    jwtPayload = <any>jwt.verify(token, process.env.TOKEN!);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    res.status(401).send("El usuario no está autorizado");
    return;
  }

  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, process.env.TOKEN!, {
    expiresIn: process.env.TIEMPOEXP!,
  });
  res.setHeader("token", newToken);

  next();
};

export default comprobarJwt;

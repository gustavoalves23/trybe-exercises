import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const template = Joi.object({
  nome: Joi.string().required(),
  marca: Joi.string().min(3).required(),
  preco: Joi.number().positive().required(),
  fabricacao: Joi.string().required(),
  validade: Joi.string().required(),
})

export default function validateProduct(req: Request, res: Response, next: NextFunction) {
  const obj = req.body;
  const validation = template.validate(obj);

  if (validation.error) {
    return res.status(400).json(validation.error.message);
  }

  next();
}
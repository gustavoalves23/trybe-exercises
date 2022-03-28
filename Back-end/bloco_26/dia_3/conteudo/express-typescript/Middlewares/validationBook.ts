import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import StatusCode from "../Enums/StatusCode";
import Book from "../interfaces/Book";

const idealBook = Joi.object({
  type: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string().required(),
  author: Joi.string().required(),
  publishingCompany: Joi.string().required(),
  isbn: Joi.string().required(),
})

export default function validateBook(req: Request, res:Response, next: NextFunction) {
  const book:Book = req.body;
  const validation = idealBook.validate(book);
  if (validation.error) {
    next({
      code: StatusCode.BAD_REQUEST,
      message: validation.error.message,
    })
  }
  next();
}
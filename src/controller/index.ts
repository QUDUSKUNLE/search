import { Request, Response } from 'express';
import dotenv from 'dotenv';
import request from 'request-promise';

dotenv.config();
const key = process.env.OPEN_CAGE_DATA_KEY;



class Controller {

  static async queryPlacesByName(req: Request, res: Response) {
    const { query }: Request = req;
    const result = await Controller.getPlaces(query.q);
    res.status(200).json(result);
  }

  static async getPlaces(query: string) {
    const url = `${process.env.ENDPOINT}${query}&key=${key}&limit=20&no_annotations=1`;
    const response = await request(url);
    return JSON.parse(response);
  }
}

export default Controller;

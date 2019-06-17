import { Request, Response, NextFunction } from 'express';
import { HTTP400Error } from '../errors/httpErrors';


export const checkSearchParams = (req: Request, res: Response, next: NextFunction) => {
  if (!req.query.q) throw new HTTP400Error('Missing q parameter');
  else if (req.query.q.length < 3) res.status(400).json({
    type: "FeatureCollection",
    features: [],
  });
  else next();
};

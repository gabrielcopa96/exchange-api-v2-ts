import { Response } from "express";

const handleHttp = (res: Response, error: string, err: any) => {
  res.status(500);
  res.send({ msg: error, error: err });
};

export { handleHttp };

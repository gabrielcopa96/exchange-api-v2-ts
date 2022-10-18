import { Request, Response } from "express";
import { getAllUsers, getOneUser } from "../services/user.service";
import { handleHttp } from "../utils/error.handle";

const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUser = await getAllUsers();

    res.status(200).json(responseUser);
  } catch (error) {
    handleHttp(res, "ERROR_NOT_FOUND_GET_USERS");
  }
};

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;

    const user = await getOneUser(id);

    res.status(200).json(user);
  } catch (error) {
    handleHttp(res, "ERROR_NOT_FOUND_GET_USER");
  }
};

export { getUsers, getUser }
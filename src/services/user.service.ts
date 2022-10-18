import UserModel from "../models/user";

const getAllUsers = async () => {
  const users = await UserModel.find({});

  if (!users) {
    return "ERROR_NOT_DATA_USERS";
  }

  return users;
};

const getOneUser = async (id: string) => {
  const user = await UserModel.findById(id);

  if (!user) {
    return "ERROR_NOT_EXISTING_USER";
  }

  return user;
};

export { getAllUsers, getOneUser }

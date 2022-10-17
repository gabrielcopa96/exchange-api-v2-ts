import { Publication } from "../interfaces/publication.interface";
import CategoryModel from "../models/category";
import PublicationModel from "../models/publication";

const newPublication = async (body: Publication) => {
  const publication = await PublicationModel.create(body);

  if (!publication) {
    return "ERROR_CREATE_PUBLICATION";
  }

  return publication;
};

const selectAllOrCategory = async (category: string) => {
  let messages = "Publicaciones encontradas";

  if (category) {
    const searchCategory = await CategoryModel.findOne({
      name: category,
    });

    if (searchCategory) {
      const filterPublicationBy = await PublicationModel.find({
        id_categoria: searchCategory._id,
      });

      if (!filterPublicationBy) {
        messages = "Publicaiones no encontradas";
      }

      return {
        msg: messages,
        registros: filterPublicationBy,
      };
    }
  }

  const Registration = await PublicationModel.find({})
    .populate("id_product")
    .where({
      eliminated: false,
    });

  if (!Registration.length) {
    messages = "No existen registros";
  }

  return {
    msg: messages,
    registros: Registration,
  };
};

const getOnePublication = async (id: string) => {
  const publication = await PublicationModel.findById(id);

  if (!publication) {
    return "NOT_FOUND_PUBLICATIONS";
  }

  return publication;
};

const deletePublication = async (id: string) => {
  let msg = "Publication eliminada con exito";

  const publication = await PublicationModel.findByIdAndUpdate(
    id,
    {
      eliminated: true,
    },
    { new: true }
  );

  return {
    msg,
    publication,
  };
};

export {
  newPublication,
  selectAllOrCategory,
  getOnePublication,
  deletePublication,
};

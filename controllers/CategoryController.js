import Category from '../models/Category.js';

export const createCategory = async (req, res) => {
    try{
        const { name } = req.body;
        const category = await Category.create({ name })
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({
            message: 'Error al crear la categoría',
            error
        })
    }
}

export const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.findAll();
        res.json(categories); 
    }catch(error){
        res.status(500).json({
            message: 'Error al recuperar las categorías',
            error
        })
    }
}

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al recuperar la categoría', error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    category.name = name;
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la categoría', error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category no encontrada' });
    }
    await category.destroy();
    res.json({ message: 'Category eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la categoría', error });
  }
}
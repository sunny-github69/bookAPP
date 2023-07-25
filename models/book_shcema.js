
module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      publishedYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  
    return Book;
  };
  
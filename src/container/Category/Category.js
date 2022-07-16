import React, { useContext } from "react";
import Button from "../../commonComponents/ButtonComponents/Button";
import "./Category.scss";
import { NotesContext } from "../../store/notesContext";
import Card from "../../commonComponents/CardComponent/Card";

const Category = () => {
  const notesContext = useContext(NotesContext);
  const {
    categoryData,
    saveCategory,
    addNewCategory,
    enableCategoryNoteEdit,
    disableCategoryNoteEdit,
    deleteCategoryNote,
  } = notesContext;

  return (
    <div className="categoryNotesContainer">
      <div className="categoryNotesButtonContainer">
        <Button
          buttonText="Add new category"
          onClick={() => addNewCategory()}
        />
      </div>
      <div className="allCardsContainer">
        {categoryData.map((category) => (
          <Card
            cardData={category}
            normalButtonText="Learn more"
            key={category.id}
            save={saveCategory}
            enableCard={enableCategoryNoteEdit}
            disableCard={disableCategoryNoteEdit}
            deleteCard={deleteCategoryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;

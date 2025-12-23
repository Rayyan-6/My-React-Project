import React, { useState, type FormEvent } from "react";
import { type CardType } from "../App";
import '../App.css'


type AddCardProps = {
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

function AddCard({ setCards }: AddCardProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return; 

    setCards(prev => [
      ...prev,
      {
        id: prev.length + 1, 
        title,
        description
      }
    ]);

    setTitle("");
    setDescription("");
  };



  return (
    <div className="add-card-parent">
    <form className="add-card"
      onSubmit={handleSubmit}
      style={{ margin: "16px 0", display: "flex", flexDirection: "column", gap: "8px" }}
    >
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        
      />
      <textarea
        placeholder="Description"
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
         
      />
      <button
        type="submit"
      >
        Add Card
      </button>
    </form>
    </div>
  );
}

export default AddCard;

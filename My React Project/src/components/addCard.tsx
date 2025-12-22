import React, { useState, type FormEvent } from "react";
import { type CardType } from "../App";

type AddCardProps = {
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
};

function AddCard({ setCards }: AddCardProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return; // simple validation

    setCards(prev => [
      ...prev,
      {
        id: prev.length + 1, // simple ID generator
        title,
        description
      }
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ margin: "16px 0", display: "flex", flexDirection: "column", gap: "8px" }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add Card
      </button>
    </form>
  );
}

export default AddCard;

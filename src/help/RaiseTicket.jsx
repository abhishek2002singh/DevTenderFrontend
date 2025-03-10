import React, { useState } from "react";

const RaiseTicket = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!subject.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Ticket raised successfully!");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="ticket-form">
      <h3 className="text-lg font-bold mb-4">Raise a Ticket</h3>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-4 border rounded"
        rows="4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default RaiseTicket;
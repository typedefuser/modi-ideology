import React, { useState } from "react";
import { queries } from "./data";

const Query = ({ handleSubmit }) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(queries.length).fill(null));

  const handleNext = () => {
    if (index < queries.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleOptionSelect = (option) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleFormSubmit = () => {
    if (selectedAnswers.every(answer => answer !== null)) {
      handleSubmit(selectedAnswers);
    } else {
      alert("Please answer all questions before submitting.");
    }
  }

  return (
    <div className="query-container">
      <p className="question">Question {index + 1}: {queries[index].question}</p>
      <div>
        {queries[index].options.map((option, i) => (
          <div 
            key={i} 
            className={`option-box ${selectedAnswers[index]?.key === option.key ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            <label className="option-label">
              <input 
                type="radio" 
                name={`question-${index}`}
                value={option.key}
                checked={selectedAnswers[index]?.key === option.key}
                onChange={() => handleOptionSelect(option)}
                className="option-input"
              />
              <span>{option.text}</span>
            </label>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button 
          onClick={handlePrevious} 
          disabled={index === 0}
          className="button"
        >
          Previous
        </button>
        {index >= queries.length - 1 ? (
          <button onClick={handleFormSubmit} className="button">
            Submit
          </button>
        ) : (
          <button onClick={handleNext} className="button">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Query;
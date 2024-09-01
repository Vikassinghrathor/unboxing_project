import { useState } from 'react';
import HeaderNavigation from './HeaderNavigation';

const QuestionEditor = () => {
  const [qaList, setQaList] = useState([
    {
      question: "How do I update Sony A80L television's firmware to fix issues?",
      answer: "",
    },
    {
      question: "How do I prevent screen burn-in on OLED and plasma in Sony A80L television?",
      answer: "",
    },
    {
      question: "How do I factory reset Sony A80L television to its default settings?",
      answer: "",
    },
    {
      question: "Should I consult Sony A80L television manufacturer before seeking third-party repair?",
      answer: "",
    },
    {
      question: "How do I transfer settings and data from my old televisions to new Sony A80L television?",
      answer: "",
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");

  const handleInputChange = (index, field, value) => {
    const updatedQaList = [...qaList];
    updatedQaList[index][field] = value;
    setQaList(updatedQaList);
  };

  const addNewQuestion = () => {
    if (newQuestion.trim() !== "") {
      setQaList([...qaList, { question: newQuestion, answer: "" }]);
      setNewQuestion("");
    }
  };

  const removeQuestion = (index) => {
    const updatedQaList = qaList.filter((_, i) => i !== index);
    setQaList(updatedQaList);
  };

  return (
    <div className="flex flex-col w-[947px] bg-[#141416] border border-[#35353580] p-6 rounded-md">
      <HeaderNavigation />
      <div className="flex flex-col space-y-6">
        {qaList.map((qa, index) => (
          <div key={index} className="flex flex-col w-full space-y-2 relative">
            <p className="text-base text-neutral-100">{qa.question}</p>
            <div className="flex flex-col w-full">
              <label className="text-sm text-neutral-400 mb-1">Answer</label>
              <input
                type="text"
                value={qa.answer}
                onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                className="px-4 py-2 w-full text-base rounded border border-solid bg-[#353535] text-neutral-100 focus:outline-none focus:border-orange-500 border-[#35353580]"
                placeholder="Type the answer here"
              />
            </div>
            <button
              onClick={() => removeQuestion(index)}
              className="absolute top-2 right-2 p-1 bg-[#F37413] rounded-full text-white hover:bg-[#d46010] transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-stretch mt-6 w-full">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="px-4 py-2 w-full text-base rounded border border-solid bg-[#353535] text-neutral-100 focus:outline-none focus:border-orange-500 border-[#35353580] mb-2"
          placeholder="Type your new question here"
        />
        <button
          onClick={addNewQuestion}
          className="flex items-center justify-center py-4 w-full rounded border border-orange-500 border-dashed text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9bb1dc569ba7d74d5a102c73df15da7a3fb224b23fa3c0bef49daf24055f19?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square mr-2"
          />
          Add more questions
        </button>
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-3 bg-orange-500 rounded text-white font-semibold hover:bg-orange-600 transition-colors duration-300">
          Add Asset
        </button>
      </div>
    </div>
  );
};

export default QuestionEditor;

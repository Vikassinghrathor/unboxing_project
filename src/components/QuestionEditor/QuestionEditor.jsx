import * as React from "react";

function QuestionEditor() {
  // State to manage questions and answers
  const [qaList, setQaList] = React.useState([
    {
      question:
        "How do I update Sony A80L television’s firmware to fix issues?",
      answer: "",
    },
    {
      question:
        "How do I prevent screen burn-in on OLED and plasma in Sony A80L television?",
      answer: "",
    },
    {
      question:
        "How do I factory reset Sony A80L television to its default settings?",
      answer: "",
    },
    {
      question:
        "Should I consult Sony A80L television manufacturer before seeking the third-party repair?",
      answer: "",
    },
    {
      question:
        "How do I transfer settings and data from my old televisions to new Sony A80L television?",
      answer: "",
    },
  ]);

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const updatedQaList = [...qaList];
    updatedQaList[index][field] = value;
    setQaList(updatedQaList);
  };

  // Add new question-answer pair
  const addNewQuestion = () => {
    setQaList([...qaList, { question: "New question", answer: "" }]);
  };

  return (
    <div className="flex flex-col max-w-[947px] overflow-hidden bg-[#141416] border border-[#35353580] p-4 rounded-md">
      {qaList.map((qa, index) => (
        <div key={index} className="flex flex-col mt-6 w-full font-medium">
          <p className="text-base text-neutral-100 p-2 mb-4">{qa.question}</p>
          <div className="flex flex-col mt-2 w-full">
            <label className="text-base text-neutral-100 mb-2">Answer</label>
            <input
              type="text"
              value={qa.answer}
              onChange={(e) =>
                handleInputChange(index, "answer", e.target.value)
              }
              className="px-4 py-2 w-full text-base rounded border border-solid bg-[#353535] text-neutral-500 focus:outline-none border-[#35353580]"
              placeholder="Type the answer here"
            />
          </div>
        </div>
      ))}

      <div className="flex flex-col items-end max-w-[947px]">
      <div className="flex flex-col w-full text-base text-white max-md:max-w-full">
        <div className="flex flex-col justify-center py-5 pr-96 pl-96 w-full rounded border border-orange-500 border-dashed max-md:px-5 max-md:max-w-full">
          <div className="flex gap-1.5 justify-center items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c9bb1dc569ba7d74d5a102c73df15da7a3fb224b23fa3c0bef49daf24055f19?placeholderIfAbsent=true&apiKey=ddf789af42b44eaea963851b07583965"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
            <button onClick={addNewQuestion} className="self-stretch my-auto">Add more questions</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-9 max-w-full text-lg font-semibold text-neutral-100 w-[163px]">
        <div className="flex flex-col w-full rounded">
          <button className="px-9 py-3.5 bg-orange-500 rounded max-md:px-5">
            Add Asset
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default QuestionEditor;

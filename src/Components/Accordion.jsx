import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Question */}
          <div
  className="flex justify-between items-center bg-gray-100 p-4 cursor-pointer transition duration-300 hover:text-orange-500"
  onClick={() => handleToggle(index)}
>
            <h3 className="text-lg ">{item.question}</h3>
            <span className={`transform ${openIndex === index ? "rotate-180" : ""}`}>
              <IoIosArrowDown size={20} />
            </span>
          </div>

          {/* Answer */}
          {openIndex === index && (
            <div className="bg-white p-4">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import React, { useState } from "react";

const ControlledComponent = (props) => {
  const [accordions, setAccordions] = useState(props.data);

  const toggleAccordion = (id) => {
    props.setShowItem(); // Triggers showing the data in parent component
  };

  return (
    <div className="space-y-4 flex flex-col p-6 max-w-2xl mx-auto">
      {/* Heading */}
      <div
        className="font-bold text-3xl cursor-pointer text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out"
        onClick={() => toggleAccordion()}
      >
        Heading
      </div>

      {/* Accordion Content */}
      <div>
        {props?.showItem &&
          accordions.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 last:border-none"
            >
              {/* Accordion Title */}
              <button className="w-full flex justify-between items-center py-4 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out">
                <span className="text-lg font-medium text-gray-900">
                  {item.title}
                </span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ControlledComponent;

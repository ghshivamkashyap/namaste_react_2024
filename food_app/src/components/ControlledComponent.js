// import React from "react";

// const ControlledComponent = (props) => {
//   let data = props;
//   console.log("Props in cc: ", data);

//   return <div>s</div>;
// };

// export default ControlledComponent;

import React, { useState } from "react";

const ControlledComponent = (props) => {
  // Initialize accordion open states based on the provided props
  const [accordions, setAccordions] = useState(props.data);
  console.log("props: ", props);

  const toggleAccordion = (id) => {
    // setAccordions((prevAccordions) =>
    //   prevAccordions.map((accordion) =>
    //     accordion.id === id
    //       ? { ...accordion, isOpen: !accordion.isOpen }
    //       : accordion
    //   )
    // );
    props.setShowData();
  };

  return (
    <div className="space-y-4 flex flex-col">
      <div className=" font-bold text-2xl cursor-pointer" onClick={() => toggleAccordion()}>
        Heading
      </div>
      <div>
        {" "}
        {props?.showItem &&
          accordions.map((item) => (
            <div key={item.id} className="border-b">
              {/* Accordion Title */}
              <button className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800">
                <span>{item.title}</span>
                <span>{item.isOpen ? "-" : "+"}</span>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ControlledComponent;

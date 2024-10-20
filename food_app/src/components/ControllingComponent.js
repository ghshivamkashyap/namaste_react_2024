import React, { useState } from "react";
import ControlledComponent from "./ControlledComponent";

const ControllingComponent = () => {
  let data = [
    {
      id: 1,
      title: "Accordion Item 1",
      content:
        "This is the content for accordion item 1. It contains details about this section.",
      isOpen: false,
    },
    {
      id: 2,
      title: "Accordion Item 2",
      content:
        "This is the content for accordion item 2. It provides more information on the topic.",
      isOpen: true,
    },
    {
      id: 3,
      title: "Accordion Item 3",
      content:
        "This is the content for accordion item 3. Additional information is available here.",
      isOpen: false,
    },
    {
      id: 4,
      title: "Accordion Item 4",
      content:
        "This is the content for accordion item 4. More insights on the subject can be found here.",
      isOpen: false,
    },
    {
      id: 5,
      title: "Accordion Item 5",
      content:
        "This is the content for accordion item 5. It elaborates on the details discussed.",
      isOpen: true,
    },
  ];

  const [showData, setShowData] = useState(0);

  return (
    <div>
      {data.length &&
        data.map((val, idx) => (
          <ControlledComponent
            data={data}
            idx={idx}
            setShowData={() => setShowData(idx)}
            showItem={idx == showData ? true : false}
          />
        ))}
    </div>
  );
};

export default ControllingComponent;

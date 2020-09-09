import React, { useState } from "react";

const Accordion = ({ items }) => {
  // Init state 
  const [activeIndex, setActiveIndex] = useState(null);

  // helper function    
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"> </i>
          {item.title}
        </div>

        <div className={`content ${active}`}>
          <p>{item.content} </p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderItems}
    </div>
  );
};

export default Accordion;

// this project build by Thinh Phung in 2020, Sep 
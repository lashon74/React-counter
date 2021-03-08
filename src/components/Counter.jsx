import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return count === 0 ? "Zero" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
    };
    
    const handleIncrement = () => {
        setCount(count + 1)
    }
    const handleDecrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
      <button onClick={handleDecrement} className='btn btn-secondary btn-sm'>Decrement</button>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button onClick={handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
     
      {renderTags()}
    </div>
  );
};

export default Counter;

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, sethover] = useState(0);

  const handleClick = (getCurrentIndex = 1) => {
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex = 1) => {
    sethover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    sethover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        console.log(index);
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

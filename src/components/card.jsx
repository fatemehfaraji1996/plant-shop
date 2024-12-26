/* eslint-disable react/jsx-key */
import db from "../assets/data.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { Star } from "lucide-react";
// redux
import { useDispatch } from "react-redux";
import { addSopping } from "../redux/actioncreators";
export default function Card() {
  const dispatch = useDispatch();
  const handelClick = (item) => {
    const toastElement = document.getElementById("toast");
    toastElement.className = "toast show";
    setTimeout(function () {
      toastElement.className = toastElement.className.replace("show", "");
    }, 3000);
    console.log(item);
    // redux
    dispatch(addSopping(item));
  };
  return (
    <>
      <div className="allCard">
        {db.map((item, index) => (
          <div className="card" key={index} style={{ position: "relative" }}>
            <img src={item.src} alt="" />
            <p className="p1">{item.type} </p>
            <p className="p2">{item.name} </p>
            {/* stars */}
            <div className="star-rating">
              <div className="stars">
                {Array.from({ length: 5 }, () => (
                  <Star fill="#111" strokeWidth={0} />
                ))}
              </div>
              <div className="stars rating">
                {" "}
                {Array.from({ length: item.stars }, () => (
                  <Star fill="yellow" strokeWidth={0} />
                ))}
              </div>
            </div>
            {item.offPrice ? (
              <p className="price">
                ${item.price} ${item.offPrice}
              </p>
            ) : (
              <p className="price" id="price">
                ${item.price}
              </p>
            )}
            <div id="toast" className="toast">
              plant added to basket shop!
            </div>
            <button className="buy-button" onClick={() => handelClick(item)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

import { NavLink } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
export default function Background() {
  // redux
  const data = useSelector(({ shopping }) => shopping);
  console.log(data);
  const totalPrice = data
    .reduce(
      (total, item) =>
        total + parseFloat(item.offPrice ? item.offPrice : item.price),
      0
    )

    
    .toFixed(2);
  console.log(totalPrice);
  return (
    <>
      <div className="heru">
        {/* navbar  */}
        <nav className="navbar">
          <div className="Natural"> simply Natural </div>
          <div className="menu">
            <NavLink to={"/"} className="menu-item home">
              home{" "}
            </NavLink>
            <a href="#" className="menu-item">
              About Us
            </a>
            <a href="#" className="menu-item">
              Contact Us
            </a>

            <NavLink to={"/PurchaseTable"} className="menu-item home">
              <div>
                ${totalPrice}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </div>
            </NavLink>
          </div>
        </nav>
        <section>
          <h4>best quality plants</h4>
          <h2>
            amazing variety
            <br className="ba1" />
            of plants starting
            <br className="br2" />
            just $12
          </h2>
          <button className="button1">SHOP NOW</button>
        </section>
      </div>
    </>
  );
}

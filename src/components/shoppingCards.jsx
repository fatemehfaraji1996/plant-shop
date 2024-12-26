import { useSelector ,useDispatch} from "react-redux";
import { deleteSopping} from "../redux/actioncreators";
export default function PurchaseTable() {
 const dispatch = useDispatch()
  const data = useSelector(({ shopping }) => shopping);
console.log(data);
const totalPrice = data
.reduce(
  (total, item) =>
    total + parseFloat(item.offPrice ? item.offPrice : item.price),
  0
)
.toFixed(2);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Plant List</th>
            <th>Quantity</th>
            <th>Price $</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>1</td>
              <td>
                {item.offPrice ? <p>${item.offPrice}</p> : <p>${item.price}</p>}
              </td>
              <td>{item.stars}</td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>total</strong>
            </td>
            <td></td>
            {/* <td> ${totalPrice}</td> */}
            <td> ${totalPrice}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {data.map((item, index) => (
        <div className="showw" key={index}>
          <button
            className="card-close"
            onClick={() => dispatch(deleteSopping(index))}
          >
            &times;
          </button>
          <img src={item.src} alt="Cleistocactus" />
          <div className="card-contentt">
            <h2 className="card-titlee">{item.name}</h2>
            <p className="card-pricee">
              {item.offPrice ? <p>${item.offPrice}</p> : <p>${item.price}</p>}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

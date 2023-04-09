import { FaHandHoldingUsd, FaTruck } from "react-icons/fa";
import { MdOutlineFireTruck } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

const Devlivery = () => {
  return (
    <div className="flex my-6 items-center justify-around flex-wrap gap-8">
      <div className="flex items-center gap-4">
        <FaHandHoldingUsd className="font-bold text-3xl" />
        <div>
          <h2 className="font-semibold uppercase text-lg">CASH ON DELIVERY</h2>
          <p>Pay cash at your doorstep </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FaTruck className="font-bold text-3xl" />
        <div>
          <h2 className="font-semibold uppercase text-lg">DELIVERY</h2>
          <p>All over The World</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <GiReturnArrow className="font-bold text-3xl" />
        <div>
          <h2 className="font-semibold uppercase text-lg">HAPPY RETURN</h2>
          <p>7 days return facility</p>
        </div>
      </div>
    </div>
  );
};

export default Devlivery;

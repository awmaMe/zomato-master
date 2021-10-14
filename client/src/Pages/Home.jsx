import { useParams } from "react-router";

// components
import Delivery from "../components/delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/nutrition";

const Master = () => {
  const { type } = useParams();

  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      <div>{type === "dining" && <Dining />}</div>
      <div>{type === "night_life" && <NightLife />}</div>
      <div>{type === "nutrition" && <Nutrition />}</div>
    </>
  );
};

export default Master;

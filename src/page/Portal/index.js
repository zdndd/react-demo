import Card from "../../component/Card";
import { cardList } from "./data.js";

const Portal = () => {
  const listHTML = cardList.map((item) => (
    <div>
      {item.title}
      <Card />
    </div>
  ));
  return <div>{listHTML}</div>;
};

export default Portal;

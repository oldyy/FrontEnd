import Header from "./Header";
import Content from "./Content";
import Image from "./Image";
import GoodsCard from "./GoodsCard";
import './App.css';


import berlin from "./assets/berlin.jpg";
import item1 from "./assets/item1.jpg";
import item2 from "./assets/item2.jpg";
import item3 from "./assets/item3.jpg";
import item4 from "./assets/item4.jpg";
import item5 from "./assets/item5.jpg";
import item6 from "./assets/item6.jpg";

function App() {
  const goods = [
    { img: item1, name: "Спортивні кросівки", price: 1000 },
    { img: item2, name: "Рюкзак для походів", price: 1500 },
    { img: item3, name: "Смартфон", price: 8000 },
    { img: item4, name: "Футбольний м’яч", price: 500 },
    { img: item5, name: "Наручний годинник", price: 3000 },
    { img: item6, name: "Портативна колонка", price: 1200 },
  ];

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <Header />

      <p>
        Освіта:
        <br />
        Школа №20
        <br />
        Студент у КПІ, ФІОТ, 126 спеціальність
      </p>

      <h3>Мої хобі:</h3>
      <ul>
        <li>Йога</li>
        <li>Волейбол</li>
        <li>Футбол</li>
      </ul>

      <Content />

      <Image imgSrc={berlin} alt="Берлін" />

      <h3>Галерея товарів</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {goods.map((item, index) => (
          <GoodsCard
            key={index}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

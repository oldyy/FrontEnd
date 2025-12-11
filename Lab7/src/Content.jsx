import React from "react";

class Content extends React.Component {
  componentDidMount() {
    const el9 = document.getElementById("el9");
    const el11 = document.getElementById("el11");

    function randomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    el9.addEventListener("click", () => {
      el9.style.backgroundColor = randomColor();
      el9.style.color = randomColor();
    });

    el11.addEventListener("click", () => {
      el11.style.backgroundColor = randomColor();
      el11.style.color = randomColor();
    });
  }

  render() {
    return (
      <section>
        <h3 id="el9" style={{ cursor: "pointer" }}>Мої улюблені книги/фільми:</h3>
        <ol id="el10">
          <li id="el11" style={{ cursor: "pointer" }}>Тіні забутих предків</li>
          <li>451 градусів за Фаренгейтом</li>
          <li>Мистецтво війни</li>
        </ol>

        <h3>Улюблене місто - Берлін</h3>
        <p>Берлін - місто, яке з першої хвилини здається трохи хаотичним...</p>
      </section>
    );
  }
}

export default Content;

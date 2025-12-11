import { useState } from "react";

function Image({ imgSrc, alt }) {
  const [width, setWidth] = useState(400);
  const [visible, setVisible] = useState(true);

  const increase = () => setWidth((w) => w + 20);
  const decrease = () => setWidth((w) => (w > 50 ? w - 20 : w));
  const remove = () => setVisible(false);
  const add = () => setVisible(true);

  return (
    <div>
      {visible && (
        <a href="https://uk.wikipedia.org/wiki/Берлін" target="_blank" rel="noreferrer">
          <img src={imgSrc} alt={alt} width={width} />
        </a>
      )}

      <div className="btns" style={{ marginTop: 15 }}>
        {!visible && <button onClick={add}>Додати</button>}
        {visible && (
          <>
            <button onClick={increase}>Збільшити</button>
            <button onClick={decrease}>Зменшити</button>
            <button onClick={remove}>Видалити</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Image;

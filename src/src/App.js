import { useState } from "react";

export default function NashestvieApp() {
  const [screen, setScreen] = useState("main");

  return (
    <div style={{ background: '#1a1a1a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Нашествие</h1>

      {screen === "main" && (
        <div>
          <button onClick={() => setScreen("map")}>Карта</button>
          <button onClick={() => setScreen("battle")}>Бой</button>
          <button onClick={() => setScreen("shop")}>Магазин</button>
          <button onClick={() => setScreen("collection")}>Коллекция</button>
          <button onClick={() => setScreen("guild")}>Гильдия</button>
          <button onClick={() => setScreen("lottery")}>Лотерея</button>
        </div>
      )}

      {screen !== "main" && (
        <div>
          <p>Вы в разделе: {screen}</p>
          <button onClick={() => setScreen("main")}>Назад</button>
        </div>
      )}
    </div>
  );
}

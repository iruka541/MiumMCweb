import React, { useEffect } from 'react';
import './App.css';
import spaceLogo from './spaceLogo.png';

function App() {
  useEffect(() => {
    // 星の要素を取得
    const stars = document.querySelectorAll('.star');

    // 各星に対してランダムなアニメーションを適用
    stars.forEach(star => {
      const randomDelay = Math.random() * 5; // ランダムな遅延時間
      const randomX = Math.random() * window.innerWidth; // ランダムなX座標
      const randomY = Math.random() * window.innerHeight; // ランダムなY座標
      
      // アニメーションの設定
      star.style.animation = `twinkle 5s infinite ${randomDelay}s`;
      star.style.left = `${randomX}px`;
      star.style.top = `${randomY}px`;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={spaceLogo} className="App-logo" alt="Space Logo" />
        <h1 className="title">Explore the Universe with MiumMC</h1>
        <p className="description">
          Embark on an intergalactic journey to the far reaches of space!
        </p>
        <div className="social-links">
          <a
            className="social-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="social-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            className="social-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forums
          </a>
        </div>
      </header>
      <section className="section">
        <h2 className="section-title">Our Features</h2>
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Description of feature 1...</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Description of feature 2...</p>
        </div>
        {/* 他の特徴を追加 */}
      </section>
      <section className="section">
        <h2 className="section-title">About Us</h2>
        <p className="section1">Description of your server and team...</p>
      </section>
      {/* 他のセクションを追加 */}
      <footer className="App-footer">
        <p>© 2024 MiumMC. All rights reserved.</p>
        <div className="contact">
          <p className="section1">Contact us: contact@miummc.com</p>
        </div>
      </footer>
      {/* 星を表示 */}
      <div className="stars">
        {/* 星の数を増やす */}
        {[...Array(50)].map((_, index) => (
          <div key={index} className="star"></div>
        ))}
      </div>
    </div>
  );
}

export default App;

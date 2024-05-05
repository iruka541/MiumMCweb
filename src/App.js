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
            X(停止中)
          </a>
          <a
            className="social-link"
            href="https://discord.gg/wug8fGaTQD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            className="social-link"
            href="https://sites.google.com/view/miummc/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            旧site
          </a>
        </div>
      </header>
      <section className="section">
        <h2 className="section-title">Our Features</h2>
        <div className="feature">
          <h3>宇宙に行ける！</h3>
          <p>このサーバーは、なんと宇宙に行けちゃいます！宇宙戦争も夢じゃないかも！ </p>
        </div>
        <div className="feature">
          <h3>公式キャラクターもいる！</h3>
          <p>公式コミュニティに、公式キャラのAIがいるので、会話できちゃう！</p>
          <p>※5月13日にサービス終了予定</p>
        </div>
        {/* 他の特徴を追加 */}
      </section>
      <section className="section">
        <h2 className="section-title">About Us</h2>
        <p className="section1">開発チームはを以下に紹介します！</p>
        <p className="section1">Owner : rakku</p>
        <p className="section1">Dev : sakana_11, K_nana</p>
        <p className="section1">Admin : Lz6_, ぱに, とくぽん</p>
      </section>
      {/* 他のセクションを追加 */}
      <footer className="App-footer">
        <p>© 2024 MiumMC. All rights reserved.</p>
        <div className="contact">
          <p className="section1">Contact us: https://discord.gg/wug8fGaTQD</p>
          <p className="section1">This website was generated by ChatGPT.</p>
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
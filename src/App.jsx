import React, { useState } from 'react';

export default function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="logo">NEXUS<span>.</span></h1>

        <button className="new-chat">
          + Nova conversa
        </button>

        <div className="history">
          <p>Suas conversas</p>
        </div>

        <div className="profile">
          <div className="avatar">N</div>
          <span>Meu NEXUS</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span>NEXUS AI</span>
          <span className="status">● Online</span>
        </header>

        <section className="welcome">
          <div className="orb">✦</div>
          <h2>Olá, eu sou o NEXUS.</h2>
          <p>Seu espaço de inteligência começa aqui.</p>
        </section>

        <div className="chat-input">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Converse com o NEXUS..."
          />
          <button onClick={() => setMessage('')}>
            ↑
          </button>
        </div>

        <footer>
          NEXUS AI · Sua inteligência, conectada.
        </footer>
      </main>
    </div>
  );
}

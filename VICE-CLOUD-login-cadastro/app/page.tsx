 "use client";

import { useState } from "react";
import { ArrowUpRight, Play, Zap, ShieldCheck, Monitor, Clock3, Wifi, ChevronDown, Menu, X, Gamepad2, Crown, Check } from "lucide-react";

const plans = [
  { name: "FREE", price: "R$ 0", desc: "Para conhecer a plataforma", features: ["Acesso à área de demonstração", "Fila padrão", "Suporte da comunidade"], featured: false },
  { name: "PRO", price: "R$ 39,90", desc: "Para jogar com mais conforto", features: ["Prioridade na fila", "Sessões estendidas", "Suporte prioritário"], featured: true },
  { name: "ULTRA", price: "R$ 69,90", desc: "A experiência premium", features: ["Prioridade máxima", "Mais tempo de sessão", "Recursos premium"], featured: false },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [notice, setNotice] = useState("");
  const [email, setEmail] = useState("");

  const start = () => setNotice("A área de demonstração está pronta. O streaming real será ativado após configurar os servidores e a integração de jogos.");
  const subscribe = () => setNotice(email.includes("@") ? "Cadastro de interesse recebido nesta demonstração. Para salvar usuários de verdade, conecte um serviço de autenticação." : "Digite um e-mail válido para continuar.");

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#"><span className="brand-mark">V</span>VICE<span className="brand-light">CLOUD</span></a>
        <div className={`nav-links ${menu ? "open" : ""}`}>
          <a href="#como-funciona" onClick={() => setMenu(false)}>Como funciona</a>
          <a href="#vantagens" onClick={() => setMenu(false)}>Vantagens</a>
          <a href="#planos" onClick={() => setMenu(false)}>Planos</a>
          <a href="#faq" onClick={() => setMenu(false)}>FAQ</a>
        </div>
        <a className="nav-login" href="/login">Acessar conta <ArrowUpRight size={16}/></a>
        <button className="mobile-menu" onClick={() => setMenu(!menu)} aria-label="Abrir menu">{menu ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse"/> O FUTURO DO CLOUD GAMING</div>
          <h1>SEU JOGO.<br/><span>SEM LIMITES.</span></h1>
          <p className="hero-copy">A liberdade de jogar está a poucos cliques. Descubra uma nova forma de entrar no mundo dos games, direto pelo navegador.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="/cadastro">COMEÇAR AGORA <ArrowUpRight size={18}/></a>
            <a className="btn-ghost" href="#como-funciona"><Play size={16}/> COMO FUNCIONA</a>
          </div>
          <div className="hero-stats">
            <div><strong>01</strong><span>SEM DOWNLOADS</span></div>
            <div><strong>02</strong><span>NO SEU NAVEGADOR</span></div>
            <div><strong>03</strong><span>SUA JORNADA COMEÇA AQUI</span></div>
          </div>
        </div>
        <div className="hero-art" aria-label="Arte abstrata de cidade noturna">
          <div className="sun" />
          <div className="city city-back"><i/><i/><i/><i/><i/></div>
          <div className="city city-front"><i/><i/><i/><i/><i/><i/></div>
          <div className="road"/>
          <div className="art-label"><span className="live-dot"/> EXPERIÊNCIA CLOUD <b>01 / 03</b></div>
        </div>
        <div className="hero-bottom"><span>VICE CLOUD © 2026</span><span>JOGUE DE ONDE QUISER <span className="orange">↗</span></span></div>
      </section>

      <section className="ticker"><div>JOGUE PELO NAVEGADOR <b>✳</b> SEM PC POTENTE <b>✳</b> LIBERDADE PARA JOGAR <b>✳</b> JOGUE PELO NAVEGADOR <b>✳</b> SEM PC POTENTE <b>✳</b></div></section>

      <section className="section intro" id="como-funciona">
        <div className="section-tag">01 / A EXPERIÊNCIA</div>
        <div><h2>O PODER DE JOGAR.<br/><span>SEM COMPLICAÇÃO.</span></h2><p className="section-copy">A VICE CLOUD foi pensada para levar experiências de jogos até você por streaming. Sem precisar instalar jogos enormes ou ter um computador de última geração.</p></div>
      </section>

      <section className="player-wrap" id="acesso">
        <div className="player-top"><span><span className="live-dot"/> VICE CLOUD PLAYER</span><span>DEMONSTRAÇÃO DA INTERFACE</span></div>
        <div className="player-screen">
          <div className="player-grid"/>
          <div className="player-center"><div className="player-icon"><Gamepad2 size={34}/></div><h3>SUA PRÓXIMA SESSÃO<br/>COMEÇA AQUI.</h3><p>O ambiente de streaming será conectado nesta área.</p><button className="btn-primary" onClick={start}><Play size={16} fill="currentColor"/> TESTAR DEMONSTRAÇÃO</button></div>
          <div className="player-hud"><span><Wifi size={14}/> CONEXÃO: AGUARDANDO</span><span>FPS: --</span><span>LATÊNCIA: --</span><span>RESOLUÇÃO: --</span></div>
        </div>
        <div className="player-foot"><span>STATUS <b className="status-wait">● AGUARDANDO SERVIDOR</b></span><span>STREAMING REAL NÃO CONFIGURADO</span></div>
        {notice && <div className="notice" role="status">{notice}<button onClick={() => setNotice("")}>Fechar</button></div>}
      </section>

      <section className="section benefits" id="vantagens">
        <div className="section-tag">02 / POR QUE VICE CLOUD</div>
        <div className="benefit-heading"><h2>MENOS ESPERA.<br/><span>MAIS GAME.</span></h2><p>Uma plataforma feita para deixar o acesso mais simples e a experiência mais direta.</p></div>
        <div className="benefit-grid">
          <article><Zap/><span>01</span><h3>ACESSO SIMPLES</h3><p>Entre pelo navegador, sem precisar baixar um launcher pesado.</p></article>
          <article><Monitor/><span>02</span><h3>MAIS LIBERDADE</h3><p>A proposta é levar sua sessão para diferentes dispositivos compatíveis.</p></article>
          <article><ShieldCheck/><span>03</span><h3>SEU ESPAÇO</h3><p>Uma área pensada para organizar sua conta e suas sessões.</p></article>
          <article><Clock3/><span>04</span><h3>NO SEU TEMPO</h3><p>Escolha o plano que combina com a forma como você quer jogar.</p></article>
        </div>
      </section>

      <section className="plans-section" id="planos">
        <div className="section-tag">03 / ESCOLHA SEU ACESSO</div><h2>SEU PRÓXIMO NÍVEL<br/><span>ESTÁ AQUI.</span></h2>
        <p className="plans-note">Valores ilustrativos para apresentação. Nenhuma cobrança é realizada nesta versão.</p>
        <div className="plans-grid">{plans.map((p) => <article className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>{p.featured && <div className="popular">MAIS ESCOLHIDO</div>}<div className="plan-name">{p.name} {p.featured ? <Crown size={16}/> : null}</div><p>{p.desc}</p><div className="price">{p.price}<small>{p.name === "FREE" ? "/ sempre" : "/ mês"}</small></div><ul>{p.features.map(f => <li key={f}><Check size={15}/>{f}</li>)}</ul><a href="/cadastro" className={p.featured ? "btn-primary full" : "btn-outline full"}>ESCOLHER PLANO <ArrowUpRight size={16}/></a></article>)}</div>
      </section>

      <section className="signup" id="cadastro"><div><div className="section-tag">04 / FIQUE POR DENTRO</div><h2>O PRÓXIMO NÍVEL<br/><span>ESTÁ CHEGANDO.</span></h2><p>Deixe seu e-mail para demonstrar interesse nas novidades da VICE CLOUD.</p></div><div className="signup-form"><label htmlFor="email">SEU E-MAIL</label><div><input id="email" type="email" placeholder="voce@email.com" value={email} onChange={e => setEmail(e.target.value)}/><button onClick={subscribe}>QUERO SABER <ArrowUpRight size={17}/></button></div><small>Esta versão é demonstrativa e ainda não armazena cadastros.</small></div></section>

      <section className="faq-section" id="faq"><div className="section-tag">05 / DÚVIDAS FREQUENTES</div><h2>AINDA TEM<br/><span>DÚVIDAS?</span></h2><div className="faq-list">{[
        ["O que é cloud gaming?","É uma tecnologia que executa o jogo em um servidor remoto e transmite áudio e vídeo para seu dispositivo pela internet."],
        ["Preciso de um computador potente?","A ideia do cloud gaming é reduzir a necessidade de hardware potente no dispositivo, mas você precisa de internet estável e compatível."],
        ["Já posso jogar GTA VI por aqui?","Não. Esta é a primeira versão visual da plataforma. Para oferecer GTA VI, será necessário verificar disponibilidade, licenças, acesso legítimo ao jogo e configurar servidores e streaming."],
        ["Os planos já estão funcionando?","Ainda não. Os preços são ilustrativos. Login, pagamentos, histórico e assinaturas precisam ser conectados a serviços reais antes de aceitar clientes."]
      ].map(([q,a],i)=><div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)}><span>{q}</span><ChevronDown className={faq === i ? "rotated" : ""}/></button>{faq === i && <p>{a}</p>}</div>)}</div></section>

      <footer><a className="brand" href="#"><span className="brand-mark">V</span>VICE<span className="brand-light">CLOUD</span></a><span>FEITO PARA QUEM VIVE O GAME.</span><span>© 2026 VICE CLOUD. PROJETO INDEPENDENTE.</span></footer>
    </main>
  );
}
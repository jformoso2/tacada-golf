"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899", red: "#ef4444",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
};

const t = {
  en: {
    brand: "Tacada Golf",
    tagline: "Your Game. Elevated.",
    sub: "The ultimate bilingual golf resource — guides, interactive tools, and science-backed performance tips for players of all levels.",
    langBtn: "🇧🇷 Português",
    nav: ["Home", "Equipment", "Performance", "Tools", "Guides"],
    cta1: "Explore Now", cta2: "Interactive Tools",
    sec: {
      eq: ["Equipment & Club Guides", "Find the right clubs for your game"],
      nu: ["Nutrition & Performance", "Science-backed strategies to play your best"],
      to: ["Interactive Tools", "Visual simulators to improve your understanding"],
      gu: ["Articles & Guides", "In-depth content for every level"],
    },
    cards: [
      { s: "eq", title: "Complete Iron Distance Guide", desc: "Average distances for every club with interactive chart.", tag: "POPULAR", cat: "Irons", link: "/equipamento/distancias" },
      { s: "eq", title: "Hybrid vs Long Iron", desc: "3H or 3I? Data-driven comparison for your bag.", tag: "NEW", cat: "Hybrids", link: null },
      { s: "eq", title: "Best Drivers 2026", desc: "Top picks for distance, forgiveness, and value.", tag: "GUIDE", cat: "Drivers", link: null },
      { s: "eq", title: "Wedge Loft & Bounce", desc: "Build the perfect wedge setup for your short game.", tag: "ESSENTIAL", cat: "Wedges", link: null },
      { s: "nu", title: "Palatinose: The Golfer's Secret Fuel", desc: "How this low-GI carb eliminates your back-nine crash.", tag: "SCIENCE", cat: "Nutrition", link: null },
      { s: "nu", title: "On-Course Nutrition Protocol", desc: "Hole-by-hole eating plan for all 18.", tag: "PROTOCOL", cat: "Energy", link: null },
      { s: "nu", title: "Pre-Round Meal Guide", desc: "What to eat 2 hours before tee time.", tag: "GUIDE", cat: "Nutrition", link: null },
      { s: "to", title: "Driving Range Simulator", desc: "Hit every club and watch the ball fly.", tag: "INTERACTIVE", cat: "Simulator", link: null },
      { s: "to", title: "Club Distance Calculator", desc: "Personalized distances based on your swing speed.", tag: "TOOL", cat: "Calculator", link: null },
      { s: "to", title: "Handicap Tracker", desc: "Track rounds and watch your handicap improve.", tag: "COMING SOON", cat: "Tracker", link: null },
      { s: "gu", title: "What is a Golf Handicap?", desc: "Complete guide to understanding, calculating, and improving your handicap.", tag: "NEW", cat: "Handicap", link: "/guias/handicap" },
      { s: "gu", title: "Breaking 100: A Roadmap", desc: "Step-by-step strategy to break the 100 barrier.", tag: "STRATEGY", cat: "Scoring", link: null },
      { s: "gu", title: "Course Management 101", desc: "Think smarter — play to your strengths.", tag: "MENTAL", cat: "Strategy", link: null },
    ],
    stats: ["Club Guides", "Interactive Tools", "Languages", "Performance Articles"],
    nl: ["Join the Fairway", "Weekly tips, tools & guides to your inbox.", "Subscribe"],
    footer: "Built with passion for the game.",
  },
  pt: {
    brand: "Tacada Golf",
    tagline: "Seu Jogo. Elevado.",
    sub: "O melhor recurso bilíngue de golfe — guias, ferramentas interativas e dicas de performance baseadas em ciência para jogadores de todos os níveis.",
    langBtn: "🇺🇸 English",
    nav: ["Início", "Equipamento", "Performance", "Ferramentas", "Guias"],
    cta1: "Explorar Agora", cta2: "Ferramentas Interativas",
    sec: {
      eq: ["Equipamento & Guia de Tacos", "Encontre os tacos certos para o seu jogo"],
      nu: ["Nutrição & Performance", "Estratégias baseadas em ciência para jogar melhor"],
      to: ["Ferramentas Interativas", "Simuladores visuais para melhorar sua compreensão"],
      gu: ["Artigos & Guias", "Conteúdo aprofundado para todos os níveis"],
    },
    cards: [
      { s: "eq", title: "Guia Completo de Distâncias", desc: "Distâncias médias para cada taco com gráfico interativo.", tag: "POPULAR", cat: "Ferros", link: "/equipamento/distancias" },
      { s: "eq", title: "Híbrido vs Ferro Longo", desc: "3H ou 3I? Comparação baseada em dados.", tag: "NOVO", cat: "Híbridos", link: null },
      { s: "eq", title: "Melhores Drivers 2026", desc: "Top escolhas em distância, perdão e custo-benefício.", tag: "GUIA", cat: "Drivers", link: null },
      { s: "eq", title: "Loft & Bounce dos Wedges", desc: "Monte o setup perfeito para seu jogo curto.", tag: "ESSENCIAL", cat: "Wedges", link: null },
      { s: "nu", title: "Palatinose: O Combustível Secreto", desc: "Como esse carb de baixo IG elimina a fadiga nos últimos 9.", tag: "CIÊNCIA", cat: "Nutrição", link: null },
      { s: "nu", title: "Protocolo Nutricional no Campo", desc: "Plano alimentar buraco a buraco para os 18.", tag: "PROTOCOLO", cat: "Energia", link: null },
      { s: "nu", title: "Guia de Refeição Pré-Jogo", desc: "O que comer 2h antes do tee time.", tag: "GUIA", cat: "Nutrição", link: null },
      { s: "to", title: "Simulador de Driving Range", desc: "Acerte cada taco e veja a bola voar.", tag: "INTERATIVO", cat: "Simulador", link: null },
      { s: "to", title: "Calculadora de Distâncias", desc: "Distâncias personalizadas pela sua velocidade de swing.", tag: "FERRAMENTA", cat: "Calculadora", link: null },
      { s: "to", title: "Rastreador de Handicap", desc: "Acompanhe suas voltas e veja seu handicap melhorar.", tag: "EM BREVE", cat: "Rastreador", link: null },
      { s: "gu", title: "O Que é o Handicap no Golfe?", desc: "Guia completo para entender, calcular e melhorar seu handicap.", tag: "NOVO", cat: "Handicap", link: "/guias/handicap" },
      { s: "gu", title: "Quebrando os 100", desc: "Estratégia passo a passo para quebrar a barreira.", tag: "ESTRATÉGIA", cat: "Pontuação", link: null },
      { s: "gu", title: "Gestão de Campo 101", desc: "Pense mais inteligente em cada buraco.", tag: "MENTAL", cat: "Estratégia", link: null },
    ],
    stats: ["Guias de Tacos", "Ferramentas Interativas", "Idiomas", "Artigos de Performance"],
    nl: ["Entre no Fairway", "Dicas, ferramentas e guias toda semana no seu email.", "Inscrever-se"],
    footer: "Feito com paixão pelo jogo.",
  },
};

const tagCol = {
  POPULAR: "#f59e0b", NEW: "#22c55e", NOVO: "#22c55e", GUIDE: "#22d3ee", GUIA: "#22d3ee",
  ESSENTIAL: "#8b5cf6", ESSENCIAL: "#8b5cf6", SCIENCE: "#ec4899", "CIÊNCIA": "#ec4899",
  PROTOCOL: "#ef4444", PROTOCOLO: "#ef4444", INTERACTIVE: "#22d3ee", INTERATIVO: "#22d3ee",
  TOOL: "#22c55e", FERRAMENTA: "#22c55e", "COMING SOON": "#475569", "EM BREVE": "#475569",
  BEGINNERS: "#f59e0b", INICIANTES: "#f59e0b", STRATEGY: "#8b5cf6", "ESTRATÉGIA": "#8b5cf6",
  MENTAL: "#ec4899",
};

const secIcons = { eq: "🏌️", nu: "🔬", to: "🛠️", gu: "📚" };
const secColors = { eq: "#22d3ee", nu: "#22c55e", to: "#f59e0b", gu: "#8b5cf6" };

export default function Home() {
  const [lang, setLang] = useState("pt");
  const l = t[lang];

  const CardInner = ({ card }) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, color: tagCol[card.tag] || C.accent, background: `${tagCol[card.tag] || C.accent}18`, padding: "3px 8px", borderRadius: 6, letterSpacing: "0.5px" }}>{card.tag}</span>
        <span style={{ fontSize: "0.65rem", color: C.dim }}>{card.cat}</span>
      </div>
      <div style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 6, lineHeight: 1.3 }}>{card.title}</div>
      <div style={{ fontSize: "0.75rem", color: C.muted, lineHeight: 1.5 }}>{card.desc}</div>
      {card.link && <div style={{ marginTop: 10, fontSize: "0.73rem", color: C.accent, fontWeight: 600 }}>{lang === "pt" ? "Ler artigo →" : "Read article →"}</div>}
    </>
  );

  return (
    <div>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px", borderBottom: `1px solid ${C.border}`,
        background: "rgba(10,15,26,0.92)", position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1.3rem" }}>⛳</span>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: C.accent }}>{l.brand}</span>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <div className="nav-links" style={{ display: "flex", gap: 16 }}>
            {l.nav.map((n, i) => (
              <span key={i} style={{ fontSize: "0.8rem", color: i === 0 ? C.accent : C.muted, fontWeight: i === 0 ? 700 : 400 }}>{n}</span>
            ))}
          </div>
          <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{
            background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8,
            padding: "5px 12px", color: C.text, fontSize: "0.75rem", fontWeight: 600,
          }}>{l.langBtn}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", padding: "50px 0 30px" }}>
          <h1 className="hero-title" style={{ fontSize: "2.4rem", fontWeight: 900, margin: 0, lineHeight: 1.1 }}>
            <span style={{ color: C.accent }}>{l.brand}</span>
          </h1>
          <p style={{ fontSize: "1.3rem", fontWeight: 700, color: C.gold, margin: "6px 0 0" }}>{l.tagline}</p>
          <p style={{ fontSize: "0.88rem", color: C.muted, maxWidth: 550, margin: "14px auto 0", lineHeight: 1.6 }}>{l.sub}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24, flexWrap: "wrap" }}>
            <button style={{ background: C.accent, color: "#000", border: "none", borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: "0.9rem" }}>{l.cta1}</button>
            <button style={{ background: "transparent", color: C.accent, border: `2px solid ${C.accent}`, borderRadius: 10, padding: "12px 28px", fontWeight: 700, fontSize: "0.9rem" }}>{l.cta2}</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12, background: C.card, borderRadius: 16, padding: "20px 16px", marginBottom: 10, border: `1px solid ${C.border}` }}>
          {[{ v: "50+", c: C.accent }, { v: "12", c: C.green }, { v: "2", c: C.gold }, { v: "30+", c: C.purple }].map((s, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: "0.7rem", color: C.muted }}>{l.stats[i]}</div>
            </div>
          ))}
        </div>

        {/* Sections */}
        {["eq", "nu", "to", "gu"].map(sec => (
          <div key={sec}>
            <div style={{ marginBottom: 16, marginTop: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: "1.3rem" }}>{secIcons[sec]}</span>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 800, margin: 0 }}>{l.sec[sec][0]}</h2>
              </div>
              <p style={{ fontSize: "0.8rem", color: C.muted, margin: 0, paddingLeft: 38 }}>{l.sec[sec][1]}</p>
              <div style={{ height: 3, width: 60, background: secColors[sec], borderRadius: 2, marginTop: 8, marginLeft: 38 }} />
            </div>
            <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
              {l.cards.filter(c => c.s === sec).map((card, i) => {
                const cardStyle = { background: C.card2, borderRadius: 14, padding: "16px 18px", border: `1px solid ${C.border}`, transition: "border-color 0.2s", textDecoration: "none", color: "inherit", display: "block" };
                return card.link ? (
                  <a key={i} href={card.link} style={cardStyle}><CardInner card={card} /></a>
                ) : (
                  <div key={i} style={{ ...cardStyle, opacity: 0.7, cursor: "default" }}><CardInner card={card} /><div style={{ marginTop: 8, fontSize: "0.65rem", color: C.dim }}>{lang === "pt" ? "Em breve..." : "Coming soon..."}</div></div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <div style={{ background: `linear-gradient(135deg, ${C.card}, #1a2744)`, borderRadius: 18, padding: "30px 24px", marginTop: 40, textAlign: "center", border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: "1.5rem", marginBottom: 4 }}>📬</div>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 6px" }}>{l.nl[0]}</h3>
          <p style={{ fontSize: "0.8rem", color: C.muted, margin: "0 0 16px" }}>{l.nl[1]}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <input placeholder="email@example.com" style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: "10px 16px", color: C.text, fontSize: "0.85rem", width: 240, outline: "none" }} />
            <button style={{ background: C.accent, color: "#000", border: "none", borderRadius: 10, padding: "10px 20px", fontWeight: 700, fontSize: "0.85rem" }}>{l.nl[2]}</button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "30px 0 20px", borderTop: `1px solid ${C.border}`, marginTop: 40 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: "1.1rem" }}>⛳</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: C.accent }}>{l.brand}</span>
          </div>
          <p style={{ fontSize: "0.75rem", color: C.dim }}>{l.footer}</p>
          <p style={{ fontSize: "0.65rem", color: C.dim }}>© 2026 Tacada Golf. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

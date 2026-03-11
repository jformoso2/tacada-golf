"use client";
import { useState } from "react";

const C = {
  bg: "#f8f6f1",
  card: "#ffffff",
  card2: "#f0ede6",
  accent: "#4a7c59",
  accentLight: "#6b9e7a",
  gold: "#b8860b",
  goldLight: "#d4a847",
  cream: "#f5f1e8",
  dark: "#1a2e1a",
  text: "#2d3a2e",
  muted: "#6b7c6b",
  dim: "#99a899",
  border: "#d4cfc2",
  borderLight: "#e8e3d9",
  hero: "#1a2e1a",
  purple: "#6b5b7b",
  red: "#a04040",
  blue: "#4a6b8a",
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
      { s: "eq", title: "Complete Iron Distance Guide", desc: "Average distances for every club with interactive chart.", tag: "POPULAR", cat: "Irons", link: null },
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
      { s: "eq", title: "Guia Completo de Distâncias", desc: "Distâncias médias para cada taco com gráfico interativo.", tag: "POPULAR", cat: "Ferros", link: null },
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
  POPULAR: C.gold, NEW: "#4a7c59", NOVO: "#4a7c59", GUIDE: C.blue, GUIA: C.blue,
  ESSENTIAL: C.purple, ESSENCIAL: C.purple, SCIENCE: "#8a5a6b", "CIÊNCIA": "#8a5a6b",
  PROTOCOL: C.red, PROTOCOLO: C.red, INTERACTIVE: C.accent, INTERATIVO: C.accent,
  TOOL: "#4a7c59", FERRAMENTA: "#4a7c59", "COMING SOON": C.dim, "EM BREVE": C.dim,
  BEGINNERS: C.gold, INICIANTES: C.gold, STRATEGY: C.purple, "ESTRATÉGIA": C.purple,
  MENTAL: "#8a5a6b",
};

const secIcons = { eq: "🏌️", nu: "🔬", to: "🛠️", gu: "📚" };
const secColors = { eq: C.accent, nu: "#6b9e7a", to: C.gold, gu: C.purple };

export default function Home() {
  const [lang, setLang] = useState("pt");
  const l = t[lang];

  const CardInner = ({ card }) => (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, color: tagCol[card.tag] || C.accent, background: `${tagCol[card.tag] || C.accent}15`, padding: "3px 8px", borderRadius: 6, letterSpacing: "0.5px", textTransform: "uppercase" }}>{card.tag}</span>
        <span style={{ fontSize: "0.65rem", color: C.dim, fontStyle: "italic" }}>{card.cat}</span>
      </div>
      <div style={{ fontSize: "0.92rem", fontWeight: 700, marginBottom: 6, lineHeight: 1.3, color: C.dark, fontFamily: "Georgia, serif" }}>{card.title}</div>
      <div style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.6, fontFamily: "system-ui, sans-serif" }}>{card.desc}</div>
      {card.link && <div style={{ marginTop: 10, fontSize: "0.75rem", color: C.accent, fontWeight: 600, fontFamily: "system-ui, sans-serif" }}>{lang === "pt" ? "Ler artigo →" : "Read article →"}</div>}
    </>
  );

  return (
    <div style={{ background: C.bg }}>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px", borderBottom: `1px solid ${C.border}`,
        background: "#ffffffee", position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: "1.4rem" }}>⛳</span>
          <span style={{ fontSize: "1.15rem", fontWeight: 800, color: C.dark, fontFamily: "Georgia, serif", letterSpacing: "-0.5px" }}>Tacada Golf</span>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <div className="nav-links" style={{ display: "flex", gap: 20 }}>
            {l.nav.map((n, i) => (
              <span key={i} style={{ fontSize: "0.82rem", color: i === 0 ? C.accent : C.muted, fontWeight: i === 0 ? 700 : 500, fontFamily: "system-ui, sans-serif" }}>{n}</span>
            ))}
          </div>
          <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{
            background: C.cream, border: `1px solid ${C.border}`, borderRadius: 8,
            padding: "6px 14px", color: C.text, fontSize: "0.75rem", fontWeight: 600,
          }}>{l.langBtn}</button>
        </div>
      </nav>

      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        {/* Hero */}
        <div style={{
          textAlign: "center", padding: "56px 20px 40px",
          background: `linear-gradient(180deg, #1a2e1a 0%, #2d4a2d 100%)`,
          margin: "0 -24px", borderRadius: "0 0 24px 24px",
        }}>
          <div style={{ fontSize: "0.7rem", color: "#b8c4b8", letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12, fontFamily: "system-ui, sans-serif" }}>EST. 2026</div>
          <h1 className="hero-title" style={{ fontSize: "2.6rem", fontWeight: 900, margin: 0, lineHeight: 1.1, color: "#fff", fontFamily: "Georgia, serif" }}>
            Tacada Golf
          </h1>
          <div style={{ width: 60, height: 2, background: C.goldLight, margin: "14px auto", borderRadius: 2 }} />
          <p style={{ fontSize: "1.15rem", fontWeight: 600, color: C.goldLight, margin: "0", fontFamily: "Georgia, serif", fontStyle: "italic" }}>{l.tagline}</p>
          <p style={{ fontSize: "0.88rem", color: "#b8c4b8", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7, fontFamily: "system-ui, sans-serif" }}>{l.sub}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
            <button style={{ background: C.goldLight, color: C.dark, border: "none", borderRadius: 10, padding: "13px 30px", fontWeight: 700, fontSize: "0.88rem" }}>{l.cta1}</button>
            <button style={{ background: "transparent", color: "#fff", border: `2px solid #ffffff40`, borderRadius: 10, padding: "13px 30px", fontWeight: 700, fontSize: "0.88rem" }}>{l.cta2}</button>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 12,
          background: C.card, borderRadius: 16, padding: "22px 16px", marginTop: -20,
          border: `1px solid ${C.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          position: "relative", zIndex: 2,
        }}>
          {[{ v: "50+", c: C.accent }, { v: "12", c: C.accentLight }, { v: "2", c: C.gold }, { v: "30+", c: C.purple }].map((s, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 90 }}>
              <div style={{ fontSize: "1.7rem", fontWeight: 900, color: s.c, fontFamily: "Georgia, serif" }}>{s.v}</div>
              <div style={{ fontSize: "0.7rem", color: C.muted, fontFamily: "system-ui, sans-serif" }}>{l.stats[i]}</div>
            </div>
          ))}
        </div>

        {/* Sections */}
        {["eq", "nu", "to", "gu"].map(sec => (
          <div key={sec}>
            <div style={{ marginBottom: 16, marginTop: 44 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                <span style={{ fontSize: "1.3rem" }}>{secIcons[sec]}</span>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, color: C.dark, fontFamily: "Georgia, serif" }}>{l.sec[sec][0]}</h2>
              </div>
              <p style={{ fontSize: "0.82rem", color: C.muted, margin: 0, paddingLeft: 38, fontFamily: "system-ui, sans-serif" }}>{l.sec[sec][1]}</p>
              <div style={{ height: 2, width: 50, background: secColors[sec], borderRadius: 2, marginTop: 10, marginLeft: 38 }} />
            </div>
            <div className="cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: 14 }}>
              {l.cards.filter(c => c.s === sec).map((card, i) => {
                const cardStyle = {
                  background: C.card, borderRadius: 14, padding: "20px 20px", border: `1px solid ${C.borderLight}`,
                  transition: "all 0.2s", textDecoration: "none", color: "inherit", display: "block",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                };
                return card.link ? (
                  <a key={i} href={card.link} style={cardStyle}><CardInner card={card} /></a>
                ) : (
                  <div key={i} style={{ ...cardStyle, opacity: 0.6 }}><CardInner card={card} /><div style={{ marginTop: 8, fontSize: "0.65rem", color: C.dim, fontFamily: "system-ui, sans-serif" }}>{lang === "pt" ? "Em breve..." : "Coming soon..."}</div></div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Newsletter */}
        <div style={{
          background: `linear-gradient(135deg, #1a2e1a, #2d4a2d)`,
          borderRadius: 20, padding: "36px 28px", marginTop: 48, textAlign: "center",
        }}>
          <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>📬</div>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 800, margin: "0 0 6px", color: "#fff", fontFamily: "Georgia, serif" }}>{l.nl[0]}</h3>
          <p style={{ fontSize: "0.82rem", color: "#b8c4b8", margin: "0 0 18px", fontFamily: "system-ui, sans-serif" }}>{l.nl[1]}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            <input placeholder="email@example.com" style={{
              background: "#ffffff15", border: `1px solid #ffffff30`, borderRadius: 10,
              padding: "11px 18px", color: "#fff", fontSize: "0.85rem", width: 250, outline: "none",
              fontFamily: "system-ui, sans-serif",
            }} />
            <button style={{ background: C.goldLight, color: C.dark, border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: "0.85rem" }}>{l.nl[2]}</button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "34px 0 24px", borderTop: `1px solid ${C.border}`, marginTop: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ fontSize: "1.1rem" }}>⛳</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: C.dark, fontFamily: "Georgia, serif" }}>Tacada Golf</span>
          </div>
          <p style={{ fontSize: "0.75rem", color: C.dim, fontFamily: "system-ui, sans-serif" }}>{l.footer}</p>
          <p style={{ fontSize: "0.65rem", color: C.dim, fontFamily: "system-ui, sans-serif" }}>© 2026 Tacada Golf. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

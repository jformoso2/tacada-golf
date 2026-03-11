"use client";
import { useState } from "react";

const C = {
  bg: "#f8f6f1", card: "#ffffff", card2: "#f0ede6",
  accent: "#4a7c59", accentLight: "#6b9e7a", gold: "#b8860b", goldLight: "#d4a847",
  cream: "#f5f1e8", dark: "#1a2e1a", text: "#2d3a2e", muted: "#6b7c6b",
  dim: "#99a899", border: "#d4cfc2", borderLight: "#e8e3d9",
};

const content = {
  pt: {
    back: "← Voltar ao Início",
    title: "O Que é o Handicap no Golfe?",
    subtitle: "Guia completo para entender, calcular e melhorar seu handicap",
    reading: "8 min de leitura",
    tag: "GUIA PARA INICIANTES",
    sections: [
      { title: "O Que é o Handicap?", icon: "🎯", text: `O handicap é um sistema numérico que representa o nível de habilidade de um jogador de golfe. Ele permite que jogadores de diferentes níveis compitam de forma justa entre si.\n\nEm termos simples: quanto menor o seu handicap, melhor você joga. Um jogador profissional geralmente tem handicap 0 (ou até negativo, chamado de "plus"), enquanto um iniciante pode ter handicap 36 ou mais.\n\nPor exemplo, se o par do campo é 72 e seu handicap é 18, espera-se que você complete a volta em aproximadamente 90 tacadas (72 + 18).` },
      { title: "Como o Handicap é Calculado?", icon: "🧮", text: `O cálculo moderno do handicap usa o World Handicap System (WHS), adotado globalmente desde 2020. O processo envolve:\n\n1. Score Diferencial: Para cada volta jogada, calcula-se a diferença entre o seu score ajustado e o Course Rating, dividido pelo Slope Rating e multiplicado por 113.\n\nA fórmula é: (Score Ajustado - Course Rating) × 113 ÷ Slope Rating\n\n2. Média dos Melhores: O sistema usa as 8 melhores voltas das suas últimas 20.\n\n3. Ajuste Final: Multiplica-se por 0,96 (96%) para incentivar a melhoria contínua.` },
      { title: "Course Rating e Slope Rating", icon: "⛳", text: `Dois conceitos fundamentais:\n\nCourse Rating é a avaliação da dificuldade de um campo para um jogador scratch (handicap 0). Um campo com Course Rating de 72.3 significa que um jogador scratch faria, em média, 72.3 tacadas.\n\nSlope Rating mede a dificuldade relativa para um jogador bogey (~handicap 20) comparado a um scratch. Varia de 55 a 155, com 113 sendo a média. Quanto maior o Slope, mais difícil para jogadores com handicap alto.` },
      { title: "Como Tirar Seu Handicap?", icon: "📋", text: `Passo 1 — Filie-se a um clube de golfe filiado à Confederação Brasileira de Golfe (CBG).\n\nPasso 2 — Jogue e registre suas voltas oficialmente. Você precisa de no mínimo 3 voltas de 18 buracos (ou 54 buracos combinados).\n\nPasso 3 — Após cada volta, assine seu scorecard e entregue ao clube.\n\nPasso 4 — Seu handicap é atualizado automaticamente conforme você joga mais voltas.` },
      { title: "Handicap de Jogo vs Handicap Index", icon: "🔄", text: `Handicap Index é o seu handicap "base" — o número oficial que te acompanha em qualquer campo do mundo.\n\nHandicap de Jogo (Course Handicap) é o ajuste para um campo e tee específicos.\n\nFórmula: Handicap de Jogo = Handicap Index × (Slope Rating ÷ 113) + (Course Rating - Par)\n\nExemplo: Handicap Index 15, Slope 130, Course Rating 73.2, Par 72:\n15 × (130 ÷ 113) + (73.2 - 72) = 18.5 → arredondado para 19.` },
      { title: "Tabela de Referência", icon: "📊", isTable: true, tableData: [
        { range: "0 ou menos", level: "Scratch / Profissional", desc: "Joga no par ou melhor", color: "#4a7c59" },
        { range: "1 - 5", level: "Excelente", desc: "Jogador muito habilidoso", color: "#6b9e7a" },
        { range: "6 - 10", level: "Muito Bom", desc: "Bom controle de jogo", color: "#7bae5a" },
        { range: "11 - 18", level: "Intermediário", desc: "Jogador sólido e consistente", color: "#b8860b" },
        { range: "19 - 28", level: "Médio-Alto", desc: "Em desenvolvimento", color: "#c49a3a" },
        { range: "29 - 36", level: "Iniciante", desc: "Aprendendo o jogo", color: "#a04040" },
        { range: "37 - 54", level: "Iniciante Absoluto", desc: "Primeiros passos no golfe", color: "#8a5a6b" },
      ]},
      { title: "Dicas Para Baixar Seu Handicap", icon: "📉", text: `Jogo Curto é Rei: Cerca de 60-65% das tacadas acontecem a menos de 100m do buraco. Pratique putting, chipping e pitching.\n\nGestão de Campo: Jogue para o centro do green. Evite riscos desnecessários. Um bogey é melhor que um duplo bogey.\n\nConsistência: Melhor acertar 14 fairways com ferro 5 do que 7 com driver.\n\nRegistre Todas as Voltas: Mesmo as ruins! Seu handicap precisa refletir seu jogo real.\n\nNutrição e Energia: Manter energia nos últimos 9 buracos é crucial. Hidrate-se e alimente-se durante a volta.\n\nAulas com Profissional: O caminho mais rápido para melhorar.` },
      { title: "Perguntas Frequentes", icon: "❓", text: `Posso jogar sem handicap? Sim, recreativamente. Para torneios oficiais, é obrigatório.\n\nMeu handicap é o mesmo em todos os campos? Seu Index é único, mas o Handicap de Jogo varia por campo.\n\nCom que frequência é atualizado? Diariamente no sistema WHS.\n\nPosso ter handicap com 9 buracos? Sim! O WHS aceita voltas de 9 buracos.\n\nQual o handicap máximo? 54.0 para homens e mulheres.` }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "What is a Golf Handicap?",
    subtitle: "Complete guide to understanding, calculating, and improving your handicap",
    reading: "8 min read",
    tag: "BEGINNER'S GUIDE",
    sections: [
      { title: "What is a Handicap?", icon: "🎯", text: `A handicap is a numerical system representing a golfer's skill level, allowing players of different abilities to compete fairly.\n\nThe lower your handicap, the better you play. Professionals usually have 0 (or negative, called "plus"), while beginners might have 36 or higher.\n\nExample: If course par is 72 and your handicap is 18, you're expected to score about 90 strokes (72 + 18).` },
      { title: "How is it Calculated?", icon: "🧮", text: `The World Handicap System (WHS), adopted globally since 2020:\n\n1. Score Differential: (Adjusted Score - Course Rating) × 113 ÷ Slope Rating\n\n2. Best Average: Uses your best 8 out of last 20 rounds.\n\n3. Final Adjustment: Multiply by 0.96 (96%) to encourage improvement.` },
      { title: "Course & Slope Rating", icon: "⛳", text: `Course Rating evaluates difficulty for a scratch golfer. A rating of 72.3 means a scratch golfer would average 72.3 strokes.\n\nSlope Rating measures relative difficulty for bogey golfers vs scratch. Ranges from 55 to 155 (113 average). Higher Slope = harder for high-handicap players.` },
      { title: "How to Get Your Handicap?", icon: "📋", text: `Step 1 — Join a golf club affiliated with your national federation.\n\nStep 2 — Play and record rounds officially. Minimum 3 rounds of 18 holes (or 54 combined holes).\n\nStep 3 — Sign and submit scorecards after each round.\n\nStep 4 — Your handicap updates automatically as you play more.` },
      { title: "Playing vs Index Handicap", icon: "🔄", text: `Handicap Index is your portable "base" number.\n\nCourse Handicap adjusts for specific course difficulty.\n\nFormula: Index × (Slope ÷ 113) + (Course Rating - Par)\n\nExample: Index 15, Slope 130, Rating 73.2, Par 72:\n15 × (130 ÷ 113) + (73.2 - 72) = 18.5 → rounded to 19.` },
      { title: "Reference Table", icon: "📊", isTable: true, tableData: [
        { range: "0 or less", level: "Scratch / Pro", desc: "Plays at par or better", color: "#4a7c59" },
        { range: "1 - 5", level: "Excellent", desc: "Highly skilled", color: "#6b9e7a" },
        { range: "6 - 10", level: "Very Good", desc: "Good game control", color: "#7bae5a" },
        { range: "11 - 18", level: "Intermediate", desc: "Solid and consistent", color: "#b8860b" },
        { range: "19 - 28", level: "Mid-High", desc: "Developing", color: "#c49a3a" },
        { range: "29 - 36", level: "Beginner", desc: "Learning the game", color: "#a04040" },
        { range: "37 - 54", level: "Absolute Beginner", desc: "First steps", color: "#8a5a6b" },
      ]},
      { title: "Tips to Lower Your Handicap", icon: "📉", text: `Short Game is King: 60-65% of strokes happen within 100m. Practice putting, chipping, pitching.\n\nCourse Management: Play center of greens. Avoid unnecessary risks.\n\nConsistency: Better 14 fairways with 5-iron than 7 with driver.\n\nRecord All Rounds: Even bad ones! Your handicap needs to reflect reality.\n\nNutrition: Maintain energy on the back nine. Stay hydrated.\n\nPro Lessons: The fastest path to improvement.` },
      { title: "FAQ", icon: "❓", text: `Can I play without one? Yes, recreationally. Official tournaments require it.\n\nSame on all courses? Your Index is unique, but Course Handicap varies.\n\nHow often updated? Daily in the WHS.\n\n9-hole rounds count? Yes! WHS accepts them.\n\nMaximum? 54.0 for men and women.` }
    ],
  }
};

export default function HandicapGuide() {
  const [lang, setLang] = useState("pt");
  const l = content[lang];

  return (
    <div style={{ fontFamily: "Georgia, serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px", borderBottom: `1px solid ${C.border}`,
        background: "#ffffffee", position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(12px)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: "1.4rem" }}>⛳</span>
          <span style={{ fontSize: "1.15rem", fontWeight: 800, color: C.dark, letterSpacing: "-0.5px" }}>Tacada Golf</span>
        </a>
        <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{
          background: C.cream, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "6px 14px", color: C.text, fontSize: "0.75rem", fontWeight: 600,
          fontFamily: "system-ui, sans-serif", cursor: "pointer",
        }}>{lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}</button>
      </nav>

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 24px" }}>
        <a href="/" style={{ display: "inline-block", marginTop: 24, fontSize: "0.82rem", color: C.accent, textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{l.back}</a>

        <div style={{
          marginTop: 20, marginBottom: 36, padding: "32px 28px",
          background: `linear-gradient(135deg, #1a2e1a, #2d4a2d)`,
          borderRadius: 18,
        }}>
          <span style={{ fontSize: "0.62rem", fontWeight: 700, color: C.goldLight, background: `${C.goldLight}20`, padding: "4px 12px", borderRadius: 6, fontFamily: "system-ui, sans-serif", letterSpacing: "1px" }}>{l.tag}</span>
          <h1 style={{ fontSize: "1.9rem", fontWeight: 900, margin: "14px 0 10px", lineHeight: 1.2, color: "#fff" }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: "#b8c4b8", margin: "0 0 10px", fontStyle: "italic" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: "#8a9a8a", fontFamily: "system-ui, sans-serif" }}>📖 {l.reading}</span>
        </div>

        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: "1.3rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, margin: 0, color: C.dark }}>{sec.title}</h2>
            </div>

            {sec.isTable ? (
              <div style={{ borderRadius: 14, overflow: "hidden", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                {sec.tableData.map((row, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
                    background: j % 2 === 0 ? C.card : C.card2,
                    borderBottom: j < sec.tableData.length - 1 ? `1px solid ${C.borderLight}` : "none",
                  }}>
                    <div style={{ width: 80, flexShrink: 0 }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 800, color: row.color }}>{row.range}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: C.dark }}>{row.level}</div>
                      <div style={{ fontSize: "0.73rem", color: C.muted, fontFamily: "system-ui, sans-serif" }}>{row.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: C.card, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.9rem", color: C.muted, lineHeight: 1.85, margin: j === 0 ? 0 : "14px 0 0", fontFamily: "system-ui, sans-serif" }}>
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        <div style={{ textAlign: "center", padding: "34px 0 24px", borderTop: `1px solid ${C.border}`, marginTop: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8, textDecoration: "none" }}>
            <span style={{ fontSize: "1.1rem" }}>⛳</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: C.dark }}>Tacada Golf</span>
          </a>
          <p style={{ fontSize: "0.65rem", color: C.dim, fontFamily: "system-ui, sans-serif" }}>© 2026 Tacada Golf. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

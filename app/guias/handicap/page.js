"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
};

const content = {
  pt: {
    back: "← Voltar ao Início",
    title: "O Que é o Handicap no Golfe?",
    subtitle: "Guia completo para entender, calcular e melhorar seu handicap",
    reading: "8 min de leitura",
    tag: "GUIA PARA INICIANTES",
    sections: [
      {
        title: "O Que é o Handicap?",
        icon: "🎯",
        text: `O handicap é um sistema numérico que representa o nível de habilidade de um jogador de golfe. Ele permite que jogadores de diferentes níveis compitam de forma justa entre si.

Em termos simples: quanto menor o seu handicap, melhor você joga. Um jogador profissional geralmente tem handicap 0 (ou até negativo, chamado de "plus"), enquanto um iniciante pode ter handicap 36 ou mais.

Por exemplo, se o par do campo é 72 e seu handicap é 18, espera-se que você complete a volta em aproximadamente 90 tacadas (72 + 18).`
      },
      {
        title: "Como o Handicap é Calculado?",
        icon: "🧮",
        text: `O cálculo moderno do handicap usa o World Handicap System (WHS), adotado globalmente desde 2020. O processo envolve:

1. Score Diferencial: Para cada volta jogada, calcula-se a diferença entre o seu score ajustado e o Course Rating (dificuldade do campo), dividido pelo Slope Rating (dificuldade relativa) e multiplicado por 113.

A fórmula é: (Score Ajustado - Course Rating) × 113 ÷ Slope Rating

2. Média dos Melhores: O sistema usa as 8 melhores voltas das suas últimas 20 para calcular a média. Se você tem menos de 20 voltas registradas, o sistema usa uma quantidade menor.

3. Ajuste Final: Multiplica-se por 0,96 (96%) para incentivar a melhoria contínua.`
      },
      {
        title: "Course Rating e Slope Rating",
        icon: "⛳",
        text: `Dois conceitos fundamentais para entender o handicap:

Course Rating é a avaliação da dificuldade de um campo para um jogador scratch (handicap 0). Por exemplo, um campo com Course Rating de 72.3 significa que um jogador scratch faria, em média, 72.3 tacadas.

Slope Rating mede a dificuldade relativa do campo para um jogador bogey (handicap ~20) comparado a um jogador scratch. O Slope varia de 55 a 155, com 113 sendo a média. Quanto maior o Slope, mais difícil o campo é para jogadores com handicap alto.

Esses valores são definidos por avaliadores oficiais de cada federação de golfe.`
      },
      {
        title: "Como Tirar Seu Handicap?",
        icon: "📋",
        text: `Para obter seu handicap oficial, siga estes passos:

Passo 1 — Filie-se a um clube: Você precisa ser membro de um clube de golfe filiado à federação do seu estado ou à Confederação Brasileira de Golfe (CBG).

Passo 2 — Registre suas voltas: Jogue e registre suas voltas oficialmente. No Brasil, o sistema usado é gerenciado pela CBG. Você precisa de no mínimo 3 voltas de 18 buracos (ou 54 buracos combinados) para obter seu primeiro handicap.

Passo 3 — Entregue seus scorecards: Após cada volta, assine seu scorecard e entregue ao seu clube. O profissional ou comitê de handicap vai registrar no sistema.

Passo 4 — Acompanhe: Seu handicap é atualizado automaticamente conforme você joga mais voltas. Quanto mais voltas, mais preciso fica.`
      },
      {
        title: "Handicap de Jogo vs Handicap Index",
        icon: "🔄",
        text: `Existe uma diferença importante entre esses dois termos:

Handicap Index é o seu handicap "base" — o número oficial que aparece no sistema. Ele é portátil e te acompanha em qualquer campo do mundo.

Handicap de Jogo (Course Handicap) é o ajuste do seu Handicap Index para um campo e tee específicos. Como cada campo tem dificuldade diferente, seu handicap de jogo varia.

A fórmula é: Handicap de Jogo = Handicap Index × (Slope Rating ÷ 113) + (Course Rating - Par)

Por exemplo: Se seu Handicap Index é 15 e você vai jogar um campo com Slope 130 e Course Rating 73.2 (Par 72), seu Handicap de Jogo seria: 15 × (130 ÷ 113) + (73.2 - 72) = 18.5, arredondado para 19.`
      },
      {
        title: "Tabela de Referência de Handicap",
        icon: "📊",
        isTable: true,
        tableData: [
          { range: "0 ou menos", level: "Scratch / Profissional", desc: "Joga no par ou melhor", color: "#22d3ee" },
          { range: "1 - 5", level: "Excelente", desc: "Jogador muito habilidoso", color: "#22c55e" },
          { range: "6 - 10", level: "Muito Bom", desc: "Bom controle de jogo", color: "#84cc16" },
          { range: "11 - 18", level: "Intermediário", desc: "Jogador sólido e consistente", color: "#f59e0b" },
          { range: "19 - 28", level: "Médio-Alto", desc: "Em desenvolvimento", color: "#f97316" },
          { range: "29 - 36", level: "Iniciante", desc: "Aprendendo o jogo", color: "#ef4444" },
          { range: "37 - 54", level: "Iniciante Absoluto", desc: "Primeiros passos no golfe", color: "#ec4899" },
        ]
      },
      {
        title: "Dicas Para Baixar Seu Handicap",
        icon: "📉",
        text: `Melhorar seu handicap requer prática inteligente e estratégia:

Jogo Curto é Rei: Cerca de 60-65% das suas tacadas acontecem a menos de 100 metros do buraco. Pratique putting, chipping e pitching mais do que o driver.

Gestão de Campo: Jogue para o centro do green em vez de atacar bandeiras difíceis. Evite riscos desnecessários. Um bogey é muito melhor que um duplo ou triplo bogey.

Consistência: É melhor acertar 14 fairways com um ferro 5 do que acertar 7 com o driver. Priorize manter a bola em jogo.

Registre Todas as Voltas: Mesmo as ruins! Seu handicap precisa refletir seu jogo real. Além disso, as voltas ruins eventualmente saem do cálculo das 20 mais recentes.

Nutrição e Energia: Como discutimos em outros artigos, manter a energia nos últimos 9 buracos é crucial. Hidrate-se e alimente-se durante a volta.

Aulas com Profissional: Investir em aulas regulares com um profissional certificado é o caminho mais rápido para melhorar.`
      },
      {
        title: "Perguntas Frequentes",
        icon: "❓",
        text: `Posso jogar sem handicap? Sim! Você pode jogar golfe recreativamente sem handicap. Porém, para participar de torneios oficiais, o handicap é obrigatório.

Meu handicap é o mesmo em todos os campos? Seu Handicap Index é único, mas o Handicap de Jogo varia conforme a dificuldade de cada campo.

Com que frequência o handicap é atualizado? No sistema WHS, o handicap é atualizado diariamente conforme novas voltas são registradas.

Posso ter handicap jogando apenas 9 buracos? Sim! O WHS aceita voltas de 9 buracos. O sistema converte automaticamente para o equivalente de 18 buracos.

Qual é o handicap máximo? No sistema WHS, o handicap máximo é 54.0 para homens e mulheres.`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "What is a Golf Handicap?",
    subtitle: "Complete guide to understanding, calculating, and improving your handicap",
    reading: "8 min read",
    tag: "BEGINNER'S GUIDE",
    sections: [
      {
        title: "What is a Handicap?",
        icon: "🎯",
        text: `A handicap is a numerical system that represents a golfer's skill level. It allows players of different abilities to compete fairly against each other.

In simple terms: the lower your handicap, the better you play. A professional golfer usually has a handicap of 0 (or even negative, called "plus"), while a beginner might have a handicap of 36 or higher.

For example, if the course par is 72 and your handicap is 18, you're expected to complete the round in approximately 90 strokes (72 + 18).`
      },
      {
        title: "How is the Handicap Calculated?",
        icon: "🧮",
        text: `The modern handicap calculation uses the World Handicap System (WHS), adopted globally since 2020. The process involves:

1. Score Differential: For each round played, the difference between your adjusted score and the Course Rating is calculated, divided by the Slope Rating and multiplied by 113.

The formula is: (Adjusted Score - Course Rating) × 113 ÷ Slope Rating

2. Best Average: The system uses the best 8 rounds out of your last 20 to calculate the average. If you have fewer than 20 rounds recorded, the system uses a smaller number.

3. Final Adjustment: Multiply by 0.96 (96%) to encourage continuous improvement.`
      },
      {
        title: "Course Rating and Slope Rating",
        icon: "⛳",
        text: `Two fundamental concepts to understand handicap:

Course Rating evaluates a course's difficulty for a scratch golfer (handicap 0). For example, a course with a Course Rating of 72.3 means a scratch golfer would score, on average, 72.3 strokes.

Slope Rating measures the relative difficulty of the course for a bogey golfer (handicap ~20) compared to a scratch golfer. Slope ranges from 55 to 155, with 113 being the average. The higher the Slope, the harder the course is for high-handicap players.

These values are set by official evaluators from each golf federation.`
      },
      {
        title: "How to Get Your Handicap?",
        icon: "📋",
        text: `To obtain your official handicap, follow these steps:

Step 1 — Join a club: You need to be a member of a golf club affiliated with your national golf federation.

Step 2 — Record your rounds: Play and officially record your rounds. You need a minimum of 3 rounds of 18 holes (or 54 combined holes) to get your first handicap.

Step 3 — Submit your scorecards: After each round, sign your scorecard and submit it to your club. The professional or handicap committee will enter it into the system.

Step 4 — Track it: Your handicap updates automatically as you play more rounds. The more rounds you play, the more accurate it becomes.`
      },
      {
        title: "Playing Handicap vs Handicap Index",
        icon: "🔄",
        text: `There's an important difference between these two terms:

Handicap Index is your "base" handicap — the official number in the system. It's portable and follows you to any course in the world.

Course Handicap (Playing Handicap) adjusts your Handicap Index for a specific course and tee. Since each course has different difficulty, your playing handicap varies.

The formula is: Course Handicap = Handicap Index × (Slope Rating ÷ 113) + (Course Rating - Par)

For example: If your Handicap Index is 15 and you're playing a course with Slope 130 and Course Rating 73.2 (Par 72), your Course Handicap would be: 15 × (130 ÷ 113) + (73.2 - 72) = 18.5, rounded to 19.`
      },
      {
        title: "Handicap Reference Table",
        icon: "📊",
        isTable: true,
        tableData: [
          { range: "0 or less", level: "Scratch / Professional", desc: "Plays at par or better", color: "#22d3ee" },
          { range: "1 - 5", level: "Excellent", desc: "Highly skilled player", color: "#22c55e" },
          { range: "6 - 10", level: "Very Good", desc: "Good game control", color: "#84cc16" },
          { range: "11 - 18", level: "Intermediate", desc: "Solid and consistent player", color: "#f59e0b" },
          { range: "19 - 28", level: "Mid-High", desc: "Developing player", color: "#f97316" },
          { range: "29 - 36", level: "Beginner", desc: "Learning the game", color: "#ef4444" },
          { range: "37 - 54", level: "Absolute Beginner", desc: "First steps in golf", color: "#ec4899" },
        ]
      },
      {
        title: "Tips to Lower Your Handicap",
        icon: "📉",
        text: `Improving your handicap requires smart practice and strategy:

Short Game is King: About 60-65% of your strokes happen within 100 meters of the hole. Practice putting, chipping, and pitching more than your driver.

Course Management: Play to the center of the green instead of attacking difficult pin positions. Avoid unnecessary risks. A bogey is much better than a double or triple bogey.

Consistency: It's better to hit 14 fairways with a 5-iron than 7 with the driver. Prioritize keeping the ball in play.

Record All Rounds: Even the bad ones! Your handicap needs to reflect your real game. Plus, bad rounds eventually drop out of your most recent 20.

Nutrition and Energy: As we discussed in other articles, maintaining energy on the back nine is crucial. Stay hydrated and fueled during the round.

Lessons with a Pro: Investing in regular lessons with a certified professional is the fastest path to improvement.`
      },
      {
        title: "Frequently Asked Questions",
        icon: "❓",
        text: `Can I play without a handicap? Yes! You can play golf recreationally without one. However, for official tournaments, a handicap is required.

Is my handicap the same on all courses? Your Handicap Index is unique, but your Course Handicap varies based on each course's difficulty.

How often is the handicap updated? In the WHS system, the handicap is updated daily as new rounds are recorded.

Can I get a handicap playing only 9 holes? Yes! The WHS accepts 9-hole rounds. The system automatically converts to the 18-hole equivalent.

What is the maximum handicap? In the WHS system, the maximum handicap is 54.0 for both men and women.`
      }
    ],
  }
};

export default function HandicapGuide() {
  const [lang, setLang] = useState("pt");
  const l = content[lang];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 20px", borderBottom: `1px solid ${C.border}`,
        background: "rgba(10,15,26,0.92)", position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(12px)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ fontSize: "1.3rem" }}>⛳</span>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: C.accent }}>Tacada Golf</span>
        </a>
        <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{
          background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "5px 12px", color: C.text, fontSize: "0.75rem", fontWeight: 600, cursor: "pointer",
        }}>{lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}</button>
      </nav>

      <div style={{ maxWidth: 750, margin: "0 auto", padding: "0 20px" }}>
        {/* Back */}
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.8rem", color: C.accent, textDecoration: "none" }}>
          {l.back}
        </a>

        {/* Header */}
        <div style={{ marginTop: 16, marginBottom: 32 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.gold, background: `${C.gold}18`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "12px 0 8px", lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: C.muted, margin: "0 0 8px" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Content */}
        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: "1.4rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>{sec.title}</h2>
            </div>

            {sec.isTable ? (
              <div style={{ overflowX: "auto" }}>
                {sec.tableData.map((row, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
                    background: j % 2 === 0 ? C.card : C.card2, borderRadius: j === 0 ? "12px 12px 0 0" : j === sec.tableData.length - 1 ? "0 0 12px 12px" : 0,
                  }}>
                    <div style={{ width: 80, flexShrink: 0 }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 800, color: row.color }}>{row.range}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: C.text }}>{row.level}</div>
                      <div style={{ fontSize: "0.73rem", color: C.muted }}>{row.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: C.card, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.border}` }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.8, margin: j === 0 ? 0 : "14px 0 0" }}>
                    {para.split("\n").map((line, k) => {
                      const isBold = /^(Passo \d|Step \d|Handicap Index|Handicap de Jogo|Course Rating|Slope Rating|Course Handicap|Jogo Curto|Short Game|Gestão de Campo|Course Management|Consistência|Consistency|Registre Todas|Record All|Nutrição|Nutrition|Aulas com|Lessons with|Posso jogar|Can I play|Meu handicap|Is my handicap|Com que frequência|How often|Pode|Can I get|Qual é o|What is the|A fórmula|The formula)/.test(line.trim());
                      return (
                        <span key={k}>
                          {isBold ? <><br/><strong style={{ color: C.text }}>{line}</strong></> : line}
                          {k < para.split("\n").length - 1 && <br/>}
                        </span>
                      );
                    })}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "30px 0 20px", borderTop: `1px solid ${C.border}`, marginTop: 20 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8, textDecoration: "none" }}>
            <span style={{ fontSize: "1.1rem" }}>⛳</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: C.accent }}>Tacada Golf</span>
          </a>
          <p style={{ fontSize: "0.65rem", color: C.dim }}>© 2026 Tacada Golf. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

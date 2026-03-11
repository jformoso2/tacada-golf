"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
};

const clubs = {
  woods: [
    { club: "Driver", loft: "9-12°", low: 230, mid: 210, high: 180, color: "#ef4444" },
    { club: "3 Wood", loft: "15°", low: 215, mid: 195, high: 170, color: "#f97316" },
    { club: "5 Wood", loft: "18°", low: 205, mid: 185, high: 160, color: "#f59e0b" },
    { club: "7 Wood", loft: "21°", low: 195, mid: 175, high: 150, color: "#eab308" },
  ],
  hybrids: [
    { club: "3 Hybrid", loft: "19-21°", low: 200, mid: 185, high: 165, color: "#84cc16" },
    { club: "4 Hybrid", loft: "22-24°", low: 190, mid: 175, high: 155, color: "#22c55e" },
    { club: "5 Hybrid", loft: "25-27°", low: 180, mid: 165, high: 145, color: "#10b981" },
  ],
  irons: [
    { club: "3 Iron", loft: "21°", low: 200, mid: 180, high: 160, color: "#14b8a6" },
    { club: "4 Iron", loft: "24°", low: 190, mid: 170, high: 150, color: "#06b6d4" },
    { club: "5 Iron", loft: "27°", low: 180, mid: 160, high: 140, color: "#0ea5e9" },
    { club: "6 Iron", loft: "30°", low: 170, mid: 150, high: 130, color: "#3b82f6" },
    { club: "7 Iron", loft: "34°", low: 160, mid: 140, high: 120, color: "#6366f1" },
    { club: "8 Iron", loft: "38°", low: 150, mid: 130, high: 110, color: "#8b5cf6" },
    { club: "9 Iron", loft: "42°", low: 140, mid: 120, high: 100, color: "#a855f7" },
  ],
  wedges: [
    { club: "PW", loft: "46°", low: 130, mid: 110, high: 90, color: "#d946ef" },
    { club: "GW (50°)", loft: "50°", low: 115, mid: 100, high: 80, color: "#ec4899" },
    { club: "SW (54-56°)", loft: "54-56°", low: 100, mid: 85, high: 70, color: "#f43f5e" },
    { club: "LW (58-60°)", loft: "58-60°", low: 85, mid: 70, high: 55, color: "#fb7185" },
  ],
};

const allClubs = [...clubs.woods, ...clubs.hybrids, ...clubs.irons, ...clubs.wedges];

const t = {
  pt: {
    back: "← Voltar ao Início",
    title: "Guia Completo de Distâncias dos Tacos",
    subtitle: "Distâncias médias para cada taco de golfe — do Driver ao Lob Wedge",
    reading: "10 min de leitura",
    tag: "GUIA DE EQUIPAMENTO",
    skillLabels: { low: "Handicap Baixo (0-10)", mid: "Handicap Médio (11-20)", high: "Handicap Alto (21+)" },
    skillShort: { low: "Baixo", mid: "Médio", high: "Alto" },
    yards: "jardas",
    catNames: { woods: "Madeiras (Woods)", hybrids: "Híbridos", irons: "Ferros (Irons)", wedges: "Wedges" },
    sections: [
      {
        title: "Por Que Conhecer Suas Distâncias?",
        icon: "🎯",
        text: `Saber a distância média de cada taco é uma das habilidades mais importantes no golfe. Sem esse conhecimento, você está basicamente adivinhando em cada tacada.

Jogadores que conhecem suas distâncias reais conseguem escolher o taco certo para cada situação, evitar riscos desnecessários como bunkers e água, melhorar a gestão de campo significativamente, e reduzir o número de tacadas por volta.

A dica mais importante: use as distâncias em que você acerta SOLIDAMENTE, não a sua melhor tacada de todos os tempos. A maioria dos amadores erra ao usar o taco mais curto porque pensam na distância máxima, quando deveriam pensar na distância média.`
      },
      {
        title: "Fatores Que Afetam a Distância",
        icon: "🌡️",
        text: `Vários fatores influenciam quanto cada taco vai longe:

Velocidade do Swing: O fator número 1. Maior velocidade = maior distância. Jogadores com swing mais rápido (acima de 100 mph com o driver) vão mais longe com todos os tacos.

Altitude: Em campos mais altos (como em Campos do Jordão ou Bogotá), a bola viaja mais longe porque o ar é mais rarefeito. Regra geral: +2% de distância a cada 300m de altitude.

Temperatura: Ar quente é menos denso. No calor, a bola vai mais longe. No frio, menos. Diferença pode chegar a 10-15 jardas entre verão e inverno.

Vento: Vento a favor pode adicionar 10-20 jardas. Contra, pode tirar ainda mais. Vento lateral afeta a direção.

Condição do Fairway: Fairways firmes e secos dão mais roll (rolagem). Fairways molhados param a bola mais rápido.

Tipo de Bola: Bolas premium (Pro V1, TP5) geralmente voam mais longe e com mais controle do que bolas de distância básicas.`
      },
      {
        title: "Madeiras vs Híbridos vs Ferros Longos",
        icon: "⚔️",
        text: `Uma das dúvidas mais comuns é o que colocar no bag para as distâncias mais longas:

Madeiras (3W, 5W, 7W): Mais fáceis de acertar do chão, ideais para segundas tacadas em par 5. A 7 Wood é especialmente boa para quem tem dificuldade com ferros longos.

Híbridos (3H, 4H, 5H): Combinam a facilidade das madeiras com a precisão dos ferros. São os substitutos ideais para ferros longos (3, 4, 5 iron) para a maioria dos jogadores.

Ferros Longos (3I, 4I): Mais difíceis de acertar mas oferecem mais controle de trajetória. Recomendados apenas para jogadores com handicap abaixo de 10.

Recomendação por nível: Handicap alto (20+) → 5W + 5H + 6H. Handicap médio (10-20) → 3W + 4H + 5H. Handicap baixo (0-10) → 3W + 3H ou 3I + 4I.`
      },
      {
        title: "Os Wedges: Seu Jogo Curto",
        icon: "🏌️",
        text: `Os wedges são os tacos mais importantes para baixar seu score. Aqui está o que cada um faz:

Pitching Wedge (PW - 46°): Tacadas de approach de 90-130 jardas. Vem incluído no set de ferros.

Gap Wedge (GW - 50°): Preenche o "gap" entre o PW e o SW. Tacadas de 80-115 jardas. Essencial para evitar buracos de distância.

Sand Wedge (SW - 54-56°): Para saídas de bunker e tacadas de 70-100 jardas. O bounce (ângulo da sola) ajuda a deslizar na areia.

Lob Wedge (LW - 58-60°): Para tacadas altas e curtas que precisam parar rápido. Distância de 55-85 jardas. Requer mais prática.

Dica de setup: Garanta que a diferença de loft entre seus wedges seja de 4-6 graus. Exemplo ideal: PW (46°), GW (50°), SW (54°), LW (58°).`
      },
      {
        title: "Como Medir Suas Distâncias Reais",
        icon: "📏",
        text: `Para jogar bem, você precisa saber SUAS distâncias, não as da tabela. Aqui estão formas de medir:

No Driving Range: Leve um rangefinder ou GPS ao range. Acerte 10 bolas com cada taco, descarte as 2 melhores e 2 piores, e faça a média das 6 restantes. Essa é a sua distância real.

GPS ou Rangefinder no Campo: Após cada tacada, meça a distância real percorrida. Anote em um caderno ou app. Depois de 5-10 voltas, você terá dados confiáveis.

Apps de Rastreamento: Apps como Arccos, Shot Scope ou Garmin Golf rastreiam automaticamente cada tacada e calculam suas médias por taco.

Launch Monitor: Se tiver acesso a um Trackman, FlightScope ou Mevo, faça uma sessão de fitting. Eles medem com precisão carry (distância no ar), total (com rolagem) e dispersão.

Atualize regularmente: Suas distâncias mudam com a idade, condicionamento físico, e equipamento novo. Refaça a medição pelo menos 2 vezes por ano.`
      },
      {
        title: "Dica de Ouro: A Regra dos 150",
        icon: "💡",
        text: `Uma das melhores dicas para gestão de campo é a "Regra dos 150": saiba EXATAMENTE qual taco você usa para 150 jardas.

Para a maioria dos amadores, esse é o ferro 7. A partir daí, cada taco a mais ou a menos adiciona ou subtrai aproximadamente 10-12 jardas.

Use esse taco como sua "âncora" e construa suas distâncias ao redor dele. Se seu ferro 7 vai 145 jardas, então seu ferro 6 vai ~155, seu ferro 8 vai ~135, e assim por diante.

Outra regra: quando estiver em dúvida entre dois tacos, sempre escolha o taco MAIS LONGO e faça um swing mais suave. Um swing a 80% com o taco certo é muito mais consistente do que um swing a 100% com o taco mais curto.`
      },
    ],
    langBtn: "🇺🇸 English",
  },
  en: {
    back: "← Back to Home",
    title: "Complete Club Distance Guide",
    subtitle: "Average distances for every golf club — from Driver to Lob Wedge",
    reading: "10 min read",
    tag: "EQUIPMENT GUIDE",
    skillLabels: { low: "Low Handicap (0-10)", mid: "Mid Handicap (11-20)", high: "High Handicap (21+)" },
    skillShort: { low: "Low", mid: "Mid", high: "High" },
    yards: "yards",
    catNames: { woods: "Woods", hybrids: "Hybrids", irons: "Irons", wedges: "Wedges" },
    sections: [
      {
        title: "Why Know Your Distances?",
        icon: "🎯",
        text: `Knowing the average distance for each club is one of the most important skills in golf. Without this knowledge, you're essentially guessing on every shot.

Players who know their real distances can choose the right club for each situation, avoid unnecessary hazards like bunkers and water, significantly improve course management, and reduce strokes per round.

The most important tip: use the distances where you make SOLID contact, not your best shot ever. Most amateurs make the mistake of using a shorter club because they think of maximum distance, when they should think of average distance.`
      },
      {
        title: "Factors That Affect Distance",
        icon: "🌡️",
        text: `Several factors influence how far each club goes:

Swing Speed: The number 1 factor. More speed = more distance. Players with faster swings (above 100 mph with the driver) will go further with every club.

Altitude: At higher elevation courses, the ball travels further because the air is thinner. Rule of thumb: +2% distance for every 1,000 feet of elevation.

Temperature: Hot air is less dense. In heat, the ball goes further. In cold, less. The difference can reach 10-15 yards between summer and winter.

Wind: Tailwind can add 10-20 yards. Headwind can take away even more. Crosswind affects direction.

Fairway Condition: Firm, dry fairways give more roll. Wet fairways stop the ball faster.

Ball Type: Premium balls (Pro V1, TP5) generally fly further and with more control than basic distance balls.`
      },
      {
        title: "Woods vs Hybrids vs Long Irons",
        icon: "⚔️",
        text: `One of the most common questions is what to put in the bag for longer distances:

Woods (3W, 5W, 7W): Easier to hit from the ground, ideal for second shots on par 5s. The 7 Wood is especially good for those who struggle with long irons.

Hybrids (3H, 4H, 5H): Combine the ease of woods with the precision of irons. They're the ideal replacements for long irons (3, 4, 5 iron) for most players.

Long Irons (3I, 4I): Harder to hit but offer more trajectory control. Recommended only for players with handicaps below 10.

Recommendation by level: High handicap (20+) → 5W + 5H + 6H. Mid handicap (10-20) → 3W + 4H + 5H. Low handicap (0-10) → 3W + 3H or 3I + 4I.`
      },
      {
        title: "Wedges: Your Short Game",
        icon: "🏌️",
        text: `Wedges are the most important clubs for lowering your score. Here's what each one does:

Pitching Wedge (PW - 46°): Approach shots from 90-130 yards. Comes included in iron sets.

Gap Wedge (GW - 50°): Fills the "gap" between PW and SW. Shots from 80-115 yards. Essential to avoid distance gaps.

Sand Wedge (SW - 54-56°): For bunker shots and 70-100 yard approaches. The bounce helps glide through sand.

Lob Wedge (LW - 58-60°): For high, short shots that need to stop quickly. Distance of 55-85 yards. Requires more practice.

Setup tip: Ensure the loft gap between your wedges is 4-6 degrees. Ideal example: PW (46°), GW (50°), SW (54°), LW (58°).`
      },
      {
        title: "How to Measure Your Real Distances",
        icon: "📏",
        text: `To play well, you need to know YOUR distances, not the chart's. Here are ways to measure:

At the Driving Range: Bring a rangefinder or GPS to the range. Hit 10 balls with each club, discard the 2 best and 2 worst, and average the remaining 6. That's your real distance.

GPS or Rangefinder on Course: After each shot, measure the actual distance traveled. Note it in a notebook or app. After 5-10 rounds, you'll have reliable data.

Tracking Apps: Apps like Arccos, Shot Scope, or Garmin Golf automatically track every shot and calculate your averages per club.

Launch Monitor: If you have access to a Trackman, FlightScope, or Mevo, do a fitting session. They precisely measure carry, total distance, and dispersion.

Update regularly: Your distances change with age, fitness, and new equipment. Redo the measurement at least twice a year.`
      },
      {
        title: "Golden Tip: The 150 Rule",
        icon: "💡",
        text: `One of the best course management tips is the "150 Rule": know EXACTLY which club you use for 150 yards.

For most amateurs, this is the 7-iron. From there, each club up or down adds or subtracts approximately 10-12 yards.

Use this club as your "anchor" and build your distances around it. If your 7-iron goes 145 yards, then your 6-iron goes ~155, your 8-iron goes ~135, and so on.

Another rule: when in doubt between two clubs, always choose the LONGER club and make a smoother swing. An 80% swing with the right club is much more consistent than a 100% swing with a shorter club.`
      },
    ],
    langBtn: "🇧🇷 Português",
  },
};

export default function DistanceGuide() {
  const [lang, setLang] = useState("pt");
  const [skill, setSkill] = useState("mid");
  const l = t[lang];
  const maxDist = 250;

  const ClubChart = ({ clubList, title }) => (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: C.accent, marginBottom: 12 }}>{title}</h3>
      {clubList.map((c, i) => {
        const dist = c[skill];
        const pct = (dist / maxDist) * 100;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 7, gap: 8 }}>
            <div style={{ width: 90, textAlign: "right", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0, color: C.text }}>{c.club}</div>
            <div style={{ width: 50, textAlign: "right", fontSize: "0.68rem", color: C.dim, flexShrink: 0 }}>{c.loft}</div>
            <div style={{ flex: 1, background: C.card2, borderRadius: 6, height: 26, position: "relative", overflow: "hidden" }}>
              <div style={{
                width: `${pct}%`, height: "100%",
                background: `linear-gradient(90deg, ${c.color}77, ${c.color})`,
                borderRadius: 6, transition: "width 0.5s ease",
                display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
              }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                  {dist} {l.yards}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

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
        }}>{l.langBtn}</button>
      </nav>

      <div style={{ maxWidth: 750, margin: "0 auto", padding: "0 20px" }}>
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.8rem", color: C.accent, textDecoration: "none" }}>{l.back}</a>

        {/* Header */}
        <div style={{ marginTop: 16, marginBottom: 32 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.gold, background: `${C.gold}18`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "1.9rem", fontWeight: 900, margin: "12px 0 8px", lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: C.muted, margin: "0 0 8px" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Interactive Chart */}
        <div style={{ background: C.card, borderRadius: 16, padding: "24px 20px", border: `1px solid ${C.border}`, marginBottom: 32 }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 4, textAlign: "center" }}>
            📊 {lang === "pt" ? "Tabela Interativa de Distâncias" : "Interactive Distance Chart"}
          </h2>
          <p style={{ fontSize: "0.75rem", color: C.muted, textAlign: "center", marginBottom: 18 }}>
            {lang === "pt" ? "Selecione seu nível para ver distâncias personalizadas (em jardas)" : "Select your level to see personalized distances (in yards)"}
          </p>

          {/* Skill selector */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
            {["low", "mid", "high"].map(s => (
              <button key={s} onClick={() => setSkill(s)} style={{
                padding: "8px 18px", borderRadius: 8, cursor: "pointer",
                border: skill === s ? "2px solid #60a5fa" : `2px solid ${C.border}`,
                background: skill === s ? "#1e3a5f" : C.card2,
                color: skill === s ? "#93c5fd" : C.muted,
                fontSize: "0.78rem", fontWeight: 600, transition: "all 0.2s",
              }}>{l.skillLabels[s]}</button>
            ))}
          </div>

          <ClubChart clubList={clubs.woods} title={l.catNames.woods} />
          <ClubChart clubList={clubs.hybrids} title={l.catNames.hybrids} />
          <ClubChart clubList={clubs.irons} title={l.catNames.irons} />
          <ClubChart clubList={clubs.wedges} title={l.catNames.wedges} />

          <p style={{ fontSize: "0.68rem", color: C.dim, textAlign: "center", marginTop: 12 }}>
            {lang === "pt"
              ? "Distâncias são médias aproximadas para jogadores masculinos. Resultados variam por velocidade de swing e condições."
              : "Distances are approximate male averages. Results vary by swing speed and conditions."}
          </p>
        </div>

        {/* Article sections */}
        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: "1.4rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>{sec.title}</h2>
            </div>
            <div style={{ background: C.card, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.border}` }}>
              {sec.text.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.8, margin: j === 0 ? 0 : "14px 0 0" }}>
                  {para.split("\n").map((line, k) => {
                    const isBold = /^(Velocidade|Swing Speed|Altitude|Temperatura|Temperature|Vento|Wind|Condição|Fairway Condition|Tipo de Bola|Ball Type|Madeiras|Woods \(3W|Híbridos|Hybrids \(3H|Ferros Longos|Long Irons|Recomendação|Recommendation|Pitching|Gap Wedge|Sand Wedge|Lob Wedge|Dica de setup|Setup tip|No Driving|At the Driving|GPS ou|GPS or|Apps de|Tracking Apps|Launch Monitor|Atualize|Update regularly|Para a maioria|For most amateurs|Use esse|Use this|Outra regra|Another rule)/.test(line.trim());
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

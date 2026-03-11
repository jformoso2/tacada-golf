"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899", red: "#ef4444",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
};

const clubs = [
  { club: "Driver", loft: "9-12°", low: 230, mid: 210, high: 180, color: "#ef4444", type: "wood" },
  { club: "3 Wood", loft: "15°", low: 215, mid: 195, high: 170, color: "#f97316", type: "wood" },
  { club: "5 Wood", loft: "18°", low: 205, mid: 185, high: 160, color: "#f59e0b", type: "wood" },
  { club: "7 Wood", loft: "21°", low: 195, mid: 175, high: 150, color: "#eab308", type: "wood" },
  { club: "3 Hybrid", loft: "19-21°", low: 205, mid: 190, high: 165, color: "#84cc16", type: "hybrid" },
  { club: "4 Hybrid", loft: "22-24°", low: 195, mid: 180, high: 155, color: "#22c55e", type: "hybrid" },
  { club: "5 Hybrid", loft: "25-27°", low: 185, mid: 170, high: 145, color: "#10b981", type: "hybrid" },
  { club: "3 Iron", loft: "21°", low: 205, mid: 185, high: 160, color: "#14b8a6", type: "iron" },
  { club: "4 Iron", loft: "24°", low: 195, mid: 175, high: 150, color: "#06b6d4", type: "iron" },
  { club: "5 Iron", loft: "27°", low: 185, mid: 165, high: 140, color: "#0ea5e9", type: "iron" },
  { club: "6 Iron", loft: "30°", low: 175, mid: 155, high: 130, color: "#3b82f6", type: "iron" },
  { club: "7 Iron", loft: "34°", low: 165, mid: 145, high: 120, color: "#6366f1", type: "iron" },
  { club: "8 Iron", loft: "38°", low: 155, mid: 135, high: 110, color: "#8b5cf6", type: "iron" },
  { club: "9 Iron", loft: "42°", low: 145, mid: 125, high: 100, color: "#a855f7", type: "iron" },
  { club: "PW", loft: "46°", low: 135, mid: 115, high: 90, color: "#d946ef", type: "wedge" },
  { club: "GW", loft: "50°", low: 120, mid: 105, high: 80, color: "#ec4899", type: "wedge" },
  { club: "SW", loft: "54-56°", low: 105, mid: 90, high: 70, color: "#f43f5e", type: "wedge" },
  { club: "LW", loft: "58-60°", low: 90, mid: 75, high: 55, color: "#fb7185", type: "wedge" },
];

const txt = {
  pt: {
    back: "← Voltar ao Início",
    title: "Guia Completo de Distâncias dos Tacos",
    subtitle: "Distâncias médias para cada taco de golfe — do Driver ao Lob Wedge",
    reading: "6 min de leitura",
    tag: "GUIA POPULAR",
    skillLabels: { low: "Handicap Baixo (0-10)", mid: "Handicap Médio (11-20)", high: "Handicap Alto (21+)" },
    filterAll: "Todos", filterWood: "Madeiras", filterHybrid: "Híbridos", filterIron: "Ferros", filterWedge: "Wedges",
    chartTitle: "Distância por Taco (jardas)",
    tableClub: "Taco", tableLoft: "Loft", tableDist: "Distância",
    sections: [
      {
        title: "Como Usar Este Guia",
        icon: "📖",
        text: `Este guia apresenta as distâncias médias para cada taco de golfe, baseadas em dados de milhares de jogadores. Use o seletor acima para ver as distâncias de acordo com seu nível de habilidade.

Lembre-se: estas são médias e podem variar significativamente dependendo da sua velocidade de swing, condições climáticas, altitude, tipo de bola e equipamento. O mais importante é conhecer as SUAS distâncias reais, não as médias.

A melhor forma de conhecer suas distâncias é usar um launch monitor ou GPS durante suas sessões de prática. Anote suas distâncias de carry (voo) e total para cada taco.`
      },
      {
        title: "Entendendo o Loft",
        icon: "📐",
        text: `O loft é o ângulo da face do taco em relação ao solo. É o principal fator que determina a trajetória e distância da bola.

Quanto menor o loft, mais baixa e longa será a trajetória. O Driver tem o menor loft (9-12°) e produz a maior distância. Quanto maior o loft, mais alta e curta será a trajetória. O Lob Wedge tem o maior loft (58-60°) e é usado para tacadas curtas com muita altura.

Cada número de ferro aumenta o loft em aproximadamente 3-4°, o que resulta em uma diferença de 10-15 jardas entre cada taco. Essa progressão previsível é o que permite ao golfista escolher o taco certo para cada distância.`
      },
      {
        title: "Madeiras vs Híbridos vs Ferros",
        icon: "🏌️",
        text: `Madeiras (Driver, 3W, 5W, 7W) são projetadas para máxima distância. Têm a cabeça maior e o centro de gravidade mais baixo, facilitando o lançamento da bola. São ideais para tacadas do tee e do fairway quando precisa de distância.

Híbridos (3H, 4H, 5H) combinam características de madeiras e ferros. São mais fáceis de acertar que os ferros longos e mais versáteis que as madeiras. Muitos jogadores substituem seus ferros 3, 4 e até 5 por híbridos equivalentes. Se você tem dificuldade com ferros longos, híbridos são a resposta.

Ferros (3I-9I) oferecem mais controle e precisão. Quanto menor o número, mais difícil de acertar. A maioria dos jogadores recreativos se beneficia de começar com ferro 5 ou 6, substituindo os mais longos por híbridos.

Wedges (PW, GW, SW, LW) são os tacos de jogo curto. São essenciais para tacadas de approach, bunkers e ao redor do green. São os tacos mais importantes do bag — cerca de 60% das tacadas acontecem a menos de 100 jardas.`
      },
      {
        title: "Fatores que Afetam a Distância",
        icon: "🌡️",
        text: `Velocidade de Swing é o fator mais importante. Quanto mais rápido o swing, maior a distância. Jogadores profissionais têm velocidade de swing com o driver de 170-190 km/h, enquanto amadores ficam entre 130-155 km/h.

Contato com a Bola — Acertar o centro da face (sweet spot) maximiza a transferência de energia. Bolas fora do centro perdem 10-30% de distância.

Condições Climáticas — Vento, temperatura e umidade afetam significativamente. Ar quente é menos denso, permitindo mais distância. Vento contra pode reduzir 10-20 jardas.

Altitude — Em altitudes elevadas, o ar é mais fino e a bola viaja mais longe. Em campos na serra, espere 5-10% mais distância.

Tipo de Bola — Bolas de alta compressão produzem mais distância para jogadores com swing rápido. Bolas de baixa compressão são melhores para swings mais lentos.

Condição do Fairway — Fairways firmes e secos permitem mais rolagem. Fairways molhados reduzem a distância total.`
      },
      {
        title: "Como Montar Seu Bag",
        icon: "🎒",
        text: `As regras permitem no máximo 14 tacos. Uma configuração típica para um jogador intermediário:

Driver — Para tacadas do tee em buracos longos.
3 Wood — Para tacadas longas do fairway ou tee.
5 Wood ou 3 Hybrid — Versatilidade para distâncias de 180-200 jardas.
4 Hybrid — Substitui o ferro 4, mais fácil de acertar.
5 Ferro a 9 Ferro — Cobertura das distâncias intermediárias.
Pitching Wedge (PW) — Approach de 100-130 jardas.
Gap Wedge (GW/52°) — Preenche o espaço entre PW e SW.
Sand Wedge (SW/56°) — Bunkers e tacadas de 70-100 jardas.
Lob Wedge (LW/60°) — Tacadas altas e curtas ao redor do green.
Putter — O taco mais usado de todos!

A chave é garantir espaçamento uniforme de 10-15 jardas entre cada taco, sem grandes buracos de distância no seu bag.`
      },
      {
        title: "Dica: Conheça Suas Distâncias Reais",
        icon: "💡",
        text: `A dica mais valiosa deste guia: pare de adivinhar suas distâncias!

Vá ao driving range com um GPS portátil ou app de distância. Acerte 10 bolas com cada taco. Descarte a mais longa e a mais curta. A média das 8 restantes é sua distância real de carry.

Anote em um cartão e cole no seu bag. Consulte antes de cada tacada de approach. Você vai se surpreender com quantas tacadas vai economizar simplesmente usando o taco certo para a distância certa.

Jogadores que conhecem suas distâncias reais melhoram em média 3-5 tacadas por volta — sem mudar nada no swing!`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "Complete Golf Club Distance Guide",
    subtitle: "Average distances for every golf club — from Driver to Lob Wedge",
    reading: "6 min read",
    tag: "POPULAR GUIDE",
    skillLabels: { low: "Low Handicap (0-10)", mid: "Mid Handicap (11-20)", high: "High Handicap (21+)" },
    filterAll: "All", filterWood: "Woods", filterHybrid: "Hybrids", filterIron: "Irons", filterWedge: "Wedges",
    chartTitle: "Distance by Club (yards)",
    tableClub: "Club", tableLoft: "Loft", tableDist: "Distance",
    sections: [
      {
        title: "How to Use This Guide",
        icon: "📖",
        text: `This guide presents average distances for every golf club, based on data from thousands of players. Use the selector above to view distances according to your skill level.

Remember: these are averages and can vary significantly depending on your swing speed, weather conditions, altitude, ball type, and equipment. What matters most is knowing YOUR actual distances, not the averages.

The best way to know your distances is to use a launch monitor or GPS during your practice sessions. Record your carry and total distances for each club.`
      },
      {
        title: "Understanding Loft",
        icon: "📐",
        text: `Loft is the angle of the clubface relative to the ground. It's the primary factor determining ball trajectory and distance.

Lower loft means a lower, longer trajectory. The Driver has the lowest loft (9-12°) and produces the greatest distance. Higher loft means a higher, shorter trajectory. The Lob Wedge has the highest loft (58-60°) and is used for short, high shots.

Each iron number increases the loft by approximately 3-4°, resulting in a 10-15 yard difference between each club. This predictable progression is what allows golfers to choose the right club for each distance.`
      },
      {
        title: "Woods vs Hybrids vs Irons",
        icon: "🏌️",
        text: `Woods (Driver, 3W, 5W, 7W) are designed for maximum distance. They have larger clubheads and a lower center of gravity, making it easier to launch the ball. Ideal for tee shots and fairway shots when distance is needed.

Hybrids (3H, 4H, 5H) combine characteristics of woods and irons. They're easier to hit than long irons and more versatile than woods. Many players replace their 3, 4, and even 5 irons with equivalent hybrids. If you struggle with long irons, hybrids are the answer.

Irons (3I-9I) offer more control and precision. The lower the number, the harder to hit. Most recreational players benefit from starting with a 5 or 6 iron, replacing the longer ones with hybrids.

Wedges (PW, GW, SW, LW) are the short game clubs. They're essential for approach shots, bunkers, and around the green. They're the most important clubs in your bag — about 60% of shots happen within 100 yards.`
      },
      {
        title: "Factors Affecting Distance",
        icon: "🌡️",
        text: `Swing Speed is the most important factor. The faster your swing, the greater the distance. Professional players have driver swing speeds of 105-120 mph, while amateurs range from 80-95 mph.

Ball Contact — Hitting the center of the face (sweet spot) maximizes energy transfer. Off-center hits lose 10-30% distance.

Weather Conditions — Wind, temperature, and humidity significantly affect distance. Warm air is less dense, allowing more distance. Headwind can reduce 10-20 yards.

Altitude — At higher elevations, the air is thinner and the ball travels farther. At mountain courses, expect 5-10% more distance.

Ball Type — High compression balls produce more distance for players with fast swings. Low compression balls are better for slower swings.

Fairway Condition — Firm, dry fairways allow more roll. Wet fairways reduce total distance.`
      },
      {
        title: "How to Build Your Bag",
        icon: "🎒",
        text: `The rules allow a maximum of 14 clubs. A typical setup for an intermediate player:

Driver — For tee shots on long holes.
3 Wood — For long fairway or tee shots.
5 Wood or 3 Hybrid — Versatility for 180-200 yard distances.
4 Hybrid — Replaces the 4 iron, easier to hit.
5 Iron through 9 Iron — Coverage of intermediate distances.
Pitching Wedge (PW) — Approach shots from 100-130 yards.
Gap Wedge (GW/52°) — Fills the gap between PW and SW.
Sand Wedge (SW/56°) — Bunkers and 70-100 yard shots.
Lob Wedge (LW/60°) — High, short shots around the green.
Putter — The most used club of all!

The key is ensuring uniform spacing of 10-15 yards between each club, with no large distance gaps in your bag.`
      },
      {
        title: "Tip: Know Your Real Distances",
        icon: "💡",
        text: `The most valuable tip from this guide: stop guessing your distances!

Go to the driving range with a portable GPS or distance app. Hit 10 balls with each club. Discard the longest and shortest. The average of the remaining 8 is your real carry distance.

Write it on a card and attach it to your bag. Check it before every approach shot. You'll be surprised how many strokes you'll save simply by using the right club for the right distance.

Players who know their real distances improve by an average of 3-5 strokes per round — without changing anything in their swing!`
      }
    ],
  }
};

export default function ClubDistances() {
  const [lang, setLang] = useState("pt");
  const [skill, setSkill] = useState("mid");
  const [filter, setFilter] = useState("all");
  const l = txt[lang];
  const maxDist = 250;

  const filtered = filter === "all" ? clubs : clubs.filter(c => c.type === filter);

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

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.8rem", color: C.accent, textDecoration: "none" }}>{l.back}</a>

        {/* Header */}
        <div style={{ marginTop: 16, marginBottom: 24 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.gold, background: `${C.gold}18`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 900, margin: "12px 0 8px", lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: C.muted, margin: "0 0 8px" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Skill Selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {Object.entries(l.skillLabels).map(([k, v]) => (
            <button key={k} onClick={() => setSkill(k)} style={{
              padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: "0.78rem", fontWeight: 600,
              border: skill === k ? "2px solid #60a5fa" : `2px solid ${C.border}`,
              background: skill === k ? "#1e3a5f" : C.card,
              color: skill === k ? "#93c5fd" : C.muted,
            }}>{v}</button>
          ))}
        </div>

        {/* Filter */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {[
            ["all", l.filterAll], ["wood", l.filterWood], ["hybrid", l.filterHybrid],
            ["iron", l.filterIron], ["wedge", l.filterWedge]
          ].map(([k, v]) => (
            <button key={k} onClick={() => setFilter(k)} style={{
              padding: "6px 14px", borderRadius: 20, cursor: "pointer", fontSize: "0.72rem", fontWeight: 600,
              border: "none",
              background: filter === k ? C.accent : C.card2,
              color: filter === k ? "#000" : C.muted,
            }}>{v}</button>
          ))}
        </div>

        {/* Chart */}
        <div style={{ background: C.card, borderRadius: 16, padding: "20px 16px", border: `1px solid ${C.border}`, marginBottom: 24 }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: 16, color: C.text }}>{l.chartTitle}</h3>
          {filtered.map((c, i) => {
            const dist = c[skill];
            const pct = (dist / maxDist) * 100;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 6, gap: 8 }}>
                <div style={{ width: 65, textAlign: "right", fontSize: "0.78rem", fontWeight: 700, flexShrink: 0, color: C.text }}>{c.club}</div>
                <div style={{ width: 50, textAlign: "right", fontSize: "0.68rem", color: C.dim, flexShrink: 0 }}>{c.loft}</div>
                <div style={{ flex: 1, background: C.card2, borderRadius: 6, height: 26, position: "relative", overflow: "hidden" }}>
                  <div style={{
                    width: `${pct}%`, height: "100%",
                    background: `linear-gradient(90deg, ${c.color}88, ${c.color})`,
                    borderRadius: 6, transition: "width 0.5s ease",
                    display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
                  }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                      {dist} yds
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Articles */}
        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: "1.3rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>{sec.title}</h2>
            </div>
            <div style={{ background: C.card, borderRadius: 14, padding: "18px 20px", border: `1px solid ${C.border}` }}>
              {sec.text.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.8, margin: j === 0 ? 0 : "12px 0 0" }}>
                  {para.split("\n").map((line, k) => {
                    const isBold = /^(Lembre-se|Remember|A melhor|The best|Quanto menor|Lower loft|Quanto maior|Higher loft|Cada número|Each iron|Madeiras|Woods \(|Híbridos|Hybrids \(|Ferros \(|Irons \(|Wedges \(|Velocidade|Swing Speed|Contato|Ball Contact|Condições|Weather|Altitude|Tipo de Bola|Ball Type|Condição|Fairway Cond|Driver —|3 Wood —|5 Wood|4 Hybrid|5 Iron|5 Ferro|Pitching|Gap Wedge|Sand Wedge|Lob Wedge|Putter|A chave|The key|Vá ao|Go to|Anote|Write|Jogadores|Players)/.test(line.trim());
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

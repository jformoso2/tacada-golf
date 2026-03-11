"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
};

const clubs = [
  { club: "Driver", loft: "9-12°", avg: 220, mid: 200, high: 180, color: "#ef4444" },
  { club: "3 Wood", loft: "15°", avg: 210, mid: 190, high: 170, color: "#f97316" },
  { club: "5 Wood", loft: "18°", avg: 200, mid: 180, high: 160, color: "#f59e0b" },
  { club: "7 Wood", loft: "21°", avg: 190, mid: 170, high: 150, color: "#eab308" },
  { club: "3 Hybrid", loft: "19-21°", avg: 200, mid: 185, high: 165, color: "#84cc16" },
  { club: "4 Hybrid", loft: "22-24°", avg: 190, mid: 175, high: 155, color: "#22c55e" },
  { club: "5 Hybrid", loft: "25-27°", avg: 180, mid: 165, high: 145, color: "#10b981" },
  { club: "3 Iron", loft: "21°", avg: 200, mid: 180, high: 160, color: "#14b8a6" },
  { club: "4 Iron", loft: "24°", avg: 190, mid: 170, high: 150, color: "#06b6d4" },
  { club: "5 Iron", loft: "27°", avg: 180, mid: 160, high: 140, color: "#0ea5e9" },
  { club: "6 Iron", loft: "30°", avg: 170, mid: 150, high: 130, color: "#3b82f6" },
  { club: "7 Iron", loft: "34°", avg: 160, mid: 140, high: 120, color: "#6366f1" },
  { club: "8 Iron", loft: "38°", avg: 150, mid: 130, high: 110, color: "#8b5cf6" },
  { club: "9 Iron", loft: "42°", avg: 140, mid: 120, high: 100, color: "#a855f7" },
  { club: "PW", loft: "46°", avg: 130, mid: 110, high: 90, color: "#d946ef" },
  { club: "GW", loft: "50°", avg: 115, mid: 100, high: 80, color: "#ec4899" },
  { club: "SW", loft: "54-56°", avg: 100, mid: 85, high: 70, color: "#f43f5e" },
  { club: "LW", loft: "58-60°", avg: 85, mid: 70, high: 55, color: "#fb7185" },
];

const texts = {
  pt: {
    back: "← Voltar ao Início",
    title: "Guia Completo de Distância dos Tacos",
    subtitle: "Distância média de cada taco para jogadores de todos os níveis — com gráfico interativo",
    reading: "6 min de leitura",
    tag: "GUIA ESSENCIAL",
    skillLabels: { avg: "Handicap Baixo (0-10)", mid: "Handicap Médio (11-20)", high: "Handicap Alto (21+)" },
    chartTitle: "📊 Distância Média por Taco (jardas)",
    chartSub: "Selecione seu nível para ver distâncias personalizadas",
    note: "Distâncias são aproximadas e variam conforme velocidade de swing, condições climáticas e equipamento.",
    sections: [
      {
        title: "Como Usar Este Guia",
        icon: "📖",
        text: `Este guia mostra as distâncias médias para cada taco de golfe, divididas por nível de habilidade. Use-o como referência para entender quanto cada taco deve percorrer no seu nível atual.

Lembre-se: essas são médias para jogadores masculinos. Jogadoras femininas geralmente atingem distâncias 25-40% menores. O mais importante não é a distância máxima, mas sim a consistência e a precisão.`
      },
      {
        title: "Madeiras (Woods)",
        icon: "🪵",
        text: `O Driver é o taco mais longo do bag e usado principalmente no tee. Tem o menor loft (9-12°) e produz a maior distância. A maioria dos jogadores intermediários atinge entre 190-210 jardas.

As madeiras de fairway (3 Wood, 5 Wood, 7 Wood) são versáteis — usadas tanto no tee quanto no fairway para tacadas longas. A 3 Wood é a mais difícil de acertar mas oferece mais distância. A 5 Wood e 7 Wood são mais fáceis de elevar a bola e ideais para quem tem dificuldade com ferros longos.

Dica: Se você tem dificuldade com a 3 Wood, considere substituí-la por uma 5 Wood ou um híbrido. Consistência é mais valiosa que distância extra.`
      },
      {
        title: "Híbridos",
        icon: "🔀",
        text: `Os híbridos revolucionaram o golfe moderno. Eles combinam a facilidade de uma madeira com a precisão de um ferro, sendo muito mais fáceis de acertar que os ferros longos equivalentes.

Um 4 Hybrid substitui o 4 Iron e é a escolha mais popular entre jogadores amadores. É mais fácil de elevar a bola, mais tolerante em contatos imperfeitos, e produz distâncias similares com menos esforço.

Para a maioria dos jogadores com handicap acima de 15, recomendamos substituir os ferros 3, 4 e até 5 por híbridos. Não é vergonha — muitos profissionais também fazem isso.`
      },
      {
        title: "Ferros (Irons)",
        icon: "⚔️",
        text: `Os ferros são a espinha dorsal do seu bag. Do 5 ao 9, cada ferro adiciona aproximadamente 10 jardas de diferença em relação ao anterior.

Os ferros curtos (8, 9, PW) são os mais fáceis de acertar e devem ser seus tacos mais confiáveis. Se você acerta consistentemente esses tacos, seu jogo já está num bom nível.

Os ferros médios (6, 7) são o "pão com manteiga" do golfe — usados frequentemente em tacadas de aproximação. Invista tempo praticando especialmente o ferro 7, que é o taco de referência para a maioria dos jogadores.

Os ferros longos (3, 4, 5) exigem mais velocidade de swing e técnica. Se não se sente confortável com eles, considere híbridos como alternativa.`
      },
      {
        title: "Wedges",
        icon: "🎯",
        text: `Os wedges são os tacos do jogo curto — onde os grandes jogadores se destacam. Cerca de 60% das suas tacadas acontecem a menos de 100 jardas do buraco.

O Pitching Wedge (PW, 46°) é geralmente incluído no set de ferros e cobre 90-130 jardas dependendo do nível.

O Gap Wedge (GW, 50°) preenche o espaço entre o PW e o Sand Wedge. Essencial para evitar "buracos" de distância no seu bag.

O Sand Wedge (SW, 54-56°) é projetado para saídas de bunker e tacadas curtas de 70-100 jardas. O bounce mais alto ajuda a deslizar pela areia.

O Lob Wedge (LW, 58-60°) é para tacadas muito curtas e altas — útil quando precisa parar a bola rapidamente no green. Requer prática para dominar.

Dica: A configuração ideal de wedges depende do loft do seu PW. Se seu PW tem 46°, considere wedges de 50°, 54° e 58° para manter intervalos regulares de 4°.`
      },
      {
        title: "Fatores Que Afetam a Distância",
        icon: "🌡️",
        text: `Vários fatores influenciam quanto cada taco vai percorrer:

Velocidade de Swing: O fator mais importante. Mais velocidade = mais distância. Treinamento físico e técnica ajudam a aumentar.

Qualidade do Contato: Acertar o centro da face (sweet spot) maximiza a transferência de energia. Contatos fora do centro podem perder 10-20% de distância.

Altitude: Em altitudes elevadas (como Campos do Jordão ou Bogotá), a bola voa mais longe porque o ar é menos denso. Pode ganhar 5-10%.

Temperatura: Ar quente é menos denso — a bola voa mais longe no calor. No frio, pode perder 5-10 jardas.

Vento: Vento contra pode tirar 10-20 jardas. Vento a favor pode adicionar o mesmo. Aprenda a ajustar a seleção de tacos.

Umidade do Solo: Solo mole reduz o roll (rolagem) da bola após aterrissar. Solo firme aumenta a distância total.`
      },
      {
        title: "Como Conhecer Suas Distâncias Reais",
        icon: "📏",
        text: `As médias são úteis como referência, mas cada jogador é diferente. Para conhecer suas distâncias reais:

No Driving Range: Bata 10 bolas com cada taco, descarte as 2 melhores e as 2 piores, e calcule a média das 6 restantes. Essa é sua distância real.

GPS ou Rangefinder: Use um dispositivo no campo para medir distâncias reais durante o jogo. Apps como Arccos, Shot Scope e Garmin Golf fazem isso automaticamente.

Anotação: Mantenha um caderno com suas distâncias médias atualizadas. Revise a cada 3-6 meses conforme seu jogo evolui.

O objetivo não é bater mais longe, mas saber exatamente quanto cada taco percorre. Isso permite tomar melhores decisões no campo e baixar seu score.`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "Complete Club Distance Guide",
    subtitle: "Average distance for every club across all skill levels — with interactive chart",
    reading: "6 min read",
    tag: "ESSENTIAL GUIDE",
    skillLabels: { avg: "Low Handicap (0-10)", mid: "Mid Handicap (11-20)", high: "High Handicap (21+)" },
    chartTitle: "📊 Average Distance by Club (yards)",
    chartSub: "Select your level to see personalized distances",
    note: "Distances are approximate and vary based on swing speed, weather conditions, and equipment.",
    sections: [
      {
        title: "How to Use This Guide",
        icon: "📖",
        text: `This guide shows average distances for every golf club, broken down by skill level. Use it as a reference to understand how far each club should travel at your current level.

Remember: these are averages for male golfers. Female golfers typically hit 25-40% shorter distances. The most important thing isn't maximum distance, but consistency and accuracy.`
      },
      {
        title: "Woods",
        icon: "🪵",
        text: `The Driver is the longest club in the bag and primarily used on the tee. It has the lowest loft (9-12°) and produces the most distance. Most intermediate players reach 190-210 yards.

Fairway woods (3 Wood, 5 Wood, 7 Wood) are versatile — used both on the tee and fairway for long shots. The 3 Wood is hardest to hit but offers more distance. The 5 Wood and 7 Wood are easier to get airborne and ideal for those struggling with long irons.

Tip: If you struggle with the 3 Wood, consider replacing it with a 5 Wood or hybrid. Consistency is more valuable than extra distance.`
      },
      {
        title: "Hybrids",
        icon: "🔀",
        text: `Hybrids have revolutionized modern golf. They combine the ease of a wood with the precision of an iron, being much easier to hit than equivalent long irons.

A 4 Hybrid replaces the 4 Iron and is the most popular choice among amateur golfers. It's easier to launch, more forgiving on imperfect contact, and produces similar distances with less effort.

For most players with a handicap above 15, we recommend replacing the 3, 4, and even 5 irons with hybrids. It's nothing to be ashamed of — many professionals do it too.`
      },
      {
        title: "Irons",
        icon: "⚔️",
        text: `Irons are the backbone of your bag. From 5 to 9, each iron adds approximately 10 yards of difference from the previous one.

Short irons (8, 9, PW) are the easiest to hit and should be your most reliable clubs. If you consistently hit these clubs well, your game is already at a good level.

Mid irons (6, 7) are the "bread and butter" of golf — used frequently for approach shots. Invest time practicing especially the 7 iron, which is the reference club for most players.

Long irons (3, 4, 5) require more swing speed and technique. If you're not comfortable with them, consider hybrids as an alternative.`
      },
      {
        title: "Wedges",
        icon: "🎯",
        text: `Wedges are the short game clubs — where great players shine. About 60% of your strokes happen within 100 yards of the hole.

The Pitching Wedge (PW, 46°) is usually included in the iron set and covers 90-130 yards depending on skill level.

The Gap Wedge (GW, 50°) fills the space between the PW and Sand Wedge. Essential to avoid distance "gaps" in your bag.

The Sand Wedge (SW, 54-56°) is designed for bunker shots and short shots of 70-100 yards. The higher bounce helps glide through sand.

The Lob Wedge (LW, 58-60°) is for very short, high shots — useful when you need to stop the ball quickly on the green. Requires practice to master.

Tip: The ideal wedge setup depends on your PW loft. If your PW is 46°, consider wedges at 50°, 54°, and 58° to maintain regular 4° intervals.`
      },
      {
        title: "Factors That Affect Distance",
        icon: "🌡️",
        text: `Several factors influence how far each club will travel:

Swing Speed: The most important factor. More speed = more distance. Physical training and technique help increase it.

Contact Quality: Hitting the center of the face (sweet spot) maximizes energy transfer. Off-center hits can lose 10-20% distance.

Altitude: At higher altitudes, the ball flies farther because the air is less dense. You can gain 5-10%.

Temperature: Warm air is less dense — the ball flies farther in heat. In cold weather, you can lose 5-10 yards.

Wind: Headwind can take away 10-20 yards. Tailwind can add the same. Learn to adjust club selection.

Ground Moisture: Soft ground reduces ball roll after landing. Firm ground increases total distance.`
      },
      {
        title: "How to Know Your Real Distances",
        icon: "📏",
        text: `Averages are useful as reference, but every player is different. To know your real distances:

At the Driving Range: Hit 10 balls with each club, discard the 2 best and 2 worst, and calculate the average of the remaining 6. That's your real distance.

GPS or Rangefinder: Use a device on the course to measure real distances during play. Apps like Arccos, Shot Scope, and Garmin Golf do this automatically.

Note-taking: Keep a notebook with your updated average distances. Review every 3-6 months as your game evolves.

The goal isn't to hit farther, but to know exactly how far each club travels. This allows better decision-making on the course and lower scores.`
      }
    ],
  }
};

export default function DistanceGuide() {
  const [lang, setLang] = useState("pt");
  const [skill, setSkill] = useState("mid");
  const l = texts[lang];
  const maxDist = 240;

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
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.8rem", color: C.accent, textDecoration: "none" }}>{l.back}</a>

        {/* Header */}
        <div style={{ marginTop: 16, marginBottom: 32 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.gold, background: `${C.gold}18`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "12px 0 8px", lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: C.muted, margin: "0 0 8px" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Interactive Chart */}
        <div style={{ background: C.card, borderRadius: 16, padding: "24px 20px", marginBottom: 32, border: `1px solid ${C.border}` }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: "0 0 4px" }}>{l.chartTitle}</h2>
          <p style={{ fontSize: "0.78rem", color: C.muted, margin: "0 0 16px" }}>{l.chartSub}</p>

          {/* Skill selector */}
          <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
            {Object.entries(l.skillLabels).map(([k, v]) => (
              <button
                key={k}
                onClick={() => setSkill(k)}
                style={{
                  padding: "8px 16px", borderRadius: 8,
                  border: skill === k ? "2px solid #60a5fa" : `2px solid ${C.border}`,
                  background: skill === k ? "#1e3a5f" : C.card2,
                  color: skill === k ? "#93c5fd" : C.muted,
                  cursor: "pointer", fontSize: "0.78rem", fontWeight: 600,
                }}
              >{v}</button>
            ))}
          </div>

          {/* Bars */}
          {clubs.map((c, i) => {
            const dist = c[skill];
            const pct = (dist / maxDist) * 100;
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 6, gap: 8 }}>
                <div style={{ width: 70, textAlign: "right", fontSize: "0.78rem", fontWeight: 600, flexShrink: 0 }}>{c.club}</div>
                <div style={{ width: 50, textAlign: "right", fontSize: "0.68rem", color: C.dim, flexShrink: 0 }}>{c.loft}</div>
                <div style={{ flex: 1, background: C.card2, borderRadius: 6, height: 24, position: "relative", overflow: "hidden" }}>
                  <div style={{
                    width: `${pct}%`, height: "100%",
                    background: `linear-gradient(90deg, ${c.color}88, ${c.color})`,
                    borderRadius: 6, transition: "width 0.5s ease",
                    display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 8,
                  }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>{dist} yds</span>
                  </div>
                </div>
              </div>
            );
          })}

          <p style={{ fontSize: "0.68rem", color: C.dim, marginTop: 12, textAlign: "center" }}>{l.note}</p>
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
                    const isBold = /^(Lembre-se|Remember|Dica|Tip|O Driver|The Driver|As madeiras|Fairway|Um 4 Hybrid|A 4 Hybrid|Para a maioria|For most|Os ferros curtos|Short irons|Os ferros médios|Mid irons|Os ferros longos|Long irons|O Pitching|The Pitching|O Gap|The Gap|O Sand|The Sand|O Lob|The Lob|Velocidade|Swing Speed|Qualidade|Contact|Altitude|Temperatura|Temperature|Vento|Wind|Umidade|Ground|No Driving|At the Driving|GPS|Anotação|Note-taking|O objetivo|The goal)/.test(line.trim());
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

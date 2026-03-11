"use client";
import { useState } from "react";

const C = {
  bg: "#0a0f1a", card: "#111827", card2: "#1a2236",
  accent: "#22d3ee", green: "#22c55e", gold: "#f59e0b",
  purple: "#8b5cf6", pink: "#ec4899", red: "#ef4444",
  text: "#e2e8f0", muted: "#94a3b8", dim: "#475569", border: "#1e293b",
  hybrid: "#22d3ee", iron: "#f59e0b",
};

const data = {
  pt: {
    back: "← Voltar ao Início",
    title: "Híbrido vs Ferro Longo",
    subtitle: "Qual é o melhor para o seu jogo? Comparação completa com dados reais",
    reading: "10 min de leitura",
    tag: "COMPARAÇÃO",
    hybrid: "Híbrido", iron: "Ferro Longo",
    sections: [
      {
        id: "intro", title: "Por Que Essa Escolha Importa?", icon: "🤔",
        text: `Escolher entre um híbrido e um ferro longo pode ser a diferença entre acertar o green ou cair no bunker. Essa decisão afeta diretamente sua pontuação, especialmente em tacadas de 170 a 210 metros.

Os híbridos foram criados justamente como uma solução para a dificuldade que a maioria dos golfistas tem com ferros longos (3, 4 e 5). Com seu centro de gravidade mais baixo e cabeça maior, eles facilitam o lançamento da bola e são muito mais tolerantes a erros.

Mas isso não significa que os ferros longos são obsoletos. Jogadores de handicap baixo frequentemente preferem ferros pela precisão e capacidade de modelar tacadas. A questão é: qual é o certo para VOCÊ?`
      },
      {
        id: "compare", title: "Comparação Direta", icon: "⚔️",
        isCompare: true,
        items: [
          { cat: "Perdão (Forgiveness)", h: 9, i: 4, hText: "Sweet spot grande, tolera erros", iText: "Exige contato preciso, penaliza mishits" },
          { cat: "Distância", h: 9, i: 6, hText: "8-15 jardas a mais que o ferro equivalente", iText: "Menor, mas mais consistente para bons ball-strikers" },
          { cat: "Altura da Bola", h: 9, i: 5, hText: "Lançamento alto, pouso suave", iText: "Voo mais baixo, mais rolamento" },
          { cat: "Controle de Trajetória", h: 5, i: 9, hText: "Difícil de modelar draws/fades", iText: "Excelente para modelar tacadas" },
          { cat: "Do Rough", h: 9, i: 4, hText: "Desliza pelo rough facilmente", iText: "Difícil de fazer contato limpo" },
          { cat: "No Vento", h: 5, i: 8, hText: "Voo alto é afetado pelo vento", iText: "Voo baixo penetra o vento" },
          { cat: "Versatilidade", h: 8, i: 6, hText: "Tee, fairway, rough, bunker", iText: "Melhor do fairway e tee" },
          { cat: "Confiança no Setup", h: 8, i: 5, hText: "Cabeça maior inspira confiança", iText: "Cabeça fina pode intimidar" },
        ]
      },
      {
        id: "distances", title: "Tabela de Distâncias e Equivalências", icon: "📏",
        isDistTable: true,
        distData: [
          { iron: "2 Ferro", ironLoft: "17-18°", hybrid: "2 Híbrido", hybLoft: "17-18°", ironDist: 195, hybDist: 210, rec: "hybrid" },
          { iron: "3 Ferro", ironLoft: "20-21°", hybrid: "3 Híbrido", hybLoft: "19-21°", ironDist: 185, hybDist: 200, rec: "hybrid" },
          { iron: "4 Ferro", ironLoft: "23-24°", hybrid: "4 Híbrido", hybLoft: "22-24°", ironDist: 175, hybDist: 188, rec: "hybrid" },
          { iron: "5 Ferro", ironLoft: "26-27°", hybrid: "5 Híbrido", hybLoft: "25-27°", ironDist: 165, hybDist: 178, rec: "depends" },
          { iron: "6 Ferro", ironLoft: "29-30°", hybrid: "6 Híbrido", hybLoft: "28-30°", ironDist: 155, hybDist: 165, rec: "iron" },
        ],
        distNote: "Distâncias em jardas — média para homens (handicap médio). Resultados variam por velocidade de swing.",
        recLabels: { hybrid: "Recomendado: Híbrido", iron: "Recomendado: Ferro", depends: "Depende do jogador" },
      },
      {
        id: "who", title: "Qual Escolher? Guia por Perfil", icon: "🎯",
        isProfiles: true,
        profiles: [
          {
            title: "Iniciante / Handicap Alto (25+)",
            emoji: "🟢", rec: "HÍBRIDOS",
            text: "Substitua todos os ferros longos (3, 4, 5) por híbridos. A diferença no seu jogo será imediata — mais bolas no fairway, mais greens em regulação, e muito menos frustração.",
            clubs: "3H + 4H + 5H → depois ferro 6 em diante"
          },
          {
            title: "Intermediário / Handicap Médio (12-24)",
            emoji: "🟡", rec: "MIX",
            text: "Carregue pelo menos um híbrido (3H ou 4H) para substituir seus ferros mais longos. Mantenha o ferro 5 se você acerta bem. Essa combinação dá o melhor dos dois mundos.",
            clubs: "3H + 4H + Ferro 5 em diante"
          },
          {
            title: "Avançado / Handicap Baixo (0-11)",
            emoji: "🔴", rec: "ESCOLHA PESSOAL",
            text: "Você tem skill para acertar ferros longos, mas até profissionais como Rory McIlroy estão adicionando híbridos ao bag. Teste no launch monitor — se o híbrido der mais GIR, use sem preconceito.",
            clubs: "Depende dos seus dados no launch monitor"
          },
        ]
      },
      {
        id: "shotscope", title: "O Que Dizem os Dados?", icon: "📊",
        text: `Os dados de performance real são reveladores. Segundo análises de milhares de voltas:

A partir de 200+ jardas, um híbrido é quase duas vezes mais eficiente que um ferro longo em acertar greens em regulação. Isso vale para todos os níveis de handicap, exceto jogadores scratch.

Apenas 9% dos golfistas amadores carregam um ferro 3 — a grande maioria já migrou para híbridos. Para o ferro 4, o número sobe para cerca de 25%.

Os híbridos consistentemente produzem 8-15 jardas a mais de distância que o ferro equivalente, graças ao centro de gravidade mais baixo, face mais quente e maior momento de inércia (MOI).

Em tacadas do rough, a vantagem do híbrido é ainda mais dramática. O design da sola permite que o taco deslize pelo capim em vez de prender, resultando em contato muito mais limpo.`
      },
      {
        id: "loft", title: "Cuidado com os Lofts!", icon: "⚠️",
        text: `Um erro muito comum é trocar ferro por híbrido do mesmo número sem verificar os lofts. Por exemplo, um ferro 4 "game improvement" pode ter 20° de loft, enquanto um ferro 4 "player" tem 24°. São quase um taco de diferença!

A regra de ouro: sempre compare os GRAUS (loft), não os números do taco.

Se seu ferro 4 tem 24°, procure um híbrido com loft similar (22-24°). Se seu ferro 4 tem 20°, esse loft é equivalente a um 3 ferro tradicional — então um 3 híbrido seria a troca correta.

Dica: verifique o loft dos seus ferros atuais no site do fabricante antes de comprar um híbrido.`
      },
      {
        id: "setup", title: "Exemplos de Setup por Nível", icon: "🏌️",
        isSetup: true,
        setups: [
          { level: "Iniciante", bag: ["Driver", "3 Wood", "5 Wood", "3H", "4H", "5H", "6i", "7i", "8i", "9i", "PW", "SW", "Putter"], highlight: [3,4,5] },
          { level: "Intermediário", bag: ["Driver", "3 Wood", "3H", "4H", "5i", "6i", "7i", "8i", "9i", "PW", "GW", "SW", "LW", "Putter"], highlight: [2,3] },
          { level: "Avançado", bag: ["Driver", "3 Wood", "3H", "3i", "4i", "5i", "6i", "7i", "8i", "9i", "PW", "GW", "SW", "LW"], highlight: [2] },
        ]
      },
      {
        id: "faq", title: "Perguntas Frequentes", icon: "❓",
        isFaq: true,
        faqs: [
          { q: "Posso misturar híbridos e ferros no meu bag?", a: "Sim! A maioria dos golfistas profissionais e amadores mistura. O importante é que não haja gaps de distância entre os tacos." },
          { q: "Um 4 híbrido substitui exatamente um 4 ferro?", a: "Nem sempre. O híbrido geralmente vai 8-15 jardas mais longe. Por isso, um 4 híbrido muitas vezes substitui um 3 ferro em distância. Sempre compare lofts, não números." },
          { q: "Híbridos são só para iniciantes?", a: "De jeito nenhum! Profissionais como Rory McIlroy, Collin Morikawa e muitos outros usam híbridos regularmente no tour." },
          { q: "E os utility irons / driving irons?", a: "São uma opção intermediária — mais fáceis que ferros tradicionais mas com visual de ferro. Ótimos para quem não gosta do visual do híbrido mas quer mais perdão que um ferro longo." },
          { q: "Devo trocar todos os meus ferros longos de uma vez?", a: "Comece com o ferro mais longo que você tem dificuldade (geralmente o 3 ou 4). Teste por algumas voltas. Se gostar, vá substituindo gradualmente." },
        ]
      },
    ],
  },
  en: {
    back: "← Back to Home",
    title: "Hybrid vs Long Iron",
    subtitle: "Which is best for your game? Complete data-driven comparison",
    reading: "10 min read",
    tag: "COMPARISON",
    hybrid: "Hybrid", iron: "Long Iron",
    sections: [
      {
        id: "intro", title: "Why This Choice Matters", icon: "🤔",
        text: `Choosing between a hybrid and a long iron can be the difference between hitting the green or landing in a bunker. This decision directly affects your scoring, especially on shots from 170 to 210 yards.

Hybrids were created specifically as a solution for the difficulty most golfers have with long irons (3, 4, and 5). With their lower center of gravity and larger head, they make it easier to launch the ball and are much more forgiving of mistakes.

But this doesn't mean long irons are obsolete. Low-handicap players often prefer irons for precision and shot-shaping ability. The question is: which is right for YOU?`
      },
      {
        id: "compare", title: "Head-to-Head Comparison", icon: "⚔️",
        isCompare: true,
        items: [
          { cat: "Forgiveness", h: 9, i: 4, hText: "Large sweet spot, tolerates mishits", iText: "Requires precise contact, penalizes mishits" },
          { cat: "Distance", h: 9, i: 6, hText: "8-15 yards longer than equivalent iron", iText: "Less, but more consistent for good ball-strikers" },
          { cat: "Launch Height", h: 9, i: 5, hText: "High launch, soft landing", iText: "Lower trajectory, more roll" },
          { cat: "Shot Shaping", h: 5, i: 9, hText: "Hard to shape draws/fades", iText: "Excellent for shot shaping" },
          { cat: "From the Rough", h: 9, i: 4, hText: "Glides through rough easily", iText: "Hard to make clean contact" },
          { cat: "In the Wind", h: 5, i: 8, hText: "High flight is affected by wind", iText: "Low flight penetrates wind" },
          { cat: "Versatility", h: 8, i: 6, hText: "Tee, fairway, rough, bunker", iText: "Best from fairway and tee" },
          { cat: "Confidence at Setup", h: 8, i: 5, hText: "Larger head inspires confidence", iText: "Thin head can be intimidating" },
        ]
      },
      {
        id: "distances", title: "Distance & Equivalency Table", icon: "📏",
        isDistTable: true,
        distData: [
          { iron: "2 Iron", ironLoft: "17-18°", hybrid: "2 Hybrid", hybLoft: "17-18°", ironDist: 195, hybDist: 210, rec: "hybrid" },
          { iron: "3 Iron", ironLoft: "20-21°", hybrid: "3 Hybrid", hybLoft: "19-21°", ironDist: 185, hybDist: 200, rec: "hybrid" },
          { iron: "4 Iron", ironLoft: "23-24°", hybrid: "4 Hybrid", hybLoft: "22-24°", ironDist: 175, hybDist: 188, rec: "hybrid" },
          { iron: "5 Iron", ironLoft: "26-27°", hybrid: "5 Hybrid", hybLoft: "25-27°", ironDist: 165, hybDist: 178, rec: "depends" },
          { iron: "6 Iron", ironLoft: "29-30°", hybrid: "6 Hybrid", hybLoft: "28-30°", ironDist: 155, hybDist: 165, rec: "iron" },
        ],
        distNote: "Distances in yards — average for men (mid handicap). Results vary by swing speed.",
        recLabels: { hybrid: "Recommended: Hybrid", iron: "Recommended: Iron", depends: "Player dependent" },
      },
      {
        id: "who", title: "Which to Choose? Profile Guide", icon: "🎯",
        isProfiles: true,
        profiles: [
          {
            title: "Beginner / High Handicap (25+)",
            emoji: "🟢", rec: "HYBRIDS",
            text: "Replace all long irons (3, 4, 5) with hybrids. The difference in your game will be immediate — more balls on the fairway, more greens in regulation, and much less frustration.",
            clubs: "3H + 4H + 5H → then 6 iron onwards"
          },
          {
            title: "Intermediate / Mid Handicap (12-24)",
            emoji: "🟡", rec: "MIX",
            text: "Carry at least one hybrid (3H or 4H) to replace your longest irons. Keep the 5 iron if you hit it well. This combo gives you the best of both worlds.",
            clubs: "3H + 4H + 5 iron onwards"
          },
          {
            title: "Advanced / Low Handicap (0-11)",
            emoji: "🔴", rec: "PERSONAL CHOICE",
            text: "You have the skill to hit long irons, but even pros like Rory McIlroy are adding hybrids. Test on a launch monitor — if the hybrid gives more GIR, use it without prejudice.",
            clubs: "Depends on your launch monitor data"
          },
        ]
      },
      {
        id: "shotscope", title: "What Does the Data Say?", icon: "📊",
        text: `Real performance data is revealing. According to analysis of thousands of rounds:

From 200+ yards, a hybrid is nearly twice as effective as a long iron at hitting greens in regulation. This holds true for all handicap levels, except scratch players.

Only 9% of amateur golfers carry a 3 iron — the vast majority have migrated to hybrids. For the 4 iron, the number rises to about 25%.

Hybrids consistently produce 8-15 extra yards over the equivalent iron, thanks to the lower center of gravity, hotter face, and higher moment of inertia (MOI).

From the rough, the hybrid advantage is even more dramatic. The sole design allows the club to glide through grass instead of catching, resulting in much cleaner contact.`
      },
      {
        id: "loft", title: "Watch the Lofts!", icon: "⚠️",
        text: `A very common mistake is swapping an iron for a hybrid of the same number without checking lofts. For example, a "game improvement" 4 iron might have 20° of loft, while a "player" 4 iron has 24°. That's almost a full club difference!

The golden rule: always compare DEGREES (loft), not club numbers.

If your 4 iron has 24°, look for a hybrid with similar loft (22-24°). If your 4 iron has 20°, that loft is equivalent to a traditional 3 iron — so a 3 hybrid would be the correct swap.

Tip: check the loft of your current irons on the manufacturer's website before buying a hybrid.`
      },
      {
        id: "setup", title: "Setup Examples by Level", icon: "🏌️",
        isSetup: true,
        setups: [
          { level: "Beginner", bag: ["Driver", "3 Wood", "5 Wood", "3H", "4H", "5H", "6i", "7i", "8i", "9i", "PW", "SW", "Putter"], highlight: [3,4,5] },
          { level: "Intermediate", bag: ["Driver", "3 Wood", "3H", "4H", "5i", "6i", "7i", "8i", "9i", "PW", "GW", "SW", "LW", "Putter"], highlight: [2,3] },
          { level: "Advanced", bag: ["Driver", "3 Wood", "3H", "3i", "4i", "5i", "6i", "7i", "8i", "9i", "PW", "GW", "SW", "LW"], highlight: [2] },
        ]
      },
      {
        id: "faq", title: "Frequently Asked Questions", icon: "❓",
        isFaq: true,
        faqs: [
          { q: "Can I mix hybrids and irons in my bag?", a: "Yes! Most professional and amateur golfers do. The important thing is that there are no distance gaps between clubs." },
          { q: "Does a 4 hybrid replace a 4 iron exactly?", a: "Not always. The hybrid usually goes 8-15 yards farther. That's why a 4 hybrid often replaces a 3 iron in distance. Always compare lofts, not numbers." },
          { q: "Are hybrids only for beginners?", a: "Absolutely not! Pros like Rory McIlroy, Collin Morikawa, and many others regularly use hybrids on tour." },
          { q: "What about utility irons / driving irons?", a: "They're a middle ground — easier than traditional irons but with an iron look. Great for those who don't like the hybrid look but want more forgiveness than a long iron." },
          { q: "Should I replace all my long irons at once?", a: "Start with the longest iron you struggle with (usually the 3 or 4). Test for a few rounds. If you like it, gradually replace more." },
        ]
      },
    ],
  }
};

const Bar = ({ val, max, color }) => (
  <div style={{ flex: 1, background: "#1a2744", borderRadius: 6, height: 12, overflow: "hidden" }}>
    <div style={{ width: `${(val/max)*100}%`, height: "100%", background: color, borderRadius: 6, transition: "width 0.5s" }} />
  </div>
);

export default function HybridVsIron() {
  const [lang, setLang] = useState("pt");
  const [openFaq, setOpenFaq] = useState(-1);
  const l = data[lang];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: `1px solid ${C.border}`, background: "rgba(10,15,26,0.92)", position: "sticky", top: 0, zIndex: 10, backdropFilter: "blur(12px)" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <span style={{ fontSize: "1.3rem" }}>⛳</span>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: C.accent }}>Tacada Golf</span>
        </a>
        <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 8, padding: "5px 12px", color: C.text, fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}>
          {lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}
        </button>
      </nav>

      <div style={{ maxWidth: 750, margin: "0 auto", padding: "0 20px" }}>
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.8rem", color: C.accent, textDecoration: "none" }}>{l.back}</a>

        <div style={{ marginTop: 16, marginBottom: 32 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.green, background: `${C.green}18`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "12px 0 8px", lineHeight: 1.2 }}>{l.title}</h1>
          <p style={{ fontSize: "0.9rem", color: C.muted, margin: "0 0 8px" }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 20, marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: C.hybrid }} /><span style={{ fontSize: "0.8rem", fontWeight: 700, color: C.hybrid }}>{l.hybrid}</span></div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: C.iron }} /><span style={{ fontSize: "0.8rem", fontWeight: 700, color: C.iron }}>{l.iron}</span></div>
        </div>

        {l.sections.map((sec, si) => (
          <div key={si} style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: "1.4rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0 }}>{sec.title}</h2>
            </div>

            {sec.isCompare && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.items.map((item, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 12, padding: "14px 16px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, marginBottom: 8 }}>{item.cat}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "0.7rem", color: C.hybrid, width: 18, fontWeight: 700 }}>{item.h}</span>
                      <Bar val={item.h} max={10} color={C.hybrid} />
                    </div>
                    <div style={{ fontSize: "0.7rem", color: C.muted, marginBottom: 8, paddingLeft: 26 }}>{item.hText}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "0.7rem", color: C.iron, width: 18, fontWeight: 700 }}>{item.i}</span>
                      <Bar val={item.i} max={10} color={C.iron} />
                    </div>
                    <div style={{ fontSize: "0.7rem", color: C.muted, paddingLeft: 26 }}>{item.iText}</div>
                  </div>
                ))}
              </div>
            )}

            {sec.isDistTable && (
              <div>
                {sec.distData.map((row, j) => (
                  <div key={j} style={{ background: j % 2 === 0 ? C.card : C.card2, borderRadius: j === 0 ? "12px 12px 0 0" : j === sec.distData.length - 1 ? "0 0 12px 12px" : 0, padding: "14px 16px", display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
                    <div style={{ flex: "1 1 120px", minWidth: 100 }}>
                      <div style={{ fontSize: "0.7rem", color: C.iron, fontWeight: 600 }}>{row.iron} ({row.ironLoft})</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: C.iron }}>{row.ironDist} yd</div>
                    </div>
                    <div style={{ fontSize: "1rem", color: C.dim }}>vs</div>
                    <div style={{ flex: "1 1 120px", minWidth: 100 }}>
                      <div style={{ fontSize: "0.7rem", color: C.hybrid, fontWeight: 600 }}>{row.hybrid} ({row.hybLoft})</div>
                      <div style={{ fontSize: "1rem", fontWeight: 800, color: C.hybrid }}>{row.hybDist} yd</div>
                    </div>
                    <div style={{ flex: "1 1 140px" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: row.rec === "hybrid" ? `${C.hybrid}20` : row.rec === "iron" ? `${C.iron}20` : `${C.purple}20`, color: row.rec === "hybrid" ? C.hybrid : row.rec === "iron" ? C.iron : C.purple }}>
                        {sec.recLabels[row.rec]}
                      </span>
                    </div>
                  </div>
                ))}
                <p style={{ fontSize: "0.7rem", color: C.dim, marginTop: 8 }}>{sec.distNote}</p>
              </div>
            )}

            {sec.isProfiles && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.profiles.map((p, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "18px 20px", border: `1px solid ${C.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <span style={{ fontSize: "1.2rem" }}>{p.emoji}</span>
                      <span style={{ fontSize: "0.9rem", fontWeight: 800 }}>{p.title}</span>
                    </div>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.accent, background: `${C.accent}18`, padding: "3px 8px", borderRadius: 6 }}>{p.rec}</span>
                    <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.7, margin: "10px 0" }}>{p.text}</p>
                    <div style={{ fontSize: "0.75rem", color: C.green, background: `${C.green}10`, padding: "8px 12px", borderRadius: 8 }}>🏌️ {p.clubs}</div>
                  </div>
                ))}
              </div>
            )}

            {sec.isSetup && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.setups.map((s, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "16px 18px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 800, marginBottom: 10 }}>{s.level}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.bag.map((club, k) => (
                        <span key={k} style={{ fontSize: "0.7rem", fontWeight: 600, padding: "4px 10px", borderRadius: 8, background: s.highlight.includes(k) ? `${C.hybrid}20` : C.card2, color: s.highlight.includes(k) ? C.hybrid : C.muted, border: `1px solid ${s.highlight.includes(k) ? C.hybrid + "40" : C.border}` }}>{club}</span>
                      ))}
                    </div>
                  </div>
                ))}
                <p style={{ fontSize: "0.7rem", color: C.dim }}>* {lang === "pt" ? "Tacos destacados em azul são híbridos" : "Clubs highlighted in blue are hybrids"}</p>
              </div>
            )}

            {sec.isFaq && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {sec.faqs.map((faq, j) => (
                  <div key={j} onClick={() => setOpenFaq(openFaq === j ? -1 : j)} style={{ background: C.card, borderRadius: 12, padding: "14px 18px", border: `1px solid ${openFaq === j ? C.accent + "40" : C.border}`, cursor: "pointer", transition: "all 0.2s" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>{faq.q}</span>
                      <span style={{ color: C.muted, transform: openFaq === j ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s" }}>▾</span>
                    </div>
                    {openFaq === j && <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.7, marginTop: 10 }}>{faq.a}</p>}
                  </div>
                ))}
              </div>
            )}

            {sec.text && !sec.isCompare && !sec.isDistTable && !sec.isProfiles && !sec.isSetup && !sec.isFaq && (
              <div style={{ background: C.card, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.border}` }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.8, margin: j === 0 ? 0 : "14px 0 0" }}>{para}</p>
                ))}
              </div>
            )}
          </div>
        ))}

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

"use client";
import { useState } from "react";

const C = {
  bg: "#f8f6f1", card: "#ffffff", card2: "#f0ede6",
  accent: "#4a7c59", accentLight: "#6b9e7a",
  gold: "#b8860b", goldLight: "#d4a847",
  cream: "#f5f1e8", dark: "#1a2e1a",
  text: "#2d3a2e", muted: "#6b7c6b", dim: "#99a899",
  border: "#d4cfc2", borderLight: "#e8e3d9",
};

const content = {
  pt: {
    back: "← Voltar ao Início",
    title: "Palatinose: O Combustível Secreto do Golfista",
    subtitle: "Como este carboidrato de baixo índice glicêmico pode eliminar sua queda de energia nos últimos 9 buracos",
    reading: "12 min de leitura",
    tag: "CIÊNCIA & NUTRIÇÃO",
    sections: [
      {
        title: "O Problema: A Queda no Back Nine",
        icon: "😓",
        text: `Todo golfista conhece a sensação: os primeiros 9 buracos correm bem, o swing está fluido, a concentração está afiada. Depois da viragem, tudo muda. A fadiga mental aparece, as tacadas ficam imprecisas, as decisões ficam ruins. O back nine vira um pesadelo.

A maioria dos jogadores culpa a falta de prática ou de condicionamento físico. Mas na maioria dos casos, o verdadeiro culpado é a queda de glicose no sangue — seu cérebro e seus músculos simplesmente ficam sem combustível.

Uma volta de golfe dura 4 a 5 horas. Nesse tempo, seu corpo queima 1.300 a 2.000 calorias. Seu cérebro, que consome 20% de toda a energia do corpo, precisa de glicose constante para manter concentração, cálculo de distância e controle emocional. Quando a glicose cai, tudo desmorona.`
      },
      {
        title: "O Que é Palatinose?",
        icon: "🧪",
        text: `A Palatinose (nome científico: isomaltulose) é um carboidrato natural derivado da beterraba. Ela também é encontrada naturalmente no mel e na cana-de-açúcar.

Assim como o açúcar comum (sacarose), a Palatinose é composta de glicose e frutose. A diferença está na ligação entre essas moléculas — na Palatinose, a ligação é mais forte, o que faz com que ela seja digerida muito mais lentamente.

O resultado? Energia constante e sustentada por horas, sem os picos e quedas que o açúcar comum causa. Pense nela como um combustível de liberação lenta para o seu corpo e cérebro.

Ela fornece as mesmas 4 calorias por grama que qualquer carboidrato, tem um sabor levemente adoçado (cerca de 30% da doçura do açúcar) e não causa desconforto gástrico.`
      },
      {
        title: "Índice Glicêmico: A Grande Diferença",
        icon: "📊",
        isGI: true,
        giData: [
          { name: "Palatinose", gi: 32, color: "#4a7c59" },
          { name: "Sacarose (Açúcar)", gi: 67, color: "#d4a847" },
          { name: "Maltodextrina", gi: 100, color: "#a04040" },
          { name: "Glicose (Dextrose)", gi: 100, color: "#a04040" },
        ],
        text: `O índice glicêmico (IG) mede a velocidade com que um carboidrato eleva o açúcar no sangue. Quanto maior o IG, mais rápido o pico — e mais rápida a queda.

A Palatinose tem IG de apenas 32. Compare com a maltodextrina (IG 100) presente na maioria dos repositores energéticos e bebidas esportivas. Isso significa que a Palatinose fornece a mesma quantidade de energia, mas de forma gradual e sustentada.

Para o golfista, isso é revolucionário: em vez de um pico rápido de energia seguido de uma queda brusca no buraco 12, você tem energia constante do buraco 1 ao 18.`
      },
      {
        title: "O Que Diz a Ciência?",
        icon: "🔬",
        text: `O estudo mais relevante para golfistas foi conduzido pelo Professor Daniel König e sua equipe na Universidade de Freiburg, Alemanha. Publicado em 2016 na revista Nutrients, utilizou um desenho randomizado, duplo-cego e controlado.

O estudo: 20 ciclistas experientes consumiram 75g de Palatinose ou 75g de maltodextrina (controle) 45 minutos antes de um protocolo de exercício que incluía 90 minutos de pedalada a 60% do VO2max seguido de um contra-relógio.

Resultados com Palatinose:

Glicose no sangue mais estável: Sem o pico e queda vistos com maltodextrina. Os níveis se mantiveram constantes durante todo o exercício.

Maior queima de gordura: Aproximadamente 38% mais oxidação de gordura comparado à maltodextrina. Isso significa que o corpo preservou o glicogênio (reserva de energia nos músculos) para quando mais precisava.

Melhor performance no final: Os atletas terminaram o contra-relógio 2.7% mais rápido (30.05 min vs 31.08 min) — quase 1 minuto inteiro de diferença.

Mais potência no sprint final: 4.6% mais potência nos últimos 5 minutos, exatamente quando a fadiga normalmente atinge o pico.

Nenhum efeito colateral: Zero queixas de desconforto gástrico ou problemas de palatabilidade.`
      },
      {
        title: "Por Que Funciona Perfeitamente para o Golfe?",
        icon: "⛳",
        text: `O golfe é um esporte único: baixa intensidade por longa duração. Isso é exatamente o cenário onde a Palatinose brilha.

Energia por 4-5 horas: A liberação lenta e constante é ideal para a duração de uma volta completa. Sem picos, sem quedas.

Concentração mantida: Com glicose estável no sangue, seu cérebro recebe combustível constante. Isso se traduz em melhor foco, melhor cálculo de distância e melhores decisões estratégicas até o buraco 18.

Preservação de glicogênio: Ao promover maior queima de gordura, a Palatinose poupa suas reservas de glicogênio para os momentos decisivos — como aquele putt crucial no buraco 17.

Sem desconforto gástrico: Diferente de alguns suplementos, a Palatinose é bem tolerada. Você não vai sentir inchaço ou desconforto durante o swing.

Compatível com qualquer dieta: Funciona para quem come low-carb, keto moderado ou dieta tradicional. É apenas um carboidrato mais inteligente.`
      },
      {
        title: "Como Usar no Dia de Jogo",
        icon: "📋",
        isTimeline: true,
        timeline: [
          { time: "Noite anterior", text: "Jantar equilibrado com carboidratos complexos (arroz integral, batata doce, legumes). Beba 500ml de água.", emoji: "🌙" },
          { time: "Ao acordar", text: "300-500ml de água imediatamente. Prepare sua refeição pré-jogo com proteína + carboidratos.", emoji: "☀️" },
          { time: "2-3h antes do tee", text: "Refeição principal: ovos + pão integral + banana + abacate. Base sólida de energia.", emoji: "🍽️" },
          { time: "30-45 min antes", text: "Misture 15-20g de Palatinose em 250-300ml de água e beba. Este é o momento chave.", emoji: "🧪" },
          { time: "Preparar garrafa", text: "Prepare uma segunda garrafa: 15-20g de Palatinose + eletrólitos em 500ml de água para beber durante a volta.", emoji: "🧃" },
          { time: "Buracos 1-6", text: "Beba aos poucos da garrafa com Palatinose. Snack leve no buraco 4-5 (nozes, banana).", emoji: "💧" },
          { time: "Buracos 7-9", text: "Continue hidratando. A Palatinose está mantendo sua glicose estável.", emoji: "⚡" },
          { time: "Na viragem", text: "Snack substancial: sanduíche integral + fruta. Reabasteça a garrafa se necessário.", emoji: "🥪" },
          { time: "Buracos 10-14", text: "Último snack: trail mix ou barra energética. Beba o restante da Palatinose.", emoji: "🥜" },
          { time: "Buracos 15-18", text: "Água + foco total. A Palatinose está trabalhando — você vai sentir a diferença.", emoji: "🏆" },
        ]
      },
      {
        title: "Dosagem e Recomendações",
        icon: "💊",
        text: `Dose pré-jogo: 15-20g de Palatinose em pó misturada em 250-300ml de água, consumida 30-45 minutos antes do tee time.

Dose durante o jogo: 15-20g adicionais em uma garrafa de 500ml com água e eletrólitos, para beber ao longo da volta.

Dose máxima por hora: 25g/hora (100 kcal). Não exagere — a Palatinose funciona melhor em doses moderadas.

Importante: A Palatinose funciona melhor combinada com outros alimentos e carboidratos. Ela não deve ser sua única fonte de energia. Use-a como complemento à sua refeição pré-jogo e aos snacks durante a volta.

Não é recomendada como única fonte de carboidrato em alta quantidade (acima de 40g de uma vez) pois pode causar desconforto gástrico. Mantenha doses moderadas para melhores resultados.

Teste antes de usar em competição: Como qualquer suplemento novo, teste a Palatinose em voltas de treino antes de usar em torneios. Cada corpo reage de forma diferente.`
      },
      {
        title: "Onde Encontrar",
        icon: "🛒",
        text: `Existem duas formas principais de consumir Palatinose:

Palatinose em pó pura: Marcas como GymBeam, BlackSkull e HSN Store vendem Palatinose pura em pó. Esta é a opção mais versátil — você controla a dose e pode misturar em água, shakes ou smoothies. Preço médio: R$50-80 por 300-500g.

Pré-treinos com Palatinose: Produtos como o GoldNutrition Pre-Workout Endurance já incluem Palatinose combinada com BCAAs, cafeína, tirosina e eletrólitos. Mais conveniente mas menos controle sobre a dose. A marca ARMA Sport BLITZ também utiliza Palatinose na sua fórmula.

Bebidas esportivas: A Momentous Fuel é uma bebida esportiva com Palatinose e eletrólitos, certificada NSF para esporte.

Para golfistas, a recomendação é começar com a Palatinose em pó pura — é mais barato, mais flexível e permite ajustar a dose exatamente como você precisa.`
      },
      {
        title: "Palatinose vs Outros Suplementos",
        icon: "⚖️",
        isCompare: true,
        compareData: [
          { name: "Palatinose", pros: "Energia sustentada, sem pico/queda, promove queima de gordura, sem desconforto gástrico", cons: "Energia mais lenta (não ideal para sprints), mais cara que açúcar", best: "Golfe, esportes de longa duração", color: "#4a7c59" },
          { name: "Maltodextrina", pros: "Energia rápida, barata, facilmente disponível", cons: "Pico e queda de glicose, não promove queima de gordura", best: "Esportes de alta intensidade curta", color: "#a04040" },
          { name: "Bebidas Esportivas (Gatorade)", pros: "Hidratação + eletrólitos + energia rápida", cons: "Alto em açúcar, pico e queda, pode causar sede", best: "Esportes intensos com muito suor", color: "#d4a847" },
          { name: "Gel Energético", pros: "Compacto, energia rápida, fácil de carregar", cons: "Pico e queda, pode causar náusea, textura desagradável", best: "Corrida, ciclismo de alta intensidade", color: "#6b5b7b" },
        ]
      },
      {
        title: "Perguntas Frequentes",
        icon: "❓",
        text: `A Palatinose é segura? Sim. É um carboidrato natural encontrado no mel e derivado da beterraba. É aprovada como alimento seguro na União Europeia, EUA, Japão e Brasil. Não é um estimulante nem um medicamento.

Posso usar se sou diabético? A Palatinose tem índice glicêmico muito baixo e estudos mostram benefícios para controle glicêmico. No entanto, consulte sempre seu médico antes de usar qualquer suplemento se você tem diabetes.

Tem gosto ruim? Não. A Palatinose tem um sabor levemente adoçado (cerca de 30% da doçura do açúcar). Misturada em água, o sabor é neutro e agradável.

Posso misturar com café? Sim! Pode substituir o açúcar no seu café pré-jogo. Vai adoçar levemente e fornecer energia sustentada.

Quanto tempo demora para fazer efeito? A Palatinose começa a liberar energia cerca de 20-30 minutos após a ingestão e mantém níveis estáveis por 3-4 horas.

É proibida em competições? Não. A Palatinose não é uma substância proibida pela WADA ou por qualquer federação esportiva. É simplesmente um carboidrato.

Crianças podem usar? A Palatinose é segura para todas as idades, mas para crianças recomenda-se orientação de um nutricionista para definir a dose adequada.`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "Palatinose: The Golfer's Secret Fuel",
    subtitle: "How this low glycemic index carbohydrate can eliminate your back-nine energy crash",
    reading: "12 min read",
    tag: "SCIENCE & NUTRITION",
    sections: [
      {
        title: "The Problem: The Back Nine Crash",
        icon: "😓",
        text: `Every golfer knows the feeling: the first 9 holes go well, the swing is fluid, concentration is sharp. After the turn, everything changes. Mental fatigue sets in, shots become imprecise, decisions get worse. The back nine becomes a nightmare.

Most players blame lack of practice or fitness. But in most cases, the real culprit is a blood glucose drop — your brain and muscles simply run out of fuel.

A round of golf lasts 4 to 5 hours. During that time, your body burns 1,300 to 2,000 calories. Your brain, which consumes 20% of all body energy, needs constant glucose to maintain concentration, distance calculation, and emotional control. When glucose drops, everything falls apart.`
      },
      {
        title: "What is Palatinose?",
        icon: "🧪",
        text: `Palatinose (scientific name: isomaltulose) is a natural carbohydrate derived from sugar beet. It's also naturally found in honey and sugarcane.

Like common sugar (sucrose), Palatinose is made of glucose and fructose. The difference is in the bond between these molecules — in Palatinose, the bond is stronger, which means it's digested much more slowly.

The result? Constant, sustained energy for hours, without the spikes and crashes that common sugar causes. Think of it as slow-release fuel for your body and brain.

It provides the same 4 calories per gram as any carbohydrate, has a mildly sweet taste (about 30% of sugar's sweetness), and doesn't cause gastric discomfort.`
      },
      {
        title: "Glycemic Index: The Big Difference",
        icon: "📊",
        isGI: true,
        giData: [
          { name: "Palatinose", gi: 32, color: "#4a7c59" },
          { name: "Sucrose (Sugar)", gi: 67, color: "#d4a847" },
          { name: "Maltodextrin", gi: 100, color: "#a04040" },
          { name: "Glucose (Dextrose)", gi: 100, color: "#a04040" },
        ],
        text: `The glycemic index (GI) measures how quickly a carbohydrate raises blood sugar. The higher the GI, the faster the spike — and the faster the crash.

Palatinose has a GI of just 32. Compare that to maltodextrin (GI 100) found in most energy drinks and sports beverages. This means Palatinose delivers the same amount of energy, but gradually and sustainably.

For golfers, this is revolutionary: instead of a quick energy spike followed by a sharp crash at hole 12, you get constant energy from hole 1 to 18.`
      },
      {
        title: "What Does the Science Say?",
        icon: "🔬",
        text: `The most relevant study for golfers was conducted by Professor Daniel König and his team at the University of Freiburg, Germany. Published in 2016 in the journal Nutrients, it used a randomized, double-blind, controlled design.

The study: 20 experienced cyclists consumed 75g of Palatinose or 75g of maltodextrin (control) 45 minutes before an exercise protocol that included 90 minutes of cycling at 60% VO2max followed by a time trial.

Results with Palatinose:

More stable blood glucose: No spike and crash seen with maltodextrin. Levels remained constant throughout exercise.

Higher fat burning: Approximately 38% more fat oxidation compared to maltodextrin. This means the body preserved glycogen (muscle energy reserves) for when it was needed most.

Better end performance: Athletes finished the time trial 2.7% faster (30.05 min vs 31.08 min) — almost a full minute difference.

More power in the final sprint: 4.6% more power output in the last 5 minutes, exactly when fatigue normally peaks.

Zero side effects: No complaints of gastric discomfort or palatability issues.`
      },
      {
        title: "Why It Works Perfectly for Golf",
        icon: "⛳",
        text: `Golf is a unique sport: low intensity over a long duration. This is exactly the scenario where Palatinose shines.

Energy for 4-5 hours: The slow, steady release is ideal for the duration of a full round. No spikes, no crashes.

Maintained concentration: With stable blood glucose, your brain receives constant fuel. This translates to better focus, better distance calculation, and better strategic decisions through hole 18.

Glycogen preservation: By promoting higher fat burning, Palatinose spares your glycogen reserves for decisive moments — like that crucial putt on hole 17.

No gastric discomfort: Unlike some supplements, Palatinose is well tolerated. You won't feel bloating or discomfort during your swing.

Compatible with any diet: Works for low-carb, moderate keto, or traditional diets. It's simply a smarter carbohydrate.`
      },
      {
        title: "How to Use on Game Day",
        icon: "📋",
        isTimeline: true,
        timeline: [
          { time: "Night before", text: "Balanced dinner with complex carbs (brown rice, sweet potato, vegetables). Drink 500ml of water.", emoji: "🌙" },
          { time: "Wake up", text: "300-500ml of water immediately. Prepare your pre-round meal with protein + carbs.", emoji: "☀️" },
          { time: "2-3h before tee", text: "Main meal: eggs + whole grain bread + banana + avocado. Solid energy base.", emoji: "🍽️" },
          { time: "30-45 min before", text: "Mix 15-20g of Palatinose in 250-300ml of water and drink. This is the key moment.", emoji: "🧪" },
          { time: "Prepare bottle", text: "Prepare a second bottle: 15-20g Palatinose + electrolytes in 500ml water to drink during the round.", emoji: "🧃" },
          { time: "Holes 1-6", text: "Sip from the Palatinose bottle. Light snack at holes 4-5 (nuts, banana).", emoji: "💧" },
          { time: "Holes 7-9", text: "Keep hydrating. Palatinose is keeping your glucose stable.", emoji: "⚡" },
          { time: "At the turn", text: "Substantial snack: whole grain sandwich + fruit. Refill bottle if needed.", emoji: "🥪" },
          { time: "Holes 10-14", text: "Last snack: trail mix or energy bar. Drink remaining Palatinose.", emoji: "🥜" },
          { time: "Holes 15-18", text: "Water + total focus. Palatinose is working — you'll feel the difference.", emoji: "🏆" },
        ]
      },
      {
        title: "Dosage and Recommendations",
        icon: "💊",
        text: `Pre-round dose: 15-20g of Palatinose powder mixed in 250-300ml of water, consumed 30-45 minutes before tee time.

During the round: An additional 15-20g in a 500ml bottle with water and electrolytes, to drink throughout the round.

Maximum dose per hour: 25g/hour (100 kcal). Don't overdo it — Palatinose works best in moderate doses.

Important: Palatinose works best combined with other foods and carbohydrates. It should not be your only energy source. Use it as a complement to your pre-round meal and on-course snacks.

Not recommended as sole carb source in high amounts (above 40g at once) as it may cause gastric discomfort. Keep doses moderate for best results.

Test before competition: Like any new supplement, test Palatinose during practice rounds before using it in tournaments. Every body reacts differently.`
      },
      {
        title: "Where to Find It",
        icon: "🛒",
        text: `There are two main ways to consume Palatinose:

Pure Palatinose powder: Brands like GymBeam, BlackSkull, and HSN Store sell pure Palatinose powder. This is the most versatile option — you control the dose and can mix it in water, shakes, or smoothies.

Pre-workouts with Palatinose: Products like GoldNutrition Pre-Workout Endurance already include Palatinose combined with BCAAs, caffeine, tyrosine, and electrolytes. More convenient but less dose control. ARMA Sport BLITZ also uses Palatinose in its formula.

Sports drinks: Momentous Fuel is a sports drink with Palatinose and electrolytes, NSF Certified for Sport.

For golfers, the recommendation is to start with pure Palatinose powder — it's cheaper, more flexible, and allows you to adjust the dose exactly as needed.`
      },
      {
        title: "Palatinose vs Other Supplements",
        icon: "⚖️",
        isCompare: true,
        compareData: [
          { name: "Palatinose", pros: "Sustained energy, no spike/crash, promotes fat burning, no GI discomfort", cons: "Slower energy (not ideal for sprints), more expensive than sugar", best: "Golf, long-duration sports", color: "#4a7c59" },
          { name: "Maltodextrin", pros: "Fast energy, cheap, widely available", cons: "Glucose spike and crash, doesn't promote fat burning", best: "Short high-intensity sports", color: "#a04040" },
          { name: "Sports Drinks (Gatorade)", pros: "Hydration + electrolytes + fast energy", cons: "High sugar, spike and crash, can cause thirst", best: "Intense sports with heavy sweating", color: "#d4a847" },
          { name: "Energy Gels", pros: "Compact, fast energy, easy to carry", cons: "Spike and crash, can cause nausea, unpleasant texture", best: "Running, high-intensity cycling", color: "#6b5b7b" },
        ]
      },
      {
        title: "Frequently Asked Questions",
        icon: "❓",
        text: `Is Palatinose safe? Yes. It's a natural carbohydrate found in honey and derived from sugar beet. It's approved as safe food in the EU, USA, Japan, and Brazil. It's not a stimulant or medication.

Can I use it if I'm diabetic? Palatinose has a very low glycemic index and studies show benefits for glycemic control. However, always consult your doctor before using any supplement if you have diabetes.

Does it taste bad? No. Palatinose has a mildly sweet taste (about 30% of sugar's sweetness). Mixed in water, the taste is neutral and pleasant.

Can I mix it with coffee? Yes! You can replace sugar in your pre-round coffee. It will lightly sweeten and provide sustained energy.

How long does it take to work? Palatinose begins releasing energy about 20-30 minutes after ingestion and maintains stable levels for 3-4 hours.

Is it banned in competition? No. Palatinose is not a substance prohibited by WADA or any sports federation. It's simply a carbohydrate.

Can children use it? Palatinose is safe for all ages, but for children a nutritionist's guidance is recommended to define the appropriate dose.`
      }
    ],
  }
};

export default function PalatinoseArticle() {
  const [lang, setLang] = useState("pt");
  const l = content[lang];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 24px", borderBottom: `1px solid ${C.border}`,
        background: "#ffffffee", position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(12px)",
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontSize: "1.4rem" }}>⛳</span>
          <span style={{ fontSize: "1.15rem", fontWeight: 800, color: C.dark, fontFamily: "Georgia, serif" }}>Tacada Golf</span>
        </a>
        <button onClick={() => setLang(lang === "en" ? "pt" : "en")} style={{
          background: C.cream, border: `1px solid ${C.border}`, borderRadius: 8,
          padding: "6px 14px", color: C.text, fontSize: "0.75rem", fontWeight: 600, cursor: "pointer",
        }}>{lang === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}</button>
      </nav>

      <div style={{ maxWidth: 750, margin: "0 auto", padding: "0 24px" }}>
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.82rem", color: C.accent, textDecoration: "none", fontWeight: 500 }}>{l.back}</a>

        <div style={{ marginTop: 16, marginBottom: 36 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#8a5a6b", background: "#8a5a6b15", padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "14px 0 8px", lineHeight: 1.2, color: C.dark, fontFamily: "Georgia, serif" }}>{l.title}</h1>
          <p style={{ fontSize: "0.92rem", color: C.muted, margin: "0 0 8px", lineHeight: 1.6 }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: "1.4rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, color: C.dark, fontFamily: "Georgia, serif" }}>{sec.title}</h2>
            </div>

            {sec.isGI ? (
              <div style={{ background: C.card, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 16 }}>
                {sec.giData.map((item, j) => (
                  <div key={j} style={{ marginBottom: j < sec.giData.length - 1 ? 10 : 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: "0.82rem", color: C.text, fontWeight: 600 }}>{item.name}</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: item.color }}>IG {item.gi}</span>
                    </div>
                    <div style={{ background: C.card2, borderRadius: 6, height: 16, overflow: "hidden" }}>
                      <div style={{ width: `${(item.gi / 110) * 100}%`, height: "100%", background: `${item.color}cc`, borderRadius: 6 }} />
                    </div>
                  </div>
                ))}
                <p style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.8, marginTop: 16 }}>{sec.text}</p>
              </div>
            ) : sec.isTimeline ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {sec.timeline.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.card, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", border: `2px solid ${C.accent}40`, boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>{item.emoji}</div>
                      {j < sec.timeline.length - 1 && <div style={{ width: 2, height: 30, background: C.border, margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: j < sec.timeline.length - 1 ? 12 : 0 }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: C.accent }}>{item.time}</div>
                      <div style={{ fontSize: "0.84rem", color: C.muted, lineHeight: 1.6, marginTop: 2 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sec.isCompare ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.compareData.map((item, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "18px 20px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: item.color, fontFamily: "Georgia, serif", marginBottom: 10 }}>{item.name}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div><span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.accent }}>✅ </span><span style={{ fontSize: "0.82rem", color: C.muted }}>{item.pros}</span></div>
                      <div><span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#a04040" }}>⚠️ </span><span style={{ fontSize: "0.82rem", color: C.muted }}>{item.cons}</span></div>
                      <div><span style={{ fontSize: "0.72rem", fontWeight: 700, color: C.gold }}>🎯 </span><span style={{ fontSize: "0.82rem", color: C.text, fontWeight: 600 }}>{item.best}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: C.card, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.85, margin: j === 0 ? 0 : "16px 0 0" }}>
                    {para.split("\n").map((line, k) => {
                      const isBold = /^(Glicose no sangue|More stable blood|Maior queima|Higher fat|Melhor performance|Better end|Mais potência|More power|Nenhum efeito|Zero side|Energia por|Energy for|Concentração|Maintained conc|Preservação|Glycogen pres|Sem desconforto|No gastric|Compatível|Compatible|Dose pré|Pre-round dose|Dose durante|During the round|Dose máxima|Maximum dose|Importante:|Important:|Não é recomendada|Not recommended|Teste antes|Test before|Palatinose em pó|Pure Palatinose|Pré-treinos|Pre-workouts|Bebidas esportivas|Sports drinks|Para golfistas|For golfers|A Palatinose é segura|Is Palatinose safe|Posso usar se|Can I use it|Tem gosto|Does it taste|Posso misturar|Can I mix|Quanto tempo|How long|É proibida|Is it banned|Crianças|Can children|O estudo:|The study:)/.test(line.trim());
                      return (
                        <span key={k}>
                          {isBold ? <><br/><strong style={{ color: C.dark }}>{line}</strong></> : line}
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

        <div style={{ textAlign: "center", padding: "34px 0 24px", borderTop: `1px solid ${C.border}`, marginTop: 24 }}>
          <a href="/" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8, textDecoration: "none" }}>
            <span style={{ fontSize: "1.1rem" }}>⛳</span>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: C.dark, fontFamily: "Georgia, serif" }}>Tacada Golf</span>
          </a>
          <p style={{ fontSize: "0.65rem", color: C.dim }}>© 2026 Tacada Golf. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

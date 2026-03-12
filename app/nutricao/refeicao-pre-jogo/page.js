"use client";
import { useState } from "react";

const C = {
  bg: "#f8f6f1", card: "#ffffff", card2: "#f0ede6",
  accent: "#4a7c59", accentLight: "#6b9e7a",
  gold: "#b8860b", goldLight: "#d4a847",
  cream: "#f5f1e8", dark: "#1a2e1a",
  text: "#2d3a2e", muted: "#6b7c6b", dim: "#99a899",
  border: "#d4cfc2", borderLight: "#e8e3d9",
  red: "#a04040", blue: "#4a6b8a", purple: "#6b5b7b",
};

const content = {
  pt: {
    back: "← Voltar ao Início",
    title: "Guia de Refeição Pré-Jogo",
    subtitle: "O que comer antes de jogar golfe para manter energia e concentração nos 18 buracos",
    reading: "10 min de leitura",
    tag: "NUTRIÇÃO",
    sections: [
      {
        title: "Por Que a Refeição Pré-Jogo é Tão Importante?",
        icon: "🎯",
        text: `Uma volta de golfe dura entre 4 e 5 horas. Nesse tempo, seu corpo queima entre 1.300 e 2.000 calorias, dependendo se você está caminhando ou usando carrinho. Seu cérebro também está trabalhando intensamente — cada tacada exige concentração, cálculo de distância e controle emocional.

Se você não se alimentar corretamente antes do jogo, a queda de energia e concentração nos últimos 9 buracos é praticamente inevitável. Aquela sensação de fadiga mental, tacadas imprecisas e decisões ruins no back nine geralmente não é falta de técnica — é falta de combustível.

A boa notícia: com uma refeição pré-jogo bem planejada, você pode manter a energia estável do primeiro ao último buraco.`
      },
      {
        title: "Quando Comer?",
        icon: "⏰",
        text: `O timing é tão importante quanto o que você come:

2 a 3 horas antes do tee time: Esta é a janela ideal para a refeição principal. Dá tempo suficiente para a digestão sem que você sinta peso ou desconforto no estômago durante o swing.

30 a 45 minutos antes: Um pequeno snack leve pode dar um boost final de energia. Nada pesado — apenas algo para garantir que seus níveis de glicose estão estáveis.

Evite comer uma refeição grande menos de 1 hora antes do jogo. A digestão compete com a performance — o sangue vai para o estômago em vez de ir para os músculos e o cérebro.`
      },
      {
        title: "Os 3 Pilares da Refeição Pré-Jogo",
        icon: "🏛️",
        text: `Toda refeição pré-jogo deve ter um equilíbrio entre três macronutrientes:

Carboidratos Complexos (50-60% da refeição): São o combustível principal. Carboidratos complexos liberam energia de forma lenta e constante, evitando picos e quedas de glicose. Exemplos: aveia, pão integral, batata doce, arroz integral, frutas.

Proteína Magra (20-30%): Ajuda a manter a saciedade e previne a quebra muscular durante a volta. Exemplos: ovos, frango grelhado, iogurte grego, queijo cottage.

Gorduras Saudáveis (15-20%): Fornecem energia de longa duração e ajudam na absorção de nutrientes. Exemplos: abacate, nozes, azeite de oliva, manteiga de amendoim.

A chave é evitar açúcares simples e carboidratos refinados (pão branco, doces, refrigerantes) que causam picos rápidos de glicose seguidos de quedas bruscas — exatamente o que causa a fadiga no back nine.`
      },
      {
        title: "5 Refeições Pré-Jogo Ideais",
        icon: "🍽️",
        isMenu: true,
        meals: [
          {
            name: "Café da Manhã Clássico do Golfista",
            time: "Para tee times pela manhã",
            items: ["2 ovos mexidos ou cozidos", "1 fatia de pão integral com abacate", "1 banana", "Café ou chá verde (com moderação)"],
            why: "Proteína dos ovos + carboidratos complexos do pão + potássio da banana para os músculos"
          },
          {
            name: "Bowl de Aveia Energético",
            time: "Para tee times pela manhã",
            items: ["Aveia com leite ou água", "Frutas vermelhas (morango, mirtilo)", "1 colher de manteiga de amendoim", "Sementes de chia ou linhaça"],
            why: "Liberação lenta de energia + antioxidantes + gorduras saudáveis para sustentação"
          },
          {
            name: "Wrap de Frango",
            time: "Para tee times ao meio-dia",
            items: ["Wrap integral com frango grelhado", "Alface, tomate e abacate", "Acompanhado de frutas frescas", "Água com limão"],
            why: "Refeição completa e leve, fácil de digerir, com todos os macronutrientes equilibrados"
          },
          {
            name: "Smoothie Power",
            time: "Para quem tem pouco tempo",
            items: ["Banana + espinafre + proteína whey", "Leite de amêndoa ou água de coco", "1 colher de manteiga de amendoim", "Gelo"],
            why: "Rápido de preparar, fácil de digerir, rico em nutrientes e hidratação"
          },
          {
            name: "Salada Mediterrânea",
            time: "Para tee times à tarde",
            items: ["Quinoa ou arroz integral", "Frango grelhado ou atum", "Legumes variados + azeite", "Nozes ou amêndoas"],
            why: "Leve mas nutritiva, com carboidratos de baixo índice glicêmico e proteína de qualidade"
          },
        ]
      },
      {
        title: "O Que Evitar Antes do Jogo",
        icon: "🚫",
        text: `Alguns alimentos e bebidas podem sabotar sua performance:

Frituras e fast food: Demoram muito para digerir e causam sensação de peso. Um hambúrguer com batata frita antes do jogo é receita para desastre.

Açúcar refinado e doces: Causam pico rápido de energia seguido de queda brusca. Barras de chocolate, donuts e refrigerantes são os piores inimigos do golfista.

Excesso de cafeína: Uma xícara de café é OK, mas exagerar pode causar ansiedade, tremor nas mãos e desidratação — tudo péssimo para o golfe.

Álcool: Mesmo uma cerveja pode afetar coordenação, julgamento e tempo de reação. Guarde para o 19º buraco.

Refeições muito grandes: Comer demais desvia sangue para a digestão e causa sonolência. Melhor comer moderadamente e complementar com snacks durante a volta.

Alimentos que causam gases: Feijão, brócolis cru, repolho — podem causar desconforto durante a volta.`
      },
      {
        title: "Hidratação: O Fator Esquecido",
        icon: "💧",
        text: `A hidratação começa ANTES do jogo, não durante. Muitos golfistas só começam a beber água no campo e já chegam desidratados.

Na noite anterior: Beba pelo menos 500ml de água antes de dormir.

Ao acordar: Beba 300-500ml de água assim que levantar. Seu corpo ficou 6-8 horas sem líquido.

Antes do tee time: Beba 250-500ml de água nos 30 minutos antes de jogar.

Uma perda de apenas 1-2% do peso corporal em água já causa queda mensurável na concentração, tempo de reação e coordenação motora. Para um jogador de 80kg, isso são apenas 800ml a 1.6L de suor — facilmente perdidos em um dia quente.

Dica: Sua urina deve estar clara ou levemente amarelada. Se estiver escura, você já está desidratado.`
      },
      {
        title: "O Segredo: Palatinose no Pré-Jogo",
        icon: "🧪",
        text: `Se você quer levar sua nutrição pré-jogo ao próximo nível, considere adicionar Palatinose (isomaltulose) à sua rotina.

A Palatinose é um carboidrato de baixo índice glicêmico (IG 32, comparado a 100 da maltodextrina) que fornece energia de forma lenta e constante. Em estudos com ciclistas, atletas que consumiram Palatinose antes do exercício mantiveram níveis estáveis de glicose no sangue e tiveram 2.7% melhor desempenho no sprint final.

Para o golfe, isso se traduz em energia constante e concentração mantida até o buraco 18 — exatamente o que falta quando você sente aquela queda no back nine.

Como usar: Misture 15-20g de Palatinose em pó em 250-300ml de água e tome 30-45 minutos antes do tee time, junto com sua refeição pré-jogo. Você também pode preparar uma garrafa com mais 15-20g para beber durante a volta.

A Palatinose pode ser encontrada em pó puro (GymBeam, BlackSkull, HSN Store) ou em pré-treinos específicos como o GoldNutrition Pre-Workout Endurance.`
      },
      {
        title: "Protocolo Completo: Dia de Jogo",
        icon: "📋",
        isTimeline: true,
        timeline: [
          { time: "Noite anterior", text: "Jantar equilibrado com carboidratos complexos. Beba 500ml de água.", emoji: "🌙" },
          { time: "Ao acordar", text: "300-500ml de água imediatamente. Prepare sua refeição pré-jogo.", emoji: "☀️" },
          { time: "2-3h antes do tee", text: "Refeição principal: carboidratos complexos + proteína + gordura saudável.", emoji: "🍽️" },
          { time: "30-45 min antes", text: "Snack leve: banana ou barra de proteína. Palatinose + água.", emoji: "🍌" },
          { time: "No tee box", text: "Garrafa de água com eletrólitos pronta. Comece hidratado e energizado.", emoji: "⛳" },
          { time: "Buracos 4-6", text: "Primeiro snack: nozes, fruta seca ou barra de granola.", emoji: "🥜" },
          { time: "Buracos 7-9", text: "Hidrate-se. Considere um gole da bebida com Palatinose.", emoji: "💧" },
          { time: "Na viragem", text: "Snack substancial: sanduíche integral, jerky + fruta. Evite hambúrguer e cerveja.", emoji: "🥪" },
          { time: "Buracos 13-15", text: "Último snack: trail mix ou barra energética.", emoji: "🔋" },
          { time: "Buracos 16-18", text: "Água + foco total. A Palatinose está trabalhando para você.", emoji: "🏆" },
        ]
      },
      {
        title: "Perguntas Frequentes",
        icon: "❓",
        text: `E se eu jogo cedo e não tenho tempo para comer 2-3 horas antes? Opte por um smoothie ou aveia leve — são mais fáceis de digerir. Coma pelo menos 1 hora antes e mantenha a refeição menor do que o normal.

Posso tomar café antes de jogar? Sim, com moderação. Uma xícara está OK e pode até ajudar na concentração. Evite mais de 2 xícaras e sempre acompanhe com água.

Devo comer diferente se estiver muito calor? Em dias quentes, priorize ainda mais a hidratação e adicione eletrólitos. Prefira refeições mais leves e frutas com alto teor de água (melancia, laranja).

Bebidas esportivas são uma boa opção? Depende. Muitas são cheias de açúcar, que causa pico e queda de energia. Prefira água com eletrólitos ou uma bebida com Palatinose para energia sustentada.

E se eu estiver em dieta low-carb? Mesmo em dieta low-carb, inclua alguns carboidratos antes do jogo. O golfe é longo demais para depender apenas de gordura como combustível. Opte por pequenas porções de frutas ou aveia.`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "Pre-Round Meal Guide",
    subtitle: "What to eat before playing golf to maintain energy and focus for all 18 holes",
    reading: "10 min read",
    tag: "NUTRITION",
    sections: [
      {
        title: "Why is the Pre-Round Meal So Important?",
        icon: "🎯",
        text: `A round of golf lasts between 4 and 5 hours. During that time, your body burns between 1,300 and 2,000 calories, depending on whether you're walking or riding. Your brain is also working intensely — every shot requires concentration, distance calculation, and emotional control.

If you don't eat properly before the game, the energy and concentration drop on the back nine is practically inevitable. That feeling of mental fatigue, imprecise shots, and poor decisions on the back nine usually isn't a lack of technique — it's a lack of fuel.

The good news: with a well-planned pre-round meal, you can maintain stable energy from the first to the last hole.`
      },
      {
        title: "When to Eat?",
        icon: "⏰",
        text: `Timing is just as important as what you eat:

2 to 3 hours before tee time: This is the ideal window for the main meal. It gives enough time for digestion without feeling heavy or uncomfortable during your swing.

30 to 45 minutes before: A small light snack can give a final energy boost. Nothing heavy — just something to ensure your glucose levels are stable.

Avoid eating a large meal less than 1 hour before the game. Digestion competes with performance — blood goes to the stomach instead of muscles and brain.`
      },
      {
        title: "The 3 Pillars of a Pre-Round Meal",
        icon: "🏛️",
        text: `Every pre-round meal should have a balance of three macronutrients:

Complex Carbohydrates (50-60% of the meal): The main fuel source. Complex carbs release energy slowly and steadily, avoiding glucose spikes and crashes. Examples: oatmeal, whole grain bread, sweet potato, brown rice, fruits.

Lean Protein (20-30%): Helps maintain satiety and prevents muscle breakdown during the round. Examples: eggs, grilled chicken, Greek yogurt, cottage cheese.

Healthy Fats (15-20%): Provide long-lasting energy and help with nutrient absorption. Examples: avocado, nuts, olive oil, peanut butter.

The key is avoiding simple sugars and refined carbs (white bread, sweets, sodas) that cause rapid glucose spikes followed by sharp drops — exactly what causes fatigue on the back nine.`
      },
      {
        title: "5 Ideal Pre-Round Meals",
        icon: "🍽️",
        isMenu: true,
        meals: [
          {
            name: "The Classic Golfer's Breakfast",
            time: "For morning tee times",
            items: ["2 scrambled or boiled eggs", "1 slice whole grain toast with avocado", "1 banana", "Coffee or green tea (in moderation)"],
            why: "Protein from eggs + complex carbs from bread + potassium from banana for muscles"
          },
          {
            name: "Power Oatmeal Bowl",
            time: "For morning tee times",
            items: ["Oatmeal with milk or water", "Berries (strawberry, blueberry)", "1 spoon of peanut butter", "Chia or flax seeds"],
            why: "Slow energy release + antioxidants + healthy fats for sustained energy"
          },
          {
            name: "Chicken Wrap",
            time: "For midday tee times",
            items: ["Whole grain wrap with grilled chicken", "Lettuce, tomato, and avocado", "Side of fresh fruits", "Lemon water"],
            why: "Complete and light meal, easy to digest, with all macronutrients balanced"
          },
          {
            name: "Power Smoothie",
            time: "When short on time",
            items: ["Banana + spinach + whey protein", "Almond milk or coconut water", "1 spoon of peanut butter", "Ice"],
            why: "Quick to prepare, easy to digest, rich in nutrients and hydration"
          },
          {
            name: "Mediterranean Salad",
            time: "For afternoon tee times",
            items: ["Quinoa or brown rice", "Grilled chicken or tuna", "Mixed vegetables + olive oil", "Walnuts or almonds"],
            why: "Light but nutritious, with low glycemic index carbs and quality protein"
          },
        ]
      },
      {
        title: "What to Avoid Before Playing",
        icon: "🚫",
        text: `Some foods and drinks can sabotage your performance:

Fried food and fast food: Takes too long to digest and causes a heavy feeling. A burger and fries before the game is a recipe for disaster.

Refined sugar and sweets: Cause a rapid energy spike followed by a sharp crash. Chocolate bars, donuts, and sodas are the golfer's worst enemies.

Excess caffeine: One cup of coffee is OK, but overdoing it can cause anxiety, hand tremors, and dehydration — all terrible for golf.

Alcohol: Even one beer can affect coordination, judgment, and reaction time. Save it for the 19th hole.

Very large meals: Overeating diverts blood to digestion and causes drowsiness. Better to eat moderately and supplement with snacks during the round.

Gas-producing foods: Beans, raw broccoli, cabbage — can cause discomfort during the round.`
      },
      {
        title: "Hydration: The Forgotten Factor",
        icon: "💧",
        text: `Hydration starts BEFORE the game, not during. Many golfers only start drinking water on the course and arrive already dehydrated.

The night before: Drink at least 500ml of water before bed.

When you wake up: Drink 300-500ml of water immediately. Your body went 6-8 hours without fluids.

Before tee time: Drink 250-500ml of water in the 30 minutes before playing.

A loss of just 1-2% of body weight in water already causes measurable drops in concentration, reaction time, and motor coordination. For an 80kg player, that's only 800ml to 1.6L of sweat — easily lost on a hot day.

Tip: Your urine should be clear or slightly yellow. If it's dark, you're already dehydrated.`
      },
      {
        title: "The Secret: Palatinose Pre-Round",
        icon: "🧪",
        text: `If you want to take your pre-round nutrition to the next level, consider adding Palatinose (isomaltulose) to your routine.

Palatinose is a low glycemic index carbohydrate (GI 32, compared to 100 for maltodextrin) that provides energy slowly and steadily. In studies with cyclists, athletes who consumed Palatinose before exercise maintained stable blood glucose levels and performed 2.7% better in the final sprint.

For golf, this translates to constant energy and maintained focus through hole 18 — exactly what's missing when you feel that back nine drop.

How to use: Mix 15-20g of Palatinose powder in 250-300ml of water and take it 30-45 minutes before tee time, along with your pre-round meal. You can also prepare a bottle with another 15-20g to drink during the round.

Palatinose can be found as pure powder (GymBeam, BlackSkull, HSN Store) or in specific pre-workouts like GoldNutrition Pre-Workout Endurance.`
      },
      {
        title: "Complete Protocol: Game Day",
        icon: "📋",
        isTimeline: true,
        timeline: [
          { time: "Night before", text: "Balanced dinner with complex carbs. Drink 500ml of water.", emoji: "🌙" },
          { time: "Wake up", text: "300-500ml of water immediately. Prepare your pre-round meal.", emoji: "☀️" },
          { time: "2-3h before tee", text: "Main meal: complex carbs + protein + healthy fat.", emoji: "🍽️" },
          { time: "30-45 min before", text: "Light snack: banana or protein bar. Palatinose + water.", emoji: "🍌" },
          { time: "On the tee box", text: "Water bottle with electrolytes ready. Start hydrated and energized.", emoji: "⛳" },
          { time: "Holes 4-6", text: "First snack: nuts, dried fruit, or granola bar.", emoji: "🥜" },
          { time: "Holes 7-9", text: "Hydrate. Consider a sip of your Palatinose drink.", emoji: "💧" },
          { time: "At the turn", text: "Substantial snack: whole grain sandwich, jerky + fruit. Skip the burger and beer.", emoji: "🥪" },
          { time: "Holes 13-15", text: "Last snack: trail mix or energy bar.", emoji: "🔋" },
          { time: "Holes 16-18", text: "Water + total focus. Palatinose is working for you.", emoji: "🏆" },
        ]
      },
      {
        title: "Frequently Asked Questions",
        icon: "❓",
        text: `What if I play early and don't have time to eat 2-3 hours before? Opt for a smoothie or light oatmeal — they're easier to digest. Eat at least 1 hour before and keep the meal smaller than usual.

Can I drink coffee before playing? Yes, in moderation. One cup is OK and can even help with focus. Avoid more than 2 cups and always accompany with water.

Should I eat differently in hot weather? On hot days, prioritize hydration even more and add electrolytes. Prefer lighter meals and fruits with high water content (watermelon, orange).

Are sports drinks a good option? It depends. Many are full of sugar, which causes energy spikes and crashes. Prefer water with electrolytes or a Palatinose drink for sustained energy.

What if I'm on a low-carb diet? Even on a low-carb diet, include some carbs before the game. Golf is too long to rely solely on fat as fuel. Opt for small portions of fruit or oatmeal.`
      }
    ],
  }
};

export default function PreRoundMeal() {
  const [lang, setLang] = useState("pt");
  const l = content[lang];

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: C.bg, color: C.text, minHeight: "100vh" }}>
      {/* Nav */}
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
        <a href="/" style={{ display: "inline-block", marginTop: 20, fontSize: "0.82rem", color: C.accent, textDecoration: "none", fontWeight: 500 }}>
          {l.back}
        </a>

        {/* Header */}
        <div style={{ marginTop: 16, marginBottom: 36 }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.accent, background: `${C.accent}15`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, margin: "14px 0 8px", lineHeight: 1.2, color: C.dark, fontFamily: "Georgia, serif" }}>{l.title}</h1>
          <p style={{ fontSize: "0.92rem", color: C.muted, margin: "0 0 8px", lineHeight: 1.6 }}>{l.subtitle}</p>
          <span style={{ fontSize: "0.75rem", color: C.dim }}>📖 {l.reading}</span>
        </div>

        {/* Content */}
        {l.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ fontSize: "1.4rem" }}>{sec.icon}</span>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, margin: 0, color: C.dark, fontFamily: "Georgia, serif" }}>{sec.title}</h2>
            </div>

            {sec.isMenu ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {sec.meals.map((meal, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "20px 22px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontSize: "0.95rem", fontWeight: 700, color: C.dark, fontFamily: "Georgia, serif" }}>{meal.name}</span>
                      <span style={{ fontSize: "0.68rem", color: C.accent, background: `${C.accent}12`, padding: "3px 10px", borderRadius: 6, fontWeight: 600 }}>{meal.time}</span>
                    </div>
                    <div style={{ marginBottom: 10 }}>
                      {meal.items.map((item, k) => (
                        <div key={k} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ color: C.accent, fontSize: "0.7rem" }}>●</span>
                          <span style={{ fontSize: "0.84rem", color: C.text }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: C.muted, fontStyle: "italic", borderTop: `1px solid ${C.borderLight}`, paddingTop: 10 }}>
                      💡 {meal.why}
                    </div>
                  </div>
                ))}
              </div>
            ) : sec.isTimeline ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {sec.timeline.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: C.card, display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.1rem", border: `2px solid ${C.accent}40`,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
                      }}>{item.emoji}</div>
                      {j < sec.timeline.length - 1 && <div style={{ width: 2, height: 30, background: C.border, margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: j < sec.timeline.length - 1 ? 12 : 0 }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 700, color: C.accent }}>{item.time}</div>
                      <div style={{ fontSize: "0.84rem", color: C.muted, lineHeight: 1.6, marginTop: 2 }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: C.card, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.85, margin: j === 0 ? 0 : "16px 0 0" }}>
                    {para.split("\n").map((line, k) => {
                      const isBold = /^(2 a 3 horas|2 to 3 hours|30 a 45 minutos|30 to 45 minutes|Evite comer|Avoid eating|Carboidratos Complexos|Complex Carbohydrates|Proteína Magra|Lean Protein|Gorduras Saudáveis|Healthy Fats|A chave|The key|Frituras|Fried food|Açúcar refinado|Refined sugar|Excesso de cafeína|Excess caffeine|Álcool|Alcohol|Refeições muito grandes|Very large meals|Alimentos que causam|Gas-producing|Na noite anterior|The night before|Ao acordar|When you wake|Antes do tee|Before tee|Uma perda|A loss|Dica:|Tip:|A Palatinose|Palatinose is|Para o golfe|For golf|Como usar|How to use|E se eu jogo|What if I play|Posso tomar|Can I drink|Devo comer|Should I eat|Bebidas esportivas|Are sports drinks|E se eu estiver|What if I'm)/.test(line.trim());
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

        {/* Footer */}
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

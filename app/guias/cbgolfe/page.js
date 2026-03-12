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
    title: "CBGolfe: Guia Prático do Golfista Brasileiro",
    subtitle: "Tudo que você precisa saber sobre a Confederação Brasileira de Golfe — como se filiar, tirar seu handicap e participar de torneios",
    reading: "10 min de leitura",
    tag: "GUIA ESSENCIAL",
    sections: [
      {
        title: "O Que é a CBGolfe?",
        icon: "🏛️",
        text: `A Confederação Brasileira de Golfe (CBGolfe) é a entidade oficial que regulamenta, organiza e desenvolve o golfe no Brasil. Fundada em 1958 como Associação Brasileira de Golfe (ABG), foi transformada em confederação em 1976 e rebatizada como CBGolfe em 2019.

A CBGolfe é uma associação sem fins lucrativos responsável por dirigir, propagar e desenvolver o golfe nacional. É o órgão normativo e disciplinar do esporte no Brasil, reconhecido por entidades internacionais.

Está filiada ao R&A (Royal and Ancient Golf Club of St Andrews), à Federação Sul-Americana de Golfe, à International Golf Federation (IGF) e ao Comitê Olímpico do Brasil (COB).

Curiosidade: O Brasil e os Estados Unidos são os únicos dois países que participaram de todos os Campeonatos Mundiais Amadores de Golfe desde a primeira edição.

Site oficial: cbgolfe.com.br`
      },
      {
        title: "O Que a CBGolfe Faz Por Você?",
        icon: "⛳",
        text: `Como golfista brasileiro, a CBGolfe impacta diretamente o seu jogo de várias formas:

Sistema de Handicap: A CBGolfe gerencia o cadastro oficial de handicap de todos os golfistas amadores do Brasil, usando o World Handicap System (WHS). Sem a CBGolfe, você não teria handicap oficial.

Torneios e Competições: Organiza os principais campeonatos nacionais — o Aberto do Brasil, o Amador do Brasil, o Brasileiro Juvenil e dezenas de outras competições ao longo do ano.

Rankings: Mantém os rankings nacionais amadores (masculino e feminino) e juvenis em diversas categorias, além do ranking profissional.

Regras e Regulamentos: Define as regras oficiais do golfe no Brasil, alinhadas com o R&A, incluindo o Hard Card, Livro de Regras e Código de Conduta Esportiva.

Desenvolvimento: Programas como o "Golfe Para a Vida" e os Polos de Desenvolvimento incentivam novos jogadores e formam atletas de alto rendimento.

Representação Internacional: Seleciona e organiza as equipes que representam o Brasil em competições internacionais como o Campeonato Sul-Americano (Copa Los Andes) e o Mundial Amador.`
      },
      {
        title: "As 7 Federações Estaduais",
        icon: "🗺️",
        isFederations: true,
        federations: [
          { name: "Federação Paulista de Golfe (FPGolfe)", region: "São Paulo + MS + MG", desc: "A maior federação do Brasil, com mais de 46 clubes filiados. Possui dois campos próprios, incluindo o Honda Golf Center em Congonhas, SP.", link: "fpgolfe.com.br" },
          { name: "Federação Riograndense de Golfe (FRGG)", region: "Rio Grande do Sul", desc: "Fundada em 1966, é a mais antiga federação estadual do Brasil.", link: "frgg.com.br" },
          { name: "Federação de Golfe do Estado do RJ (FGERJ)", region: "Rio de Janeiro", desc: "Criada em 1976, abrange os clubes do estado do Rio de Janeiro.", link: "fgerj.com.br" },
          { name: "Federação Paranaense e Catarinense de Golfe", region: "Paraná + Santa Catarina", desc: "Representa os dois estados do sul do Brasil.", link: "" },
          { name: "Federação Baiana de Golfe", region: "Bahia", desc: "Abrange os clubes e campos da Bahia.", link: "" },
          { name: "Federação Pernambucana de Golfe", region: "Pernambuco", desc: "Representa o golfe no nordeste brasileiro.", link: "" },
          { name: "Federação Norte de Golfe", region: "Região Norte", desc: "Abrange os estados da região norte do Brasil.", link: "" },
        ]
      },
      {
        title: "Como Se Filiar e Tirar Seu Handicap",
        icon: "📋",
        isSteps: true,
        steps: [
          { num: "1", title: "Escolha um Clube Filiado", desc: "Você precisa ser sócio de um clube de golfe que seja filiado à CBGolfe (através de uma das federações estaduais). Consulte a lista de campos filiados em cbgolfe.com.br. Não é necessário ser sócio proprietário — muitos clubes oferecem modalidades de sócio esportivo ou frequentador." },
          { num: "2", title: "Solicite Seu Cadastro", desc: "Peça ao profissional de golfe do seu clube ou à secretaria para cadastrá-lo no sistema da CBGolfe. Eles precisarão dos seus dados pessoais e email válido. O clube é responsável pelo seu cadastro — a CBGolfe não faz cadastros diretos." },
          { num: "3", title: "Jogue Suas Primeiras Voltas", desc: "Você precisa de no mínimo 3 voltas de 18 buracos (ou o equivalente em voltas de 9 buracos) registradas oficialmente para obter seu primeiro handicap. Jogue com um marcador oficial e entregue seus scorecards assinados ao clube." },
          { num: "4", title: "Receba Seu Handicap", desc: "Após as voltas mínimas serem registradas no sistema, seu handicap será calculado automaticamente usando o World Handicap System. O handicap máximo inicial é 54.0." },
          { num: "5", title: "Acesse a Área do Golfista", desc: "Com seu cadastro ativo, você recebe login e senha para acessar a Área do Golfista no site da CBGolfe. Lá você pode consultar seu handicap, histórico de voltas e ranking. Se não recebeu a senha, entre em contato com seu clube para atualizar seu email." },
          { num: "6", title: "Mantenha Seu Handicap Atualizado", desc: "Continue registrando suas voltas. Quanto mais voltas você registrar, mais preciso será seu handicap. No sistema WHS, o handicap é atualizado diariamente. Registre tanto as boas quanto as más voltas — isso reflete seu jogo real." },
        ]
      },
      {
        title: "Como Participar de Torneios",
        icon: "🏆",
        text: `Participar de torneios oficiais é mais acessível do que muitos pensam. Existem várias categorias e níveis:

Torneios do Clube: A forma mais fácil de começar. A maioria dos clubes filiados organiza torneios internos mensais ou semanais. Geralmente basta ser sócio e ter handicap válido para participar.

Abertos Estaduais: Organizados pelos clubes com chancela das federações estaduais. São abertos a qualquer golfista com handicap válido. Consulte o calendário no site da sua federação.

Campeonatos Estaduais: Organizados pelas federações. Podem ter critérios de handicap máximo para participação. Ótimo próximo passo depois dos torneios de clube.

Campeonatos Nacionais: Organizados pela CBGolfe. Incluem o Aberto do Brasil, o Amador do Brasil e o Brasileiro Juvenil. Geralmente exigem classificação ou handicap baixo.

Golfe Solidário: Uma competição especial criada pela CBGolfe em parceria com as federações, onde as seletivas arrecadam cestas básicas para populações carentes. Uma forma de competir e fazer o bem ao mesmo tempo.

Para se inscrever: A maioria das inscrições é feita pelo site cbg.bluegolf.com, onde você encontra o calendário completo de competições com datas, locais e formulários de inscrição.`
      },
      {
        title: "Calendário e Rankings",
        icon: "📅",
        text: `A CBGolfe mantém um calendário anual robusto de competições em todo o Brasil:

Calendário de Competições: Disponível em cbg.bluegolf.com, lista todos os torneios oficiais com datas, locais e categorias. Em 2025, só a Federação Paulista organizou mais de 67 competições.

Rankings Nacionais: A CBGolfe mantém rankings nas seguintes categorias: Nacional Amador Masculino, Nacional Amador Feminino, e categorias Juvenis (A até F, masculino e feminino), além do Ranking Profissional e Ranking de PCDs.

Ranking Mundial (WAGR): Alguns torneios brasileiros valem pontos para o World Amateur Golf Ranking (WAGR), o ranking mundial amador. Participar desses torneios pode colocar você no mapa internacional.

Programa Bolsa Atleta: A CBGolfe administra o programa Bolsa Atleta para golfistas brasileiros de alto rendimento, oferecendo suporte financeiro para treinamento e competições.`
      },
      {
        title: "Programas de Desenvolvimento",
        icon: "🌱",
        text: `A CBGolfe oferece vários programas para desenvolver o golfe no Brasil:

Golfe Para a Vida: Programa social que usa o golfe como ferramenta de educação e cidadania. Atende jovens em comunidades de baixa renda, ensinando não apenas o esporte mas também valores como disciplina, respeito e ética.

Polos de Desenvolvimento: Centros regionais que identificam e desenvolvem jovens talentos do golfe brasileiro, oferecendo estrutura, treinamento e competições.

Alto Rendimento: Programa dedicado aos atletas de elite, com suporte para treinamento de alto nível e participação em competições internacionais.

Golfe Chave para o Futuro: Projeto da Federação Paulista que forma jovens para o mercado de trabalho na indústria do golfe. Vários alunos já foram contratados por clubes e campos da região.

Instituto Olímpico Brasileiro: Em parceria com o COB, a CBGolfe participa de programas de capacitação profissional, incluindo cursos sobre governança, igualdade de gênero no esporte e segurança.`
      },
      {
        title: "Links Úteis",
        icon: "🔗",
        isLinks: true,
        links: [
          { name: "Site Oficial CBGolfe", url: "cbgolfe.com.br", desc: "Notícias, regulamentos, rankings e informações oficiais" },
          { name: "Calendário de Torneios", url: "cbg.bluegolf.com", desc: "Todos os torneios com inscrições online" },
          { name: "Área do Golfista", url: "cbgolfe.com.br/acesso-a-area-do-golfista", desc: "Consulte seu handicap e histórico de voltas" },
          { name: "Campos Filiados", url: "cbgolfe.com.br/o-golfe/status-de-campo-de-golfe", desc: "Lista completa de campos filiados no Brasil" },
          { name: "Livro de Regras", url: "cbgolfe.com.br/regulamentos", desc: "Regras oficiais, Hard Card e regulamentos" },
          { name: "Instagram CBGolfe", url: "instagram.com/cbgolfe", desc: "Notícias e resultados em tempo real" },
        ]
      },
      {
        title: "Perguntas Frequentes",
        icon: "❓",
        text: `Preciso ser sócio de um clube caro? Não necessariamente. Existem clubes com diferentes faixas de preço e modalidades. Alguns oferecem associação esportiva mais acessível. Consulte os campos filiados na sua região.

Posso ter handicap sem ser de um clube? Não diretamente. O handicap é emitido pelos clubes e federações. Porém, algumas federações permitem filiação direta para golfistas sem clube.

Meu handicap vale internacionalmente? Sim. O Brasil usa o World Handicap System (WHS), que é reconhecido mundialmente. Seu handicap da CBGolfe é válido em qualquer campo do mundo.

Posso jogar torneios de outros estados? Sim. A maioria dos Abertos são abertos a qualquer golfista com handicap válido, independente do estado.

Como sei se meu clube é filiado? Consulte a lista de campos no site da CBGolfe ou pergunte diretamente ao seu clube. Se o clube emite handicap oficial, é porque é filiado.

Existe golfe para pessoas com deficiência? Sim. A CBGolfe mantém um Ranking de PCDs e promove a inclusão no esporte.

Posso começar a jogar golfe sem experiência? Absolutamente. Muitos clubes oferecem aulas para iniciantes. O programa Golfe Para a Vida e os Polos de Desenvolvimento são ótimas portas de entrada.`
      }
    ],
  },
  en: {
    back: "← Back to Home",
    title: "CBGolfe: Brazilian Golfer's Practical Guide",
    subtitle: "Everything you need to know about the Brazilian Golf Confederation — how to join, get your handicap, and enter tournaments",
    reading: "10 min read",
    tag: "ESSENTIAL GUIDE",
    sections: [
      {
        title: "What is CBGolfe?",
        icon: "🏛️",
        text: `The Confederação Brasileira de Golfe (CBGolfe) is the official entity that regulates, organizes, and develops golf in Brazil. Founded in 1958 as the Brazilian Golf Association (ABG), it was transformed into a confederation in 1976 and rebranded as CBGolfe in 2019.

CBGolfe is a non-profit association responsible for directing, promoting, and developing national golf. It is the normative and disciplinary body for the sport in Brazil, recognized by international entities.

It is affiliated with the R&A (Royal and Ancient Golf Club of St Andrews), the South American Golf Federation, the International Golf Federation (IGF), and the Brazilian Olympic Committee (COB).

Fun fact: Brazil and the United States are the only two countries that have participated in every World Amateur Golf Championship since its first edition.

Official website: cbgolfe.com.br`
      },
      {
        title: "What Does CBGolfe Do For You?",
        icon: "⛳",
        text: `As a golfer in Brazil, CBGolfe directly impacts your game in several ways:

Handicap System: CBGolfe manages the official handicap registry for all amateur golfers in Brazil, using the World Handicap System (WHS). Without CBGolfe, you wouldn't have an official handicap.

Tournaments and Competitions: Organizes the main national championships — the Brazil Open, the Brazil Amateur, the Junior Championship, and dozens of other competitions throughout the year.

Rankings: Maintains national amateur rankings (men's and women's) and junior categories, plus the professional ranking.

Rules and Regulations: Defines the official rules of golf in Brazil, aligned with the R&A, including the Hard Card, Rule Book, and Code of Sporting Conduct.

Development: Programs like "Golf for Life" and Development Centers encourage new players and train high-performance athletes.

International Representation: Selects and organizes teams representing Brazil in international competitions such as the South American Championship (Copa Los Andes) and the World Amateur.`
      },
      {
        title: "The 7 State Federations",
        icon: "🗺️",
        isFederations: true,
        federations: [
          { name: "São Paulo Golf Federation (FPGolfe)", region: "São Paulo + MS + MG", desc: "The largest federation in Brazil, with over 46 affiliated clubs. Has two owned courses, including Honda Golf Center in Congonhas, SP.", link: "fpgolfe.com.br" },
          { name: "Rio Grande do Sul Golf Federation (FRGG)", region: "Rio Grande do Sul", desc: "Founded in 1966, it is the oldest state federation in Brazil.", link: "frgg.com.br" },
          { name: "Rio de Janeiro State Golf Federation (FGERJ)", region: "Rio de Janeiro", desc: "Created in 1976, covers clubs in the state of Rio de Janeiro.", link: "fgerj.com.br" },
          { name: "Paraná and Santa Catarina Golf Federation", region: "Paraná + Santa Catarina", desc: "Represents both southern Brazilian states.", link: "" },
          { name: "Bahia Golf Federation", region: "Bahia", desc: "Covers clubs and courses in Bahia.", link: "" },
          { name: "Pernambuco Golf Federation", region: "Pernambuco", desc: "Represents golf in northeastern Brazil.", link: "" },
          { name: "Northern Golf Federation", region: "Northern Region", desc: "Covers the northern states of Brazil.", link: "" },
        ]
      },
      {
        title: "How to Join and Get Your Handicap",
        icon: "📋",
        isSteps: true,
        steps: [
          { num: "1", title: "Choose an Affiliated Club", desc: "You need to be a member of a golf club affiliated with CBGolfe (through one of the state federations). Check the list of affiliated courses at cbgolfe.com.br. You don't need to be a full member — many clubs offer sports or visitor memberships." },
          { num: "2", title: "Request Your Registration", desc: "Ask the golf professional at your club or the front desk to register you in the CBGolfe system. They'll need your personal data and a valid email. The club handles your registration — CBGolfe doesn't do direct registrations." },
          { num: "3", title: "Play Your First Rounds", desc: "You need a minimum of 3 rounds of 18 holes (or the equivalent in 9-hole rounds) officially recorded to get your first handicap. Play with an official marker and submit your signed scorecards to the club." },
          { num: "4", title: "Receive Your Handicap", desc: "After the minimum rounds are entered into the system, your handicap is calculated automatically using the World Handicap System. The maximum initial handicap is 54.0." },
          { num: "5", title: "Access the Golfer's Area", desc: "With your active registration, you receive login credentials to access the Golfer's Area on the CBGolfe website. There you can check your handicap, round history, and ranking. If you didn't receive credentials, contact your club to update your email." },
          { num: "6", title: "Keep Your Handicap Updated", desc: "Keep recording your rounds. The more rounds you record, the more accurate your handicap will be. In the WHS system, handicaps are updated daily. Record both good and bad rounds — this reflects your real game." },
        ]
      },
      {
        title: "How to Enter Tournaments",
        icon: "🏆",
        text: `Entering official tournaments is more accessible than many think. There are various categories and levels:

Club Tournaments: The easiest way to start. Most affiliated clubs organize monthly or weekly internal tournaments. Usually you just need to be a member with a valid handicap.

State Opens: Organized by clubs with state federation endorsement. Open to any golfer with a valid handicap. Check the calendar on your federation's website.

State Championships: Organized by federations. May have maximum handicap criteria. A great next step after club tournaments.

National Championships: Organized by CBGolfe. Include the Brazil Open, the Brazil Amateur, and the Junior Championship. Usually require qualification or a low handicap.

Solidarity Golf: A special competition created by CBGolfe in partnership with federations, where qualifying rounds collect food baskets for underprivileged communities. A way to compete and do good at the same time.

To register: Most registrations are done through cbg.bluegolf.com, where you'll find the complete competition calendar with dates, venues, and registration forms.`
      },
      {
        title: "Calendar and Rankings",
        icon: "📅",
        text: `CBGolfe maintains a robust annual competition calendar across Brazil:

Competition Calendar: Available at cbg.bluegolf.com, it lists all official tournaments with dates, venues, and categories. In 2025, the São Paulo Federation alone organized over 67 competitions.

National Rankings: CBGolfe maintains rankings in the following categories: National Amateur Men's, National Amateur Women's, and Junior categories (A through F, men's and women's), plus the Professional Ranking and Disabled Ranking.

World Ranking (WAGR): Some Brazilian tournaments count for the World Amateur Golf Ranking (WAGR). Participating in these events can put you on the international map.

Athlete Scholarship Program: CBGolfe administers the Athlete Scholarship program for high-performance Brazilian golfers, offering financial support for training and competitions.`
      },
      {
        title: "Development Programs",
        icon: "🌱",
        text: `CBGolfe offers several programs to develop golf in Brazil:

Golf for Life: A social program that uses golf as a tool for education and citizenship. It serves youth in low-income communities, teaching not only the sport but also values like discipline, respect, and ethics.

Development Centers: Regional centers that identify and develop young golf talents, offering structure, training, and competitions.

High Performance: A program dedicated to elite athletes, with support for high-level training and international competition participation.

Golf Key to the Future: A São Paulo Federation project that trains young people for careers in the golf industry. Several students have already been hired by clubs and courses in the region.

Brazilian Olympic Institute: In partnership with the COB, CBGolfe participates in professional development programs, including courses on governance, gender equality in sports, and safety.`
      },
      {
        title: "Useful Links",
        icon: "🔗",
        isLinks: true,
        links: [
          { name: "CBGolfe Official Site", url: "cbgolfe.com.br", desc: "News, regulations, rankings, and official information" },
          { name: "Tournament Calendar", url: "cbg.bluegolf.com", desc: "All tournaments with online registration" },
          { name: "Golfer's Area", url: "cbgolfe.com.br/acesso-a-area-do-golfista", desc: "Check your handicap and round history" },
          { name: "Affiliated Courses", url: "cbgolfe.com.br/o-golfe/status-de-campo-de-golfe", desc: "Complete list of affiliated courses in Brazil" },
          { name: "Rule Book", url: "cbgolfe.com.br/regulamentos", desc: "Official rules, Hard Card, and regulations" },
          { name: "CBGolfe Instagram", url: "instagram.com/cbgolfe", desc: "Real-time news and results" },
        ]
      },
      {
        title: "Frequently Asked Questions",
        icon: "❓",
        text: `Do I need to be a member of an expensive club? Not necessarily. There are clubs with different price ranges and membership types. Some offer more affordable sports memberships. Check affiliated courses in your area.

Can I have a handicap without belonging to a club? Not directly. Handicaps are issued by clubs and federations. However, some federations allow direct affiliation for golfers without a club.

Is my handicap valid internationally? Yes. Brazil uses the World Handicap System (WHS), which is recognized worldwide. Your CBGolfe handicap is valid at any course in the world.

Can I play tournaments in other states? Yes. Most Opens are open to any golfer with a valid handicap, regardless of state.

How do I know if my club is affiliated? Check the course list on the CBGolfe website or ask your club directly. If the club issues an official handicap, it's affiliated.

Is there golf for people with disabilities? Yes. CBGolfe maintains a Disabled Ranking and promotes inclusion in the sport.

Can I start playing golf with no experience? Absolutely. Many clubs offer beginner lessons. The Golf for Life program and Development Centers are great entry points.`
      }
    ],
  }
};

export default function CBGolfeGuide() {
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
          <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.accent, background: `${C.accent}15`, padding: "4px 10px", borderRadius: 6 }}>{l.tag}</span>
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

            {sec.isFederations ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {sec.federations.map((fed, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "16px 20px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: C.dark, fontFamily: "Georgia, serif" }}>{fed.name}</div>
                    <div style={{ fontSize: "0.72rem", color: C.accent, fontWeight: 600, marginTop: 2 }}>{fed.region}</div>
                    <div style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.6, marginTop: 6 }}>{fed.desc}</div>
                    {fed.link && <div style={{ fontSize: "0.75rem", color: C.accent, marginTop: 6 }}>🔗 {fed.link}</div>}
                  </div>
                ))}
              </div>
            ) : sec.isSteps ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {sec.steps.map((step, j) => (
                  <div key={j} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 800, color: "#fff", fontFamily: "Georgia, serif" }}>{step.num}</div>
                      {j < sec.steps.length - 1 && <div style={{ width: 2, height: 40, background: C.border, margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: j < sec.steps.length - 1 ? 8 : 0 }}>
                      <div style={{ fontSize: "0.92rem", fontWeight: 700, color: C.dark, fontFamily: "Georgia, serif" }}>{step.title}</div>
                      <div style={{ fontSize: "0.84rem", color: C.muted, lineHeight: 1.7, marginTop: 4 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : sec.isLinks ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {sec.links.map((link, j) => (
                  <div key={j} style={{ background: C.card, borderRadius: 14, padding: "14px 20px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: C.dark }}>{link.name}</div>
                      <div style={{ fontSize: "0.78rem", color: C.muted }}>{link.desc}</div>
                    </div>
                    <div style={{ fontSize: "0.75rem", color: C.accent, fontWeight: 600 }}>{link.url} ↗</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ background: C.card, borderRadius: 14, padding: "22px 24px", border: `1px solid ${C.borderLight}`, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                {sec.text.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.85, margin: j === 0 ? 0 : "16px 0 0" }}>
                    {para.split("\n").map((line, k) => {
                      const isBold = /^(Sistema de Handicap|Handicap System|Torneios e Competições|Tournaments and|Rankings:|Rankings|Regras e Regulamentos|Rules and|Desenvolvimento:|Development:|Representação|International Rep|Torneios do Clube|Club Tournaments|Abertos Estaduais|State Opens|Campeonatos Estaduais|State Championships|Campeonatos Nacionais|National Championships|Golfe Solidário|Solidarity Golf|Para se inscrever|To register|Calendário de Competições|Competition Calendar|Rankings Nacionais|National Rankings|Ranking Mundial|World Ranking|Programa Bolsa|Athlete Scholarship|Golfe Para a Vida|Golf for Life|Polos de Desenvolvimento|Development Centers|Alto Rendimento|High Performance|Golfe Chave|Golf Key|Instituto Olímpico|Brazilian Olympic|Curiosidade:|Fun fact:|Site oficial:|Official website:|Preciso ser|Do I need|Posso ter handicap|Can I have|Meu handicap vale|Is my handicap|Posso jogar torneios|Can I play|Como sei se|How do I know|Existe golfe para|Is there golf|Posso começar|Can I start)/.test(line.trim());
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

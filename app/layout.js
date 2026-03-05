import './globals.css';

export const metadata = {
  title: 'Tacada Golf - Seu Jogo Elevado',
  description: 'O melhor recurso bilíngue de golfe — guias, ferramentas interativas e dicas de performance para jogadores de todos os níveis.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

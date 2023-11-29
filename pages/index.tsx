// pages/index.tsx
import Link from 'next/link';
import { Button } from '';

const Home: React.FC = () => (
  <div>
    <h1>Home</h1>
    <Link href="/login"><a>Login</a></Link>
    <Link href="/registro"><a>Registro</a></Link>
    <Link href="/recover"><a>Recuperação de Senha</a></Link>
    <Link href="/dashboard"><a>Painel Principal</a></Link>
    <Button onClick={() => alert('Botão clicado!')}>Clique-me</Button>
  </div>
);

export default Home;

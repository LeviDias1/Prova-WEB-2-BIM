// pages/recover.tsx
import Link from 'next/link';
import { Button } from '';

const Recover: React.FC = () => (
  <div>
    <h1>Recuperação de Senha</h1>
    <form>
      <label>Email:</label>
      <input type="email" />
      <Button>Recuperar Senha</Button>
    </form>
    <p>
      Lembrou da senha? <Link href="/login"><a>Login</a></Link>
    </p>
  </div>
);

export default Recover;

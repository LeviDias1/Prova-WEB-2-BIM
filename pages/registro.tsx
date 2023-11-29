// pages/registro.tsx
import Link from 'next/link';
import { Button } from '';

const Registro: React.FC = () => (
  <div>
    <h1>Registro</h1>
    <form>
      <label>Email:</label>
      <input type="email" />
      <label>Senha:</label>
      <input type="password" />
      <Button>Registrar</Button>
    </form>
    <p>
      Já tem uma conta? <Link href="/login"><a>Login</a></Link>
    </p>
  </div>
);

export default Registro;

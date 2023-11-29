// components/Button.tsx
import styled from '@emotion/styled';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

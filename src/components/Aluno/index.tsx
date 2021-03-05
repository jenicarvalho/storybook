import React from 'react';

export interface AlunoProps {
  name: string,
  color: string
}

const Aluno = (props: AlunoProps) => {
  return (
    <div style={{ backgroundColor: `${props.color}`}}>
      Olá, {props.name}
    </div>
  );
}

export default Aluno;
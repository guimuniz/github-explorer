import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17928196?s=460&u=88381e004a0af60587ce5bfa2204c3aadaa7ae28&v=4"
            alt="Guilherme"
          />

          <div>
            <strong>Corona</strong>
            <p>corona rep</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17928196?s=460&u=88381e004a0af60587ce5bfa2204c3aadaa7ae28&v=4"
            alt="Guilherme"
          />

          <div>
            <strong>Corona</strong>
            <p>corona rep</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/17928196?s=460&u=88381e004a0af60587ce5bfa2204c3aadaa7ae28&v=4"
            alt="Guilherme"
          />

          <div>
            <strong>Corona</strong>
            <p>corona rep</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

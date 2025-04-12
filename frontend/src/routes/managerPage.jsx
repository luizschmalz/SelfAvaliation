import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagerPage.css';

const PainelSocio = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [colaboradorSelecionado, setColaboradorSelecionado] = useState('');

  useEffect(() => {
    axios.get('https://6bdb-190-115-106-175.ngrok-free.app/api/self-avaliation/users')
      .then(res => {
        setColaboradores(res.data);
        if (res.data.length > 0) {
          setColaboradorSelecionado(res.data[0].nome);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (colaboradorSelecionado) {
      axios.get(`https://6bdb-190-115-106-175.ngrok-free.app/api/self-avaliation?nome=${colaboradorSelecionado}`)
        .then(res => setAvaliacoes(res.data))
        .catch(err => console.error(err));
    }
  }, [colaboradorSelecionado]);

  const calcularMedia = () => {
    if (avaliacoes.length === 0) return 0;
    const soma = avaliacoes.reduce((acc, nota) => acc + parseFloat(nota), 0);
    return (soma / avaliacoes.length).toFixed(2);
  };

  const getDesempenho = (media) => {
    if (media >= 4.5) return 'Excepcional';
    if (media >= 4.0) return 'Ótimo';
    if (media >= 3.0) return 'Bom';
    return 'Precisa melhorar';
  };

  const media = calcularMedia();
  const desempenho = getDesempenho(media);

  return (
    <div className='painel-socio'>
      <h2>Painel do Sócio</h2>

      <div className="selec-colaborador">
        <label>Selecionar Colaborador:{" "}
          <select
            value={colaboradorSelecionado}
            onChange={(e) => setColaboradorSelecionado(e.target.value)}
          >
            {colaboradores.map((c, i) => (
              <option key={i} value={c.nome}>{c.nome}</option>
            ))}
          </select>
        </label>
      </div>

      <h3>
        Histórico de Avaliações ({colaboradorSelecionado})
      </h3>
      <p>
        Avaliações: {avaliacoes.join(', ')}
      </p>

      <div className='media-desempenho'>
        Média: {media} – {desempenho}
      </div>
    </div>
  );
};

export default PainelSocio;

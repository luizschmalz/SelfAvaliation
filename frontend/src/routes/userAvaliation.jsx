import React, { useState } from 'react';
import './UserAvaliation.css';
import axios from 'axios';

const UserAvaliation = () => {
  const [formData, setFormData] = useState({
    nome: '',
    avaliacoes: [
      { tipoCriterio: 'SENTIMENTO_DONO', nota: '', justificativa: '' },
      { tipoCriterio: 'RESILIENCIA', nota: '', justificativa: '' },
      { tipoCriterio: 'ORGANIZACAO', nota: '', justificativa: '' },
      { tipoCriterio: 'APRENDIZADO', nota: '', justificativa: '' },
      { tipoCriterio: 'TEAM_PLAYER', nota: '', justificativa: '' },
      { tipoCriterio: 'QUALIDADE', nota: '', justificativa: '' },
      { tipoCriterio: 'PRAZOS', nota: '', justificativa: '' },
      { tipoCriterio: 'EFICIENCIA', nota: '', justificativa: '' },
      { tipoCriterio: 'CRIATIVIDADE', nota: '', justificativa: '' }
    ]
  });

  const handleChange = (index, value) => {
    setFormData(prev => {
      const newAvaliacoes = [...prev.avaliacoes];
      newAvaliacoes[index].justificativa = value;
      return { ...prev, avaliacoes: newAvaliacoes };
    });
  };

  const handleChangeNumber = (index, value) => {
    if (value === '' || (Number(value) >= 1 && Number(value) <= 5)) {
      setFormData(prev => {
        const newAvaliacoes = [...prev.avaliacoes];
        if (newAvaliacoes[index]) {
          newAvaliacoes[index] = {
            ...newAvaliacoes[index],
            nota: value
          };
        }
        return { ...prev, avaliacoes: newAvaliacoes };
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  
    try {
      const response = await axios.post('https://6bdb-190-115-106-175.ngrok-free.app/api/self-avaliation', formData);
      console.log('Dados enviados com sucesso!', response.data);
      alert('Avaliação enviada com sucesso!');
      setFormData({
        nome: '',
        avaliacoes: [
          { tipoCriterio: 'SENTIMENTO_DONO', nota: '', justificativa: '' },
          { tipoCriterio: 'RESILIENCIA', nota: '', justificativa: '' },
          { tipoCriterio: 'ORGANIZACAO', nota: '', justificativa: '' },
          { tipoCriterio: 'APRENDIZADO', nota: '', justificativa: '' },
          { tipoCriterio: 'TEAM_PLAYER', nota: '', justificativa: '' },
          { tipoCriterio: 'QUALIDADE', nota: '', justificativa: '' },
          { tipoCriterio: 'PRAZOS', nota: '', justificativa: '' },
          { tipoCriterio: 'EFICIENCIA', nota: '', justificativa: '' },
          { tipoCriterio: 'CRIATIVIDADE', nota: '', justificativa: '' }
        ]
      });
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao enviar os dados. Verifique o console.');
    }
  };
  

  return (
    <div className="user-avaliation">
      <h2>Preencha seu nome:</h2> 
      <input type="text" name="nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder='Nome' required/>
      <h2>Avaliação de Usuário</h2>
      <form onSubmit={handleSubmit} className="avaliation-form">    
        <h3>Critérios comportamentais</h3>  
          <label>Sentimento de Dono:
            <input type="number" name="sentimentoDono" value={formData.avaliacoes[0]?.nota} onChange={(e) => handleChangeNumber(0, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="sentimentoJustificativa" value={formData.avaliacoes[0]?.justificativa} onChange={(e) => handleChange(0, e.target.value)} placeholder='Justificativa'/> 


          <label>Resiliência nas adversidades:
            <input type="number" name="resiliencia" value={formData.avaliacoes[1].nota} onChange={(e) => handleChangeNumber(1, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="resilienciaJustificativa" value={formData.avaliacoes[1].justificativa} onChange={(e) => handleChange(1, e.target.value)} placeholder='Justificativa'/> 


          <label>Organização no Trabalho:
            <input type="number" name="organizacao" value={formData.avaliacoes[2].nota} onChange={(e) => handleChangeNumber(2, e.target.value)} required/> 
            <span className='required'> *</span>
          </label>
          <input type="text" name="organizacaoJustificativa" value={formData.avaliacoes[2].justificativa} onChange={(e) => handleChange(2, e.target.value)} placeholder='Justificativa'/> 

          

          <label>Capacidade de aprender:
            <input type="number" name="aprendizado" value={formData.avaliacoes[3].nota} onChange={(e) => handleChangeNumber(3, e.target.value)} required/>   
            <span className='required'> *</span>
          </label>
            <input type="text" name="aprendizadoJustificativa" value={formData.avaliacoes[3].justificativa} onChange={(e) => handleChange(3, e.target.value)} placeholder='Justificativa'/>  
          

          <label>Ser "team player":
            <input type="number" name="teamPlayer" value={formData.avaliacoes[4].nota} onChange={(e) => handleChangeNumber(4, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="teamPlayerJustificativa" value={formData.avaliacoes[4].justificativa} onChange={(e) => handleChange(4, e.target.value)} placeholder='Justificativa'/> 

          

          <h3>Critérios de Execução</h3>

          <label>Entregar com qualidade:
            <input type="number" name="qualidade" value={formData.avaliacoes[5].nota} onChange={(e) => handleChangeNumber(5, e.target.value)} required/> 
            <span className='required'> *</span>
          </label>
          <input type="text" name="qualidadeJustificativa" value={formData.avaliacoes[5].justificativa} onChange={(e) => handleChange(5, e.target.value)} placeholder='Justificativa'/> 

          

          <label>Atender aos prazos:
            <input type="number" name="prazos" value={formData.avaliacoes[6].nota} onChange={(e) => handleChangeNumber(6, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="prazosJustificativa" value={formData.avaliacoes[6].justificativa} onChange={(e) => handleChange(6, e.target.value)} placeholder='Justificativa'/> 

          

          <label>Fazer mais com menos:
            <input type="number" name="eficiencia" value={formData.avaliacoes[7].nota} onChange={(e) => handleChangeNumber(7, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="eficienciaJustificativa" value={formData.avaliacoes[7].justificativa} onChange={(e) => handleChange(7, e.target.value)} placeholder='Justificativa'/> 

          

          <label>Pensar fora da caixa:
            <input type="number" name="criatividade" value={formData.avaliacoes[8].nota} onChange={(e) => handleChangeNumber(8, e.target.value)} required/>
            <span className='required'> *</span>
          </label>
          <input type="text" name="criatividadeJustificativa" value={formData.avaliacoes[8].justificativa} onChange={(e) => handleChange(8, e.target.value)} placeholder='Justificativa'/> 

          
        <button type="submit">Enviar Avaliação</button>
      </form>
    </div>
  );
};

export default UserAvaliation;
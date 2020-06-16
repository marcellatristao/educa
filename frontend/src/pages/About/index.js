import React from 'react';
import { ListGroup } from 'reactstrap';
import './style.css';

const About = () => {
    return (
        <div className="container">
            <h5 className="mt-3">Home / About</h5>
            <ListGroup>
                <br></br>
                <br></br>
                <span>Visão do projeto</span>
                <br></br>
                <p>Para instituições de ensino que necessitam de uma forma inovadora
                de reforçar exercícios propostos em sala de aula.
                O EDUCA É um sistema web interativo de aprendizagem
                onde o educador poderá criar uma sala de aula em
                ambiente virtual onde será possível a inserção de
                materiais de apoio, cadastro de questionários e a
                realização de quizzes. Possibilita que os usuários
                entrem na “sala de aula” para praticar os exercícios propostos
                através de um código entregue ao usuário na criação das salas.
                O diferencial é o gerenciamento e controle das turmas por meio
                de atividades não monótonas que prendem a atenção do usuário.
                O produto atuará como uma ponte entre o meio físico da sala de
                aula e o ambiente virtual. </p>
                <br></br>

                <span>Plano de Ação</span>
                <p>O Plano de Ação do projeto EDUCA foi feito com a utilização 
                    de uma ferramenta chamada 5W2H que é um checklist administrativo de atividades, 
                    prazos e responsabilidades que devem ser desenvolvidas com clareza e eficiência por
                    todos os envolvidos no projeto. Tem como função definir o
                    que será feito, porque, onde, quem irá fazer, quando será feito, como e quanto custará.
                      </p>

                <span>Equipe desenvolvedora</span>
                <p>O Educa foi idealizado por alunos do
                curso superior em Engenharia de Software no Centro Universitário de Anápolis - UniEvangelica
                na disciplina de Projeto Interdisciplinar...
                </p>
                <ul class="list">
                    <li>Celso Ricardo Prazer</li>
                    <li>Clara Elis Pereira</li>
                    <li>Eliseu Dias Rodrigues</li>
                    <li>João Vitor Sponchiado</li>
                    <li>José Inácio França Filho</li>
                    <li>Marcella Canedo Tristão</li>
                    <li>Natal Barbosa Junio</li>
                </ul>
            </ListGroup>
        </div>
    )
}

export default About;
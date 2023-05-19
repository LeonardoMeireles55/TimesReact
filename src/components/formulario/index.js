import Botao from '../botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import { useState } from 'react'
import './formulario.css'
const Formulario = (props) => {

    const times = [
        'Equipe 1',
        'Equipe 2',
        'Equipe 3',
        'Equipe 4',
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do participante da equipe:</h2>
                <CampoTexto obrigatorio={true} label="Nome:" placeholder="digite seu nome" 
                valor={nome} aoAlterado={valor => setNome(valor)} />
                <CampoTexto obrigatorio={true} label="Cargo:" placeholder="digite seu cargo" 
                valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <CampoTexto obrigatorio={true} label="Imagem:" placeholder="informe o endereço da imagem" 
                valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa obrigatorio={true} label="Time:" itens={times}
                valor={time} aoAlterado={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
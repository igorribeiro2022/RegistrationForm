import { motion } from "framer-motion";
import Pagina from "../../Styles/PagSucesso";
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function Sucesso({ pessoa }) {
    const history = useHistory()
    const params = useParams()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Pagina>
        <section>
          <div>
            <img
              src="https://kenzie.com.br/blog/wp-content/themes/kenzie/src/assets/img/footer-logo.png"
              alt="KA"
            />
            <button onClick={() => history.push('/')}>Voltar</button>
          </div>
          <div>
            <h2>Seja bem vindo(a) {pessoa.name}</h2>
            <p>
              A Kenzie Academy começou em 2017, nos Estados Unidos, e chegou ao
              Brasil em 2019 com o objetivo de formar profissionais completos
              para ingressarem no mercado de tecnologia rapidamente. Tudo isso
              sem mensalidade e com alta qualidade de ensino.
            </p>
            <p>
              Para o Brasil, trouxemos toda a experiência adquirida no mercado
              americano. Capacitamos quem não tem conhecimento prévio em
              programação e também aqueles que conhecem a área para ingressar no
              mercado de tecnologia de forma rápida e prática. Só temos sucesso
              quando nosso aluno tem sucesso. Nosso propósito é transformar a
              vida de pessoas através da educação e garantir que os alunos da
              Kenzie tenham a expertise para atuar como desenvolvedores full
              stack após 12 meses de curso.
            </p>
            <h3>Agora você também faz parte dessa família!</h3>
          </div>
        </section>
      </Pagina>
    </motion.div>
  );
}

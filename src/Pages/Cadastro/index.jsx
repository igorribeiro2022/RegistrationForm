import { motion } from "framer-motion";
import { Form } from "../../Components/Form";
import PagCadastro from "../../Styles/PagCadastro";

export default function Cadastro({setPessoa}) {
    
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PagCadastro>
        <img src="https://kenzie.com.br/blog/wp-content/themes/kenzie/src/assets/img/footer-logo.png" alt="Kenzie" />
        <Form setPessoa={setPessoa} />
      </PagCadastro>
    </motion.div>
  );
}

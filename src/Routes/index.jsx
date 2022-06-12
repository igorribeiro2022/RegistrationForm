import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Cadastro from "../Pages/Cadastro";
import Sucesso from "../Pages/Sucesso";

export default function Router() {
  const [pessoa, setPessoa] = useState({})

  return (
    <AnimatePresence>
      <Switch>

        <Route exact path="/">
          <Cadastro setPessoa={setPessoa} />
        </Route>

        <Route exact path="/sucesso">
          <Sucesso pessoa={pessoa} />
        </Route>

      </Switch>
    </AnimatePresence>
  );
}

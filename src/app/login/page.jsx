import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Identificação de Usuários</h1>
      <div>
        <form>
          <fieldset>
            <legend>Login de Usuários</legend>
            <div>
              <label htmlFor="idEmail">E-mail</label>
              <input type="email" name="email" id="idEmail" placeholder="Digite seu E-mail."/>
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha."/>
            </div>
            <div>
              <button>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

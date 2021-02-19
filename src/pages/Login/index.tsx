import React, { FormEvent, useState } from "react";
import "./styles.css";
import logImg from "../../assets/log.svg";
import registerImg from "../../assets/register.svg";

interface SignIn {
  username: string;
  password: string;
}

interface SignUp extends SignIn {
  email: string;
}

function Login() {
  const [signUpMode, setSignUpMode] = useState(false);
  const [signIn, setSignIn] = useState<SignIn>({
    username: '',
    password: ''
  });
  const [signUp, setSignUp] = useState<SignUp>({
    username: '',
    email: '',
    password: ''
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.table([signUpMode, signIn, signUp])
  }

  return (
    <div className={`container ${signUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h2 className="title">Conecte-se</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Nome de usuário"
                required
                value={signIn.username}
                onChange={({ target }) => setSignIn({...signIn, username: target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Senha"
                required
                value={signIn.password}
                onChange={({ target }) => setSignIn({...signIn, password: target.value })}
              />
            </div>
            <input type="submit" value="Conectar" className="btn solid" />
            <p className="social-text">
              Ou conecte-se usando plataformas sociais
            </p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Cadastre-se</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Nome de usuário"
                required
                value={signUp.username}
                onChange={({ target }) => setSignUp({...signUp, username: target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="E-mail"
                required
                value={signUp.email}
                onChange={({ target }) => setSignUp({...signUp, email: target.value })}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Senha"
                required
                value={signUp.password}
                onChange={({ target }) => setSignUp({...signUp, password: target.value })}
              />
            </div>
            <input type="submit" className="btn" value="Cadastrar" />
            <p className="social-text">
              Ou cadastre-se usando plataformas sociais
            </p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Novo aqui?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setSignUpMode(true)}
            >
              Cadastre-se
            </button>
          </div>
          <img src={logImg} alt="" className="image" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Um de nós?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setSignUpMode(false)}
            >
              Conecte-se
            </button>
          </div>
          <img src={registerImg} alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Login;

import type { FormErrors } from "@/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLoginForm(email: string, senha: string): FormErrors {
  const errors: FormErrors = {};

  if (!email.trim()) {
    errors.email = "Informe seu email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Digite um email válido.";
  }

  if (!senha) {
    errors.senha = "Informe sua senha.";
  }

  return errors;
}

export function validateCadastroForm(
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string
): FormErrors {
  const errors: FormErrors = {};

  if (!nome.trim()) {
    errors.nome = "Informe um nome de usuário.";
  } else if (nome.trim().length < 3) {
    errors.nome = "O nome precisa ter pelo menos 3 caracteres.";
  }

  if (!email.trim()) {
    errors.email = "Informe seu email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Digite um email válido.";
  }

  if (!senha) {
    errors.senha = "Crie uma senha.";
  } else if (senha.length < 8) {
    errors.senha = "A senha precisa ter pelo menos 8 caracteres.";
  } else if (!/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
    errors.senha = "Use ao menos 1 letra maiúscula e 1 número.";
  }

  if (confirmarSenha !== senha) {
    errors.confirmarSenha = "As senhas não coincidem.";
  }

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.values(errors).some(Boolean);
}

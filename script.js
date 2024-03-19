const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()?><:';";

function generatePassword(
  length,
  useUppercase,
  useLowercase,
  useNumbers,
  useSymbols
) {
  let charset = "";
  if (useUppercase) charset += uppercase;
  if (useLowercase) charset += lowercase;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * charset.length);
    password += charset[random];
  }
  return password;
}

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.querySelector(".password");
  const lengthInput = document.querySelector(".length");
  const upperCheckbox = document.querySelector(".upper");
  const lowerCheckbox = document.querySelector(".lower");
  const numbersCheckbox = document.querySelector(".numbers");
  const symbolsCheckbox = document.querySelector(".symbols");
  const generateButton = document.querySelector(".generate");
  const copyButton = document.querySelector(".copy");

  generateButton.addEventListener("click", function () {
    const length = parseInt(lengthInput.value);
    const useUppercase = upperCheckbox.checked;
    const useLowercase = lowerCheckbox.checked;
    const useNumbers = numbersCheckbox.checked;
    const useSymbols = symbolsCheckbox.checked;

    const password = generatePassword(
      length,
      useUppercase,
      useLowercase,
      useNumbers,
      useSymbols
    );
    passwordInput.value = password;
  });

  copyButton.addEventListener("click", function () {
    passwordInput.select();
    document.execCommand("copy");
  });
});

window.onload = function() {
  const input = document.getElementById('editor');
  const logger = document.getElementById('log');
  let code = '';

  console.log = function() {};

  input.addEventListener('input', (e) => {
    code = e.target.value;
    try {
      logger.innerHTML = '';
      logger.innerHTML = eval(code);
    } catch (e) {}
  });
  input.focus();
  input.placeholder = 'Enter code...'
};

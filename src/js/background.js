
export const init = () => {
  const elBody = document.querySelector('body');
  const num = Math.floor(Math.random() * 5) + 1;
  elBody.classList.add(`b${num}`);
};

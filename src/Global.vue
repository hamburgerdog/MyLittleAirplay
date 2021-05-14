<script>
//  节流函数
function THORTTLE(fn, delay = 500) {
  let timer = null;
  let canRun = true;
  // eslint-disable-next-line
  return function () {
    if (!canRun) return;
    canRun = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
      canRun = true;
    }, delay);
  };
}

function addAnimateClass(element, animateName, delay) {
  element.classList.add('animate__animated');
  element.classList.add(animateName);
  setTimeout(() => {
    element.classList.remove(animateName);
  }, delay);
}

function debounce(fn, canRun, delay) {
  if (!canRun) return;
  // eslint-disable-next-line
  canRun = false;
  fn();
  setTimeout(() => {
    // eslint-disable-next-line
    canRun = true;
  }, delay);
}

function deBounceAddAnimate(element, animateName, canRun, delay = 2000) {
  debounce(
    () => {
      addAnimateClass(element, animateName, delay);
    },
    canRun,
    delay,
  );
}

export default {
  THORTTLE,
  deBounceAddAnimate,
};
</script>

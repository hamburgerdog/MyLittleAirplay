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

export default {
  THORTTLE,
};
</script>

function evalRespo(confs, QI=0.65, IQQ=0.35){
  const base = confs.reduce((a,b)=>a+b,0)/confs.length;
  const maxc = Math.max(...confs), minc = Math.min(...confs);
  const variance = maxc - minc;
  const combined = Math.max(0, Math.min(1, QI*base + (1 - IQQ)*maxc));
  const arg = combined;
  const xarg = variance;
  const arg3te = combined * (1 - xarg);
  return { base, maxc, minc, variance, arg, xarg, arg3te };
}

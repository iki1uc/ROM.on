function aggregateLevels(levelScores){
  const ws = phiWeights(levelScores.length - 1);
  let agg = 0;
  for(let i=0;i<levelScores.length;i++) agg += levelScores[i] * ws[i];
  return agg;
}

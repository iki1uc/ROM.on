function computeAxisScores(item, knownAxes, discoveredAxes, axisWeights){
  // knownAxes: [{name, keywords}], discoveredAxes: [{id, terms}]
  // compute boolean match and weight
  let scoreKnown = 0;
  knownAxes.forEach((ax, i) => {
    const ok = ax.keywords.some(k => (item.text||'').toLowerCase().includes(k));
    if(ok) scoreKnown += (axisWeights?.known?.[ax.name] ?? 1.0);
  });
  let scoreDisc = 0;
  discoveredAxes.forEach((ax, i) => {
    const ok = ax.terms.some(t => (item.text||'').toLowerCase().includes(t));
    if(ok) scoreDisc += (axisWeights?.disc?.[ax.id] ?? 1.0);
  });
  const axisScore = clamp((scoreKnown + scoreDisc) / (knownAxes.length + discoveredAxes.length));
  return axisScore;
}

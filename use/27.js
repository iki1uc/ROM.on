function discoverAxes(items, targetK=12){
  const texts = items.map(it=>it.text || '');
  const tf = buildTfidf(texts);
  const { labels, centroids } = kmeans(tf.vectors, targetK);
  const axes = [];
  for(let k=0;k<centroids.length;k++){
    // derive top terms for label
    const termsScores = tf.terms.map((t, idx) => ({t, score: centroids[k][idx]})).sort((a,b)=>b.score-a.score);
    const label = termsScores.slice(0,5).map(x=>x.t).join('-');
    axes.push({ id:`DAX${k}`, label, terms: termsScores.slice(0,10).map(x=>x.t) });
  }
  const assignments = items.map((it,i)=>({id:it.id, axis: labels[i]}));
  return { axes, assignments };
}

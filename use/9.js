// build vocabulary + tfidf matrix (simple)
function buildTfidf(corpus){
  const docs = corpus.map(t=>t.toLowerCase().replace(/[^a-z0-9\s]/g,' ').split(/\s+/).filter(Boolean));
  const vocab = {};
  docs.forEach(d=> d.forEach(w=> vocab[w] = (vocab[w]||0)+1));
  const terms = Object.keys(vocab);
  const idf = terms.map(t => Math.log(docs.length / (1 + docs.filter(d=>d.includes(t)).length)));
  const vectors = docs.map(d=>{
    const tf = terms.map(t=> d.filter(x=>x===t).length / d.length);
    // tf-idf
    return tf.map((tfi,i)=>tfi * idf[i]);
  });
  return { terms, vectors };
}

function cosine(a,b){
  let dot=0, na=0, nb=0;
  for(let i=0;i<a.length;i++){ dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
  return dot / (Math.sqrt(na)*Math.sqrt(nb) + 1e-12);
}

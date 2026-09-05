// rith.engine.js
export const engineState = {
  rith: 0,
  rev: { score: 0, emotion: "NEUTRAL", runs: 0 },
  upd: { changes: 0, level: 0 },
  upg: { count: 0, level: 0 }
};

export function parseSegmentText(raw) {
  const hasLoop = raw.includes('↺');
  const clean = raw.replace('↺', '').trim();
  const tokens = clean.split('→').map(t => t.trim()).filter(Boolean);
  const nodes = tokens.length;
  const edges = nodes > 0 ? nodes - 1 : 0;
  const closed = hasLoop || (nodes > 1 && tokens[0] === tokens[nodes-1]);
  const norm89 = (edges === 8 && nodes === 9 && closed);
  return { nodes, edges, closed, norm89 };
}

export function evaluateFromSegments(segmentStrings) {
  const segs = segmentStrings.map(parseSegmentText);
  const total = segs.length;
  const geschlossen = segs.filter(s => s.closed).length;
  const tauglich = segs.filter(s => s.norm89).length;

  const stufen = [
    { name: 'RAW', erreicht: total > 0 },
    { name: 'STRUCTURE', erreicht: geschlossen > 0 },
    { name: 'VECTOR', erreicht: tauglich > 0 },
    { name: 'FUSION', erreicht: tauglich === total }
  ];

  let rith = 0;
  for (const s of stufen) {
    if (s.erreicht) rith++; else break;
  }
  engineState.rith = rith;

  const score = total > 0 ? Math.round((tauglich / total) * 100) : 0;
  engineState.rev.runs++;
  engineState.rev.score = score;
  engineState.rev.emotion = score >= 70 ? "FREUDE" : score >= 40 ? "NEUTRAL" : "MÜDE";

  engineState.upd.changes++;
  engineState.upd.level = Math.floor(engineState.upd.changes / 5);

  engineState.upg.count++;
  engineState.upg.level = rith;

  return { rith, score, stufen };
}

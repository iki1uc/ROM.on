// ─── AXIOM HUMANISTISCHE KRÄFTE ───────────────────────
const licht = AXIOM.LICHT().shine();
const fokus = AXIOM.FOKUS().align();
const fluss = AXIOM.FLUSS().drift();

frames.push({
    id: `ANIME-${i+1}`,
    frame: holo.id,
    vital: this.vital * (0.7 + Math.random() * 0.6),

    licht,
    fokus,
    fluss,

    shuffle: this.shuffle[i]?.move || '●',
    co2: this.co2.vital * (0.5 + Math.random() * 0.5),
    wasser: this.wasser.vital * (0.5 + Math.random() * 0.5),
    sauerstoff: this.sauerstoff.vital * (0.5 + Math.random() * 0.5)
});
// ─── BALANCE-REGEL ─────────────────────────────────────
const balance = AXIOM.META().balance([
    this.co2.vital,
    this.wasser.vital,
    this.sauerstoff.vital
]);

this.balance = balance;

// ─── HOLO-UPDATE ───────────────────────────────────────
HOLO_ENGINE.update({
    vital: this.vital,
    balance: this.balance,
    hologramm: this.hologramm.length
});

// ─── SYS-SYNC ───────────────────────────────────────────
if (window.SYS) window.SYS.sync();

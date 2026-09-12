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

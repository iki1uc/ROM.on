import { AXIOM } from "./axiom.js";

window.SYS = window.SYS || {

    // ─── SYSTEMSTATUS ───────────────────────────────────────────
    status: "initialisiert",
    mode: "rawator-life",
    vital: 0,
    balance: 0,

    // ─── AXIOM-KRÄFTE ───────────────────────────────────────────
    AXIOM: {
        mana: AXIOM.MANA(),
        aura: AXIOM.AURA(),
        kraft: AXIOM.KRAFT(),

        licht: AXIOM.LICHT(),
        fokus: AXIOM.FOKUS(),
        fluss: AXIOM.FLUSS(),

        meta: AXIOM.META(),
        axis: AXIOM.AXIS369()
    },

    // ─── HOLOGRAMM / RAWATOR / LIFE / 81 ─────────────────────────
    hologramm: [],
    anime: [],
    shuffle: [],
    rawator: {},
    life: {},

    // ─── DASHBOARD-SYNC ─────────────────────────────────────────
    sync() {
        console.log("SYS → Synchronisiert");
        console.log("Vital:", this.vital);
        console.log("Balance:", this.balance);
        console.log("Mode:", this.mode);
    },

    // ─── SYSTEM-PULSE ───────────────────────────────────────────
    pulse() {
        const m = this.AXIOM.mana.pulse();
        const a = this.AXIOM.aura.resonance();
        const k = this.AXIOM.kraft.impulse();

        this.vital = this.AXIOM.meta.vital(m, a, k);
        this.balance = this.AXIOM.meta.balance([m, a, k]);

        return { m, a, k, vital: this.vital, balance: this.balance };
    }
};

console.log("SYS → geladen (AXIOM, META, AXIS369, PULSE, SYNC)");

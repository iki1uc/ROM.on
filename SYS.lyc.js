// ============================================================
// SYS · LYC · Life-Yield-Core
// RAWATOR · AXIOM · HOLO · 3-6-9
// ============================================================

import { AXIOM } from "./axiom.js";
import { HOLO_ENGINE } from "./HOLO.engine.js";

window.SYS = window.SYS || {};

window.SYS.LYC = {

    // ─── LYC-PULSE ─────────────────────────────────────────────
    pulse() {
        // AXIOM-Pulse
        const mana = AXIOM.MANA().pulse();
        const aura = AXIOM.AURA().resonance();
        const kraft = AXIOM.KRAFT().impulse();

        // Humanistische Kräfte
        const licht = AXIOM.LICHT().shine();
        const fokus = AXIOM.FOKUS().align();
        const fluss = AXIOM.FLUSS().drift();

        // Meta-Werte
        const vital = AXIOM.META().vital(mana, aura, kraft);
        const balance = AXIOM.META().balance([mana, aura, kraft, licht, fokus, fluss]);
        const drift = AXIOM.META().drift(fluss);

        // Übergabe an SYS
        window.SYS.vital = vital;
        window.SYS.balance = balance;
        window.SYS.drift = drift;

        // HOLO-Update
        HOLO_ENGINE.update({
            vital,
            balance,
            drift
        });

        return { mana, aura, kraft, licht, fokus, fluss, vital, balance, drift };
    },

    // ─── LYC-START ─────────────────────────────────────────────
    start() {
        console.log("SYS.LYC → gestartet");
        return this.pulse();
    }
};

console.log("SYS → LYC geladen (Life-Yield-Core)");

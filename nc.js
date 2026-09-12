// ============================================================
// NC · Neural Core · RAW → NC → SYS
// AXIOM · RAWATOR · HOLO · 3-6-9
// ============================================================

import { AXIOM } from "./axiom.js";

export const NC = {

    // ─── RAW → NC Übersetzung ─────────────────────────────────
    translate(rawFrame) {
        if (!rawFrame) return null;

        const mana = AXIOM.MANA().pulse();
        const aura = AXIOM.AURA().resonance();
        const kraft = AXIOM.KRAFT().impulse();

        const licht = AXIOM.LICHT().shine();
        const fokus = AXIOM.FOKUS().align();
        const fluss = AXIOM.FLUSS().drift();

        const vital = AXIOM.META().vital(mana, aura, kraft);
        const balance = AXIOM.META().balance([mana, aura, kraft, licht, fokus, fluss]);
        const drift = AXIOM.META().drift(fluss);

        return {
            id: rawFrame.id,
            axis: AXIOM.AXIS369(),
            mana,
            aura,
            kraft,
            licht,
            fokus,
            fluss,
            vital,
            balance,
            drift
        };
    },

    // ─── NC-PULSE (Systemimpuls) ───────────────────────────────
    pulse() {
        const mana = AXIOM.MANA().pulse();
        const aura = AXIOM.AURA().resonance();
        const kraft = AXIOM.KRAFT().impulse();

        const vital = AXIOM.META().vital(mana, aura, kraft);
        const balance = AXIOM.META().balance([mana, aura, kraft]);

        return { mana, aura, kraft, vital, balance };
    }
};

console.log("NC → Neural Core geladen");

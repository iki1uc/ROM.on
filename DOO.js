// ============================================================
// DOO · Door / Action Core
// RAWATOR → AXIOM → NC → SYS → USER
// ============================================================

import { AXIOM } from "./axiom.js";
import { NC } from "./nc.js";

export const DOO = {

    // ─── ACTION: Energie → Handlung ───────────────────────────
    action(input) {
        const translated = NC.translate(input);

        if (!translated) {
            return { status: "no-input", action: null };
        }

        // AXIOM-Kräfte
        const licht = AXIOM.LICHT().shine();
        const fokus = AXIOM.FOKUS().align();
        const fluss = AXIOM.FLUSS().drift();

        // Handlung erzeugen
        const action = {
            id: translated.id,
            vital: translated.vital,
            balance: translated.balance,
            drift: translated.drift,

            licht,
            fokus,
            fluss,

            effect: this.effect(translated)
        };

        return action;
    },

    // ─── EFFECT: Wirkung der Handlung ─────────────────────────
    effect(state) {
        return {
            boost: state.vital * 1.1,
            stabilize: state.balance * 0.9,
            move: state.drift * 1.2,
            axis: AXIOM.AXIS369()
        };
    },

    // ─── DOOR: Übergang öffnen ────────────────────────────────
    door() {
        return {
            open: true,
            mode: "action",
            axis: AXIOM.AXIS369(),
            message: "DOO → Tür geöffnet"
        };
    }
};

console.log("DOO → Action Core geladen");

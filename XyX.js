// ============================================================
// XyX · Cross-Core / Matrix-Kreuzung
// RAWATOR ↔ AXIOM ↔ NC ↔ HOLO ↔ SYS ↔ DOO ↔ SHELL
// ============================================================

import { AXIOM } from "./axiom.js";
import { NC } from "./nc.js";
import { DOO } from "./DOO.js";
import { SHELL } from "./SHELL.js";
import { HOLO_ENGINE } from "./HOLO.engine.js";

export const XyX = {

    // ─── STATUS ───────────────────────────────────────────────
    status: "idle",

    // ─── KREUZUNG: verbindet alle Kerne ───────────────────────
    cross(rawFrame) {
        const nc = NC.translate(rawFrame);
        const action = DOO.action(rawFrame);

        const vital = nc?.vital || 0;
        const balance = nc?.balance || 0;
        const drift = nc?.drift || 0;

        const licht = AXIOM.LICHT().shine();
        const fokus = AXIOM.FOKUS().align();
        const fluss = AXIOM.FLUSS().drift();

        const cross = {
            id: rawFrame?.id || "none",
            vital,
            balance,
            drift,
            licht,
            fokus,
            fluss,
            action,
            axis: AXIOM.AXIS369()
        };

        HOLO_ENGINE.update({
            vital,
            balance,
            drift
        });

        return cross;
    },

    // ─── XyX-PULSE: Systemüberlagerung ─────────────────────────
    pulse() {
        const mana = AXIOM.MANA().pulse();
        const aura = AXIOM.AURA().resonance();
        const kraft = AXIOM.KRAFT().impulse();

        const vital = AXIOM.META().vital(mana, aura, kraft);
        const balance = AXIOM.META().balance([mana, aura, kraft]);
        const drift = AXIOM.META().drift(kraft);

        return {
            mana,
            aura,
            kraft,
            vital,
            balance,
            drift,
            axis: AXIOM.AXIS369()
        };
    },

    // ─── XyX-OPEN: aktiviert SHELL ─────────────────────────────
    openShell() {
        return SHELL.open();
    },

    // ─── XyX-INFO ─────────────────────────────────────────────
    info() {
        return {
            status: this.status,
            axis: AXIOM.AXIS369(),
            shell: SHELL.info()
        };
    }
};

console.log("XyX → Cross-Core geladen");

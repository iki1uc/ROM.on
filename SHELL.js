// ============================================================
// SHELL · System Shell / Root Wrapper
// RAWATOR · AXIOM · NC · SYS · USER
// ============================================================

import { SYS } from "./SYS.js";
import { NC } from "./nc.js";
import { DOO } from "./DOO.js";

export const SHELL = {

    // ─── SHELL-STATUS ─────────────────────────────────────────
    status: "closed",
    session: null,

    // ─── SHELL ÖFFNEN ─────────────────────────────────────────
    open() {
        this.status = "open";
        this.session = {
            id: Date.now(),
            start: new Date().toISOString(),
            vital: SYS.vital || 0,
            balance: SYS.balance || 0
        };

        console.log("SHELL → geöffnet");
        return this.session;
    },

    // ─── SHELL SCHLIESSEN ─────────────────────────────────────
    close() {
        this.status = "closed";
        console.log("SHELL → geschlossen");
        return { status: "closed" };
    },

    // ─── SHELL-PULSE (NC → SYS → DOO) ─────────────────────────
    pulse(rawFrame) {
        if (this.status !== "open") {
            return { error: "shell-closed" };
        }

        const nc = NC.translate(rawFrame);
        const action = DOO.action(rawFrame);

        const output = {
            nc,
            action,
            vital: nc?.vital || 0,
            balance: nc?.balance || 0,
            drift: nc?.drift || 0
        };

        SYS.vital = output.vital;
        SYS.balance = output.balance;
        SYS.drift = output.drift;

        return output;
    },

    // ─── SHELL-INFO ───────────────────────────────────────────
    info() {
        return {
            status: this.status,
            session: this.session,
            sys: {
                vital: SYS.vital,
                balance: SYS.balance,
                drift: SYS.drift
            }
        };
    }
};

console.log("SHELL → geladen (System Shell / Root Wrapper)");

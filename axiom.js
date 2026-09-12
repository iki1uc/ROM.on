// ============================================================
//  AXIOM · MANA · AURA · KRAFT · LICHT · FOKUS · FLUSS
//  IKI1UC · SYS3-6-9 · NC-ENGINE · RAWATOR · HOLO-81
// ============================================================

// ─────────────────────────────────────────────────────────────
// 1. MANA — Energiefluss
// ─────────────────────────────────────────────────────────────
function MANA(flow = 1) {
    return {
        id: "AXIOM-MANA",
        type: "energy",
        flow,
        pulse() {
            return this.flow * (0.95 + Math.random() * 0.1);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 2. AURA — Feld / Resonanz
// ─────────────────────────────────────────────────────────────
function AURA(radius = 3) {
    return {
        id: "AXIOM-AURA",
        type: "field",
        radius,
        resonance() {
            return this.radius * (0.85 + Math.random() * 0.15);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 3. KRAFT — Impuls / Bewegung
// ─────────────────────────────────────────────────────────────
function KRAFT(force = 1) {
    return {
        id: "AXIOM-KRAFT",
        type: "impact",
        force,
        impulse() {
            return this.force * (0.9 + Math.random() * 0.3);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 4. LICHT — Klarheit / Bewusstsein
// ─────────────────────────────────────────────────────────────
function LICHT(level = 1) {
    return {
        id: "AXIOM-LICHT",
        type: "clarity",
        level,
        shine() {
            return this.level * (0.9 + Math.random() * 0.2);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 5. FOKUS — Zentrierung / Richtung
// ─────────────────────────────────────────────────────────────
function FOKUS(depth = 1) {
    return {
        id: "AXIOM-FOKUS",
        type: "focus",
        depth,
        align() {
            return this.depth * (0.92 + Math.random() * 0.18);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 6. FLUSS — Drift / Orbit / Bewegung
// ─────────────────────────────────────────────────────────────
function FLUSS(rate = 1) {
    return {
        id: "AXIOM-FLUSS",
        type: "flow",
        rate,
        drift() {
            return this.rate * (0.88 + Math.random() * 0.22);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// 7. AXIS369 — eure 3-6-9 Regel
// ─────────────────────────────────────────────────────────────
function AXIS369() {
    return {
        axis3: ["mana", "aura", "kraft"],
        axis6: ["licht", "fokus", "fluss", "mana", "aura", "kraft"],
        axis9: ["mana","aura","kraft","licht","fokus","fluss","vital","balance","drift"]
    };
}

// ─────────────────────────────────────────────────────────────
// 8. META — Vitalität, Balance, Drift
// ─────────────────────────────────────────────────────────────
function META() {
    return {
        vital(m, a, k) {
            return (m + a + k) / 3;
        },
        balance(values) {
            const avg = values.reduce((a,b)=>a+b,0) / values.length;
            const dev = values.map(v => Math.abs(v - avg));
            return Math.max(...dev);
        },
        drift(fluss) {
            return fluss * (0.5 + Math.random() * 0.5);
        }
    };
}

// ─────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────
export const AXIOM = {
    MANA,
    AURA,
    KRAFT,
    LICHT,
    FOKUS,
    FLUSS,
    AXIS369,
    META
};

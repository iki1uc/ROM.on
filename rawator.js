// ============================================================
// RAWATOR · Start-Routine · verbindet AXIOM mit HOLO 12.09. einbindeung
// ============================================================

export const RAWATOR_ROLE = {
    name: "RAWATOR",
    type: "meta-kernel",
    roles: [
        "übersetzer",
        "verbinder",
        "regel-hüter",
        "nc-commander",
        "ki-versteher",
        "matrix-controller",
        "balance-wächter"
    ]
};
import { AXIOM } from "./axiom.js";
import { HOLO_ENGINE } from "./HOLO.engine.js";

const mana = AXIOM.MANA();
const aura = AXIOM.AURA();
const kraft = AXIOM.KRAFT();

export function RAWATOR_START() {
    HOLO_ENGINE.init();

    const manaPulse = mana.pulse();
    const auraPulse = aura.resonance();
    const kraftPulse = kraft.impulse();
    const vital = (manaPulse + auraPulse + kraftPulse) / 3;

    HOLO_ENGINE.update({
        vital,
        mana: manaPulse,
        aura: auraPulse,
        kraft: kraftPulse
    });

    console.log("RAWATOR → gestartet, vital:", vital.toFixed(4));
    return vital;
}
import { MATRIX81 } from "./rawator-81.js";

export function RAWATOR_MATRIX() {
    const matrix = MATRIX81.build();
    const check = MATRIX81.verify(matrix);

    return {
        matrix,
        farbgleich: check.farbgleich,
        gleichzahl: check.gleichzahl,
        gegenMasse: check.gegenMasse
    };
}
import { NC } from "./nc.js";
import { SYS } from "./SYS.js";

export function RAWATOR_TRANSLATE(raw) {
    const nc = NC.translate(raw);
    const sys = SYS.dispatch(nc);

    return {
        raw,
        nc,
        sys
    };
}
export function RAWATOR_RULE() {
    const m = RAWATOR_MATRIX();

    return {
        farbgleich: m.farbgleich,
        gleichzahl: m.gleichzahl,
        gegenMasse: m.gegenMasse,
        ok: m.farbgleich && m.gleichzahl && !m.gegenMasse
    };
}
export function RAWATOR_BALANCE(values) {
    const sum = values.reduce((a,b)=>a+b,0);
    const avg = sum / values.length;

    const deviation = values.map(v => Math.abs(v - avg));
    const maxDev = Math.max(...deviation);

    return {
        avg,
        maxDev,
        balanced: maxDev < 0.15
    };
}
export function RAWATOR_SYS_SYNC() {
    if (!window.SYS) return false;

    window.SYS.sync();
    return true;
}
export function RAWATOR_HOLO() {
    const pulse = RAWATOR_PULSE();
    const rule = RAWATOR_RULE();

    HOLO_ENGINE.update({
        vital: pulse.vital,
        farbgleich: rule.farbgleich,
        gleichzahl: rule.gleichzahl,
        gegenMasse: rule.gegenMasse
    });

    return pulse.vital;
}
export function RAWATOR_CALL() {
    return {
        start: RAWATOR_START(),
        pulse: RAWATOR_PULSE(),
        matrix: RAWATOR_MATRIX(),
        rule: RAWATOR_RULE(),
        holo: RAWATOR_HOLO(),
        sys: RAWATOR_SYS_SYNC()
    };
}
export const RAWATOR = {
    start: RAWATOR_START,
    pulse: RAWATOR_PULSE,
    matrix: RAWATOR_MATRIX,
    translate: RAWATOR_TRANSLATE,
    rule: RAWATOR_RULE,
    balance: RAWATOR_BALANCE,
    holo: RAWATOR_HOLO,
    sysSync: RAWATOR_SYS_SYNC,
    call: RAWATOR_CALL,
    role: RAWATOR_ROLE
};

// ============================================================
// RAWATOR · LEBENSGEBER · 81-HOLOGRAMM · ANIME · SHUFFLE
// ============================================================

import { Molecule } from './molecule.js';
import { RAWATOR_81 } from './rawator-81.js';
import { BEAM_KERNEL } from './beam.js';
import { RAWATOR_START } from './rawator.js';
import { AXIOM } from './axiom.js';
import { HOLO_ENGINE } from './HOLO.engine.js';

export const RAWATOR_LIFE = {
    name: 'RAWATOR · Lebensgeber',
    status: 'initialisiert',
    vital: 0,
    co2: 0,
    wasser: 0,
    sauerstoff: 0,
    hologramm: [],
    anime: [],
    shuffle: [],
    messgerät: {},
    editor: {},
    balance: 0,

    // ─── INIT ──────────────────────────────────────────────────
    init() {
        // Moleküle laden
        const universe = this.getMolecules();
        this.co2 = universe.co2;
        this.wasser = universe.water;
        this.sauerstoff = universe.oxygen;

        this.vital = (this.co2.vital + this.wasser.vital + this.sauerstoff.vital) / 3;

        // 81-Hologramm laden
        this.hologramm = RAWATOR_81();

        // Shuffle
        this.shuffle = this.initShuffle();

        // Anime
        this.anime = this.initAnime();

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

        this.status = 'lebendig';
        return this.status;
    },

    // ─── MOLEKÜLE ─────────────────────────────────────────────
    getMolecules() {
        return {
            water: Molecule.H2O(),
            oxygen: Molecule.O2(),
            co2: Molecule.CO2()
        };
    },

    // ─── SHUFFLE ───────────────────────────────────────────────
    initShuffle() {
        const moves = ['↻','↺','↑','↓','←','→','↗','↘','↖','↙'];
        const sequence = [];

        for (let i = 0; i < 81; i++) {
            sequence.push({
                step: i + 1,
                move: moves[i % moves.length],
                frame: this.hologramm[i]?.id || `RAW-${i+1}`,
                vital: this.vital * (0.8 + Math.random() * 0.4)
            });
        }

        return sequence;
    },

    // ─── ANIME ──────────────────────────────────────────────────
    initAnime() {
        const frames = [];

        for (let i = 0; i < 81; i++) {
            const holo = this.hologramm[i] || { id: `RAW-${i+1}`, neutral: true };

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
        }

        return frames;
    }
};

// ─── AUTO-INIT ──────────────────────────────────────────────────
RAWATOR_LIFE.init();

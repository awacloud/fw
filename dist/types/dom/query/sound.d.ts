/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace sound {
    let name: string;
    let version: string;
    let type: string;
    let dependencies: any[];
    /** @returns {SoundAPI} */
    function factory(): SoundAPI;
}
/**
 * A clip held in memory.
 */
export type SoundClip = {
    id: string;
    durationMs: number;
    sampleRate: number;
    channels: number;
    buffer: AudioBuffer;
    /**
     * A 16-bit PCM WAV of the current buffer.
     */
    bytes: () => Promise<ArrayBuffer>;
    /**
     * Release the buffer; any later use throws `TypeError`.
     */
    dispose: () => void;
};
/**
 * A recording in progress.
 */
export type SoundRecording = {
    /**
     * Live RMS level, 0..1 (0 once stopped).
     */
    level: () => number;
    /**
     * Stop and decode; idempotent (the auto-stop at `maxMs` included).
     */
    stop: () => Promise<SoundClip>;
    /**
     * Drop it; `stop()` then rejects.
     */
    cancel: () => void;
};
/**
 * A clip playing.
 */
export type SoundVoice = {
    stop: () => void;
    /**
     * Resolves when the voice ends or is stopped.
     */
    ended: Promise<void>;
};
/**
 * Public API returned by `sound.factory()`.
 */
export type SoundAPI = {
    support: () => {
        context: boolean;
        recorder: boolean;
        mimeTypes: string[];
    };
    unlock: () => Promise<void>;
    record: (source: object, opts?: {
        maxMs?: number;
        mimeType?: string;
    }) => SoundRecording;
    fromBytes: (bytes: ArrayBuffer) => Promise<SoundClip>;
    fromBuffer: (buffer: AudioBuffer) => SoundClip;
    trim: (clip: SoundClip, opts?: {
        thresholdDb?: number;
    }) => SoundClip;
    normalize: (clip: SoundClip, opts?: {
        peak?: number;
    }) => SoundClip;
    play: (clip: SoundClip, opts?: {
        rate?: number;
        gain?: number;
        when?: number;
    }) => SoundVoice;
    rate: (semitones: number) => number;
    disposeAll: () => Promise<void>;
};
//# sourceMappingURL=sound.d.ts.map
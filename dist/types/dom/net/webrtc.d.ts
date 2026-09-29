/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
export namespace webrtc {
    let name: string;
    let type: string;
    let dependencies: any[];
    /** @returns {WebrtcAPI} */
    function factory(): WebrtcAPI;
}
/**
 * Structured error wrapper for WebRTC failures.
 *
 * `kind` is a stable string identifier you can switch on:
 *
 * - `'setLocal'` / `'setRemote'` - SDP application failed
 * - `'addIceCandidate'` - ICE candidate ingestion failed (after flush)
 * - `'createOffer'` / `'createAnswer'` - SDP negotiation failed
 * - `'sendOverflow'` - DataChannel send queue exceeded `sendQueueMax`
 * - `'sendClosed'` - `send()` called after the channel was closed
 */
export type WebRTCErrorCtor = new (kind: string, message: string, cause?: unknown) => Error & {
    kind: string;
    cause?: unknown;
};
/**
 * A buffered DataChannel wrapper returned by `WebrtcPeer.dataChannel()`.
 */
export type WebrtcDataChannel = {
    /**
     * Send data, buffering until the channel is open.
     */
    send: (data: string | Blob | ArrayBuffer | ArrayBufferView) => void;
    /**
     * Close the channel and remove all listeners.
     */
    close: () => void;
    /**
     * Underlying `RTCDataChannel.readyState` (read-only).
     */
    readyState: string;
    /**
     * Number of messages buffered awaiting open (read-only).
     */
    queuedAmount: number;
    /**
     * Open-handler setter (write-only).
     */
    onopen: Function;
    /**
     * Message-handler setter (write-only).
     */
    onmessage: Function;
    /**
     * Close-handler setter (write-only).
     */
    onclose: Function;
    /**
     * Error-handler setter (write-only).
     */
    onerror: Function;
    /**
     * Underlying native data channel.
     */
    raw: RTCDataChannel;
};
/**
 * A peer-connection handle returned by `WebrtcAPI.peer()`.
 */
export type WebrtcPeer = {
    /**
     * Register a listener; returns an unsubscribe.
     */
    on: (name: string, cb: Function) => (() => void);
    /**
     * Remove a listener.
     */
    off: (name: string, cb: Function) => void;
    /**
     * Create an SDP offer.
     */
    createOffer: (options?: RTCOfferOptions) => Promise<RTCSessionDescriptionInit>;
    /**
     * Create an SDP answer.
     */
    createAnswer: (options?: RTCAnswerOptions) => Promise<RTCSessionDescriptionInit>;
    /**
     * Apply the local description.
     */
    setLocal: (desc: RTCLocalSessionDescriptionInit) => Promise<void>;
    /**
     * Apply the remote description and flush queued ICE.
     */
    setRemote: (desc: RTCSessionDescriptionInit) => Promise<void>;
    /**
     * Add or queue a remote ICE candidate.
     */
    addIceCandidate: (candidate: RTCIceCandidateInit | RTCIceCandidate) => Promise<void>;
    /**
     * Open a buffered data channel.
     */
    dataChannel: (label: string, options?: RTCDataChannelInit & {
        sendQueueMax?: number;
    }) => WebrtcDataChannel;
    /**
     * Add a media track.
     */
    addTrack: (track: MediaStreamTrack, ...streams: MediaStream[]) => RTCRtpSender;
    /**
     * Remove a media track sender.
     */
    removeTrack: (sender: RTCRtpSender) => void;
    /**
     * Close the connection and release all bridges.
     */
    close: () => void;
    /**
     * Number of ICE candidates currently buffered (read-only).
     */
    pendingIce: number;
    /**
     * Underlying `RTCPeerConnection.connectionState` (read-only).
     */
    connectionState: string;
    /**
     * Underlying `RTCPeerConnection.iceConnectionState` (read-only).
     */
    iceConnectionState: string;
    /**
     * Underlying native peer connection.
     */
    raw: RTCPeerConnection;
};
/**
 * Public API returned by `webrtc.factory()`.
 */
export type WebrtcAPI = {
    /**
     * Create a peer-connection wrapper.
     */
    peer: (config?: RTCConfiguration) => WebrtcPeer;
    /**
     * Structured error constructor (instanceof-able via the resolved module).
     */
    WebRTCError: WebRTCErrorCtor;
};
//# sourceMappingURL=webrtc.d.ts.map
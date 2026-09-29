/*!
 * Copyright (c) 2026 AwaCloud SAS
 * Author: Matthieu Bouilloux
 * SPDX-License-Identifier: Apache-2.0
 */
declare const _default: ({
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ProcessMessageAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ProcessRPCAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WorkerPoolAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): EasingAPI;
} | {
    name: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EasingAPI;
    }[];
    factory(easing: any): AnimateAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): FullscreenAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): DownloadAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): FsAccessAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): BroadcastChannelAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): BroadcastChannelAPI;
    }[];
    factory(broadcastChannel: any): IndexedDBAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): AjaxAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): WsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): EventBusAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: any[];
        factory(): AjaxAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): WsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EventBusAPI;
    })[];
    factory(ajaxFactory: object, wsFactory: object, eventBus: object): RemoteStoreAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): BroadcastChannelAPI;
    }[];
    factory(broadcastChannel: any): StorageAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): VisibilityAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): IdleAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: any[];
        worker: boolean;
        factory(): VisibilityAPI;
    }[];
    worker: boolean;
    factory(visibility: any extends {
        factory: (...a: any[]) => infer R;
    } ? R : any): WakeLockAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): SseAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): WebrtcAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): NetworkAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): DndAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): SecPolicyAPI;
} | {
    name: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    factory(secPolicy: any): DomAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): EventsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    }[];
    factory(events: any): GestureAPI;
} | {
    name: string;
    type: string;
    dependencies: any[];
    factory(): MediaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): StatsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): LinalgAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): EasingAPI;
        }[];
        factory(easing: any): AnimateAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): StatsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): LinalgAPI;
    })[];
    factory(dom: any, animate: any, stats: any, linalg: any): ChartAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): SignalAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SignalAPI;
    }[];
    factory(signal: any): ReactiveBindAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    factory(secPolicy: any): ParserAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SignalAPI;
        }[];
        factory(signal: any): ReactiveBindAPI;
    }[];
    factory(reactiveBind: any): ComponentAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ClockAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ClockAPI;
    }[];
    factory(clock: any): DevtoolsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): ClockAPI;
        }[];
        factory(clock: any): DevtoolsAPI;
    }[];
    factory(devtools: object): DevtoolsUIAPI;
} | {
    name: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    factory(secPolicy: any): RenderAPI;
} | {
    name: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    factory(secPolicy: object): SanitizeInstance;
} | {
    name: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SecPolicyAPI;
    }[];
    factory(secPolicy: any): TemplateAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    }[];
    factory(dom: any): ThemeTokensAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): ParserAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): RenderAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): TemplateAPI;
    })[];
    factory(template: any, render: any, parser: any, dom: any, events: any): UiSessionCoreAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    factory(dom: any, events: any): UiSessionDirectAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): RenderAPI;
    } | {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): TemplateAPI;
    })[];
    factory(template: any, render: any, dom: any): UiSessionListAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): DomAPI;
        } | {
            name: string;
            type: string;
            dependencies: any[];
            factory(): EventsAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): ParserAPI;
        } | {
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): RenderAPI;
        } | {
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): TemplateAPI;
        })[];
        factory(template: any, render: any, parser: any, dom: any, events: any): UiSessionCoreAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): DomAPI;
        } | {
            name: string;
            type: string;
            dependencies: any[];
            factory(): EventsAPI;
        })[];
        factory(dom: any, events: any): UiSessionDirectAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): DomAPI;
        } | {
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): RenderAPI;
        } | {
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): TemplateAPI;
        })[];
        factory(template: any, render: any, dom: any): UiSessionListAPI;
    })[];
    factory(core: any, direct: any, list: any): (containerName: string) => UISessionInstance;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    }[];
    factory(dom: any): VirtualScrollAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): GeolocationAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): BatteryAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): NetworkInfoAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): SensorsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ServiceWorkerAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ServiceWorkerAPI;
    }[];
    factory(serviceWorker: any): BackgroundSyncAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): CacheAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ServiceWorkerAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
    })[];
    factory(serviceWorker: any, b64: any): PushAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ProcessRPCAPI;
    }[];
    factory(processRPC: any): SharedWorkerAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): A11yAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ClipboardAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        worker: boolean;
        factory(): SensorsAPI;
    }[];
    factory(sensors: any): EntropyCollectorAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    factory(dom: any, events: any): FocusAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SecPolicyAPI;
        }[];
        factory(secPolicy: any): DomAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    factory(dom: any, events: any): FormAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ValidAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): SignalAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): SignalAPI;
        }[];
        factory(signal: any): ReactiveBindAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): SecPolicyAPI;
            }[];
            factory(secPolicy: any): DomAPI;
        } | {
            name: string;
            type: string;
            dependencies: any[];
            factory(): EventsAPI;
        })[];
        factory(dom: any, events: any): FormAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ValidAPI;
    })[];
    factory(form: any, valid: any, _reactiveBind: any, signal: any): FormKitAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): EventBusAPI;
    } | {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    })[];
    factory(events: any, eventBus: any): KeybindingsAPI;
} | {
    name: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): HexAPI;
    }[];
    factory(hex: {
        fromBytes: (bytes: Uint8Array) => string;
    }): UuidFactoryApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        type: string;
        dependencies: any[];
        factory(): BroadcastChannelAPI;
    } | {
        name: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): HexAPI;
        }[];
        factory(hex: {
            fromBytes: (bytes: Uint8Array) => string;
        }): UuidFactoryApi;
    })[];
    factory(broadcastChannel: object, uuid: object): LeaderElectionAPI;
} | {
    name: "notifications";
    version: "1.0.0";
    type: "fw.dom.utils";
    dependencies: [];
    worker: "partial";
    factory: () => import("../dom/utils/notifications.js").NotificationsApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    worker: boolean;
    factory(): PermissionsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        type: string;
        dependencies: any[];
        factory(): EventsAPI;
    }[];
    factory(events: any): RouteAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): UaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BitArrayAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): AesAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Utf8API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    })[];
    factory(bitArray: any, utf8: any): Sha256API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AesAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    })[];
    factory(bitArray: any, aes: any, sha256: any): RandomAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    })[];
    factory(random: any, b64: any): WebAuthnAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BinaryReaderCtor;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BinaryWriterCtor;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Crc32Ctor;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BigIntAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ValidAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    })[];
    factory(valid: {
        is: (value: any) => string;
    }, utf8: {
        fromBytes: (bytes: Uint8Array) => string;
        toBytes: (text: string) => Uint8Array;
    }): BufferAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    }[];
    factory(utf8: any): CborAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): CsvAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    })[];
    factory(utf8: any, random: any): MimeAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    }[];
    factory(utf8: any): MsgpackAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): UrlAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): XmlAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Lz4API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BitstreamAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitstreamAPI;
    }[];
    factory(bitstream: any): HuffmanAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Lz77API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): LzwAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitstreamAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        }[];
        factory(bitstream: any): HuffmanAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Lz77API;
    })[];
    factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Crc32Ctor;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitstreamAPI;
            }[];
            factory(bitstream: any): HuffmanAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Lz77API;
        })[];
        factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
    })[];
    factory(deflateModule: {
        deflateSync: any;
        inflateSync: any;
        deflate: any;
        inflate: any;
        DeflateStream: any;
        InflateStream: any;
    }, Crc32: new () => {
        append: (arg0: Uint8Array) => void;
        get: () => number;
    }): GzipApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Adler32Ctor;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitstreamAPI;
            }[];
            factory(bitstream: any): HuffmanAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Lz77API;
        })[];
        factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
    })[];
    factory(deflateModule: {
        deflateSync: any;
        inflateSync: any;
        deflate: any;
        inflate: any;
        DeflateStream: any;
        InflateStream: any;
    }, Adler32: Function): ZlibApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Crc32Ctor;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitstreamAPI;
            }[];
            factory(bitstream: any): HuffmanAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Lz77API;
        })[];
        factory(bitstream: any, huffman: any, lz77: any): DeflateApi;
    })[];
    factory(deflateModule: {
        deflateSync: any;
        inflateSync: any;
        deflate: any;
        inflate: any;
        DeflateStream: any;
        InflateStream: any;
    }, Crc32: new () => {
        append: (arg0: Uint8Array) => void;
        get: () => number;
    }): ZipApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BrotliDictAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BrotliDictWordsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitstreamAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        }[];
        factory(bitstream: any): HuffmanAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Lz77API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictWordsAPI;
    })[];
    factory(bitstream: any, huffman: any, lz77: any, brotliDict: any, brotliDictWords: any): BrotliApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BrotliDictWordsAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitstreamAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitstreamAPI;
            }[];
            factory(bitstream: any): HuffmanAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Lz77API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BrotliDictAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BrotliDictWordsAPI;
        })[];
        factory(bitstream: any, huffman: any, lz77: any, brotliDict: any, brotliDictWords: any): BrotliApi;
    })[];
    factory(brotli: any, brotliDict: any, brotliDictWords: any): BrotliSharedAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BrotliFrameAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): I18nAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): LinalgAPI;
    }[];
    factory(linalg: any): GeomAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): InterpAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): FixedPointAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): LruCacheApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): HeapApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): RingBufferApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): TrieApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BTreeApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): TreeWalkerApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): AbortAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): MutexAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): SemaphoreAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ChannelAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): AtomicsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AbortAPI;
    }[];
    factory(abortDep: any): CancellableAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): TokenBucketAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): AnsiAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): HtmlEntitiesAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): SemverAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): UnicodeAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): UnicodeAPI;
    }[];
    factory(unicodeDep: any): StrAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): DateAPI;
} | {
    name: string;
    dependencies: any[];
    factory(): RateLimitAPI;
} | {
    name: string;
    dependencies: any[];
    factory(): SchedulerAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ErrorsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): BitmapAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): QueueCtor;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Ui8API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): ChaCha20API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    }[];
    factory(sha256: any): Sha224API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    })[];
    factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    })[];
    factory(bitArray: any, utf8: any, hmac: any): Pbkdf2API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    })[];
    factory(bitArray: any, utf8: any, hmac: any): HkdfAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    })[];
    factory(bitArray: any, utf8: any): Sha3API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AesAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    })[];
    factory(sha256: any, aes: any): AdfAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Poly1305API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Blake2bAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Blake2bAPI;
    }[];
    factory(blake2b: any): Argon2API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    factory(bitArray: any): CtrAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    factory(bitArray: any): CbcAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    factory(bitArray: any): GcmAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    factory(bitArray: any): CmacAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    }[];
    factory(bitArray: any): KwAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): ChaCha20API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Poly1305API;
    })[];
    factory(chacha20: any, poly1305: any): ChaCha20Poly1305API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    })[];
    factory(bitArray: any, random: any): BnAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): HexAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha512API;
        }[];
        factory(sha512: any): Sha384API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): AesAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, aes: any, sha256: any): RandomAPI;
        })[];
        factory(bitArray: any, random: any): BnAPI;
    })[];
    factory(bitArray: any, hex: any, bn: any, sha256: any, sha384: any, sha512: any, hmac: any): EccApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): X25519API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha512API;
    })[];
    factory(sha512: any, bitArray: any): Ed25519API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): AesAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, aes: any, sha256: any): RandomAPI;
        })[];
        factory(bitArray: any, random: any): BnAPI;
    })[];
    factory(bitArray: any, bn: any, random: any): RsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha3API;
    })[];
    factory(sha3: any, bitArray: any, random: any): MlKemAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha3API;
    })[];
    factory(sha3: any, bitArray: any, random: any): MlDsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha3API;
    })[];
    factory(sha3: any, sha256: any, sha512: any, hmac: any, bitArray: any, random: any): SlhDsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha3API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): X25519API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): AesAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, aes: any, sha256: any): RandomAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha3API;
        })[];
        factory(sha3: any, bitArray: any, random: any): MlKemAPI;
    })[];
    factory(x25519: ReturnType<() => X25519API>, ml_kem: ReturnType<(sha3: any, bitArray: any, random: any) => MlKemAPI>, sha3: ReturnType<(bitArray: any, utf8: any) => Sha3API>): {
        xwing: XwingApi;
    };
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): HexAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha512API;
            }[];
            factory(sha512: any): Sha384API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): AesAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: string[];
                    deps: ({
                        name: string;
                        version: string;
                        type: string;
                        dependencies: any[];
                        factory(): BitArrayAPI;
                    } | {
                        name: string;
                        version: string;
                        type: string;
                        dependencies: any[];
                        factory(): Utf8API;
                    })[];
                    factory(bitArray: any, utf8: any): Sha256API;
                })[];
                factory(bitArray: any, aes: any, sha256: any): RandomAPI;
            })[];
            factory(bitArray: any, random: any): BnAPI;
        })[];
        factory(bitArray: any, hex: any, bn: any, sha256: any, sha384: any, sha512: any, hmac: any): EccApi;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha512API;
        })[];
        factory(sha512: any, bitArray: any): Ed25519API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): AesAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, aes: any, sha256: any): RandomAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha3API;
        })[];
        factory(sha3: any, bitArray: any, random: any): MlDsaAPI;
    })[];
    factory(ml_dsa: any, ed25519: any, ecc: any, sha512: any, sha256: any, random: any, utf8: any): HybridSignApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Asn1API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): Asn1OidAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base64API;
    }[];
    factory(b64: any): PemAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): PadAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AesAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): CtrAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): CbcAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): GcmAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): KwAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): PadAPI;
    })[];
    factory(bitArray: any, aes: any, cbc: any, ctr: any, gcm: any, kw: any, pad: any): AesModesAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): AesAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        }[];
        factory(bitArray: any): CtrAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): PadAPI;
    })[];
    factory(bitArray: any, aes: any, ctr: any, pad: any): AesCtrApi;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): AesAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: string[];
                deps: ({
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): BitArrayAPI;
                } | {
                    name: string;
                    version: string;
                    type: string;
                    dependencies: any[];
                    factory(): Utf8API;
                })[];
                factory(bitArray: any, utf8: any): Sha256API;
            })[];
            factory(bitArray: any, aes: any, sha256: any): RandomAPI;
        })[];
        factory(bitArray: any, random: any): BnAPI;
    })[];
    factory(bitArray: any, bn: any, random: any): RsaKeygenAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Utf8API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha512API;
        })[];
        factory(sha512: any, bitArray: any): Ed25519API;
    })[];
    factory(bitArray: any, utf8: any, b64: any, hmac: any, sha256: any, sha512: any, ed25519: any): JwsAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Asn1API;
    }[];
    factory(asn1: any): KeyformatAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: ({
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): BitArrayAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        })[];
        factory(bitArray: any, utf8: any): Sha256API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): AesAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, aes: any, sha256: any): RandomAPI;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): Base32API;
    } | {
        name: string;
        version: string;
        type: string;
        dependencies: string[];
        deps: ({
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): BitArrayAPI;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: any[];
            factory(): Utf8API;
        } | {
            name: string;
            version: string;
            type: string;
            dependencies: string[];
            deps: ({
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): BitArrayAPI;
            } | {
                name: string;
                version: string;
                type: string;
                dependencies: any[];
                factory(): Utf8API;
            })[];
            factory(bitArray: any, utf8: any): Sha256API;
        })[];
        factory(bitArray: any, utf8: any, sha256: any): HmacAPI;
    })[];
    factory(hmac: any, random: any, base32: any, bitArray: any, sha256: any, sha512: any): TotpAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoDigestAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoHmacAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): {
        isAvailable: () => boolean;
        deriveBits: (password: Uint8Array, salt: Uint8Array, lengthBits: number, iterations?: number, hash?: HashName) => Promise<Uint8Array | false>;
        deriveKey: (password: Uint8Array, salt: Uint8Array, derivedKeyAlg: object, usages: KeyUsage[], iterations?: number, hash?: HashName, extractable?: boolean) => Promise<CryptoKey | false>;
    };
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): {
        isAvailable: () => boolean;
        deriveBits: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array, lengthBits: number, hash?: HashName) => Promise<Uint8Array | false>;
        deriveKey: (ikm: Uint8Array, salt: Uint8Array, info: Uint8Array, derivedKeyAlg: object, usages: KeyUsage[], hash?: HashName, extractable?: boolean) => Promise<CryptoKey | false>;
    };
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoAesAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoAesKwAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoRsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoEccAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoEd25519API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WebcryptoX25519API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: any[];
    factory(): WasmRuntimeAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmArgon2API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmMlKemAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: any): WasmMlDsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: any): WasmSlhDsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmSha3API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmBlake2bAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmChacha20Poly1305API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmSha2API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmHmacAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmPbkdf2API;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmHkdfAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmAesAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: any): WasmRsaAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmEccAPI;
} | {
    name: string;
    version: string;
    type: string;
    dependencies: string[];
    deps: {
        name: string;
        version: string;
        type: string;
        dependencies: any[];
        factory(): WasmRuntimeAPI;
    }[];
    factory(wasmRuntime: import("../crypto/wasm/runtime.js").WasmRuntimeAPI): WasmEd25519API;
})[];
export default _default;
//# sourceMappingURL=modules.d.ts.map
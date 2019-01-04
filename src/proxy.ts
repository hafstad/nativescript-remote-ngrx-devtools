import 'nativescript-websockets'; // Need to be loaded before socketcluster
import {
    ReduxDevtoolsExtension,
    ReduxDevtoolsExtensionConfig,
    ReduxDevtoolsExtensionConnection
} from '@ngrx/store-devtools/src/extension';
import { Connection } from './connection';
import { connect } from 'remotedev/lib/devTools';
import { ApplicationRef, Inject, InjectionToken, Optional } from '@angular/core';

export interface RemoteDevtoolsProxyOptions {
    realtime?: boolean;
    hostname?: string;
    port?: number;
    autoReconnect?: boolean;
    connectTimeout?: number;
    ackTimeout?: number;
    secure?: boolean;
}

export const REMOTE_DEVTOOLS_PROXY_OPTIONS = new InjectionToken<RemoteDevtoolsProxyOptions>(
    'RemoteDevtoolsProxyOptions'
);

export class RemoteDevtoolsProxy implements ReduxDevtoolsExtension {
    remotedev: any = null;
    defaultOptions: RemoteDevtoolsProxyOptions = {};

    constructor(
        @Optional()
        @Inject(REMOTE_DEVTOOLS_PROXY_OPTIONS)
        customOptions: RemoteDevtoolsProxyOptions = {},
        private _applicationRef: ApplicationRef
    ) {
        this.defaultOptions = {
            realtime: true,
            hostname: 'localhost',
            port: 8000,
            autoReconnect: true,
            connectTimeout: 300000,
            ackTimeout: 120000,
            secure: false,
            ...customOptions
        };
    }

    connect(options: ReduxDevtoolsExtensionConfig): ReduxDevtoolsExtensionConnection {
        // TODO: FIX TYPE
        const connectOptions: any = Object.assign(this.defaultOptions, options);

        this.remotedev = connect(connectOptions);

        const connectionProxy = new Connection(this.remotedev, connectOptions.instanceId, this._applicationRef);
        return connectionProxy;
    }

    send(action: any, state: any, options: ReduxDevtoolsExtensionConfig, instanceId?: string): any {
        this.remotedev.send(action, state);
    }
}

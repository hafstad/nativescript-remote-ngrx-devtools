import { ModuleWithProviders, NgModule } from '@angular/core';
import { ɵngrx_modules_store_devtools_store_devtools_j as REDUX_DEVTOOLS_EXTENSION } from '@ngrx/store-devtools';
import { RemoteDevtoolsProxyOptions, RemoteDevtoolsProxy, REMOTE_DEVTOOLS_PROXY_OPTIONS } from './proxy';

@NgModule()
export class NativeScriptRemoteReduxDevtoolsModule {
    public static forRoot(options: RemoteDevtoolsProxyOptions = {}): ModuleWithProviders {
        return {
            ngModule: NativeScriptRemoteReduxDevtoolsModule,
            providers: [
                {
                    provide: REMOTE_DEVTOOLS_PROXY_OPTIONS,
                    useValue: options
                },
                {
                    provide: REDUX_DEVTOOLS_EXTENSION,
                    useClass: RemoteDevtoolsProxy
                }
            ]
        };
    }
}

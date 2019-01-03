import { Observable } from 'tns-core-modules/data/observable';
import { RemoteNgrxDevtools } from 'nativescript-remote-ngrx-devtools';

export class HelloWorldModel extends Observable {
  public message: string;
  private remoteNgrxDevtools: RemoteNgrxDevtools;

  constructor() {
    super();

    this.remoteNgrxDevtools = new RemoteNgrxDevtools();
    this.message = this.remoteNgrxDevtools.message;
  }
}

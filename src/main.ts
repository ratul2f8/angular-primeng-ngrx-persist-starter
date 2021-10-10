import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  getAllDataFromLocalForage,
  default as localForage,
  //@ts-ignore
} from 'ngrx-store-persist';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
getAllDataFromLocalForage({
  driver: localForage.INDEXEDDB,
  keys: [
    'tutorials'
  ],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

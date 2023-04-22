


import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => {
    console.clear();
    console.log(<string>(
      String("bug")
    ));
    console.error(err);
  });

# LazyDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## How it work

On app-routing.module Im declare my routes, to redirect who are don't declared to LoaderComponent, this component, can receive some logic and redirect to the correct page

```javascript
const routes: Routes = [
  { path: 'some', loadChildren: './someComponents/my.module#MyModule'},
  { path: '**', component: LoaderComponent }
];

```

but... why i need this, in my case I check in backend the address typing and depending of the response y redirect to the correct module, because our url are dynamics (ours users can change on admin module) 


we can see if are really working on chrome's console, our AppComponent has this log, to check all router events

```javascript
ngOnInit() {
  this.router
    .events
    .subscribe(v => {
      console.log(v);
  });
} 
```

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { setTimeout } from 'timers';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
})
export class LoaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    console.log('I\'m the loader!');

    setTimeout(() => {
      // after check some rules I can redirect to the rigth component
      this.router.navigateByUrl('some/test1', { skipLocationChange: true });
    }, 3000);
  }

}

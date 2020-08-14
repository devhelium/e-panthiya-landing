import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/assets-dashboard/bundles/libscripts.bundle.js';

    let script2 = document.createElement('script');
    script2.innerHTML = '';
    script2.src = 'assets/assets-dashboard/bundles/vendorscripts.bundle.js';

    let script3 = document.createElement('script');
    script3.innerHTML = '';
    script3.src = 'assets/assets-dashboard/bundles/c3.bundle.js';

    let script4 = document.createElement('script');
    script4.innerHTML = '';
    script4.src = 'assets/assets-dashboard/bundles/mainscripts.bundle.js';

    let script5 = document.createElement('script');
    script5.innerHTML = '';
    script5.src = 'assets/assets-dashboard/js/index.js';

    body.appendChild(script);
    body.appendChild(script2);
    body.appendChild(script3);
    body.appendChild(script4);
    body.appendChild(script5);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: [
        './top-bar.component.css',
        '../../../node_modules/bootstrap/dist/css/bootstrap.css' //I hate relative filepath syntax https://desktop.arcgis.com/en/arcmap/10.3/tools/supplement/pathnames-explained-absolute-relative-unc-and-url.htm
    ]
})
export class TopBarComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
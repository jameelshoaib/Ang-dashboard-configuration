import { Component } from '@angular/core';
import { DashboardControl, DashboardControlArgs, DashboardPanelExtension, ItemCaptionToolbarUpdatedEventArgs, ItemWidgetOptionEventArgs } from 'devexpress-dashboard';
import { TextBoxItemEditorExtension } from 'devexpress-dashboard/designer/text-box-item-editor-extension';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './Dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // productsData: any;
  dashboardData: any; 

  apiEndpoint: string = "http://localhost:3000/data"

  apiData: any;

  responseData: any;

  constructor(private apiService: DashboardService, private http: HttpClient) {

    console.log("apiEndpoint", this.apiEndpoint);
  }

  // ngOnInit() {
  //   this.apiService.fetchData().subscribe((data) => {
  //     console.log("API Data:", data);
  //     this.apiData = data;
  //   });

  //   console.log("apiEndpoint", this.apiEndpoint);
  // }

  ngOnInit() {
    const apiEndpoint = 'http://localhost:3000/data';
  }


  onBeforeRender(e: any) {

    console.log("onBeforeRender", e);
    console.log("onBeforeRender-11", e.component.menuItems() );
    let dashboardControl = e.component;
    dashboardControl.registerExtension(new DashboardPanelExtension(dashboardControl));
    // dashboardControl.registerExtension(new HelloWorldItem(dashboardControl));
    // e.component["get menuItems"]

  }
  
  onItemCaptionToolbarUpdated(e: ItemCaptionToolbarUpdatedEventArgs) {
    // console.log("onItemCaptionToolbarUpdated", e);
  }
  
  onItemWidgetOptionsPrepared(e: ItemWidgetOptionEventArgs) {
    // console.log("onItemWidgetOptionsPrepared", e);
  }
  
  beforeSend(settings: RequestInit) {
    // console.log("beforeSend", settings);
  }
  
  workingMode: string = "Designer";

  get workingModeText() {
    return "Switch to " + this.toggleMode(this.workingMode);
  }

  changeWorkingMode() {    
    this.workingMode = this.toggleMode(this.workingMode);
  }

  toggleMode(mode:any) {
    return mode === "Viewer" ? "Designer" : "Viewer";
  } 

// import * as http from 'http';
// import * as httpProxy from 'http-proxy';


// const target = 'http://localhost:3000';
// const proxy = httpProxy.createProxyServer({});

// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//   proxy.web(req, res, { target });
// });

// server.listen(4200, () => {
//   console.log('Proxy server is running on port 4200');
// });


}
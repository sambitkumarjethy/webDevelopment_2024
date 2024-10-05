import { Component } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:`./server.componet.html`,
    styles:[
        `.online{
          color: white;  
        }`
    ]
    // template: `
    // <h4><b>This is Server component</b></h4>
    // <p> Using direct html in the template</p>
    // <p>________Server component ends _________</p>
    // <p></p>
    //  <p></p>
    // `
})

export class ServerComponent {
    serverId:number = 10;
    serverStatus: string = 'Offline';

    constructor (){
        this.serverStatus = Math.random() > 0.5 ? 'Online' :"Offline"
    }
    getServerStatus(){
        return this.serverStatus
    }
    getColor(){
        return this.serverStatus === 'Online' ? 'green' :'red'
    }
    
}

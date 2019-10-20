import { Component } from "@angular/core";
import * as io from "socket.io-client";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  messageText:String="";
  nameText:String="";
  messages: Array<any> = [];
  // names: Array<any> = [];
  // d1:String="";
  // d2:String="";
  // arr:Array<any>[][];
  socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io.connect();
  }
  ngOnInit() {
    this.messages = new Array();
    // this.names = new Array();
    this.listen2Events();
  }
  listen2Events() {
    this.socket.on("msg", data => {
      this.messages.push(data);
      // this.d1=data;
    });
    // this.socket.on("name", data => {
    //   this.names.push(data);
    //   this.d2=data;
    // });
    // this.arr.push([this.d1,this.d2]);
  }
  sendMessage() {
    this.socket.emit("newMsg", {m:this.messageText,n:this.nameText});
    this.messageText = "";
    // this.socket.emit("newName", this.nameText);
    this.nameText="";
  }
}
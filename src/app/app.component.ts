import { Component } from "@angular/core";
import { UppyConfig } from "uppy-angular/uppy-angular";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  settings: UppyConfig = {
    uploadAPI: {
      endpoint: `test/files/Upload`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("userToken")
      }
    },
    plugins: {
      Webcam: true
    }
  };

  onFileAdd(evt) {
    console.log("onFileAdd", evt);
  }
  onFileUpload(evt) {
    console.log("onFileUpload", evt);
  }
  uploadResult(evt) {
    console.log("uploadResult", evt);
    alert("File Upload will fail as the backend is not configured")
  }
}

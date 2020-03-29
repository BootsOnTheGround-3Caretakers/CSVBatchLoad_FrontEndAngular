import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-csv-form-upload',
  templateUrl: './csv-form-upload.component.html',
  styleUrls: [
    './csv-form-upload.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css' //I hate relative filepath syntax https://desktop.arcgis.com/en/arcmap/10.3/tools/supplement/pathnames-explained-absolute-relative-unc-and-url.htm
]
})

export class CsvFormUploadComponent {
  //csvContent: string;
  uploadForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    hastag: new FormControl(''),
    csvFile: new FormControl(''),
    fileNeeders: new FormControl([null, [Validators.required] ]),
    fileCaretakers: new FormControl([null, [Validators.required] ]),

  })
  // Create Variable for the file and description.
  arrayValue  = []

  fileChange(files: FileList, uploadType: string){ 
    console.log(files[0].name.split(".").pop())
    console.log(files[0])
    let file : File = files[0]; 
    let reader: FileReader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
       let csv: string = reader.result as string;
       let JSONResult: any = csvJSON(csv)
       //console.log(csv);
       //console.log(csvJSON(csv))
       //console.log(JSON.stringify(csvJSON(csv)))
       console.log(JSONResult)
       //this.arrayValue.push( [files[0].name,JSONResult] )
       this.arrayValue[uploadType] = JSONResult
    }
    //console.log(event.target.files)
    //console.log(event.files[0].name.split(".").pop());
  }
  constructor(private http: HttpClient) { }
  postId;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.uploadForm.value);

    console.log(this.arrayValue)
    if(this.arrayValue['fileNeeders']){
      this.http.post<any>('http://c29a9953.ngrok.io/api/v1/NeedersLookingForMatch', this.arrayValue['fileNeeders']).subscribe(data => {
        this.postId = data.id;
    })
    }
    if(this.arrayValue['fileCaretakers']){
      this.http.post<any>('http://c29a9953.ngrok.io/api/v1/CaretakersLookingForMatch', this.arrayValue['fileCaretakers']).subscribe(data => {
        this.postId = data.id;
    })
    }  
    //console.log((this.uploadForm.get('fileNeeders').value))
    //console.log(this.fileChange(this.uploadForm.get('fileNeeders').value))
  }
}


function csvJSON(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length-1;i++){
	  var obj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
	  result.push(obj);
  }
  //return result; //JavaScript object
  return result;
  //return JSON.stringify(result); //JSON
}
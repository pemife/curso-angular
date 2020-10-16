import { Component } from "@angular/core";

@Component({
    selector: '.warning',
    template: `<div class="alert alert-warning" role="alert" onclick="alert('warning')">Esto es un warning</div>`,
    styleUrls: ['./warningalert.component.css']
})
export class WarningComponent {

}
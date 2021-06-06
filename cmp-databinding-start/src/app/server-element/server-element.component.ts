import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None             // Atributos inpuestos automáticamente por angular (deshabilitados) Native -> ShadowDom (buscar)
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngOnChanges( changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }
}

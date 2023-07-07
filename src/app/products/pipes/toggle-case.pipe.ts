import { Pipe, PipeTransform } from "@angular/core";

// richard | toggleCase = 'RICHARD'
// RICHARD | toggleCase = 'richard'

@Pipe({
  name:'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{
  transform(value: string, toUpper: boolean = false): string {

    return (toUpper)
    ? value.toUpperCase()
    : value.toLowerCase();
  }

}

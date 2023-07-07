import { Pipe, PipeTransform } from "@angular/core";

// boolean | canfly = 'Vuela' : 'No Vuela

@Pipe({
  name:'canFly'
})
export class CanFlyPipe implements PipeTransform{
  transform(canfly: boolean): string {

    return (canfly)
    ? 'Vuela'
    : 'No Vuela';
  }

}

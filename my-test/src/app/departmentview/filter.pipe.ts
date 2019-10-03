import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log("source Value "+JSON.stringify(value) + "serach name " + args)
    let filerList = [];
    console.log("before for loop " +value.length )

    for (let i = 0;i<value.length;i++)
    {
      // console.log("in for loop " +value[i].hospitalname )
      if (value[i].hospitalname == args)
      {
        filerList.push(value[i]);
      console.log("push operation " +JSON.stringify(filerList) )
      }
    }
    console.log("after filter: " + filerList)
    return filerList;
  }

}

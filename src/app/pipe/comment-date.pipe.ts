import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import * as ja from 'date-fns/locale/ja';

@Pipe({
  name: 'commentDate' // dateのようにpipeの名前になる部分
})
export class CommentDatePipe implements PipeTransform {
  // valueにmediumなどの引数で指定した内容が入ってくる
  transform(date: string): string {
    return format(date, 'YYYY年MMMDo H:mm', { locale: ja });
  }

}

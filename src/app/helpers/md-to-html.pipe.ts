import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'mdToHtml',
    standalone: true,
})
export class MdToHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, _args?: any): any {
    const htmlContent = marked(value) as string;
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }
}

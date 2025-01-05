import { Component, OnInit, inject } from "@angular/core";
import { Entry } from "contentful";
import { MdToHtmlPipe } from "./helpers/md-to-html.pipe";
import { ContentfulService } from "./services/contentful.service";

@Component({
  selector: 'app-root',
  imports: [MdToHtmlPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  contentfulService = inject(ContentfulService);

  cfCivilLiability!: Entry<any>;

  ngOnInit() {
    const gCivilLiabilityId = '2DsHv5fW3KTTnjf1av7ic8';
    this.contentfulService
      .getContentDetail(gCivilLiabilityId)
      .subscribe((result) => {
        this.cfCivilLiability = result;
        // console.log(this.cfCivilLiability);
      });
  }
}

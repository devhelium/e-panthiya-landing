import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-intro-ten',
  templateUrl: './intro-ten.component.html',
  styleUrls: ['./intro-ten.component.scss'],
  animations:[SharedAnimations],
  providers: [NgbCarouselConfig]
})
export class IntroTenComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/1800/800`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
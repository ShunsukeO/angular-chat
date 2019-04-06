import { TimelineRoutingModule } from './timeline-routing.module';

describe('TimelineRoutingModule', () => {
  let timelineRoutingModule: TimelineRoutingModule;

  beforeEach(() => {
    timelineRoutingModule = new TimelineRoutingModule();
  });

  it('should create an instance', () => {
    expect(timelineRoutingModule).toBeTruthy();
  });
});

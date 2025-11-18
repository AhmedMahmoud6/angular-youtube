import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedVideos } from './suggested-videos';

describe('SuggestedVideos', () => {
  let component: SuggestedVideos;
  let fixture: ComponentFixture<SuggestedVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedVideos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedVideos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'testpractice'`, async(() => {
    console.log("Test case 1");
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testpractice yy');
  }));
  it('should render title in a h1 tag', async(() => {
    console.log("Test case 2");
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to testpractice yy!');
  }));

  it("school name vertifcation test : XYZ School", () => {
    console.log("Test case 4");
    const mycomp = TestBed.createComponent(AppComponent);
    const mycompoinstance = mycomp.debugElement.componentInstance;

    expect(mycompoinstance.schoolName).toEqual("XYZ School");

  });

  it("School name in template vertification ", async(()=> {
    const mycomp = TestBed.createComponent(AppComponent);
    console.log("Test case 5");
    mycomp.detectChanges();
    const changeTemplate = mycomp.debugElement.nativeElement;
    expect(changeTemplate.querySelector("h3").textContent).toContain(" Welcome to my - XYZ School")


  }));
});

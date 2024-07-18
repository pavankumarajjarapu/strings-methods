class MyMarks {
  static passMraks = 35;
  static  message=()=>{
    console.log(`this created by using the static object.`)
  }

  constructor() {
    this.engMarks = 0;
    this.telMarks = 0;
    this.matMarks = 0;
    this.sciMarks = 0;
    this.hinMarks = 0;
    this.socMarks = 0;
  }
  result = () => {
    if (
      this.engMarks >  MyMarks.passMraks &&
      this.telMarks >MyMarks.passMraks &&
    this.sciMarks >MyMarks.passMraks &&
      this.socMarks >MyMarks.passMraks &&
      this.hinMarks >MyMarks.passMraks &&
      this.matMarks >MyMarks.passMraks
    ) {
        console.log(`passed in exam`)
    } else {
        console.log(`failed in exam`)
    }
  };
}
export default MyMarks;

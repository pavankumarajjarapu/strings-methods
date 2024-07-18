import MyMarks from "./MyMarks";

class Matriculation {
    constructor(){
        this.engMarks=0;
        this.matMarks=0
        this.telMarks=0
        this.sciMarks=0
        this.socMarks=0
        this.hinMarks=0
    }
    grade=()=>{
        if (
            this.engMarks >MyMarks.passMraks &&
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
    }
}
export default Matriculation
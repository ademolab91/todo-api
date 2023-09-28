import { BaseModelInterface, BaseModel } from "./baseModel";

interface TaskInterface extends BaseModelInterface {
  value: string;
}

class Task extends BaseModel implements TaskInterface {
  value: string;

  constructor(value: string) {
    super();
    this.value = value;
  }
}

let f = new Task("Go home by 10:30pm");
let ff = new Task("Go bath by 11:50pm");
console.log(f, ff);

export { Task, TaskInterface };

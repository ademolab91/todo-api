import crypto from "crypto";

interface BaseModelInterface {
  readonly id: string;
  createdAt: Date;
  updatedAt: Date;
  save(): void;
  to_obj(): object;
  delete(): void;
}

function generateId(): string {
  return crypto.randomUUID();
}

class BaseModel implements BaseModelInterface {
  readonly id: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.id = generateId();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  save(): void {
    // Does nothing
  }

  to_obj(): object {
    return {};
  }

  delete(): void {
    //   Does nothing yet
  }
}

// let b: BaseModel = new BaseModel();
// console.log(b);

export { BaseModel, BaseModelInterface };

import  SubsystemA   from './subsystems/subSystemA';
import  SubsystemB  from './subsystems/subSystemB';
import  SubsystemC  from './subsystems/subSystemC';

class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  // Provide a simple interface to clients that hides the complexity of the subsystems.
  public operationA(): string {
    return `${this.subsystemA.operationA1()} ${this.subsystemA.operationA2()}`;
  }

  public operationB(): string {
    return `${this.subsystemB.operationB1()} ${this.subsystemB.operationB2()}`;
  }

  public operationC(): string {
    return `${this.subsystemC.operationC1()} ${this.subsystemC.operationC2()}`;
  }
}

export default Facade;
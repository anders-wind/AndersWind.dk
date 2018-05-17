export class Press {
  public current: { x: number; y: number } = { x: 0, y: 0 };
  public old: { x: number; y: number } = { x: 0, y: 0 };
  public delta: { x: number; y: number } = { x: 0, y: 0 };
  public power: number = 0;
  public isDead: boolean = false;
  public isMouse: boolean = false;

  public readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

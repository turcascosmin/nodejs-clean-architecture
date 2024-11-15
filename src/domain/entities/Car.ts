export class Car {
  constructor(
    public readonly carMake: string,
    public readonly carModel: string,
    public readonly color: string,
    public readonly _id?: string | unknown,
  ) {}
}

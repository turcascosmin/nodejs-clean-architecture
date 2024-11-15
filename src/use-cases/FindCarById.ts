import { Car } from '../domain/entities/Car';
import { ICarInteractor } from '../domain/interfaces/ICarInteractor';

export class FindCarById {
  constructor(private carRepository: ICarInteractor) {}

  async execute(id: string): Promise<Car | null> {
    return await this.carRepository.findById(id);
  }
}

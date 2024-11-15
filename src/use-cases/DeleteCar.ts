import { Car } from '../domain/entities/Car';
import { ICarInteractor } from '../domain/interfaces/ICarInteractor';

export class DeleteCar {
  constructor(private carRepository: ICarInteractor) {}

  async execute(id: string): Promise<void> {
    return await this.carRepository.delete(id);
  }
}

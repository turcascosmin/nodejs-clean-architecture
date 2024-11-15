import { Request, Response, NextFunction } from 'express';
import { DIContainer } from '../../infrastructure/DIContainer';
import { CreateCarDto } from '../dto/CreateCarDto';
import { validate } from 'class-validator';
import { UpdateCarDto } from '../dto/UpdateCarDto';

export class CarController {
  private getAllCars = DIContainer.getAllCarsUseCase();
  private createCar = DIContainer.createCarUseCase();
  private findCarById = DIContainer.findCarByIdUseCase();
  private updateCar = DIContainer.updateCarUseCase();
  private deleteCar = DIContainer.deleteCarUseCase();

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = Object.assign(new CreateCarDto(), req.body);
      const errors = await validate(dto);

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      const car = await this.createCar.execute(dto);
      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const cars = await this.getAllCars.execute();
      res.status(200).json(cars);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const car = await this.findCarById.execute(req.params.id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const dto = Object.assign(new UpdateCarDto(), req.body);
      const errors = await validate(dto);

      if (errors.length > 0) {
        return res.status(400).json({ errors });
      }

      await this.updateCar.execute(id, dto);
      res.status(200).json({ message: 'Car updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await this.deleteCar.execute(req.params.id);
      res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

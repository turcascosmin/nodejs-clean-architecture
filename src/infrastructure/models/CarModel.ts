import mongoose, { Schema, Document } from 'mongoose';

interface ICar extends Document {
  carMake: string;
  carModel: string;
  color: string;
}

const CarSchema: Schema = new Schema({
  carMake: { type: String, required: true },
  carModel: { type: String, required: true },
  color: { type: String, required: true },
});

const CarModel = mongoose.model<ICar>('Car', CarSchema);
export { CarModel, ICar };

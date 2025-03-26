import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type stockStatDocument = HydratedDocument<StockStat>;

@Schema()
export class StockStat extends Document {
  @Prop({ required: true })
  symbol: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  close: number;
}

export const stockStatSchema = SchemaFactory.createForClass(StockStat);

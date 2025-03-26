import { Module } from '@nestjs/common';
import { StockstatsController } from './controllers/stockstats.controller';
import { StockstatsService } from './services/stockstats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StockStat, stockStatSchema } from './schemas/stockstat.schema';
import { StockStatRepository } from './repositories/stockstat.repository';

@Module({
  imports:[ MongooseModule.forFeature([{ name: StockStat.name, schema: stockStatSchema }]),],
  controllers: [StockstatsController],
  providers: [StockstatsService,StockStatRepository]
})
export class StockstatsModule {}

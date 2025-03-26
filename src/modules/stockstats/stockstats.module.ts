import { Module } from '@nestjs/common';
import { StockstatsController } from './controllers/stockstats.controller';
import { StockstatsService } from './services/stockstats.service';

@Module({
  controllers: [StockstatsController],
  providers: [StockstatsService]
})
export class StockstatsModule {}

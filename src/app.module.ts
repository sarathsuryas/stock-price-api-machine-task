import { Module } from '@nestjs/common';
import { StockstatsModule } from './modules/stockstats/stockstats.module';

@Module({
  imports: [StockstatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

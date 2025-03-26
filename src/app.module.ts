import { Module } from '@nestjs/common';
import { StockstatsModule } from './modules/stockstats/stockstats.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    StockstatsModule,
    ConfigModule.forRoot({
      isGlobal: true,      // setup configservice in root
      envFilePath: '.env',     
      }),
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri: configService.get<string>('MONGODB_URI'), // Get URI from ConfigService
        }),
        inject: [ConfigService], // Inject ConfigService
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

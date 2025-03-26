import { Controller, Get, HttpException, HttpStatus, Query } from '@nestjs/common';
import { StockstatsService } from '../services/stockstats.service';
import { QueryStockStatDto } from '../dtos/query-stock-stat.dto';

@Controller()
export class StockstatsController {
  constructor(private _stockStatService:StockstatsService) {}
  @Get('stock-price')
 async getStockPrice(@Query() query:QueryStockStatDto) {
    try {
        // Validate and process query parameters using DTO
        
        const stockPrice = await this._stockStatService.getStockPrice(query);
        return {
          success: true,
          data: stockPrice,
        };
      } catch (error) {
        // Handle errors gracefully and return appropriate HTTP status
        throw new HttpException(
          {
            success: false,
            message: error.message || 'Failed to fetch stock price.',
          },
          error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
}

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StockStatRepository } from '../repositories/stockstat.repository';
import { QueryStockStatDto } from '../dtos/query-stock-stat.dto';
import { StockPriceNotFoundException } from '../custom-exception/stockPriceNotFound.exception';

@Injectable()
export class StockstatsService {
    constructor(private _stockstatRepository:StockStatRepository) {}
    async getStockPrice(query: QueryStockStatDto) {
        try {
          // Ensure date is in UTC
          const parsedDate = new Date(query.date);
          parsedDate.setUTCHours(0, 0, 0, 0);
    
          // Query with day range to handle timezone issues
          const stockPrice = await this._stockstatRepository.findOne(
            {
              symbol: query.symbol.toUpperCase(),
              Date: {
                $gte: new Date(parsedDate.getTime()),
                $lte: new Date(parsedDate.getTime() + 24 * 60 * 60 * 1000 - 1)
              }
            }, 
            { _id: 0, Close: 1, Date: 1 }
          );
    
          // Throw custom exception if no stock price found
          if (!stockPrice) {
            throw new StockPriceNotFoundException(query.symbol, parsedDate);
          }
    
          return stockPrice;
        } catch (error) {
          // Log the full error for internal tracking
          console.error('Stock Price Retrieval Error:', error);
    
          // Rethrow known exceptions
          if (error instanceof HttpException) {
            throw error;
          }
    
          // Handle unexpected errors
          throw new HttpException(
            {
              success: false,
              message: 'Unexpected error occurred while fetching stock price',
              details: error.message
            },
            HttpStatus.INTERNAL_SERVER_ERROR
          );
        }
      }
}

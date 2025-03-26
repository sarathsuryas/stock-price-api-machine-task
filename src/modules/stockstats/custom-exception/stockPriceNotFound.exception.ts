import { HttpException, HttpStatus } from "@nestjs/common";

export class StockPriceNotFoundException extends HttpException {
    constructor(symbol: string, date: Date) {
      super(
        {
          success: false,
          message: `No stock price found for symbol ${symbol} on ${date.toISOString().split('T')[0]}`
        },
        HttpStatus.NOT_FOUND
      );
    }
  }
  
import { IsString, IsDateString } from 'class-validator';

export class QueryStockStatDto {
  @IsString()
  symbol: string;

  @IsDateString()
  date: string;
}
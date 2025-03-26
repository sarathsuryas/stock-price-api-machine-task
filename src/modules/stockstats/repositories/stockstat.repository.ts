import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "./base.repository";
import {  StockStat, stockStatDocument } from "../schemas/stockstat.schema";
import { Model } from "mongoose";

@Injectable()
export class StockStatRepository extends BaseRepository<StockStat> {
    constructor(@InjectModel(StockStat.name) private stockStatModel: Model<StockStat>) {
      super(stockStatModel);
    }
   
  }
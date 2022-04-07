import {Schema} from 'mongoose';

export interface ITournaments {
  year: number;
  hostCountry: string;
  champions: string;
  runnerUp: string;
  editionGoals: number;
  editionStrikers: string[];
  bestPlayer: string;
  bestGoalkeeper: string;
  bestYoungPlayer: string;
}

const tournamentsSchema = new Schema<ITournaments>({
  year: {type: Number, required: true},
  hostCountry: {type: String, required: true},
  champions: {type: String, required: false},
  runnerUp: {type: String, required: true},
  editionGoals: {type: Number, required: true},
  editionStrikers: {type: [String], required: true},
  bestPlayer: {type: String, required: true},
  bestGoalkeeper: {type: String, required: true},
  bestYoungPlayer: {type: String, required: true},
})

export default tournamentsSchema;
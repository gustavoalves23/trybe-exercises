import {model as createModel} from 'mongoose'
import tournamentsSchema, { ITournaments } from '../schemas/tournamentsSchema'

export default class TournamentModel {
  constructor(private model = createModel<ITournaments>('tournaments', tournamentsSchema)) {}

  public async getAllTournaments(): Promise<ITournaments[]> {

    const tournaments = await this.model.find({});

    
    return tournaments;
  }

  public async getTournamentById(id: string): Promise<ITournaments | null> {
    const tournament = await this.model.findById(id);
    return tournament;
  }

  public async createTournament(tournament: ITournaments): Promise<ITournaments> {
    const createdTournament = await this.model.create(tournament);
    return createdTournament;
  }

  public async updateTournament(id: string, tournament: ITournaments): Promise<ITournaments | null> {
    const updatedTournament = await this.model.findByIdAndUpdate(id, tournament, {new: true});
    return updatedTournament;
  }

  public async deleteTournament(id: string): Promise<ITournaments | null> {
    const deletedTournament = await this.model.findByIdAndDelete(id);
    return deletedTournament;
  }
}
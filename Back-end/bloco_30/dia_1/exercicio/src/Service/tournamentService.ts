import TournamentModel from '../models/tournamentsModel';
import { ITournaments } from './../schemas/tournamentsSchema';

export default class TournamentService {
  private tournamentModel: TournamentModel;
  constructor() {
    this.tournamentModel = new TournamentModel();
  }

  public async getAllTournaments(): Promise<ITournaments[]> {
    const tournaments = await this.tournamentModel.getAllTournaments();
    return tournaments;
  }

  public async getTournamentById(id: string): Promise<ITournaments | null> {
    const tournament = await this.tournamentModel.getTournamentById(id);
    return tournament;
  }

  public async createTournament(tournament: ITournaments): Promise<ITournaments> {
    const createdTournament = await this.tournamentModel.createTournament(tournament);
    return createdTournament;
  }

  public async updateTournament(id: string, tournament: ITournaments): Promise<ITournaments | null> {
    const updatedTournament = await this.tournamentModel.updateTournament(id, tournament);
    return updatedTournament;
  }

  public async deleteTournament(id: string): Promise<ITournaments | null> {
    const deletedTournament = await this.tournamentModel.deleteTournament(id);
    return deletedTournament;
  }
}
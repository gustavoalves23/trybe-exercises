import { ITournaments } from './../schemas/tournamentsSchema';
import { Request, Response } from 'express';
import TournamentService from '../Service/tournamentService'

export default class TournamentController {
  private tournamentService: TournamentService;
  constructor() {
    this.tournamentService = new TournamentService();
    this.getAllTournaments = this.getAllTournaments.bind(this);
    this.getTournamentById = this.getTournamentById.bind(this);
    this.createTournament = this.createTournament.bind(this);
    this.updateTournament = this.updateTournament.bind(this);
    this.deleteTournament = this.deleteTournament.bind(this);
  }

  public async getAllTournaments(_req: Request, res:Response):Promise<void> {
    const tournaments = await this.tournamentService.getAllTournaments();
    res.status(200).json(tournaments);
  }

  public async getTournamentById(req: Request, res:Response):Promise<void | Response> {
    const id = req.params.id;
    const tournament = await this.tournamentService.getTournamentById(id);
    console.log(tournament);
    
    if (!tournament) {
      return res.status(404).json({
        message: 'Tournament not found'
      });
    }
   res.status(200).json(tournament);
  }

  public async createTournament(req: Request, res:Response):Promise<void> {
    const tournament = req.body;
    const createdTournament = await this.tournamentService.createTournament(tournament);
    res.status(201).json(createdTournament);
  }

  public async updateTournament(req: Request, res:Response):Promise<void | Response> {
    const id = req.params.id;
    const tournament = req.body;
    const updatedTournament = await this.tournamentService.updateTournament(id, tournament);
    if (!updatedTournament) {
      return res.status(404).json({
        message: 'Tournament not found'
      });
      res.status(200).json(updatedTournament);
    }
  }

  public async deleteTournament(req: Request, res:Response):Promise<void | Response> {
    const id = req.params.id;
    console.log(id);
    
    const deletedTournament = await this.tournamentService.deleteTournament(id);
    if (!deletedTournament) {
      return res.status(404).json({
        message: 'Tournament not found'
      });
      res.status(200).json(deletedTournament);
    }
  }
}
import { Router } from "express";
import TournamentController from "./Controller/tournamentController";

const router = Router();

const tournamentController = new TournamentController();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get("/tournaments", tournamentController.getAllTournaments);
router.get("/tournaments/:id", tournamentController.getTournamentById);
router.post("/tournaments", tournamentController.createTournament);
router.put("/tournaments/:id", tournamentController.updateTournament);
router.delete("/tournaments/:id", tournamentController.deleteTournament);

export default router;
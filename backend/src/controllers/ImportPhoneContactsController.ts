import { Request, Response } from "express";
import ImportContactsService from "../services/WbotServices/ImportContactsService";

export const store = async (req: Request, res: Response): Promise<Response> => {
  const userId = req.user.id;
  await ImportContactsService(parseInt(userId, 10));

  return res.status(200).json({ message: "contacts imported" });
};

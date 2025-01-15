import { Client as Session } from "whatsapp-web.js";
import { getWbot } from "../libs/wbot";
import Ticket from "../models/Ticket";
import GetDefaultWhatsApp from "./GetDefaultWhatsApp";

const GetTicketWbot = async (ticket: Ticket): Promise<Session> => {
  if (!ticket.whatsappId) {
    const defaultWhatsapp = await GetDefaultWhatsApp(ticket.user.id);

    await ticket.$set("whatsapp", defaultWhatsapp);
  }

  const wbot = getWbot(ticket.whatsappId);

  return wbot;
};

export default GetTicketWbot;

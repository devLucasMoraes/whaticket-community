import { ContactId } from "whatsapp-web.js";
import GetDefaultWhatsApp from "../../helpers/GetDefaultWhatsApp";
import { getWbot } from "../../libs/wbot";

const CheckContactNumber = async (
  number: string
): Promise<string | undefined> => {
  const defaultWhatsapp = await GetDefaultWhatsApp();

  const wbot = getWbot(defaultWhatsapp.id);

  const validNumber: ContactId | null = await wbot.getNumberId(
    `${number}@c.us`
  );
  return validNumber?.user;
};

export default CheckContactNumber;

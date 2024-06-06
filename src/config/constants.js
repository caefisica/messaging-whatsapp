const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

module.exports = {
    generalCommandPrefix: "!",
    premiumCommandPrefix: "#",
    ownerCommandPrefix: "!",
    botEmoji: "🤖",
    completeEmoji: "✅",
    myNumberWithJid: process.env.OWNER_ID + "@s.whatsapp.net",
    premiumUsers: [`${process.env.OWNER_ID}@s.whatsapp.net`],
    adminUsers: [`${process.env.OWNER_ID}@s.whatsapp.net`],
    MAX_RETRIES: 5,
};

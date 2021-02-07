import { createEventAdapter } from '@slack/events-api';
import { WebClient } from '@slack/web-api';
import { createMessageAdapter } from '@slack/interactive-messages';

const slackMessage = createMessageAdapter(process.env.SIGNING_SECRET)
const slackEvents = createEventAdapter(process.env.SIGNING_SECRET)
const webClient = new WebClient(process.env.BOT_USER_ACCESS_TOKEN)

module.exports = { slackEvents, slackMessage, webClient };

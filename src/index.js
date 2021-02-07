const { App } = require('@slack/bolt');
const actions = require('./bot/actions');

const bot = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.BOT_USER_ACCESS_TOKEN,
});

bot.event('app_mention', async ({ context, event, say }) => {
  try{
    await say(actions.first_action);
    return;
  }
  catch (e) {
    console.log(`error responding ${e}`);
    return;
  }
});

bot.action({ action_id: 'static_select-action'}, async ({ ack, action, say }) => {
  try {
    await ack();
    say(actions.second_action);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
});

bot.action({ action_id: 'submit_action'}, async ({ ack, action, say }) => {
  await ack();
  try {
    say(actions.third_action);
    return;
  } catch (error) {
    console.log(error);
    return;
  }
});

bot.action({ action_id: 'multi_select' }, async ({ ack, action, say }) => {
  await ack();
  console.log(action, '>>>')
  try {
    say(actions.fourth_action)
    return;
  } catch (error) {
    console.log(error);
    return;
  }
});

// bot.action({ action_id: 'plain_input'}, async ({ ack, action, say }) => {
//   await ack();
//   try {
//     say({ text: "Thank you" });
//     return;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// });




(async () => {
  // Start the app
  await bot.start(process.env.PORT || 3001);

  console.log('⚡️ Bolt app is running!');
})();

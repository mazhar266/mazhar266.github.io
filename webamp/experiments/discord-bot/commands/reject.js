const { reject, getStatus } = require("../s3");
const Utils = require("../utils");

const { getFilename } = require("../info");
const TWEET_BOT_CHANNEL_ID = "445577489834704906";

async function handler(message, args) {
  const [md5] = args;
  const filename = getFilename(md5);
  if (filename == null) {
    await message.channel.send(`Could not find a skin matching ${md5}`);
    return;
  }
  const status = await getStatus(md5);
  if (status !== "UNREVIEWED") {
    await message.channel.send(`This skin has already been reviewed.`);
    return;
  }
  await reject(md5);
  const tweetBotChannel = message.client.channels.get(TWEET_BOT_CHANNEL_ID);
  await Utils.postSkin({
    filename,
    md5,
    title: `Rejected: ${filename}`,
    dest: tweetBotChannel
  });
  await tweetBotChannel.send(
    `${filename} was rejected by ${message.author.username}`
  );
}

module.exports = {
  command: "reject",
  handler,
  usage: "<md5-hash>",
  description: "Reject a given skin from being Tweeted by the Twitter bot"
};

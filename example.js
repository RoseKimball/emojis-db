const EmojiDB = require('./index');

// findByName
const robotEmoji = EmojiDB.findByName('robot');

// findBySubgroup
const faceSmiling = EmojiDB.findBySubgroup("face-smiling");


//findByCode
const grinningEmoji = EmojiDB.findByCode("1F600");


//findAll
const allEmojis = EmojiDB.findAll();


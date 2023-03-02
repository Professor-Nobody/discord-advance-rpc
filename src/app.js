const clientId = 'Enter yout Client ID here'; // get the client id from discords developer portal
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: `ipc`});

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Playing`, // custome status first line
        state: `With my Life`, // custom status second line
        startTimestamp: Date.now(),
        largeImageKey: 'img_20220705_004941', //image should be from same client which clientID you entered
        largeImageText: `Icon`, //when you hover on largeImage this text will showup
        smallImageKey: `images`, // small image like verified tick etc.
        smallImageText: `verified`, // small image text for hovering
        instance: false,
        buttons: [
            {
                label: `GitHub`,
                url: `https://github.com/Professor-Nobody`
            },
            {
                label: `Website`,
                url: `https://professornobody.live`
            }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * 10000000);
});

RPC.login({clientId}).catch(err => console.error(err));

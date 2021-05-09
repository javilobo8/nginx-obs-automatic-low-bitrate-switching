import './logger';

process.on('unhandledRejection', (error) => {
    console.error(error);
});

process.on('uncaughtException', (error) => {
    console.error(error);
});

import ObsSwitcher from "./components/ObsSwitcher";
import Chat from "./components/Chat";
import NodeMediaServer from "./components/NodeMediaServer";
import { version } from "../package.json";
import config from './config';

console.log(`
    ███╗   ██╗ ██████╗  █████╗ ██╗     ██████╗ ███████╗
    ████╗  ██║██╔═══██╗██╔══██╗██║     ██╔══██╗██╔════╝
    ██╔██╗ ██║██║   ██║███████║██║     ██████╔╝███████╗
    ██║╚██╗██║██║   ██║██╔══██║██║     ██╔══██╗╚════██║
    ██║ ╚████║╚██████╔╝██║  ██║███████╗██████╔╝███████║
    ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝ v${version}
`);

const obs = new ObsSwitcher(
    config.obs.ip,
    config.obs.password,
    config.obs.lowBitrateScene,
    config.obs.normalScene,
    config.obs.offlineScene,
    config.obs.lowBitrateTrigger,
    config.obs.highRttTrigger
);

if (config.twitchChat.enable) {
    new Chat(
        config.twitchChat.botUsername,
        config.twitchChat.oauth,
        config.twitchChat.channel,
        obs
    );
}

new NodeMediaServer(config.nodeMediaServer, obs);

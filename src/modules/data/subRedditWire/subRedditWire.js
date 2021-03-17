import { getSubReddit } from 'data/reddit';

export default class SubRedditWire {
    dataCallback;
    connected = false;

    constructor(dataCallback) {
        this.dataCallback = dataCallback;
    }

    connect() {
        this.connected = true;
        this.dataCallback({});
    }

    disconnect() {
        this.connected = false;
    }

    update(config) {
        if (this.connected) {
            getSubReddit(config && config.subRedditName)
                .then((resp) => this.dataCallback({ data: resp }))
                .catch((err) => this.dataCallback({ error: err }));
        }
    }
}

export default class Timeout {
    id;
    handler;
    constructor(handler, time) {
        this.id = setTimeout(handler, time);
        this.handler = handler;
    }
}

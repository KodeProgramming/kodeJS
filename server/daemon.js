/*****
 * Copyright (c) 2022 Christoph Wittmann, chris.wittmann@icloud.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*****/


/*****
 * A daemon is by definition a service that runs in its own child process or
 * worker and centralizes a specific service or funtionality for the server.
 * For instance, managing user sessions is done centrally to ensure a single
 * definitive location 
*****/
register(class Daemon {
    static makers = {};
    static daemons = [];
    static isDaemon = true;

    constructor(...messageNames) {
        Ipc.on('#DaemonPause', message => this.onPause(message));
        Ipc.on('#DaemonStart', message => this.onStart(message));

        for (let messageName of messageNames) {
            Ipc.on(messageName, message => this[`on${messageName}`](message));
        }
    }

    async onStart() {
    }

    async onPause() {
    }
});

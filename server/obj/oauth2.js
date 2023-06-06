/*****
 * Copyright (c) 2017-2023 Kode Programming
 * https://github.com/KodeProgramming/kode/blob/main/LICENSE
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
*****/
register(class OAuth2 extends Webx {
    constructor(thunk, reference) {
        super(thunk, reference);
    }

    async dump(req) {
        console.log('\n*********************');
        console.log(req.header('host'));
        console.log(req.method());
        console.log(req.pathname());
        console.log(req.mime());
        console.log(req.headers());
        req.method() == 'POST' ? console.log(req.body()) : false;
    }

    async handleGET(req, rsp) {
        await this.dump(req);
        rsp.end(200, 'text/plain', 'Hello OAuth2 Stub GET ...');
    }

    async handlePost(req, rsp) {
        await this.dump(req);
        rsp.end(200, 'text/plain', 'Hello OAuth2 Stub POST ...');
    }
});

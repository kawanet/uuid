#!/usr/bin/env mocha -R spec

import {strict as assert} from "assert";
import {parse, validate, version} from "uuid";

import {v4 as uuidv4} from "uuid";

const TITLE = __filename.split("/").pop();
const regexp = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

describe(TITLE, () => {
    it("v4()", () => {
        for (let i = 0; i < 100; i++) {
            const str = uuidv4();
            assert.strictEqual(typeof str, "string");
            assert.strictEqual(str.length, 36);

            // validate
            assert.ok(regexp.test(str));
            assert.strictEqual(validate(str), true);

            // version
            assert.strictEqual(parse(str)[6] >> 4, 4);
            assert.strictEqual(parse(str)[8] >> 6, 2);
            assert.strictEqual(version(str), 4);
        }
    })
})

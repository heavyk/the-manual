import assert from "assert"
import { parse } from "../build/debug.js"

assert.deepEqual(parse("hello"), ["hello"])
assert.deepEqual(parse("hello world"), ["hello", "world"])

console.log("ok")

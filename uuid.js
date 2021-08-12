/**
 * https://github.com/kawanet/uuid/
 */

function rnd(mask, bit) {
  var num = (Math.random() * 0x100000000) & 0xFFFF;
  if (mask) num &= mask;
  if (bit) num |= bit;
  return (num | 0x10000).toString(16).substr(1);
}

function v4() {
  return rnd() + rnd() + "-" + rnd() + "-" + rnd(0x0FFF, 0x4000) + "-" + rnd(0x3FF, 0x8000) + "-" + rnd() + rnd() + rnd();
}

exports.v4 = v4;

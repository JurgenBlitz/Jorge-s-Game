function Keyboard() {
  this.keyUp = 38;
  this.keyLeft = 37;
  this.keyRight = 39;
  this.keyW = 87;
  this.keyA = 65;
  this.keyS = 83;
}

Keyboard.prototype.isKeyUp = function(e) {
  return this.keyUp == e.keyCode;
};

Keyboard.prototype.isKeyLeft = function(e) {
  return this.keyLeft == e.keyCode;
};

Keyboard.prototype.isKeyRight = function(e) {
  return this.keyRight == e.keyCode;
};

Keyboard.prototype.isKeyW = function(e) {
  return this.keyW == e.keyCode;
};

Keyboard.prototype.isKeyA = function(e) {
  return this.keyA == e.keyCode;
};

Keyboard.prototype.isKeyS = function(e) {
  return this.keyS == e.keyCode;
};

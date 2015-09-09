var Color = function(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.string = this.toString();
    this.changed = false;
};

Color.prototype.edit = function(key, value) {
    if (key == "r" || key == "g" || key=="b" || key=="a") {
        this[key] = value;
        this.changed = true;
    }
    return this;
};

Color.prototype.toString = function() {
    return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
};

Color.prototype.get_color_string = function() {
    if (this.changed) { //prevents parsing the color string repeatedly
        this.string = this.toString();
        this.changed = false;
    }
    return this.string;
};

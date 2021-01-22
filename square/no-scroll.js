var map = {
    cols: 4,
    rows: 4,
    tsize: 512,
    tsize: 128,
    tiles: [
        0,          0,  0,          0,
        0,          0,  0,          0,  
        'Saharkhan',0,  'Darromar', 0,
        0,          0,  0,          0
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    }
};
Game.load = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var imgName = map.getTile(c, r);
            if (imgName !== 0) { // 0 => empty tile
                this.imgAtlas = [
                    Loader.loadImage(imgName, '../assets/'+imgName+'.png'),
                ];
            };
        };
    };
    return this.imgAtlas;
};
/*
Game.init = function () {
    this.tileAtlas = Loader.getImage('darromar');
};
*/
Game.update = function (delta) {
};

Game.render = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile !== 0) { // 0 => empty tile
                this.tileAtlas = Loader.getImage(tile);
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    0,
                    //(tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize,  // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                );
            }
        }
    }
};
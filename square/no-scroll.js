var map = {
    cols: 16,
    rows: 7,
    tsize: 512,
    csize: 100,
    tiles: [
        //1         2           3                  4                  5                  6                  7                 8                  9                 10                 11              12               13               14           15            16
        '0map',     '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',       '0map',
        '0map',     '0map',     'CastleTethyr',    '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',       '0map',
        '0map',     '0map',     'CastleTethyrS',   '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',       '0map',
        '0map',     'Saharkhan','Barshyr_IthalRd1','Barshyr_IthalRd2','Barshyr_IthalRd3','Barshyr_IthalRd4','Ithmon_WCatFrm1','Ithmon_WCatFrm2', 'Ithmon_LorCrsRd','Ithmon_IthRd1',   'Ithmon_IthRd2','RvrShr_IthalRd','DarroFarmNW',   'DarroFarmN','DarroFarmNE','0map',
        '0map',     '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmNW','Ithmon_LorFarmN','Ithmon_LorFarmNE','0map',         'RvrShr_IthFrmW','RvrShr_IthFrmE','Darromar',  '0map',       '0map',
        '0map',     '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmW', 'Loranse',        'Ithmon_LorFarmE', '0map',         '0map',          '0map',          '0map',      '0map',       '0map',
        '0map',     '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',       '0map'
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
                    c * map.csize,  // target x
                    r * map.csize, // target y
                    map.csize, // target width
                    map.csize // target height
                );
            }
        }
    }
};
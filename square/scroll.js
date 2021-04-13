var map = {
    cols: 21,
    rows: 11,
    tsize: 512,
    csize: 256,
    layers: [[
        //1            2           3                  4                  5                  6                  7                 8                  9                 10                 11              12               13               14           15             16             17             18             19             20             21 
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',        '0map',        '0map',        'TorArcanaFw', 'TorArcana',   'TorArcanaFe', '0map',     
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',        '0map',        '0map',        'TorArcanaFsw','TorArcanaFs', 'TorArcanaFse','0map',   
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           'HostimQ',         'IthmonSulE',     'IthmonSulE1',     'IthmonSulE2',  'GrannoxFw',     'GrannoxFe',     'Lhestyn',   'FreelmanseFw','FreelmanseFe','0map',        'VarythPlainW','VarythPlainC','0map',        '0map',
        '0map',        '0map',     'CastleTethyr',    '0map',            '0map',            '0map',            '0map',           'Hostim',          '0map',           '0map',            '0map',         '0map',          'LhestynFsw',    'LhestynFs', 'LhestynFse',  'RvrShrHillN', 'RvrShrHillNE','VarythHillNW','0map',        '0map',        '0map', 
        '0map',        '0map',     'CastleTethyrS',   '0map',            '0map',            '0map',            '0map',           'HostimRD',        '0map',           '0map',            '0map',         'QonsirFw',      'QonsirFe',      'LhestynRd', 'RvrShrHillW', 'RvrShrHill',  'StOstus',     'VarythHillSW','0map',        '0map',        '0map', 
        'SaharkhanCRS','Saharkhan','Barshyr_IthalRd1','Barshyr_IthalRd2','Barshyr_IthalRd3','Barshyr_IthalRd4','Ithmon_WCatFrm1','Ithmon_WCatFrm2', 'Ithmon_LorCrsRd','Ithmon_IthRd1',   'Ithmon_IthRd2','RvrShr_IthalRd','DarroFarmNW',   'DarroFarmN','DarroFarmNE', 'RvrShrHillS', 'RvrShrHillSE','0map',        '0map',        '0map',        '0map', 
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmNW','Ithmon_LorFarmN','Ithmon_LorFarmNE','0map',         'RvrShr_IthFrmW','RvrShr_IthFrmE','Darromar',  '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map', 
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmW', 'Loranse',        'Ithmon_LorFarmE', '0map',         '0map',          'ClovisFnw',     'ClovisFn',  '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map', 
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          'ClovisFs',  '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map',
        '0map',        '0map',     '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',      '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map'        
    ], [
      //                  10                  20  
      //1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9   1
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,              
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    }
};

function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.csize - width;
    this.maxY = map.rows * map.csize - height;
}

Camera.SPEED = 512; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
    // move camera
    this.x += dirx * Camera.SPEED * delta;
    this.y += diry * Camera.SPEED * delta;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));
};

Game.load = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var imgName = map.getTile(0, c, r);
            if (imgName !== 0) { // 0 => empty tile
                this.imgAtlas = [
                    Loader.loadImage(imgName, '../assets/'+imgName+'.png'),
                ];
            };
        };
    };
    return this.imgAtlas;
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    //this.tileAtlas = Loader.getImage('tiles');
    this.camera = new Camera(map, 1024, 512);
};

Game.update = function (delta) {
    // handle camera movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

    this.camera.move(delta, dirx, diry);
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.csize);
    var endCol = startCol + (this.camera.width / map.csize);
    var startRow = Math.floor(this.camera.y / map.csize);
    var endRow = startRow + (this.camera.height / map.csize);
    var offsetX = -this.camera.x + startCol * map.csize;
    var offsetY = -this.camera.y + startRow * map.csize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.csize + offsetX;
            var y = (r - startRow) * map.csize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                this.tileAtlas = Loader.getImage(tile);
                this.ctx.drawImage(
                    this.tileAtlas, // image
                    0,
                    //(tile - 1) * map.tsize, // source x
                    0, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    Math.round(x),  // target x
                    Math.round(y), // target y
                    map.csize, // target width
                    map.csize // target height
                );
            }
        }
    }
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(1);
    // draw map top layer
    this._drawLayer(0);
};

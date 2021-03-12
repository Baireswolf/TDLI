//
// Asset loader
//

var Loader = {
    images: {}
};

var map = {
    cols: 26,
    rows: 11,
    tsize: 512,
    csize: 256,
    csize_noscr: 100,
    layers: [[
        //1              2                3             4         5         6              7                8                  9                  10                 11                 12                13                 14                15                 16              17               18               19                 20             21             22             23             24             25             26                           
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',            '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',            '0map',        '0map',        '0map',        'TorArcanaFw', 'TorArcana',   'TorArcanaFe', '0map',     
        't_zazesspur_nw','t_zazesspur_ne','0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',            '0map',        '0map',        '0map',        'TorArcanaFsw','TorArcanaFs', 'TorArcanaFse','0map',   
        't_zazesspur_sw','t_zazesspur_se','SulZaz1',    'SulZaz2','0map',   '0map',        'CastleTethyrNW','CastleTethyrN',   'CastleTethyrNE',  'SuldusBard1',     '0map',            'IthmonSulW',     't_hostim_quay',   'IthmonSulE',     'IthmonSulE1',     'IthmonSulE2',  'GrannoxFw',     'GrannoxFe',     'Lhestyn',         'FreelmanseFw','FreelmanseFe','0map',        'VarythPlainW','VarythPlainC','0map',        '0map',
        't_venazir_w',   't_venazir',     't_venazir_e','SulZaz3','SulZaz4','SulZaz5',     'CastleTethyrW', 'CastleTethyr',    '0map',            'SuldusBard2',     'SuldusBard3',     'SuldusBard4',    't_hostim',        '0map',           '0map',            '0map',         '0map',          'LhestynFsw',    'LhestynFs',       'LhestynFse',  'RvrShrHillN', 'RvrShrHillNE','VarythHillNW','0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          'CastleTethyrS',   '0map',            '0map',            '0map',            '0map',           't_hostim_road',   '0map',           '0map',            '0map',         'QonsirFw',      'QonsirFe',      'LhestynRd',       'RvrShrHillW', 'RvrShrHill',  'StOstus',     'VarythHillSW','0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',       '0map',   '0map',   'SaharkhanCRS','Saharkhan',     'Barshyr_IthalRd1','Barshyr_IthalRd2','Barshyr_IthalRd3','Barshyr_IthalRd4','Ithmon_WCatFrm1','Ithmon_WCatFrm2', 'Ithmon_LorCrsRd','Ithmon_IthRd1',   'Ithmon_IthRd2','RvrShr_IthalRd','DarroFarmNW',   'DarroFarmN',      'DarroFarmNE', 'RvrShrHillS', 'RvrShrHillSE','0map',        '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmNW','Ithmon_LorFarmN','Ithmon_LorFarmNE','0map',         'RvrShr_IthFrmW','RvrShr_IthFrmE','t_darromar',      '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           'Ithmon_LorFarmW', 'Loranse',        'Ithmon_LorFarmE', '0map',         '0map',          't_clov_fld_nw', 't_clov_fld_itr_n','0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          't_clov_fld_itr_s','0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map',
        '0map',          '0map',          '0map',       '0map',   '0map',   '0map',        '0map',          '0map',            '0map',            '0map',            '0map',            '0map',           '0map',            '0map',           '0map',            '0map',         '0map',          '0map',          '0map',            '0map',        '0map',        '0map',        '0map',        '0map',        '0map',        '0map'        
    ], [
      //                  10                  20  
      //1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9   1 2 3 4 5 6
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,      
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    }
};
/*
document.getElementById('mapup').onclick = function changeColor() {
   document.getElementById('mapup').style = "background: red";
};
*/
Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};

//
// Game object
//

var Game = {};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
}.bind(Game);

// override these methods to create the demo
Game.init = function () {};
Game.update = function (delta) {};
Game.render = function () {};

//
// start up function
//

window.onload = function () {
    var context = document.getElementById('demo').getContext('2d');
    Game.run(context);
};



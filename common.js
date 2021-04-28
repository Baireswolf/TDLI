//
// Asset loader
//

var Loader = {
    images: {}
};

var map = {
    cols: 26,
    rows: 15,
    tsize: 512,
    csize: 256,
    csize_noscr: 100,
    layers: [[
        //1              2                3              4              5              6                  7                 8                  9                  10                 11                 12                 13                 14                 15                 16                 17                 18                 19                 20                21                22                     23                 24             25             26                           
        '0map',          '0map',          '0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',        
        '0map',          '0map',          '0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                'TorArcanaFw',     'TorArcana',   'TorArcanaFe', '0map',     
        't_zazesspur_nw','t_zazesspur_ne','0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                'TorArcanaFsw',    'TorArcanaFs', 'TorArcanaFse','0map',   
        't_zazesspur_sw','t_zazesspur_se','t_venazir_ne','SulZaz2',     '0map',        '0map',            't_tethyrcast_nw','t_tethyrcast_n',  't_tethyrcast_ne', 'SuldusBard1',     '0map',            'IthmonSulW',      't_hostim_quay',   'IthmonSulE',      'IthmonSulE1',     'IthmonSulE2',     't_grannox',       't_grannox_farms', 't_lhestynheart',  't_freelm_farms', 't_freelmanse',   '0map',                'VarythPlainW',    'VarythPlainC','0map',        '0map',
        't_venazir_sw',  't_venazir_s',   't_venazir_se','SulZaz3',     'SulZaz4',     'SulZaz5',         't_tethyrcast_w', 't_tethyrcast',    't_tethyrcast_e',  'SuldusBard2',     'SuldusBard3',     'SuldusBard4',     't_hostim',        '0map',            '0map',            '0map',            't_lhest_gorge',   't_lhest_farm_sw', 't_lhest_farm_s',  't_lhest_farm_se','t_rivshrehill_n','t_rivshrehill_ne',    't_varyth_hill_nw','0map',        '0map',        '0map', 
        '0map',          '0map',          'OldKingRoad1','OldKingRoad2','OldKingRoad3','OldKingRoad4',    't_tethyrcast_sw','t_tethyrcast_s',  't_tethyrcast_se', '0map',            '0map',            '0map',            't_hostim_road',   '0map',            '0map',            '0map',            't_qonsir',        't_qonsir_farm',   't_lhest_road',    't_rivshrehill_w','t_rivshrehill_c','t_st_ostus',          't_varyth_hill_sw','0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',        '0map',        '0map',        't_sahark_crossrd','t_saharkhan',    't_bardshy_itr_1', 't_bardshyr_lorik','t_bardshy_itr_3', 't_bardshy_itr_4', 't_ithmon_ithr_w1','t_ithmon_ithr_w2','t_ithmon_lorcros','t_ithmon_ithr_e1','t_ithmon_ithr_e2','t_rvrshr_ithrdw', 't_crownfarms_nw', 't_crownfarms_n',  't_crownfarms_ne','t_rivshrehill_s','t_rivshrehill_se',    '0map',            '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',        '0map',        '0map',        'SoldiersRoad1',   '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            't_ithmon_farm_nw','t_ithmon_farm_n', 't_ithmon_farm_ne','t_loransewood_n', 't_crownfarms_iw2','t_crownfarms_iw1','t_darromar',      '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',        '0map',        '0map',        'SoldiersRoad2',   '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            't_ithmon_farm_w', 't_ithmon_loranse','t_ithmon_farm_e', 't_loransewood_s', 't_ruba',          't_clov_fld_nw',   't_clov_fld_itr_n','0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map', 
        '0map',          '0map',          '0map',        '0map',        '0map',        'SoldiersRoad3',   '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_clov_fld_itr_s','0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',
        '0map',          '0map',          '0map',        '0map',        '0map',        't_krennasar',     '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',
        '0map',          '0map',          '0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',
        '0map',          '0map',          '0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',                        
        '0map',          '0map',          't_myratma_w', 't_myratma_e', '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map',
        '0map',          '0map',          '0map',        '0map',        '0map',        '0map',            '0map',           '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',        '0map',        '0map'                                                        
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



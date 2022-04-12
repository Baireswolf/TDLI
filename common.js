//
// Asset loader
//

var Loader = {
    images: {}
};

var map = {
    cols: 30,
    rows: 17,
    tsize: 512,
    csize: 256,
    csize_noscr: 100,
    layers: [[
        //1              2                3                4                5                  6                  7                 8                  9                  10                 11                 12                 13                 14                 15                 16                 17                 18                 19                 20                21                22                     23                 24                 25                 26              27                  28              29              30
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',       
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                't_varyth_torf_w', 't_varyth_tor',    't_varyth_torf_e', '0map',         '0map',             '0map',         '0map',         '0map',       
        't_zazesspur_nw','t_zazesspur_ne','0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_lhestyn_quay',  't_masamont_road','t_masamount',    't_masamount_wudn',    't_varyth_torf_sw','t_varyth_torf_s', 't_varyth_torf_se','0map',         '0map',             '0map',         '0map',         '0map',       
        't_zazesspur_sw','t_zazesspur_se','t_venezir_ne'  ,'SulZaz2',       '0map',            '0map',            't_tethyrcast_nw', 't_tethyrcast_n',  't_tethyrcast_ne', 'SuldusBard1',     '0map',            'IthmonSulW',      't_hostim_quay',   't_ithmn_sul_e',   't_ithmn_sul_e1',  't_ithmn_sul_e2',  't_grannox',       't_grannox_farms', 't_lhestynheart',  't_freelm_farms', 't_freelmanse',   't_masamount_wuds',    't_varyth_plain_w','t_varyth_plain_c','t_varyth_plain_e','0IthalRoadWE', '0IthalRoadWES',    '0IthalRoadWE', '0IthalRoadWS', '0map',       
        't_venezir_sw',  't_venezir_s',   't_venezir_se'  ,'SulZaz3',       'SulZaz4',         'SulZaz5',         't_tethyrcast_w',  't_tethyrcast',    't_tethyrcast_e',  't_alemwood_nw',   't_alemwood_ne',   't_hostim_hill_nw','t_hostim',        't_hostim_wood',   't_ithmon_crag_nw','t_ithmon_crag_ne','t_lhest_gorge',   't_lhest_farm_sw', 't_lhest_farm_s',  't_lhest_farm_se','t_rivshrehill_n','t_rivshrehill_ne',    't_varyth_hill_nw','t_varyth_hill_n', 't_varyth_hill_ne','0map',         't_iltarghal',      '0map',         't_survale',    '0map',       
        '0map',          '0map',          't_vintor_okr_1','t_vintor_okr_2','t_vintor_okr_3',  't_bardshyr_okr',  't_tethyrcast_sw', 't_tethyrcast_s',  't_tethyrcast_se', 't_alemwood_sw',   't_bardshyr_alem', 't_hostim_hill_w', 't_hostim_road',   't_hostim_hill_e', 't_ithmon_crag_sw','t_ithmon_crag_se','t_qonsir',        't_qonsir_farm',   't_lhest_road',    't_rivshrehill_w','t_rivshrehill_c','t_st_ostus',          't_varyth_hill_sw','t_varyth_hill_s', 't_varyth_hill_se','0map',         '0map',             '0map',         '0IthalRoadNS', '0map',       
        '0map',          '0map',          '0map',          '0map',          '0map',            't_sahark_crossrd','t_saharkhan',     't_bardshy_itr_1', 't_bardshy_itr_2', 't_bardshy_itr_3', 't_bardshy_itr_4', 't_ithmon_ithr_w1','t_ithmon_ithr_w2','t_ithmon_lorcros','t_ithmon_ithr_e1','t_ithmon_ithr_e2','t_rvrshr_ithrdw', 't_crownfarms_nw', 't_crownfarms_n',  't_crownfarms_ne','t_rivshrehill_s','t_rivshrehill_se',    '0map',            '0map',            't_thrynnar_hold', '0IthalRoadWE', '0IthalRoadWE',     '0IthalRoadWE', '0IthalRoadNWS','0map',       
        '0map',          '0map',          '0map',          '0map',          '0map',            't_soldieroad_1',  't_saharkhan_sp',  't_sevenstar_rd',  't_sevenstar_hne', 't_brinniqdell_n', '0IthalRoadNS',    't_ithmon_pipe_n', 't_ithmon_farm_nw','t_ithmon_farm_n', 't_ithmon_farm_ne','t_loransewood_n', 't_crownfarms_iw2','t_crownfarms_iw1','t_darromar',      't_foyen_rd',     't_foyen',        '0map',                '0map',            '0map',            '0IthalRoadNS',    '0map',         '0map',             '0map',         '0IthalRoadEN', 't_veaddakar',       
        '0map',          '0map',          '0map',          't_dasaajk',     '0map',            't_soldieroad_2',  't_jongrathroad11','t_sevenstar',     't_sevenstar_hse', 't_brinniqdell_s', '0IthalRoadWN',    't_ithmon_pipe_s', 't_ithmon_farm_w', 't_ithmon_loranse','t_ithmon_farm_e', 't_loransewood_s', '0map',            't_clov_fld_nw',   't_clov_fld_itr_n','0map',           '0map',           '0map',                '0IthalRoadES',    '0IthalRoadWE',    '0IthalRoadWN',    '0map',         '0map',             '0map',         '0map',         '0map',       
        '0map',          't_vineshade',   '0map',          '0map',          '0map',            't_krennasar',     't_jongrathroad01','t_jongrathroad02','t_jongrath',      't_jongrathroad03','0map',            't_loranse_swamp', '0map',            '0map',            '0map',            '0map',            't_ruba',          '0IthalRoadWE',    't_clov_fld_itr_s','0IthalRoadWES',  '0IthalRoadWE',   '0IthalRoadWE',        '0IthalRoadNWS',   '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',       
        '0map',          '0map',          '0map',          't_redmills',    't_elem_solroad01','t_elem_solroa002','0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0IthalRoadNS',    '0map',            '0map',            't_abbor',        '0map',           '0map',                '0IthalRoadNES',   '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWE', '0IthalRoadWS',     '0map',         '0map',         '0map',       
        '0map',          '0map',          '0map',          't_refields_n',  't_refields_ne',   '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_pelmarin',      '0IthalRoadWE',    '0IthalRoadWN',    '0map',            '0map',            '0map',           '0map',           '0map',                't_mistletoe',     '0map',            '0map',            '0map',         '0IthalRoadNES',    '0IthalRoadWE', '0IthalRoadWES','t_barakmordin',       
        '0map',          '0map',          't_myratma_w',   't_myratma_e',   't_refields_e',    '0IthalRoadWE',    '0IthalRoadWE',    't_maratimmir',    '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWES',   '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWN',    '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0IthalRoadNS',     '0map',         '0IthalRoadNS', '0map',       
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_fort_teqlar',   't_shoonach_ilt',  't_shoonach_run',  '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            't_magis_tor',  '0IthalRoadWN',     '0map',         '0IthalRoadNS', '0map',       
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_shoonach_gaw',  '0map',            '0map',            '0map',            't_shoonach_deb',  '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         't_adarthir',   '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_shoonach_mum',  't_shoonach_imp',  '0map',            't_shoonach_gae',  '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_shoonach_agi',  '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map'                        
    ], [
      //                  10                  20                  30
      //1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,     
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,        
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
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



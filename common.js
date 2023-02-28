//
// Asset loader
//

var Loader = {
    images: {}
};

var map = {
    cols: 38,
    rows: 29,
    tsize: 512,
    csize: 256,
    csize_noscr: 100,
    layers: [[
        //1              2                3                4                5                6                7                8                9                10                 11               12                 13                 14                 15                 16                 17                 18                 19                 20                 21                 22                 23                 24                 25                 26                 27                28                29                     30			        31		           32				  33              34                  35              36              37               38
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          'm_murann_n',    '0map',            '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0grs',           '0grs',                '0grs',            '0grs',            '0mnt',            '0mnt',         '0mnt',             '0mnt',         '0mnt',         '0mnt',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          'm_murann_s',    'm_tethiroad1',    'm_tethiroad2',  'a_tethiroadw',    'a_trademeet',     'a_tzrd_tm1',      'a_tzrd_tm2',      'a_tzrd_tm3',      'a_tzrd_tm4',      'a_tzrd_tm5',      'a_tzrd_tzw1',     '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0mnt',           '0mnt',                '0mnt',            '0mnt',            '0mnt',            '0mnt',         '0mnt',             '0mnt',         '0mnt',         '0mnt',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0wud',          '0wud',          '0map',            '0map',          '0map',            'a_tradetrways',   '0map',            '0wud',            '0wud',            '0wud',            '0map',            'a_tzrd_tzw2',     'a_tzrd_tzw3',     '0map',            '0map',            '0map',            '0map',            '0map',            '0mnt',            '0mnt',           '0mnt',           '0mnt',                '0mnt',            '0mnt',            '0mnt',            '0mnt',         't_trstone_n',      '0grs',         '0grs',         '0grs',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0wud',          '0wud',          '0wud',            '0wud',          '0wud',            't_trwaymos5',     '0wud',            '0wud',            '0wud',            't_cairnwheel',    '0wud',            '0map',            't_tzrd_br1',      't_tzrd_br2',      't_tzrd_br3',      '0map',            '0map',            '0map',            '0mnt',            '0mnt',           '0mnt',           '0map',                '0map',            '0map',            '0map',            't_trstone_w',  't_trstone',        't_trstone_e',  '0grs',         '0grs',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_toaketh',     't_viperstone',  't_rokorch',       '0wud',          '0wud',            't_trwaymos4',     '0wud',            't_pixiesglenn',   '0wud',            '0wud',            '0wud',            '0map',            '0map',            '0map',            't_tzrd_br4',      '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         't_trstone_s',      't_turntower',  '0grs',         '0grs',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_blktomb',       '0map',          '0wud',            't_trwaymos3',     't_brostrail6',    't_brostrail5',    't_brostrail4',    't_brostrail3',    't_brostrail2',    't_brostrail1',    't_brost',         '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0wud',                '0wud',            '0wud',            '0wud',            't_spulzeer',   't_spul_road',      't_shilda_n',   '0grs',         't_hltrail1',    '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_stdomin',       '0map',          '0map',            't_trwaymos2',     '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0map',            '0map',            't_garlok',        '0wud',           '0wud',           '0wud',                't_eldgate',       '0wud',            't_suldell',       '0map',         '0grs',             't_shildamere', 't_shilda_e',   't_toralth_n',   '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_fdrakerd2',     't_fdrakerd1',   't_mosstone',      't_trwaymos1',     '0wud',            '0wud',            '0wud',            't_mythrhynn',     '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',           '0wud',           '0wud',                '0wud',            '0wud',            '0wud',            't_redknight',  '0grs',             '0grs',         '0grs',         't_toralth',     '0grs',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_portkirn',    't_trwaykir2',   't_kirgard',       't_trwaykir3',   't_trwaykir4',     't_archdrugro',    't_oldoakdel',     't_talltrees',     '0wud',            '0wud',            '0wud',            '0wud',            't_kingtree',      '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            '0wud',           't_nebupool',     '0wud',                't_8tree',         '0wud',            '0wud',            '0map',         't_silvyr',         '0grs',         '0grs',         't_toralth_s',   '0map',
        't_stspmntn1',   't_stspmntn2',   't_adlir',       't_stspmntn3',   't_stspmntn4',   't_stspmntn5',   't_stspmntn6',   't_portkir',     't_trwaykir1',   't_tresqylr1',     't_tresqylr2',   't_tresqyl',       '0wud',            '0wud',            '0wud',            '0wud',            '0wud',            't_hunttree',      '0wud',            't_morndiv_up',    '0wud',            '0wud',            't_linuss',        '0wud',            '0wud',            '0wud',            '0wud',           't_suldaness',    '0wud',                '0wud',            '0wud',            't_zoastriast',    '0wud',         '0wud',             '0grs',         't_innocence',  '0map',          '0map',
        't_stspmnts1',   't_stspmnts2',   't_stspmnts3',   't_stspmnts4',   't_ramedar',     't_bormuln5',    '0mnt',          '0mnt',          't_trwayzaz3',   '0mnt',            't_grimjaws',    '0mnt',            '0mnt',            't_cayrthal',      '0wud',            't_kalmin',        '0wud',            't_hawkrook4',     '0mnt',            '0mnt',            '0wud',            '0wud',            '0wud',            '0wud',            '0mnt',            't_argentwing',    '0wud',           '0wud',           '0wud',                '0wud',            '0wud',            't_moongld',       '0wud',         '0map',             't_9star',      '0grs',         't_nanarch',     '0map',
        '0map',          '0map',          '0map',          '0map',          't_bormuln4',    't_bormuln3',    't_battlesend',  '0mnt',          't_trwayzaz2',   '0mnt',            '0mnt',          '0mnt',            '0mnt',            't_memory',        '0mnt',            '0mnt',            '0mnt',            't_tresper',       '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            't_targyll',      '0mnt',           '0wud',                '0wud',            '0wud',            '0wud',            '0map',         't_sulduskoonar',   '0map',         't_hartshall',  '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_bormuln2',    't_bormuln1',    't_trwayzaz1',   '0map',            '0map',          '0map',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            't_uluran',        't_hawkrook3',     '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0mnt',           '0grs',           '0grs',                't_varyth_torf_w', 't_varyth_tor',    't_varyth_torf_e', '0map',         '0map',             '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_zazesspur_nw','t_zazesspur_ne','0map',            '0map',          '0map',            't_9ladies',       '0map',            '0map',            '0map',            't_hawkrook2',     '0map',            '0mnt',            '0mnt',            '0mnt',            '0mnt',            '0map',            '0map',            '0map',            't_lhestyn_quay',  't_masamont_road','t_masamount',    't_masamount_wudn',    't_varyth_torf_sw','t_varyth_torf_s', 't_varyth_torf_se','0map',         '0map',             '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_zazesspur_sw','t_zazesspur_se','t_venezir_ne'  ,  't_marakir',     '0map',            '0map',            't_tethyrcast_nw', 't_tethyrcast_n',  't_tethyrcast_ne', 't_hawkrook1',     '0map',            'IthmonSulW',      't_hostim_quay',   't_ithmn_sul_e',   't_ithmn_sul_e1',  't_ithmn_sul_e2',  't_grannox',       't_grannox_farms', 't_lhestynheart',  't_freelm_farms', 't_freelmanse',   't_masamount_wuds',    't_varyth_plain_w','t_varyth_plain_c','t_varyth_plain_e','0IthalRoadWE', '0IthalRoadWE',     '0IthalRoadWES','0IthalRoadWE', '0IthalRoadWS',  '0map',    
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_venezir_sw',  't_venezir_s',   't_venezir_se'  ,  'SulZaz3',       'SulZaz4',         'SulZaz5',         't_tethyrcast_w',  't_tethyrcast',    't_tethyrcast_e',  't_alemwood_nw',   't_alemwood_ne',   't_hostim_hill_nw','t_hostim',        't_hostim_wood',   't_ithmon_crag_nw','t_ithmon_crag_ne','t_lhest_gorge',   't_lhest_farm_sw', 't_lhest_farm_s',  't_lhest_farm_se','t_rivshrehill_n','t_rivshrehill_ne',    't_varyth_hill_nw','t_varyth_hill_n', 't_varyth_hill_ne','0map',         '0map',             't_iltarghal',  '0map',         't_survale',     '0map',          
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_faithful',    't_hilltr1',     't_hilltr2',     't_vintor_okr_1',  't_vintor_okr_2','t_vintor_okr_3',  't_bardshyr_okr',  't_tethyrcast_sw', 't_tethyrcast_s',  't_tethyrcast_se', 't_alemwood_sw',   't_bardshyr_alem', 't_hostim_hill_w', 't_hostim_road',   't_hostim_hill_e', 't_ithmon_crag_sw','t_ithmon_crag_se','t_qonsir',        't_qonsir_farm',   't_lhest_road',    't_rivshrehill_w','t_rivshrehill_c','t_st_ostus',          't_varyth_hill_sw','t_varyth_hill_s', 't_varyth_hill_se','0map',         '0map',             '0map',         '0map',         '0IthalRoadNS',  '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_bormuls',     't_purhilla1',   't_canaith',     't_purhillb1',     't_purhillc1',   't_purhilld1',     't_sahark_crossrd','t_saharkhan',     't_bardshy_itr_1', 't_bardshy_itr_2', 't_bardshy_itr_3', 't_bardshy_itr_4', 't_ithmon_ithr_w1','t_ithmon_ithr_w2','t_ithmon_lorcros','t_ithmon_ithr_e1','t_ithmon_ithr_e2','t_rvrshr_ithrdw', 't_crownfarms_nw', 't_crownfarms_n',  't_crownfarms_ne','t_rivshrehill_s','t_rivshrehill_se',    '0map',            '0map',            't_thrynnar_hold', '0IthalRoadWE', '0IthalRoadWE',     '0IthalRoadWE', '0IthalRoadWE', '0IthalRoadNWS', '0map',          
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_ithalyr',     't_purhilla2',   't_hilltr3',     't_purhillb2',     't_purhillc2',   't_purhilld2',     't_soldieroad_1',  't_saharkhan_sp',  't_sevenstar_rd',  't_sevenstar_hne', 't_brinniqdell_n', 't_brinniqwood_n', 't_ithmon_pipe_n', 't_ithmon_farm_nw','t_ithmon_farm_n', 't_ithmon_farm_ne','t_loransewood_n', 't_crownfarms_iw2','t_crownfarms_iw1','t_darromar',      't_foyen_rd',     't_foyen',        '0map',                '0map',            '0map',            '0IthalRoadNS',    '0map',         '0map',             '0map',         '0map',         '0IthalRoadEN',  't_veaddakar',   
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_purclif5',    't_purhilla3',   't_barrows',     't_samytew',       't_dasaajk',     't_samytee',       't_soldieroad_2',  't_jongrathroad11','t_sevenstar',     't_sevenstar_hse', 't_brinniqdell_s', 't_brinniqwood',   't_ithmon_pipe_s', 't_ithmon_farm_w', 't_ithmon_loranse','t_ithmon_farm_e', 't_loransewood_s', '0map',            't_clov_fld_nw',   't_clov_fld_itr_n','0map',           '0map',           '0map',                '0IthalRoadES',    '0IthalRoadWE',    '0IthalRoadWN',    '0map',         '0map',             '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_rhynda',      't_rhynda_rd',   't_hilltr4',     't_purhillb3',     't_purhillc3',   't_purhilld3',     't_krennasar',     't_jongrathroad01','t_jongrathroad02','t_jongrath',      't_jongrathroad03','t_brinniqwood_s', 't_loranse_swamp', '0map',            '0map',            '0map',            '0map',            't_ruba',          '0IthalRoadWE',    't_clov_fld_itr_s','0IthalRoadWES',  '0IthalRoadWE',   '0IthalRoadWE',        '0IthalRoadNWS',   '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_purclif4',    't_purhilla4',   't_vineshade',   't_purhillb4',     't_redmills',    't_elem_solroad01','t_elem_solroa002','t_elem_farm1',    't_elem_farm2',    't_elem_farm3',    't_elem_farm4',    't_riverith7',     't_riverith8',     '0map',            '0map',            '0map',            '0map',            '0IthalRoadNS',    '0map',            '0map',            't_abbor',        '0map',           '0map',                '0IthalRoadNES',   '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWE', '0IthalRoadWS',     '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_purclif3',    't_purhilla5',   't_hilltr5',     't_purhillb5',     't_refields_n',  't_refields_ne',   't_riverith1',     't_riverith2',     't_riverith3',     't_riverith4',     't_riverith5',     't_riverith6',     '0map',            '0map',            '0map',            't_pelmarin',      '0IthalRoadWE',    '0IthalRoadWN',    '0map',            '0map',            '0map',           '0map',           '0map',                't_mistletoe',     '0map',            '0map',            '0map',         '0IthalRoadNES',    '0IthalRoadWE', '0IthalRoadWES','t_barakmordin', '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_purclif2',    't_purclif1',    't_ith_est',     't_myratma_w',     't_myratma_e',   't_refields_e',    '0IthalRoadWE',    '0IthalRoadWE',    't_maratimmir',    '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWES',   '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWE',    '0IthalRoadWN',    '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0wud',            '0wud',         '0IthalRoadNS',     '0map',         '0IthalRoadNS', '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_trwaycal3',   't_trwaycal2',     't_trwaycal1',   '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0IthalRoadNS',    '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0wud',            '0wud',         '0IthalRoadNS',     '0map',         't_adarthir',   '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_trwaycal4',   '0map',            '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            't_fort_teqlar',   't_shoonfedw',     't_shoonach_ilt',  't_shoonach_run',  't_shoonach_deb',  '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0wud',            't_magis_tor',  '0IthalRoadWN',      '0map',         '0map',   '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          't_daraqadim',   't_trwaycal5',   '0map',            '0map',          '0map',            '0map',            '0map',            '0map',            '0map',            't_agisroad7',     't_shoonach_gaw',  't_shoonach_mum',  't_shoonach_imp',  't_shoonfede',     't_shoonach_gae',  '0map',            '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0wud',         '0map',             '0map',         '0map',         '0map',          '0map',
        '0map',          '0map',          '0map',          '0map',          'c_memmonw',     'c_memmone',     't_memmonnar',   't_trwaycal6',   't_agisroad1',   't_agisroad2',     't_fortagis',    't_agisroad3',     't_agisroad4',     't_agisroad5',     't_iltakargarr',   't_agisroad6',     't_fortcalim',     'c_agisshoo1',     'c_agisshoo2',     't_shoonach_agi',  'c_agisshoo3',     'c_agisshoo4',     'c_agisshoo5',     '0map',            '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',		   '0map',
        '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',          '0map',            '0map',          '0map',            't_fortufenk',     '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            '0map',            'c_agisshoo6',     't_qian',          '0map',            '0map',            '0map',           '0map',           '0map',                '0map',            '0map',            '0map',            '0map',         '0map',             '0map',         '0map',         '0map',           '0map'      
    ], [
      //                  10                  20                  30
      //1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8 9   1 2 3 4 5 6 7 8
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
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



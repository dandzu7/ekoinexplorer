var api = "http://139.180.184.63:8197/";
var apiList = [
	"http://139.180.184.63:8197/"
	];
var blockTargetInterval = 90;
var coinUnits = 100000000;
var symbol = 'EKO';
var refreshDelay = 30000;
var addressPattern = new RegExp("^QWC[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$");
// pools stats by MainCoins
var poolsStat = 
	[
		["pool.qwertycoin.org","https://mining.qwertycoin.org:8119/stats"],
		["superblockchain.con-ip.com/qwc","https://superblockchain.con-ip.com:8333/stats"],
		["easyhash.pro/qwc","https://easyhash.pro/qwc/api/stats"],
		["qwertycoin.fairhash.org","https://qwertycoin.fairhash.org/api/stats"],
		["newpool.pw/qwc_b2b","https://minenice.newpool.pw:8205/stats"],
		["digging.qwertycoin.org","https://mining.qwertycoin.org:8119/stats"]
    ];
var nodesStat = 
	[
		["139.180.184.63:8197"],
		["66.42.60.46:8197"]
		    ];


var heartrate_ts = [ 84.2697,
84.2697,
84.0619,
85.6542,
87.2093,
87.1246,
86.8726,
86.7052,
87.5899,
89.1475,
89.8204,
89.8204,
90.4375,
91.7605,
93.1081,
94.3291,
95.8003,
97.5119,
98.7457,
98.904,
98.3437,
98.3075,
98.8313,
99.0789,
98.8157,
98.2998,
97.7311,
97.6471,
97.7922,
97.2974,
96.2042,
95.2318,
94.9367,
95.0867,
95.389,
95.5414,
95.2439,
94.9415,
95.3557,
96.3423,
97.1563,
97.4026,
96.7028,
96.5516,
97.9837,
98.9879,
97.6312,
95.4064,
93.8603,
93.0552,
94.6012,
95.8476,
95.7692,
95.9236,
95.7692,
95.9211,
95.8501,
94.6703,
93.0993,
91.972,
91.7821,
91.7911,
90.807,
89.3196,
88.1511,
88.7762,
90.2265,
90.8066,
91.2284,
92.4238,
93.243,
92.8472,
92.5926,
91.7778,
91.2974,
91.6364,
91.2952,
91.771,
93.2285,
93.3199,
91.8799,
91.2239,
92.4055,
93.8716,
94.5825,
94.5594,
94.9453,
96.2412,
96.6879,
95.8295,
94.7819,
93.4731,
92.7997,
92.963,
92.6996,
91.9648,
91.2417,
91.9312,
93.9548,
95.3044,
95.2511,
94.5358,
93.8093,
93.2287,
92.2065,
92.1588,
93.6376,
94.899,
95.1592,
95.2415,
95.5414,
95.0971,
94.528,
95.5887,
96.4715,
96.6158,
97.0769,
96.8531,
96.3947,
97.4291,
98.1767,
97.0148,
96.044,
95.9581,
96.4814,
96.5211,
95.3629,
93.5741,
92.077,
90.4094,
90.1751,
91.3312,
91.2883,
89.0592,
87.052,
86.6226,
85.7889,
85.6348,
85.3911,
83.8064,
82.8729,
82.6266,
82.645,
82.645,
82.645,
82.645,
82.645,
82.645,
82.645,
82.645,
82.645,
95.0292,
95.6378,
95.3338,
94.6154,
94.717,
94.4172,
93.071,
92.4772,
92.7607,
92.308,
92.0245,
91.0371,
90.0865,
90.1796,
90.0281,
90.5564,
91.7077,
92.4405,
92.963,
93.4589,
93.75,
94.2788,
95.6006,
96.8981,
97.4026,
97.6343,
98.1152,
98.7137,
99.5611,
100.365,
100.671,
100.435,
99.6052,
98.4364,
97.6318,
97.4026,
96.6432,
96.412,
97.5981,
98.3932,
97.9665,
95.0147,
92,
91.2143,
91.2594,
92.2747,
92.9359,
]


var hr = 88;
var lastFewHeartRates = [];
var countdownRate = 80;
var countDownNumberStart = 5;
var countDownNumber = countDownNumberStart;
var n = 0;

function convertToMillisecondIntervals( bpm ) {
    var millisecondIntervals = 60000/bpm;
    
    return millisecondIntervals;
}

Array.prototype.sum = Array.prototype.sum || function() {
  return this.reduce(function(sum, a) { return sum + Number(a) }, 0);
}

Array.prototype.average = Array.prototype.average || function() {
  return this.sum() / (this.length || 1);
}

function sampleHeartRate ( hr ) {
    if ( lastFewHeartRates.length > 1 ) { // change this to 5 later
        countdownRate = ( lastFewHeartRates.average() ) / 2; 
        lastFewHeartRates = [];
    } 
    lastFewHeartRates.push( hr )
}



setInterval(function(){ 
 
    if ( n > convertToMillisecondIntervals( countdownRate ) ) {
        
        console.log( 'this is countdown rate' );
        console.log(  convertToMillisecondIntervals( countdownRate )  );
        
        if ( countDownNumber > 1 )  {
            countDownNumber = countDownNumber - 1;
        } else {
            countDownNumber = countDownNumberStart;
            hr = heartrate_ts.shift() + 8;
            console.log( 'this is hr' );
            console.log( hr );

            sampleHeartRate ( hr )
        }
        $("#countdown_number").html( countDownNumber );
        n = 0;
    }



    n +=1

}, 1);
//heartrate refreshes every second; animation every mi
// 80 beats/ 60000 milliseconds .. 1 beat every 750 millisecons


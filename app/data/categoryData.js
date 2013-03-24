var glb = glb || {};

glb.categoryData = [{
    "id": 5,
    "item": "Cookies",
    "numEvents": 450,
    "sales": 34,
    "volume": 16,
    "margin": -8,
    "profit": -6,
    "transactions": 11,
    "impact": 1935,
    "isBest": false,
    "followUp": "",
    "action": "Reduce frequency of Cookies promotions given incremental sales and margin performance relative to other categories",
    "hiddenAction": "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
    "actionColor": "red",
    "disabled": false,
    "ActionOrder": 1
  }, {
    "id": 4,
    "item": "Bath Tissue",
    "numEvents": 269,
    "sales": 102,
    "volume": 59,
    "margin": 17,
    "profit": 18,
    "transactions": 17,
    "impact": 227,
    "isBest": true,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 8,
    "item": "Cereal",
    "numEvents": 253,
    "sales": 147,
    "volume": 49,
    "margin": -22,
    "profit": -6,
    "transactions": 27,
    "impact": 2541,
    "isBest": false,
    "followUp": "Understand drivers of poor margin performance in Cereal given high incremental sales/volume uplift",
    "action": "",
    "hiddenAction": "Investigate brand and item selection as well as tactics to understand drivers of performance",
    "actionColor": "yellow",
    "disabled": false,
    "ActionOrder": 3
  }, {
    "id": 0,
    "item": "Juices",
    "numEvents": 190,
    "sales": 84,
    "volume": 31,
    "margin": 7,
    "profit": 7,
    "transactions": 43,
    "impact": 2947,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 6,
    "item": "Dressings",
    "numEvents": 189,
    "sales": 44,
    "volume": 23,
    "margin": 11,
    "profit": 11,
    "transactions": 13,
    "impact": 855,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 7,
    "item": "Canned Vegetables",
    "numEvents": 99,
    "sales": 58,
    "volume": 66,
    "margin": 7,
    "profit": 7,
    "transactions": 26,
    "impact": 1721,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 9,
    "item": "Laundry Detergent",
    "numEvents": 86,
    "sales": 77,
    "volume": 36,
    "margin": 4,
    "profit": 6,
    "transactions": 45,
    "impact": 2317,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 1,
    "item": "Food Wrappers",
    "numEvents": 76,
    "sales": 101,
    "volume": 43,
    "margin": 21,
    "profit": 22,
    "transactions": 29,
    "impact": 1401,
    "isBest": true,
    "followUp": "",
    "action": "Promote items in Food Wrapper more frequently, using current tactics",
    "hiddenAction": "Despite relatively few promo events, Food Wrappers showed greater margin and profit lift",
    "actionColor": "green",
    "disabled": false,
    "ActionOrder": 2
  }, {
    "id": 2,
    "item": "Drink Mixes",
    "numEvents": 30,
    "sales": 13,
    "volume": 6,
    "margin": 0,
    "profit": 1,
    "transactions": 14,
    "impact": 513,
    "isBest": false,
    "followUp": "Explore additional promo tactics and greater frequency for Drink Mixes",
    "action": "",
    "hiddenAction": "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
    "actionColor": "yellow",
    "disabled": false,
    "ActionOrder": 4
  }, {
    "id": 3,
    "item": "Household Cleaners",
    "numEvents": 17,
    "sales": 39,
    "volume": 11,
    "margin": 6,
    "profit": 6,
    "transactions": 11,
    "impact": 390,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }
]

glb.categoryDataIncremental = [{
    "id": 5,
    "item": "Cookies",
    "numEvents": 450,
    "sales": 34,
    "volume": 16,
    "margin": -8,
    "profit": -6,
    "transactions": 11,
    "impact": 1935,
    "isBest": false,
    "followUp": "",
    "action": "Reduce frequency of Cookies promotions given incremental sales and margin performance relative to other categories",
    "hiddenAction": "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
    "actionColor": "red",
    "disabled": false,
    "ActionOrder": 1
  }, {
    "id": 4,
    "item": "Bath Tissue",
    "numEvents": 269,
    "sales": 102,
    "volume": 59,
    "margin": 17,
    "profit": 18,
    "transactions": 17,
    "impact": 227,
    "isBest": true,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 8,
    "item": "Cereal",
    "numEvents": 253,
    "sales": 147,
    "volume": 49,
    "margin": -22,
    "profit": -6,
    "transactions": 27,
    "impact": 2541,
    "isBest": false,
    "followUp": "Understand drivers of poor margin performance in Cereal given high incremental sales/volume uplift",
    "action": "",
    "hiddenAction": "Investigate brand and item selection as well as tactics to understand drivers of performance",
    "actionColor": "yellow",
    "disabled": false,
    "ActionOrder": 3
  }, {
    "id": 0,
    "item": "Juices",
    "numEvents": 190,
    "sales": 84,
    "volume": 31,
    "margin": 7,
    "profit": 7,
    "transactions": 43,
    "impact": 2947,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 6,
    "item": "Dressings",
    "numEvents": 189,
    "sales": 44,
    "volume": 23,
    "margin": 11,
    "profit": 11,
    "transactions": 13,
    "impact": 855,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 7,
    "item": "Canned Vegetables",
    "numEvents": 99,
    "sales": 58,
    "volume": 66,
    "margin": 7,
    "profit": 7,
    "transactions": 26,
    "impact": 1721,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 9,
    "item": "Laundry Detergent",
    "numEvents": 86,
    "sales": 77,
    "volume": 36,
    "margin": 4,
    "profit": 6,
    "transactions": 45,
    "impact": 2317,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }, {
    "id": 1,
    "item": "Food Wrappers",
    "numEvents": 76,
    "sales": 101,
    "volume": 43,
    "margin": 21,
    "profit": 22,
    "transactions": 29,
    "impact": 1401,
    "isBest": true,
    "followUp": "",
    "action": "Promote items in Food Wrapper more frequently, using current tactics",
    "hiddenAction": "Despite relatively few promo events, Food Wrappers showed greater margin and profit lift",
    "actionColor": "green",
    "disabled": false,
    "ActionOrder": 2
  }, {
    "id": 2,
    "item": "Drink Mixes",
    "numEvents": 30,
    "sales": 13,
    "volume": 6,
    "margin": 0,
    "profit": 1,
    "transactions": 14,
    "impact": 513,
    "isBest": false,
    "followUp": "Explore additional promo tactics and greater frequency for Drink Mixes",
    "action": "",
    "hiddenAction": "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
    "actionColor": "yellow",
    "disabled": false,
    "ActionOrder": 4
  }, {
    "id": 3,
    "item": "Household Cleaners",
    "numEvents": 17,
    "sales": 39,
    "volume": 11,
    "margin": 6,
    "profit": 6,
    "transactions": 11,
    "impact": 390,
    "isBest": false,
    "followUp": "",
    "action": "",
    "hiddenAction": "",
    "actionColor": "",
    "disabled": true,
    "ActionOrder": null
  }
]

// glb.categoryDataTotal = [{
//     "id": 5,
//     "item": "Total cookies",
//     "numEvents": 333,
//     "sales": 34,
//     "volume": 46,
//     "margin": -8,
//     "profit": -6,
//     "transactions": 11,
//     "impact": 1935,
//     "isBest": false,
//     "followUp": "",
//     "action": "Reduce frequency of Cookies promotions given incremental sales and margin performance relative to other categories",
//     "hiddenAction": "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
//     "actionColor": "red",
//     "disabled": false,
//     "ActionOrder": 1
//   }, {
//     "id": 4,
//     "item": "Bath Tissue",
//     "numEvents": 269,
//     "sales": 102,
//     "volume": 59,
//     "margin": 17,
//     "profit": 18,
//     "transactions": 17,
//     "impact": 227,
//     "isBest": true,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }, {
//     "id": 8,
//     "item": "Cereal",
//     "numEvents": 253,
//     "sales": 147,
//     "volume": 49,
//     "margin": -22,
//     "profit": -6,
//     "transactions": 27,
//     "impact": 2541,
//     "isBest": false,
//     "followUp": "Understand drivers of poor margin performance in Cereal given high incremental sales/volume uplift",
//     "action": "",
//     "hiddenAction": "Investigate brand and item selection as well as tactics to understand drivers of performance",
//     "actionColor": "yellow",
//     "disabled": false,
//     "ActionOrder": 3
//   }, {
//     "id": 0,
//     "item": "Juices",
//     "numEvents": 190,
//     "sales": 84,
//     "volume": 31,
//     "margin": 7,
//     "profit": 7,
//     "transactions": 43,
//     "impact": 2947,
//     "isBest": false,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }, {
//     "id": 6,
//     "item": "Dressings",
//     "numEvents": 189,
//     "sales": 44,
//     "volume": 23,
//     "margin": 11,
//     "profit": 11,
//     "transactions": 13,
//     "impact": 855,
//     "isBest": false,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }, {
//     "id": 7,
//     "item": "Canned Vegetables",
//     "numEvents": 99,
//     "sales": 58,
//     "volume": 66,
//     "margin": 7,
//     "profit": 7,
//     "transactions": 26,
//     "impact": 1721,
//     "isBest": false,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }, {
//     "id": 9,
//     "item": "Laundry Detergent",
//     "numEvents": 86,
//     "sales": 77,
//     "volume": 36,
//     "margin": 4,
//     "profit": 6,
//     "transactions": 45,
//     "impact": 2317,
//     "isBest": false,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }, {
//     "id": 1,
//     "item": "Food Wrappers",
//     "numEvents": 76,
//     "sales": 101,
//     "volume": 43,
//     "margin": 21,
//     "profit": 22,
//     "transactions": 29,
//     "impact": 1401,
//     "isBest": true,
//     "followUp": "",
//     "action": "Promote items in Food Wrapper more frequently, using current tactics",
//     "hiddenAction": "Despite relatively few promo events, Food Wrappers showed greater margin and profit lift",
//     "actionColor": "green",
//     "disabled": false,
//     "ActionOrder": 2
//   }, {
//     "id": 2,
//     "item": "Drink Mixes",
//     "numEvents": 30,
//     "sales": 13,
//     "volume": 6,
//     "margin": 0,
//     "profit": 1,
//     "transactions": 14,
//     "impact": 513,
//     "isBest": false,
//     "followUp": "Explore additional promo tactics and greater frequency for Drink Mixes",
//     "action": "",
//     "hiddenAction": "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
//     "actionColor": "yellow",
//     "disabled": false,
//     "ActionOrder": 4
//   }, {
//     "id": 3,
//     "item": "Household Cleaners",
//     "numEvents": 17,
//     "sales": 39,
//     "volume": 11,
//     "margin": 6,
//     "profit": 6,
//     "transactions": 11,
//     "impact": 390,
//     "isBest": false,
//     "followUp": "",
//     "action": "",
//     "hiddenAction": "",
//     "actionColor": "",
//     "disabled": true,
//     "ActionOrder": null
//   }
// ]

glb.categoryDataTotal = [
    {
      "id" : 5,
      "item" : "Cookies",
      "numEvents" : 450,
      "sales" : 637.5,
      "volume" : 400,
      "margin" : 120,
      "profit" : 112.5,
      "transactions" : 412.5000000000001,
      "impact" : 29025,
      "isBest" : false,
      "followUp" : "Investigate Cookies brand, item and tactic performance in more detail, to find higher and lower performing promos",
      "action" : null,
      "hiddenAction" : "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
      "actionColor" : "yellow",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 4,
      "item" : "Bath Tissue",
      "numEvents" : 269,
      "sales" : 402.63157894736844,
      "volume" : 316.07142857142856,
      "margin" : 18.214285714285715,
      "profit" : 168.75,
      "transactions" : 98.07692307692308,
      "impact" : 945.8333333333333,
      "isBest" : true,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 8,
      "item" : "Cereal",
      "numEvents" : 253,
      "sales" : 459.375,
      "volume" : 193.42105263157896,
      "margin" : 75,
      "profit" : 20.454545454545453,
      "transactions" : 112.5,
      "impact" : 7940.625,
      "isBest" : false,
      "followUp" : null,
      "action" : "Stop current high discount promotions in Cereal, and explore different promo tactics",
      "hiddenAction" : "Current approach causes significant margin erosion. New tactic needed to maintain sales lift without margin loss",
      "actionColor" : "red",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 0,
      "item" : "Juices",
      "numEvents" : 190,
      "sales" : 630,
      "volume" : 332.1428571428571,
      "margin" : 131.25,
      "profit" : 74.99999999999999,
      "transactions" : 537.5,
      "impact" : 24558.333333333336,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 6,
      "item" : "Dressings",
      "numEvents" : 189,
      "sales" : 366.6666666666667,
      "volume" : 287.5,
      "margin" : 82.5,
      "profit" : 82.5,
      "transactions" : 195,
      "impact" : 5343.75,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 7,
      "item" : "Canned Vegetables",
      "numEvents" : 99,
      "sales" : 621.4285714285713,
      "volume" : 990,
      "margin" : 43.75,
      "profit" : 43.75,
      "transactions" : 487.5,
      "impact" : 18439.28571428571,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 9,
      "item" : "Laundry Detergent",
      "numEvents" : 86,
      "sales" : 444.23076923076917,
      "volume" : 300,
      "margin" : 21.428571428571427,
      "profit" : 32.14285714285714,
      "transactions" : 421.875,
      "impact" : 15797.727272727272,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : "red",
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 1,
      "item" : "Food Wrappers",
      "numEvents" : 76,
      "sales" : 360.7142857142857,
      "volume" : 201.5625,
      "margin" : 98.4375,
      "profit" : 103.125,
      "transactions" : 145,
      "impact" : 5837.5,
      "isBest" : true,
      "followUp" : null,
      "action" : "Promote items in Food Wrapper more frequently, using current tactics",
      "hiddenAction" : "Despite relatively few promo events, Food Wrappers shows significant margin and profit lift",
      "actionColor" : "green",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 2,
      "item" : "Drink Mixes",
      "numEvents" : 30,
      "sales" : 325,
      "volume" : 225,
      "margin" : 0,
      "profit" : 37.5,
      "transactions" : 1050,
      "impact" : 9618.75,
      "isBest" : false,
      "followUp" : "Explore additional promo tactics and greater frequency for Drink Mixes",
      "action" : null,
      "hiddenAction" : "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
      "actionColor" : "yellow",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 3,
      "item" : "Household Cleaners",
      "numEvents" : 17,
      "sales" : 292.5,
      "volume" : 103.125,
      "margin" : 150,
      "profit" : 150,
      "transactions" : 117.85714285714286,
      "impact" : 2925,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : null,
      "item" : null,
      "numEvents" : null,
      "sales" : null,
      "volume" : null,
      "margin" : null,
      "profit" : null,
      "transactions" : null,
      "impact" : null,
      "isBest" : null,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : null,
      "ActionOrder" : null
    },
    {
      "id" : null,
      "item" : null,
      "numEvents" : null,
      "sales" : null,
      "volume" : null,
      "margin" : null,
      "profit" : null,
      "transactions" : null,
      "impact" : null,
      "isBest" : null,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : null,
      "ActionOrder" : null
    }
  ]

/*
glb.categoryDataUplift = [{"id":5,"item":"Uplift Cookies","numEvents":111,"sales":34,"volume":16,"margin":-8,"profit":-6,"transactions":11,"impact":1935,"isBest":false,"followUp":"","action":"Reduce frequency of Cookies promotions given incremental sales and margin performance relative to other categories","hiddenAction":"Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance","actionColor":"red","disabled":false,"ActionOrder":1},
{"id":4,"item":"Bath Tissue","numEvents":269,"sales":102,"volume":59,"margin":17,"profit":18,"transactions":17,"impact":227,"isBest":true,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null},
{"id":8,"item":"Cereal","numEvents":253,"sales":147,"volume":49,"margin":-22,"profit":-6,"transactions":27,"impact":2541,"isBest":false,"followUp":"Understand drivers of poor margin performance in Cereal given high incremental sales/volume uplift","action":"","hiddenAction":"Investigate brand and item selection as well as tactics to understand drivers of performance","actionColor":"yellow","disabled":false,"ActionOrder":3},
{"id":0,"item":"Juices","numEvents":190,"sales":84,"volume":31,"margin":7,"profit":7,"transactions":43,"impact":2947,"isBest":false,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null},
{"id":6,"item":"Dressings","numEvents":189,"sales":44,"volume":23,"margin":11,"profit":11,"transactions":13,"impact":855,"isBest":false,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null},
{"id":7,"item":"Canned Vegetables","numEvents":99,"sales":58,"volume":66,"margin":7,"profit":7,"transactions":26,"impact":1721,"isBest":false,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null},
{"id":9,"item":"Laundry Detergent","numEvents":86,"sales":77,"volume":36,"margin":4,"profit":6,"transactions":45,"impact":2317,"isBest":false,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null},
{"id":1,"item":"Food Wrappers","numEvents":76,"sales":101,"volume":43,"margin":21,"profit":22,"transactions":29,"impact":1401,"isBest":true,"followUp":"","action":"Promote items in Food Wrapper more frequently, using current tactics","hiddenAction":"Despite relatively few promo events, Food Wrappers showed greater margin and profit lift","actionColor":"green","disabled":false,"ActionOrder":2},
{"id":2,"item":"Drink Mixes","numEvents":30,"sales":13,"volume":6,"margin":0,"profit":1,"transactions":14,"impact":513,"isBest":false,"followUp":"Explore additional promo tactics and greater frequency for Drink Mixes","action":"","hiddenAction":"Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes","actionColor":"yellow","disabled":false,"ActionOrder":4},
{"id":3,"item":"Household Cleaners","numEvents":17,"sales":39,"volume":11,"margin":6,"profit":6,"transactions":11,"impact":390,"isBest":false,"followUp":"","action":"","hiddenAction":"","actionColor":"","disabled":true,"ActionOrder":null}]
*/

glb.categoryDataUplift = [
    {
      "id" : 5,
      "item" : "Cookies",
      "numEvents" : 450,
      "sales" : 0.04,
      "volume" : 0.03,
      "margin" : -0.05,
      "profit" : -0.04,
      "transactions" : 0.019999999999999997,
      "impact" : 0.049999999999999996,
      "isBest" : false,
      "followUp" : "Investigate Cookies brand, item and tactic performance in more detail, to find higher and lower performing promos",
      "action" : null,
      "hiddenAction" : "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
      "actionColor" : "yellow",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 4,
      "item" : "Bath Tissue",
      "numEvents" : 269,
      "sales" : 0.19,
      "volume" : 0.14,
      "margin" : 0.7,
      "profit" : 0.08,
      "transactions" : 0.13,
      "impact" : 0.18,
      "isBest" : true,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 8,
      "item" : "Cereal",
      "numEvents" : 253,
      "sales" : 0.24,
      "volume" : 0.19,
      "margin" : -0.22,
      "profit" : -0.22,
      "transactions" : 0.18,
      "impact" : 0.24,
      "isBest" : false,
      "followUp" : null,
      "action" : "Stop current high discount promotions in Cereal, and explore different promo tactics",
      "hiddenAction" : "Current approach causes significant margin erosion. New tactic needed to maintain sales lift without margin loss",
      "actionColor" : "red",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 0,
      "item" : "Juices",
      "numEvents" : 190,
      "sales" : 0.1,
      "volume" : 0.07,
      "margin" : 0.04,
      "profit" : 0.07,
      "transactions" : 0.060000000000000005,
      "impact" : 0.09,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 6,
      "item" : "Dressings",
      "numEvents" : 189,
      "sales" : 0.09,
      "volume" : 0.06,
      "margin" : 0.1,
      "profit" : 0.1,
      "transactions" : 0.049999999999999996,
      "impact" : 0.12,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 7,
      "item" : "Canned Vegetables",
      "numEvents" : 99,
      "sales" : 0.07,
      "volume" : 0.05,
      "margin" : 0.12,
      "profit" : 0.12,
      "transactions" : 0.04,
      "impact" : 0.07,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 9,
      "item" : "Laundry Detergent",
      "numEvents" : 86,
      "sales" : 0.13,
      "volume" : 0.09,
      "margin" : 0.14,
      "profit" : 0.14,
      "transactions" : 0.08,
      "impact" : 0.11,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : "red",
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : 1,
      "item" : "Food Wrappers",
      "numEvents" : 76,
      "sales" : 0.21,
      "volume" : 0.16,
      "margin" : 0.16,
      "profit" : 0.16,
      "transactions" : 0.15,
      "impact" : 0.18,
      "isBest" : true,
      "followUp" : null,
      "action" : "Promote items in Food Wrapper more frequently, using current tactics",
      "hiddenAction" : "Despite relatively few promo events, Food Wrappers shows significant margin and profit lift",
      "actionColor" : "green",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 2,
      "item" : "Drink Mixes",
      "numEvents" : 30,
      "sales" : 0.03,
      "volume" : 0.02,
      "margin" : 0.01,
      "profit" : 0.02,
      "transactions" : 0.01,
      "impact" : 0.04,
      "isBest" : false,
      "followUp" : "Explore additional promo tactics and greater frequency for Drink Mixes",
      "action" : null,
      "hiddenAction" : "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
      "actionColor" : "yellow",
      "disabled" : false,
      "ActionOrder" : null
    },
    {
      "id" : 3,
      "item" : "Household Cleaners",
      "numEvents" : 17,
      "sales" : 0.1,
      "volume" : 0.08,
      "margin" : 0.03,
      "profit" : 0.03,
      "transactions" : 0.07,
      "impact" : 0.1,
      "isBest" : false,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : true,
      "ActionOrder" : null
    },
    {
      "id" : null,
      "item" : null,
      "numEvents" : null,
      "sales" : null,
      "volume" : null,
      "margin" : null,
      "profit" : null,
      "transactions" : null,
      "impact" : null,
      "isBest" : null,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : null,
      "ActionOrder" : null
    },
    {
      "id" : null,
      "item" : null,
      "numEvents" : null,
      "sales" : null,
      "volume" : null,
      "margin" : null,
      "profit" : null,
      "transactions" : null,
      "impact" : null,
      "isBest" : null,
      "followUp" : null,
      "action" : null,
      "hiddenAction" : null,
      "actionColor" : null,
      "disabled" : null,
      "ActionOrder" : null
    }
  ]

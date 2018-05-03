// import { OPPORTUNITIES } from "../actions/types";

// const _ = require("lodash");

// export default function(state={}, action){
//     switch(action.type){
//         case OPPORTUNITIES:
//             return _.mapKeys(action.payload, "id");
//         default:
//             return state;
//     }
   
// }


import { OPPORTUNITIES } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case OPPORTUNITIES:
      return { ...state, opportunity_list: action.payload };
    default:
      return state;
  }
};

// {
//   opportunity_list: [1,2],
//   results: {
//     1: {},
//     2: {}
//   }
// }
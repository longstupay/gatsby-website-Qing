// require('dotenv').config({
//     path:".env",
// })

// console.log('------>???????---',process.env.API_KEY)

// const fetch = require("node-fetch")

// exports.sourceNodes = async ({actions,createNodeId,createContentDigest})=>{
//     const {createNode} = actions

//     const result = await fetch("https://api.thedogapi.com/v1/breeds",{
//         headers: {
//             "x-api-key": process.env.API_KEY
//         }
//     })

//     const breeds = await result.json();
//     breeds.forEach(element => {
//         createNode({
//             ...element,
//             id:createNodeId(element.id),
//             internal: {
//                 type: `DogBreeds`,
//                 contentDigest: createContentDigest(element)
//             }

//         })
//     });
//     console.log(breeds)
// }
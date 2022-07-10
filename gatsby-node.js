const fetch = require("node-fetch");

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions
    // "https://api.thedogapi.com/v1/breeds"
    const result = await fetch("http://159.75.144.47:7001/api/news/", {
        headers: {
            "x-api-key": process.env.API_KEY
        }
    })

    const info = await result.json();

    info.scrapedData.forEach(element => {
        createNode({
            ...element,
            id: createNodeId(element.id),
            internal: {
                type: `hottest`,
                contentDigest: createContentDigest(element)
            }

        })
    });

    info.fontNews.forEach(element => {
        createNode({
            ...element,
            id: createNodeId('f' + element.id),
            internal: {
                type: `fontendnew`,
                contentDigest: createContentDigest(element)
            }

        })
    });
    const live = info.liveShow;

    // const news = []; 
    // news.pop(live);

    // live.forEach(element => {
    //     createNode({
    //         ...element,
    //         id: createNodeId('u' + new Date().getTime()),
    //         internal: {
    //             type: `live`,
    //             contentDigest: createContentDigest(element)
    //         }
    //     })
    // });
    createNode({
        // Data for the node.
        live,
        id:createNodeId('f' + new Date().getTime()),
        // Required fields.
        internal: {
          type: `liveshow`,
          contentDigest:createContentDigest(live)
        }
      })

    console.log(info)
}
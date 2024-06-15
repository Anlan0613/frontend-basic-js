function userIdList(data) {
    const returnUserIds = new Set();
    for (const item of data){
        returnUserIds.add(item.userId);
    }
    return [...returnUserIds];
};

function fixData(data) {
    const returnThreads = {};

    for (const item of data){
        const {userId, id, title, body} = item;

        if (!returnThreads[userId]){
            returnThreads[userId] = [];
        }
        
        returnThreads[item.userId].push({id, title, body});
    };

    return Object.entries(returnThreads).map(([userId, datas]) => ({
        userId: Number(userId),
        datas,
    }));
};

module.exports = { userIdList, fixData };
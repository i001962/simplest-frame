import { getStore } from '@netlify/blobs';

const getCount = async() => {
    console.log('Getting count');
    //const store = getStore('gameState');
    //const rawCount = await store.get('count', {consistency: 'strong'});
    const rawCount = '0';
    console.log(`Raw count is ${rawCount}`);
    let count = parseInt(rawCount);
    if (Number.isNaN(count)) count = 0;
    return count;
}

const incrementCount = async() => {
    const store = getStore('gameState');
    const rawCount = await store.get('count', {consistency: 'strong'});
    let count = parseInt(rawCount);
    if (Number.isNaN(count)) count = 0;
    const newCount = count+1;
    await store.set('count', newCount.toString());
    return newCount;
}

export {
    getCount,
    incrementCount
}
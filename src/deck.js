function shuffle(array){
    const _array = array.slice(0);
    for (let i = 0; i <array.lenght - 1; i++){
        let randomIndex = Math.floor(Math.random()*(i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex];
        _array[randomIndex] = temp;
        //using the above to randomize and swap the values in the arrary
    }
    return _array
}

export default function initializeDeck(){
    let id = 0;
    const cards = ['yarn doit', 'yarn fun', 'yarn iwillcroch', 'yarn knotty', 'yarn magic', 'yarn nowork', 'yarn punch', 'yarn 500', 'yarn acronym', 'yarn mug'
].reduce((acc, type) => {
    acc.push({
      id: id++,
      type  
    })
    acc.push({
        id: id++,
        type  
      })
    return acc
}, [])
return shuffle(cards)
}
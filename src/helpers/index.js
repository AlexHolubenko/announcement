export const createDate = () => {
    const date = new Date()
    return new Intl.DateTimeFormat('ukl').format(date);
}

export const showSimAnn = (item, obj) => {
    const isEqual = JSON.stringify(item) === JSON.stringify(obj);
    if(!isEqual){
        const simTitle = item.title.toLowerCase().split(' ');
        const simDesc = item.description.toLowerCase().split(' ');
        const { title, description } = obj;
        
        const objTitle = title.toLowerCase().split(' ')
        const objDesc = description.toLowerCase().split(' ')
        
        const resTitle = objTitle.some(word => simTitle.includes(word));
        const resDesc = objDesc.some(word => simDesc.includes(word))
    
        if(resTitle && resDesc){
            return obj
        }
    }
}

export const showTopThreeSimAnn = (arr) => (
    arr.length > 3 ? arr.slice(arr.length-4,arr.length-1) : arr
)
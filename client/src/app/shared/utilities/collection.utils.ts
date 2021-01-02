
export function sortAsc(items: any[], prop: string): any[]{
    return items.sort((a, b) => abstractSort(a[prop], b[prop]));        
}
export function sortDesc(items: any[], prop:string) : any[]{
    return items.sort((a, b) => abstractSort(b[prop], a[prop]));

}

function abstractSort(first, second){
    if( typeof first  === "string"){
        return first.localeCompare(second)
    }else if( typeof first === "number"){
        return first - second;
    }

}
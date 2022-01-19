export function DateConvert(data: any){
    const [dd, mm, yyyy] = data.split('-');
    return `${yyyy}/${mm}/${dd}`;
}

export function DateConvertAnother(data: any){
    const [dd, mm, yyyy] = data.split('/');
    return `${yyyy}-${mm}-${dd}`;
}
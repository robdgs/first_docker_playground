export interface SWGetPeopleInterface{
    count:number,
    next: string,
    previous: string|null,
    results: SWPerson[]
}

export interface SWPerson {
    name: string,
    height: string,
    gender: string,
}
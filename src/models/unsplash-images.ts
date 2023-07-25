export interface UnsplashImages{
    description: string,
    user:{
        username: string,
    },
    urls:{
        raw:string,
        small:string,
        regular:string,
    },
    width:number,
    height:number,
}
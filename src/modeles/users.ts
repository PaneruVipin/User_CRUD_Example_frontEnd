export type user={
            name:name
            gender:string
            location:location
            email:string
            nat:string
            picture:picture
}

export type name={
    title:string,
    first:string
    last:string
}

export type location={
    city:string
    state:string
    country:string
    postcode:number
    street:street
}

export type street={
    number:number
    name:string
}

export type picture={
    large:string
    medium:string
    thumbnail:string
}
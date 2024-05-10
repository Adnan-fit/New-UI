import React from 'react'

const Docs = ({params}) => {
    // http://localhost:3001/docs/features/2
    if(params.slug.length === 2){
        return <h1>U are {params.slug[0]} and {params.slug[1]}</h1>
    }else if(params.slug.length === 1){
        return <h1>U are 1st {params.slug[0]}</h1>
    }
    return <div>Docs 123</div>
}

export default Docs
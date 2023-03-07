import React from 'react'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    const paths = data.map(classified => {
        return {
            params: { id: classified.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();
    
    return {
        props: { classified: data }
    }
}


const AdDetails = ({ classified }) => {
  return (
    <div>
        <h1>{classified.title}</h1>
        <p>{classified.body}</p>
    </div>
  )
}

export default AdDetails
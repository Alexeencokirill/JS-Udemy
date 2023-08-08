const post = {
    id: 1,
    title: 'Post one',
    name: 'This is the body'
}

// ================= Convert to a JSON string

const str = JSON.stringify(post)

// ================= Pars JSON

const obj = JSON.parse(str)

const posts = [
    {
        id: 1,
        title: 'Post one',
        name: 'This is the head'
    },
    {
        id: 2,
        title: 'Post two',
        name: 'This is the body'
    } 
]

const strPosts = JSON.stringify(posts)  // Convert an array to a JSON string

console.log(strPosts)
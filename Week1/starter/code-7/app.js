const getUser = (id, name, cb) => {
    const user = {
        id,
        name: name || "default"
    };
    setTimeout(() => {
        cb(user)
    },300)
}

getUser(10,undefined,(user) => {
    console.log(user);
})

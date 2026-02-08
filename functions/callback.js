function clzAdmin(clzMember) {
    let message = "Tommorrow is holidya";
    
    setTimeout(() => clzMember(message), 1000);
    console.log("Admin is calling memeber");
}

function clzMember(message) {
    console.log(message);
}

clzAdmin(clzMember);
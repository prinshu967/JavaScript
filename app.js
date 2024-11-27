var profile={
    name:"prinshu Kumar",
    post:[
        {img:'dehradun.jpg',like:200,comment:10},
        {img:'dehradun.jpg',like:100,comment:10},
        {img:'dehradun.jpg',like:80,comment:10},
        {img:'dehradun.jpg',like:70,comment:10},
        {img:'dehradun.jpg',like:40,comment:10}
        ]


}
console.log("Extrating Details from Profile");
console.log(profile.name);
console.log("Number of posts: " + profile.post.length);

for (var i = 0; i < profile.post.length; i++) {
    console.log("Post " + (i + 1) + ":");
    console.log("Image: " + profile.post[i].img);
    console.log("Likes: " + profile.post[i].like);
    console.log("Comments: " + profile.post[i].comment);
}

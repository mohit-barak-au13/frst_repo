const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:aJe4Ipqo5bpa4RjX@clustermonu.jvw9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database is connected")
}).catch(()=>{
    console.log("failed to make connection")
});

require('./order.model.js');
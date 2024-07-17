// import mongoose from 'mongoose';

// const connection = {

// }
// async function dbConnect() {
//     if (connection.isConnected) {
//         return
//     }
//    const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.ie9jhdt.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")
//    console.log("db",db);
//    connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect





// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';

// // dotenv.config();

// // const MONGODB_URI = process.env.MONGODB_CONNECTION_STRING;

// // if (!MONGODB_URI) {
// //   throw new Error('Please define the MONGODB_CONNECTION_STRING environment variable inside .env.local');
// // }

// // let cached = global.mongoose;

// // if (!cached) {
// //   cached = global.mongoose = { conn: null, promise: null };
// // }

// // async function dbConnect() {
// //   if (cached.conn) {
// //     return cached.conn;
// //   }

// //   if (!cached.promise) {
// //     cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
// //       return mongoose;
// //     });
// //   }
// //   cached.conn = await cached.promise;
// //   return cached.conn;
// // }

// // export default dbConnect;




import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log('Already connected to database.');
        return;
    }
    try {
        const db = await mongoose.connect("mongodb+srv://admin:admin@cluster0.ie9jhdt.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0");
        connection.isConnected = db.connections[0].readyState;
        console.log('db connection state:', connection.isConnected); // Log connection state
        console.log('db:', db); // Log the full db object for inspection
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

export default dbConnect;

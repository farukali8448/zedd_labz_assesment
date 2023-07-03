//Example for Aggregate Lookup property


const mongoose = require('mongoose');

// Define the schema for the "orders" collection
const orderSchema = new mongoose.Schema({
  _id: Number,
  product: String,
  userId: Number,
});

// Define the schema for the "users" collection
const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
});

// Create the models
const Order = mongoose.model('Order', orderSchema);
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/groceary', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Example data for "orders" collection
const ordersData = [
  { _id: 1, product: 'Product 1', userId: 1 },
  { _id: 2, product: 'Product 2', userId: 2 },
  { _id: 3, product: 'Product 3', userId: 1 },
  { _id: 4, product: 'Product 4', userId: 3 },
];

// Example data for "users" collection
const usersData = [
  { _id: 1, name: 'User 1' },
  { _id: 2, name: 'User 2' },
  { _id: 3, name: 'User 3' },
];

// Populate the "orders" and "users" collections with example data
async function populateCollections() {
  await Order.deleteMany();
  await User.deleteMany();
  await Order.insertMany(ordersData);
  await User.insertMany(usersData);
  console.log('Collections populated with example data');
}

// Perform the aggregation with $lookup
async function performAggregation() {
  const aggregationResult = await Order.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
      },
    },
  ]);

  console.log('Aggregation Result:');
  console.log(aggregationResult);
}

// Run the program
async function runProgram() {
  await populateCollections();
  await performAggregation();
  mongoose.disconnect();
}

runProgram().catch((error) => console.error(error));



//OUTPUT----->

// Aggregation Result:
// [
//   {
//     _id: 1,
//     product: 'Product 1',
//     userId: 1,
//     __v: 0,
//     user: [ [Object] ]
//   },
//   {
//     _id: 2,
//     product: 'Product 2',
//     userId: 2,
//     __v: 0,
//     user: [ [Object] ]
//   },
//   {
//     _id: 3,
//     product: 'Product 3',
//     userId: 1,
//     __v: 0,
//     user: [ [Object] ]
//   },
//   {
//     _id: 4,
//     product: 'Product 4',
//     userId: 3,
//     __v: 0,
//     user: [ [Object] ]
//   }
// ]

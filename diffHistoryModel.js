module.exports = function(mongoose) {
  if (mongoose.models.History) 
    return mongoose.model("History")
  var historySchema = new mongoose.Schema(
    {
        collectionName: {type: String},
        collectionId: {type: mongoose.Schema.Types.ObjectId},
        diff: {},
        user: {},
        reason: {type: String},
        version: {type: Number, min: 0}
    },
    {
        timestamps: true
    });
  return mongoose.model("History", historySchema);
};

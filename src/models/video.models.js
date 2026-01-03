import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new  mongoose.Schema(
    {
        videofile:{
            type:String,
            reqired:true,
        },
        duration:{
            type: Number,
            reqired:true,
        },
        description:{
            type:String,
            reqired:true,
        },
        title:{
            type:String,
            reqired:true,
        },
        videofile:{
            type:Number,
            default: 0
        },
        videofile:{
            type:Boolean,
            default: 0
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }


}
,{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Videp",videoSchema)
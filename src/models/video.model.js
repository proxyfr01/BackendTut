import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema= new Schema (
    {
        descrption : {
            type : " string",
            require: true,

        },

        views : {
            type : Number,
            default : 0,
            require: true,


        },

        owner : {
            type : Schema.Types.ObjectId,
            ref :"User"
        }

    }
   

   

    
)

export const  video = mongoose.Schema("video" , videoSchema)
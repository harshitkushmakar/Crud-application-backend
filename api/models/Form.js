import mongoose from "mongoose";


const formSchema = mongoose.Schema(
    {
        // id: {
        //     type: String,
        //     required: true
        // },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        dob: {
            type: String,
            required: true

        },
        gender: {
            type: String,

        },
        education: {
            type: String,
        },
        company: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        designation:{
            type: String,
            required: true

        }
    },
    {
        timestamps: true
    }

);


export default mongoose.model("Form", formSchema);
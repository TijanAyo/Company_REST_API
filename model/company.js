import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    orgName: { type: String, required: true},
    orgSuffix: { type: String },
    description: { type: String },
    phone_no: { type: String },
    email: { type: String, default: null },
    logo_url: { type: String },
    location: { type: String },
    site_url: { type: String },
    numberOfEmployees: { type: Number },
    ipoStatus: { type: String, enum: ['Public', 'Private'], default: 'Private' },
    foundedOn: { type: Date, default: null},
    foundedBy: [{
        type: String
    }],
    company_type: { type: String },
    numberOfExist: { type: Number, default: 0}
},
{timestamps: true});

const Company = mongoose.model("Company", companySchema);
export default Company;
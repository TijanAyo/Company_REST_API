import mongoose from "mongoose";

const companySchema = mongoose.Schema({
    orgName: { type: String, required: true},
    orgSuffix: { type: String },
    description: { type: String },
    logo_url: { type: String },
    location: { type: String },
    site_url: { type: String },
    numberOfEmployees: { type: Number },
    ipoStatus: { type: String, enum: ['Public', 'Private'], default: 'Private' },
    founders: [{ type: String }],
    founded_date: { type: Date, default: null},
    company_type: { type: String },
    numberOfExist: { type: Number, default: 0}
},
{timestamps: true});

const Company = mongoose.model("Company", companySchema);
export default Company;
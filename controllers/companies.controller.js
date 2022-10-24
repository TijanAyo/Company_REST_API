import Company from '../model/company.js';
import { addNewCompanySchema, updateCompanySchema, deleteCompanySchema } from '../validation/company.validation.js';
/**
 * @route /api/v1/explore
 * @param {*} _req 
 * @param {*} res 
 * @returns Array of object
 */
const getAllCompaniesInfo = async (_req, res) => {
    try {
        const companies = await Company.find({}).select("orgName description location ipoStatus");
        if (!companies) {
            return res.status(404).json({
                message: `No company found` 
            });
        }
        res.status(200).json(companies);
    }
    catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

/**
 * @route /api/v1/explore/:companyId
 * @param {*} req 
 * @param {*} res 
 * @returns Object
 */
const getCompanyInfo = async (req, res) => {
    try {
        const company = await Company.findOne({orgName: req.params.orgName}).select("-createdAt");
        if (company) {
            return res.status(200).json(company);
        }
        return res.status(404).json({
            message: `Company with ID: ${req.params.orgName} does not exist`
        });
    }
    catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

/**
 * @route /api/v1/new
 * @param {*} req 
 * @param {*} res 
 * @returns Object
 */
const addCompanyInfo = async (req, res) => {
    try {
        const {
            orgName, description,
            orgSuffix, location,
            site_url ,logo_url, 
            company_type, numberOfEmployees,
            foundedOn, ipoStatus,
            phone_no, email, foundedBy,
        } = req.body;

        await addNewCompanySchema.validateAsync(req.body);

        const companyExist = await Company.findOne({ orgName });
    
        if (!companyExist) {
            const company = await Company.create({
                orgName,
                description,
                orgSuffix,
                location,
                site_url,
                logo_url,
                company_type,
                numberOfEmployees,
                foundedOn,
                ipoStatus,
                phone_no,
                email,
                foundedBy,
            });
            return res.status(201).json( company );
        }
        return res.status(400).json({
            message: 'Company already exist in database',
        });
    }
    catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

/**
 * @route /api/v1/update/:companyId
 * @param {*} req 
 * @param {*} res 
 * @returns String
 */
const updateCompanyInfo = async (req, res) => {
    try {
        const company = await Company.findOne({_id: req.params.companyId});
        if(company) {
            await Company.findByIdAndUpdate(req.params.companyId, req.body, {new: true});

            await updateCompanySchema.validateAsync(req.body);

            return res.status(201).json({
                message: `Company info updated successfully`
            });
        }
        return res.status(404).json({
            message: `No company with ID: ${req.params.companyId} available`
        });
    }
    catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

/**
 * @route /api/v1/remove
 * @param {*} req 
 * @param {*} res 
 * @returns Steing
 */
const deleteCompanyInfo = async (req, res) => {
    try {
        const {orgName} = req.body;

        await deleteCompanySchema.validateAsync(req.body); 

        const titleExist = await Company.findOne({ orgName });

        if(titleExist) {
            await Company.findOneAndDelete({ orgName });
            return res.status(200).json({
                message: `Deleted successfully`
            });
        }
        return res.status(404).json({
            message: `Company with name: ${req.body.orgName} does not exist`
        });

    }
    catch(err) {
        return res.status(500).json({
            message: err.message,
        });
    }
}

export {
    getAllCompaniesInfo,
    getCompanyInfo,
    addCompanyInfo,
    updateCompanyInfo,
    deleteCompanyInfo,
}
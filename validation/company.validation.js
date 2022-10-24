import Joi from "joi";

export const addNewCompanySchema = Joi.object({
    orgName: Joi.string().required(),
    description: Joi.string().required(),
    orgSuffix: Joi.string(),
    location: Joi.string().required(),
    site_url: Joi.string().required(),
    logo_url: Joi.string().required(),
    company_type: Joi.string().required(),
    numberOfEmployees: Joi.number(),
    foundedOn: Joi.date().required(),
    ipoStatus: Joi.string().valid('Public', 'Private'),
    email: Joi.string().email(),
    phone_no: Joi.string(),
    foundedBy: Joi.array(),
});

export const updateCompanySchema = Joi.object({
    orgName: Joi.string(),
    description: Joi.string(),
    orgSuffix: Joi.string(),
    location: Joi.string(),
    site_url: Joi.string(),
    logo_url: Joi.string(),
    company_type: Joi.string(),
    numberOfEmployees: Joi.number(),
    foundedOn: Joi.date(),
    ipoStatus: Joi.string().valid('Public', 'Private'),
    numberOfExist: Joi.number(),
    phone_no: Joi.string(),
    email: Joi.string().email(),
    foundedBy: Joi.array(),
});

export const deleteCompanySchema = Joi.object({
    orgName: Joi.string().required(),
});
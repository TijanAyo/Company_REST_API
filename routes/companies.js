// const express = require("express");
import express from "express";
import {
    getAllCompaniesInfo,
    getCompanyInfo,
    addCompanyInfo,
    updateCompanyInfo,
    deleteCompanyInfo
} from "../controllers/companies.controller.js";

const router = express.Router();

router.get('/explore', getAllCompaniesInfo);

router.get('/explore/:companyId', getCompanyInfo);

router.post('/new', addCompanyInfo);

router.patch('/update/:companyId', updateCompanyInfo);

router.delete('/remove', deleteCompanyInfo);

export default router;
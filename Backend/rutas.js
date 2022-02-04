const router = require('express').Router()
const { response } = require('express');
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    password: 'admin', //o ADMIN
    user: 'postgres',
    port: '5432',
    database: 'Plataforma_educativa'

});